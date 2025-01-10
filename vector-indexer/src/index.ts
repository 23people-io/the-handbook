import { Hono } from "hono";
import vectors from './endpoints/vectors'
import repo_commits from './endpoints/repo/commits'

// Start a Hono app
const app = new Hono<{ Bindings: Env }>().basePath('/api');

app.route('/vectors', vectors);
app.route('/repo/commits', repo_commits);

app.onError((err, c) => {
	console.error(`${err}`);
	return c.text('Custom Error Message', 500);
});

// Export the Hono app
export default app;

