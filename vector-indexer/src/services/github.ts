import { App } from 'octokit';

class GithubService {
	github_app: App;
	appInstallationId: number;
	repoOwner: string;
	repoName: string;

	constructor(params: any) {
		const { appId, privateKey, appInstallationId, repoOwner, repoName } = params;

		const github_app = new App({
			appId,
			privateKey,
		});

		this.github_app = github_app;
		this.appInstallationId = appInstallationId;
		this.repoOwner = repoOwner;
		this.repoName = repoName;
	}

	private async initializeOctokit(github_app: App, appInstallationId: number) {
		return await github_app.getInstallationOctokit(appInstallationId);
	}

	async get_data_from_repo_path(path: string): Promise<any> {
		const octokit = await this.initializeOctokit(this.github_app, this.appInstallationId);
		const response = await octokit.rest.repos.getContent({
			owner: this.repoOwner,
			repo: this.repoName,
			path,
		});

		if (response.status !== 200) {
			throw new Error(`Failed to fetch content from ${path}: ${response.status}`);
		}

		return response.data;
	}
}

export { GithubService };
