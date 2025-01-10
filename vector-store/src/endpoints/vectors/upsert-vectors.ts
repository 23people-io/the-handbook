import { createFactory } from 'hono/factory'
import { logger } from 'hono/logger'

const factory = createFactory<{ Bindings: Env }>()

const upsert_vectors_handlers = factory.createHandlers(logger(), async (c) => {
    const { input_data } = await c.req.json();
    if (!input_data) {
        return c.text("Missing input data", 400);
    }

    // FIXME: Getting just one element from the input_data array
    const text = input_data[0].text;
    const path = input_data[0].path;

    if (!path) {
        return c.text("Missing file path", 400);
    }

    const { data } = await c.env.AI.run("@cf/baai/bge-base-en-v1.5", {
        text: [text],
    });
    const values = data[0];

    if (!values) {
        return c.text("Failed to generate vector embedding", 500);
    }

    const { id } = path;
    const inserted = await c.env.HANDBOOK_INDEX.upsert([
        {
            id: id.toString(),
            values,
        },
    ]);

    return c.json({ id, text, inserted });
});

export default upsert_vectors_handlers;