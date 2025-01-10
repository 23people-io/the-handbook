import { Hono } from 'hono'
import get_vectors_handlers from './get-vectors';
import upsert_single_vector_handlers from './upsert-vectors';
import delete_single_vector_handlers from './delete-single-vector';

const app = new Hono<{ Bindings: Env }>()

app.get('/', ...get_vectors_handlers);
app.post('/', ...upsert_single_vector_handlers);
app.delete('/:id', ...delete_single_vector_handlers);

export default app;