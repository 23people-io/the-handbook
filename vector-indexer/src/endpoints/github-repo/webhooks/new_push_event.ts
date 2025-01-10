import { createFactory } from 'hono/factory'
import { logger } from 'hono/logger'
import { upsert_vectors } from '../../../services/vectorize-indexer'

const factory = createFactory<{ Bindings: Env }>()

const upsert_documents = factory.createHandlers(logger(), async (c) => {
    const { commits } = await c.req.json();
    const results = [];

    if (!commits) {
        return c.text("Missing input data (commits)", 400);
    }

    const { added, removed, modified } = commits[0];

    if (added) {
        // index new files
        const added_results = await upsert_vectors(added, c);
        results.push(added_results);
    }

    if (modified) {
        // index modified files
        const modified_results = await upsert_vectors(modified, c);
        results.push(modified_results);
    }

    if (removed) {
        // remove deleted files from index
        const removed_results = await upsert_vectors(removed, c);
        results.push(removed_results);

    }

    return c.json(results);
});

export default upsert_documents;