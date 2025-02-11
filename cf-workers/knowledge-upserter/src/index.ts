// src/index.ts
import { Hono } from 'hono';
import { handleQueueMessage } from './handlers/queue';
import type { QueueMessage } from './types';
const app = new Hono();

// Solo disponible en ambiente de testing
if (process.env.NODE_ENV === 'test') {
	app.post('/test/enqueue', async (c) => {
		const env = c.env as Env;
		const body = await c.req.json();

		try {
			// Validar el mensaje
			if (!body.type || !body.document) {
				return c.json({ error: 'Invalid message format' }, 400);
			}

			// Encolar el mensaje
			await env.DOCS_TO_INDEX_QUEUE.send(body);
			return c.json({ status: 'queued' });
		} catch (error) {
			return c.json({ error: 'Failed to enqueue message' }, 500);
		}
	});
}

export default {
	fetch: app.fetch,
	async queue(batch: MessageBatch<QueueMessage>, env: Env): Promise<void> {
		const promises = batch.messages.map(async (message) => {
			try {
				await handleQueueMessage(message.body, env);
				message.ack();
			} catch (error) {
				console.error('Failed to process message:', error);
				message.retry();
			}
		});

		await Promise.all(promises);
	},
};
