import { Document, type BaseReader } from '@llamaindex/core/schema';
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

/*
The type definition for the github file that
represents the info of a file in the github repository.
 */
export interface GithubFile {
	path: string;
	url: string;
	raw_url: string;
	sha: string;
	type: string;
}

const GITHUB_API_VERSION = '2022-11-28';
const GITHUB_TREE_SHA = 'main';
class GithubRepoReader implements BaseReader {
	octokit?: Octokit;

	private constructor() {}

	static async createInstance(env: Env): Promise<GithubRepoReader> {
		const appSettings = {
			id: env.GITHUB_APP_ID,
			privateKey: env.GITHUB_APP_PRIVATE_KEY,
			installationId: env.GITHUB_APP_INSTALLATION_ID,
		};

		const newInstance = new GithubRepoReader();
		await newInstance.initialize(appSettings);

		return newInstance;
	}

	private async initialize(appSettings: AppSettings): Promise<void> {
		try {
			const githubApp = new App({
				appId: appSettings.id,
				privateKey: appSettings.privateKey,
			});

			const appInstallationId: number = parseInt(appSettings.installationId, 10);
			this.octokit = await githubApp.getInstallationOctokit(appInstallationId);
		} catch (error) {
			console.error('Failed to initialize Octokit:', error);
			throw error;
		}
	}

	async loadData(repoName: string, repoOwner: string, includedPaths: string[] = [], includedFilters: string[] = []): Promise<Document[]> {
		const response = await this.retrieveGitTree(repoName, repoOwner);

		const items = response.data.tree;

		const files = this.filterFiles(items, includedPaths, includedFilters);

		const documents = this.convertToDocuments(files);

		return documents;
	}

	private async convertToDocuments(files: GithubFile[]): Promise<Document[]> {
		const documents: Document[] = [];

		for (const file of files) {
			const document = new Document({
				id_: file.sha,
				text: '',
				metadata: {
					path: file.path,
					url: file.url,
					raw_url: file.raw_url,
					sha: file.sha,
					type: file.type,
				},
			});
			documents.push(document);
		}

		return documents;
	}

	private async retrieveGitTree(
		repoName: string,
		repoOwner: string,
		treeSha: string = GITHUB_TREE_SHA,
		apiVersion: string = GITHUB_API_VERSION
	): Promise<any> {
		if (!this.octokit) {
			throw new Error('Octokit not initialized');
		}

		const response = await this.octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}?recursive=1', {
			owner: repoOwner,
			repo: repoName,
			tree_sha: treeSha,
			headers: {
				'X-GitHub-Api-Version': apiVersion,
			},
		});

		if (response.status !== 200) {
			throw new Error(`Failed to fetch files content: ${response.status}`);
		}
		return response;
	}

	private filterFiles(items: any, includedPaths: string[], includedFilters: string[]) {
		let files: GithubFile[] = [];

		//Filter items based on include_paths
		files = items.filter((item: GithubFile) => includedPaths.some((parent) => item.path.startsWith(parent)));

		//Filter items that are not directories
		files = files.filter((item: GithubFile) => item.type !== 'tree');

		//Filter items based on include_filters
		files = files.filter((item: GithubFile) => includedFilters.some((ext) => item.path.endsWith(ext)));

		return files;
	}
}

export { GithubRepoReader };
