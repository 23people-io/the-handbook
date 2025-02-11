// src/services/vectorize.ts
import type { DocumentChunk } from '../types';

export class VectorizeService {
	constructor(private vectorizeIndex: VectorizeIndex) {}

	/**
	 * Inserts or updates document chunks in the vector store
	 */
	async upsertDocumentChunks(chunks: DocumentChunk[]): Promise<void> {
		const { vectorizeIndex } = this;

		const vectors = chunks.map((chunk) => ({
			id: chunk.id,
			values: chunk.embedding!,
			metadata: chunk.metadata,
		}));

		await vectorizeIndex.upsert(vectors);
	}

	/**
	 * Removes document chunks from the vector store
	 */
	async removeDocument(documentId: string): Promise<void> {
		const { vectorizeIndex } = this;

		// Find all chunks for this document
		const results = await vectorizeIndex.query({
			topK: 100,
			filter: { document_id: documentId },
		});

		if (results.matches.length > 0) {
			const chunkIds = results.matches.map((match) => match.id);
			await vectorizeIndex.delete(chunkIds);
		}
	}
}
