// src/index.ts
import { GithubReader } from '@shared/readers/github';
import { Context, Hono } from 'hono';
import { handle } from './handlers/github';

const app = new Hono<{ Bindings: Env }>();

// Health check endpoint
app.get('/', (c: Context) => {
	return c.json({
		status: 'ok',
		message: '23people Handbook Docs Loader is working',
		endpoints: {
			webhook: 'POST /webhook',
			reindex: 'POST /reindex',
		},
	});
});

// GitHub webhook handler
app.post('/webhook', async (c) => {
	const signature = c.req.header('x-hub-signature-256');
	const event = c.req.header('x-github-event');
	const rawBody = await c.req.text();

	// FIXME: Remove this block after implementing the verifyGitHubWebhook function
	// if (!signature || !event) {
	// 	return c.json({ error: 'Missing signature or event type' }, 400);
	// }

	// // Verify webhook signature
	// const rawBody = await c.req.text();
	// const isValid = await verifyGitHubWebhook(rawBody, signature, c.env.GITHUB_WEBHOOK_SECRET);

	// if (!isValid) {
	// 	return c.json({ error: 'Invalid signature' }, 401);
	// }

	// Only process push events
	if (event !== 'push') {
		return c.json({ message: 'Event type not processed' }, 200);
	}

	try {
		const payload = JSON.parse(rawBody);
		const changes = await handle(payload, c.env);

		return c.json({
			message: 'Webhook processed successfully',
			changes,
		});
	} catch (error) {
		console.error('Error processing webhook:', error);
		return c.json(
			{
				error: error instanceof Error ? error.message : 'Unknown error',
			},
			500
		);
	}
});

// Manual reindex endpoint
app.post('/reindex', async (c) => {
	try {
		const githubReader = await GithubReader.create(
			{
				appId: c.env.GITHUB_APP_ID,
				privateKey: c.env.GITHUB_APP_PRIVATE_KEY,
				installationId: c.env.GITHUB_APP_INSTALLATION_ID,
			},
			{
				owner: c.env.REPO_OWNER,
				name: c.env.REPO_NAME,
				branch: c.env.REPO_BRANCH,
			}
		);

		// Load all markdown documents from the docs directory
		const documents = await githubReader.loadData({
			includedPaths: ['docs'],
			includedFilters: ['.md'],
			recursive: true,
		});

		// Queue all documents for processing
		const queuePromises = documents.map((doc) =>
			c.env.DOCS_TO_INDEX_QUEUE.send({
				type: 'add',
				document: {
					id: doc.id,
					path: doc.path,
					content: doc.content,
					metadata: doc.metadata,
				},
			})
		);

		await Promise.all(queuePromises);

		return c.json({
			message: 'Reindex started successfully',
			details: {
				total_documents: documents.length,
				status: 'queued',
				timestamp: new Date().toISOString(),
			},
		});
	} catch (error) {
		console.error('Error starting reindex:', error);
		return c.json(
			{
				error: error instanceof Error ? error.message : 'Unknown error',
			},
			500
		);
	}
});

export default app;
