// src/index.ts
import { GithubReader } from '@shared/readers/github';
import { Context, Hono } from 'hono';

const app = new Hono<{ Bindings: Env }>();

// Health check endpoint
app.get('/', (c: Context) => {
	return c.json({
		status: 'ok',
		message: '23people Handbook Docs Loader is working',
		endpoints: {
			reindex: 'POST /reindex',
		},
	});
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
			},
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
			}),
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
		return c.json(
			{
				error: error instanceof Error ? error.message : 'Unknown error',
			},
			500,
		);
	}
});

export default app;
