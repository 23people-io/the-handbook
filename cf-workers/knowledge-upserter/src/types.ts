// src/types.ts
import { Document } from '23p-handbook-cf-workers-shared';

export interface QueueMessage {
	type: 'add' | 'update' | 'remove';
	document: Document;
}

export interface DocumentChunk {
	id: string;
	content: string;
	metadata: {
		document_id: string;
		document_path: string;
		chunk_index: number;
		total_chunks: number;
		[key: string]: any;
	};
	embedding?: number[];
}

export interface EmbeddingResponse {
	object: string;
	data: Array<{
		object: string;
		embedding: number[];
		index: number;
	}>;
	model: string;
	usage: {
		prompt_tokens: number;
		total_tokens: number;
	};
}

export interface EmbeddingsService {
	processDocument(documentId: string, content: string, metadata: Record<string, any>): Promise<DocumentChunk[]>;
}
