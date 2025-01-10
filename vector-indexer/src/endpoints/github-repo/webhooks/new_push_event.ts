import { createFactory } from 'hono/factory'
import { logger } from 'hono/logger'
import { upsert_vector} from '../../../services/vectorize-indexer'

const factory = createFactory<{ Bindings: Env }>()

const upsert_documents = factory.createHandlers(logger(), async (c) => {
    const { commits } = await c.req.json();
    if (!commits) {
        return c.text("Missing input data (commits)", 400);
    }

    const { added, removed, modified } = commits;

    if (!added && !removed && !modified) {
        return c.text("Nothing to index", 200);
    }

    if (added) {
        // index new files
        upsert_vectors(added, c.env);
    }

    if (modified) {
        // index modified files
    }

    if (removed) {
        // remove deleted files from index
    }
    
    return c.json({ input_data });
});

export default upsert_documents;