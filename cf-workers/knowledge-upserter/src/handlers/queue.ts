// src/handlers/queue.ts
import { OpenAIEmbeddingsService } from '../services/openai-embeddings';
import { VectorizeService } from '../services/vectorize';
import type { QueueMessage } from '../types';

export async function handleQueueMessage(message: QueueMessage, env: Env): Promise<void> {
	const embeddings = new OpenAIEmbeddingsService(env.OPENAI_API_KEY, env.OPENAI_EMBEDDINGS_API_ENDPOINT, env.OPENAI_EMBEDDINGS_MODEL);
	const vectorize = new VectorizeService(env.VECTORIZE_INDEX_ID);

	try {
		switch (message.type) {
			case 'add':
			case 'update':
				// Process document and generate embeddings
				const chunks = await embeddings.processDocument(message.document.id, message.document.content, message.document.metadata);

				// Update vector store
				await vectorize.upsertDocumentChunks(chunks);
				break;

			case 'remove':
				// Remove document from vector store
				await vectorize.removeDocument(message.document.id);
				break;

			default:
				console.error('Unknown message type:', message.type);
		}
	} catch (error) {
		console.error('Error processing queue message:', error);
		throw error; // Re-throw to trigger retry
	}
}
