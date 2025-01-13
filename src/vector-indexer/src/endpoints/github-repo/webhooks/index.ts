import { Hono } from 'hono'
import new_push_event from './new_push_event';

const app = new Hono<{ Bindings: Env }>()

app.post('/pushes', ...new_push_event);

export default app;