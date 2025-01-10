import { Hono } from "hono";
import vectors from './endpoints/vectors'
import webhooks_pushes from './endpoints/github-repo/webhooks'

// Start a Hono app
const app = new Hono<{ Bindings: Env }>().basePath('/api');

app.route('/vectors', vectors);
app.route('/github-repo/webhooks', webhooks_pushes);

app.onError((err, c) => {
	console.error(`${err}`);
	return c.text('Custom Error Message', 500);
});

// Export the Hono app
export default app;

