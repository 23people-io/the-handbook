import { Context } from 'hono';
import { get_data_from_repo_file } from './github';

async function upsert_vectors(paths: string[], c: Context): Promise<{ id: string; path: string; inserted: any }[]> {
	const results = [];

	for (const path of paths) {
		if (!path.startsWith(c.env.HANDBOOK_REPO_FILTER_PATH)) {
			continue;
		}
		const repo_file_data = await get_data_from_repo_file(path, c);

		const { data } = await c.env.AI.run('@cf/baai/bge-base-en-v1.5', {
			text: [repo_file_data],
		});
		const values = data[0];

		if (!values) {
			throw new Error('Failed to generate vector embedding');
		}

		const id = path;
		const inserted = await c.env.HANDBOOK_INDEX.upsert([
			{
				id: id.toString(),
				values,
			},
		]);

		results.push({ id, path, inserted });
	}

	return results;
}

async function delete_vectors(paths: string[], c: Context): Promise<{ id: string; path: string }[]> {
	const results = [];

	for (const path of paths) {
		if (!path.startsWith(c.env.HANDBOOK_REPO_FILTER_PATH)) {
			continue;
		}

		//FIXME: This is a hack, we should be using the id from the vector index
		const id = path;

		await c.env.HANDBOOK_INDEX.deleteByIds([id]);

		results.push({ id, path });
	}

	return results;
}

export { delete_vectors, upsert_vectors };
