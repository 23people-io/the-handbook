import { createFactory } from 'hono/factory'
import { logger } from 'hono/logger'

const factory = createFactory<{ Bindings: Env }>()

const get_vectors_handlers = factory.createHandlers(logger(), async (c) => {
    const { query } = await c.req.json()

    if (!query) {
        return c.text("Missing query param in request body", 400);
    }

    const embeddings = await c.env.AI.run('@cf/baai/bge-base-en-v1.5', { text: query })
    const question_vector = embeddings.data[0]

    const vectorize_matches = await c.env.HANDBOOK_INDEX.query(question_vector, { topK: 1 });
    let vecId;
    if (vectorize_matches.matches && vectorize_matches.matches.length > 0) {
        return c.json(vectorize_matches);
    } else {
        console.log("No matching vector found or vectorize_matches.matches is empty");
        return c.notFound();
    }

});

export default get_vectors_handlers;