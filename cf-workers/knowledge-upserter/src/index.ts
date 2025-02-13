// src/index.ts
import { Hono } from 'hono';
import { handleQueueMessage } from './handlers/queue';
import type { QueueMessage } from './types';

export default {
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
