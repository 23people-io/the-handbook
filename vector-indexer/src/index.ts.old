
import axios from 'axios';
import { Octokit } from "octokit";
import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";




async function getRepoFiles(owner: string, repo: string, path: string, env: any, octokit: Octokit) {

	const response = await octokit.rest.repos.getContent({
		owner,
		repo,
		path,
	});

	return response.data;
}

async function getFileContent(owner: string, repo: string, path: string, env: any) {
	const response = await axios.get(`${env.GITHUB_API_URL}/repos/${owner}/${repo}/contents/${path}`);
	const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
	return content;
}

async function sendMarkdownToApi(content: string, env: any) {
	const url = `${env.WORKER_BASE_URL}/${env.WORKER_ENDPOINT}`;
	const body = { text: content };
	await axios.post(url, body);
}

async function processMarkdownFiles(env: any, octokit: Octokit) {
	try {
		const files = await getRepoFiles(env.REPO_OWNER, env.REPO_NAME, 'docs', env, octokit);
		const markdownFiles = files.filter((file: any) => file.name.endsWith('.md'));

		for (const file of markdownFiles) {
			const content = await getFileContent(env.REPO_OWNER, env.REPO_NAME, file.path, env);
			await sendMarkdownToApi(content, env);
		}

		console.log('All markdown files have been processed.');
		return markdownFiles.length;
	} catch (error) {
		console.error('Error processing markdown files:', error);
	}
}


export default {
	async fetch(request, env, ctx) {
		const octokit = new Octokit({
			auth: env.GITHUB_API_TOKEN,
		});

		const proccesed_files = await processMarkdownFiles(env, octokit);
		return new Response(`Processed ${proccesed_files} markdown files`);
	},
};
