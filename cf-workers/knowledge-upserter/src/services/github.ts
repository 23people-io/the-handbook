import { App, type Octokit } from 'octokit';

interface AppSettings {
	id: string;
	privateKey: string;
	installationId: string;
}

interface RepoSettings {
	owner: string;
	name: string;
}

class GithubService {
	repo: RepoSettings;
	filters: string[] = [];
	octokit?: Octokit;

	constructor(repoSettings: RepoSettings) {
		this.repo = repoSettings;
	}

	async initialize(appSettings: AppSettings): Promise<void> {
		try {
			const githubApp = new App({
				appId: appSettings.id,
				privateKey: appSettings.privateKey,
			});

			const appInstallationId: number = parseInt(appSettings.installationId, 10);
			const octokit = await githubApp.getInstallationOctokit(appInstallationId);
			this.octokit = octokit;
		} catch (error) {
			console.error('Failed to initialize Octokit:', error);
			throw error;
		}
	}

	static async createInstance(env: Env): Promise<GithubService> {
		const appSettings = {
			id: env.GITHUB_APP_ID,
			privateKey: env.GITHUB_APP_PRIVATE_KEY,
			installationId: env.GITHUB_APP_INSTALLATION_ID,
		};

		const repoSettings = {
			owner: env.REPO_OWNER,
			name: env.REPO_NAME,
		};

		const githubService = new GithubService(repoSettings);
		await githubService.initialize(appSettings);

		return githubService;
	}

	async fetchFiles(include_paths: string[] = [], include_filters: string[] = []): Promise<GitHubFile[]> {
		if (!this.octokit) {
			throw new Error('Octokit not initialized');
		}

		const response = await this.octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}?recursive=1', {
			owner: this.repo.owner,
			repo: this.repo.name,
			tree_sha: 'main',
			headers: {
				'X-GitHub-Api-Version': '2022-11-28',
			},
		});

		if (response.status !== 200) {
			throw new Error(`Failed to fetch files content: ${response.status}`);
		}

		const items = response.data.tree;

		let files: GitHubFile[] = [];

		//Filter items based on include_paths
		files = items.filter((item: GitHubFile) => include_paths.some((parent) => item.path.startsWith(parent)));

		//Filter items that are not directories
		files = files.filter((item: GitHubFile) => item.type !== 'tree');

		//Filter items based on include_filters
		files = files.filter((item: GitHubFile) => include_filters.some((ext) => item.path.endsWith(ext)));

		return files;
	}

	async getRawFileContent(fileSha: string): Promise<string> {
		if (!this.octokit) {
			throw new Error('Octokit not initialized');
		}

		const response = await this.octokit.request('GET /repos/{owner}/{repo}/git/blobs/{file_sha}', {
			owner: this.repo.owner,
			repo: this.repo.name,
			file_sha: fileSha,
			headers: {
				'X-GitHub-Api-Version': '2022-11-28',
			},
		});

		if (response.status !== 200) {
			throw new Error(`Failed to fetch file content: ${response.status}`);
		}

		const encoded = response.data.content;
		const decoded = Buffer.from(encoded, 'base64').toString();

		return decoded;
	}
}

export { GithubService };
