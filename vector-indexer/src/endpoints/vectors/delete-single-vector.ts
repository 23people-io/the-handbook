import { createFactory } from 'hono/factory'
import { logger } from 'hono/logger'

const factory = createFactory<{ Bindings: Env }>()

const delete_single_vector_handlers = factory.createHandlers(logger(), async (c) => {
    const { id } = c.req.param();

    await c.env.HANDBOOK_INDEX.deleteByIds([id]);

    return c.status(204);
});

export default delete_single_vector_handlers;