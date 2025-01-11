import { Context } from 'hono';
import { createFactory } from 'hono/factory';
import { logger } from 'hono/logger';
import { GithubService } from '../../../services/github';
import { VectorizeService } from '../../../services/vectorize';
import { Document } from '../../../types';
import { Commit } from './types';

const factory = createFactory<{ Bindings: Env }>();

const process_documents = factory.createHandlers(logger(), async (c) => {
	const { commits } = await c.req.json();

	if (!commits) {
		return c.text('Missing input data (commits)', 400);
	}

	const results: any[] = await Promise.all(
		commits.map(async (commit: Commit): Promise<any[]> => {
			const results = await process_commit(commit, c);
			return results;
		})
	);

	return c.json(results.flat());
});

const process_commit = async (commit: any, c: Context): Promise<any[]> => {
	const results = [];

	const added_results = await upsert_files(commit.added, c);
	const modified_results = await upsert_files(commit.modified, c);
	const removed_results = await remove_files(commit.removed, c);

	results.push(...added_results, ...modified_results, ...removed_results);

	return results;
};

const upsert_files = async (files: string[], c: Context): Promise<any[]> => {
	const filtered_files = files.filter((path: string) => path.startsWith(c.env.HANDBOOK_REPO_FILTER_PATH));
	const vectorize = new VectorizeService(c.env, c.env.HANDBOOK_INDEX);
	const documents = await get_documents(filtered_files, c);
	const results = await vectorize.index_documents(documents);

	return results;
};

const remove_files = async (files: string[], c: Context): Promise<any[]> => {
	const filtered_files = files.filter((path: string) => path.startsWith(c.env.HANDBOOK_REPO_FILTER_PATH));
	const vectorize = new VectorizeService(c.env, c.env.HANDBOOK_INDEX);
	const documents = await get_documents(filtered_files, c);
	const results = await vectorize.remove_documents(documents);

	return results;
};

const get_documents = async (repo_paths: string[], c: Context): Promise<Document[]> => {
	const github_app_params = {
		appId: c.env.VECTOR_INDEXER_GITHUB_APP_ID,
		privateKey: c.env.VECTOR_INDEXER_GITHUB_APP_PRIVATE_KEY,
		appInstallationId: c.env.VECTOR_INDEXER_GITHUB_APP_INSTALLATION_ID,
	};

	const github = new GithubService(github_app_params);

	const results = await Promise.all(
		repo_paths.map(async (path) => {
			const repo_file_data = await github.get_data_from_repo_path(path, c);

			const encoded_content = repo_file_data.content;
			const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary');

			const content = decode(encoded_content);

			return {
				id: repo_file_data.path,
				content,
			};
		})
	);

	return results;
};

export default process_documents;
