import { createFactory } from 'hono/factory'
import { logger } from 'hono/logger'

const factory = createFactory<{ Bindings: Env }>()

const upsert_documents = factory.createHandlers(logger(), async (c) => {
    const { input_data } = await c.req.json();
    if (!input_data) {
        return c.text("Missing input data", 400);
    }
    
    return c.json({ input_data });
});

export default upsert_documents;