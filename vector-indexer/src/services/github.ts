import { Context } from 'hono';
import { App } from 'octokit';

async function get_data_from_repo_file(path: string, c: Context): Promise<any> {
	const github_app = new App({
		appId: c.env.VECTOR_INDEXER_GITHUB_APP_ID,
		privateKey: c.env.VECTOR_INDEXER_GITHUB_APP_PRIVATE_KEY,
	});

	const octokit = await github_app.getInstallationOctokit(c.env.VECTOR_INDEXER_GITHUB_APP_INSTALLATION_ID);

	const response = await octokit.rest.repos.getContent({
		owner: c.env.HANDBOOK_REPO_OWNER,
		repo: c.env.HANDBOOK_REPO_NAME,
		path,
	});

	if (response.status !== 200) {
		throw new Error(`Failed to fetch content from ${path}: ${response.status}`);
	}

	return response.data;
}

export { get_data_from_repo_file };
