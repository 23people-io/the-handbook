// src/__tests__/integration.test.ts
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { Unstable_DevWorker } from 'wrangler';
import { unstable_dev } from 'wrangler';

describe('Knowledge Upserter Integration', () => {
	let worker: Unstable_DevWorker;

	beforeAll(async () => {
		worker = await unstable_dev('src/index.ts', {
			experimental: { disableExperimentalWarning: true },
		});
	});

	afterAll(async () => {
		await worker.stop();
	});

	it('should process a document through the queue', async () => {
		// Simular un mensaje que iría a la cola
		const testDoc = {
			type: 'add',
			document: {
				id: 'test-doc-1',
				content: '# Test Document\n\nThis is a test document for integration testing.',
				metadata: {
					path: '/test/document.md',
					title: 'Test Document',
				},
			},
		};

		// Puedes crear un endpoint temporal para testing que encole el mensaje
		const resp = await worker.fetch('/test/enqueue', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(testDoc),
		});

		expect(resp.status).toBe(200);

		// Esperar un tiempo razonable para que se procese el mensaje
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Aquí podrías agregar verificaciones adicionales, como:
		// - Verificar que el documento se haya indexado correctamente en Vectorize
		// - Comprobar logs o métricas
		// - Verificar el estado del documento
	});

	it('should handle invalid messages appropriately', async () => {
		const invalidDoc = {
			type: 'invalid',
			document: {
				id: 'test-doc-2',
				content: 'Invalid document',
			},
		};

		const resp = await worker.fetch('/test/enqueue', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(invalidDoc),
		});

		expect(resp.status).toBe(400);
	});
});

// src/index.ts
import { Hono } from 'hono';
import { handleQueueMessage } from './handlers/queue';
import type { Env, QueueMessage } from './types';

const app = new Hono();

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
