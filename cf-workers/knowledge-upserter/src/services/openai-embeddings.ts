// src/services/embeddings.ts
import type { EmbeddingResponse, DocumentChunk } from '../types';
import { EmbeddingsService } from '../types';

const CHUNK_SIZE = 512;
const CHUNK_OVERLAP = 50;

export class OpenAIEmbeddingsService implements EmbeddingsService {
	openaiApiKey: string;
	openaiEmbeddingsApiEndpoint: string;
	openaiEmbeddingsModel: string;

	constructor(apiKey: string, endpoint: string, model: string) {
		this.openaiApiKey = apiKey;
		this.openaiEmbeddingsApiEndpoint = endpoint;
		this.openaiEmbeddingsModel = model;
	}

	/**
	 * Splits text into overlapping chunks of roughly equal size
	 */
	private chunkText(text: string): string[] {
		// Basic implementation - can be improved with better text splitting logic
		const words = text.split(/\s+/);
		const chunks: string[] = [];

		for (let i = 0; i < words.length; i += CHUNK_SIZE - CHUNK_OVERLAP) {
			const chunk = words.slice(i, i + CHUNK_SIZE).join(' ');
			chunks.push(chunk);
		}

		return chunks;
	}

	/**
	 * Generates embeddings for a single text chunk
	 */
	private async generateEmbedding(text: string): Promise<number[]> {
		const response = await fetch(this.openaiEmbeddingsApiEndpoint, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${this.openaiApiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				input: text,
				model: this.openaiEmbeddingsModel,
			}),
		});

		if (!response.ok) {
			throw new Error(`OpenAI API error: ${response.statusText}`);
		}

		const result = (await response.json()) as EmbeddingResponse;
		return result.data[0].embedding;
	}

	/**
	 * Processes a document into chunks with embeddings
	 */
	async processDocument(documentId: string, content: string, metadata: Record<string, any>): Promise<DocumentChunk[]> {
		const textChunks = this.chunkText(content);

		const chunks: DocumentChunk[] = await Promise.all(
			textChunks.map(async (chunk, index) => {
				const embedding = await this.generateEmbedding(chunk);

				return {
					id: `${documentId}_chunk_${index}`,
					content: chunk,
					metadata: {
						document_id: documentId,
						document_path: metadata.path,
						chunk_index: index,
						total_chunks: textChunks.length,
						...metadata,
					},
					embedding,
				};
			})
		);

		return chunks;
	}
}
