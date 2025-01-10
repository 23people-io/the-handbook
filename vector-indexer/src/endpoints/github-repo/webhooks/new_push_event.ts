import { Context } from 'hono';
import { createFactory } from 'hono/factory';
import { logger } from 'hono/logger';
import { delete_vectors, upsert_vectors } from '../../../services/vectorize';

const factory = createFactory<{ Bindings: Env }>();

const process_documents = factory.createHandlers(logger(), async (c) => {
	const { commits } = await c.req.json();

	if (!commits) {
		return c.text('Missing input data (commits)', 400);
	}

	const results = await Promise.all(commits.map(process_commited_files));

	return c.json(results);
});

const process_commited_files = async (commit: any, c: Context) => {
	const { added, removed, modified } = commit;
	const results = [];

	// index new files
	const added_results = await upsert_vectors(added, c);
	results.push(added_results);

	// handle modified files
	const modified_results = await upsert_vectors(modified, c);
	results.push(modified_results);

	// handle removed files
	const removed_results = await delete_vectors(removed, c);
	results.push(removed_results);

	return results;
};

export default process_documents;
