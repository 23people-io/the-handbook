import { Hono } from 'hono';
import process_documents from './new_push_event';

const app = new Hono<{ Bindings: Env }>();

app.post('/', ...upsert_documents);

export default app;
