import { Hono } from 'hono'
import upsert_documents from './upsert-documents';

const app = new Hono<{ Bindings: Env }>()

app.post('/', ...upsert_documents);

export default app;