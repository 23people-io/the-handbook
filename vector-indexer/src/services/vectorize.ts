import { Document } from '../types';

interface Indexer {
	index_documents(documents: Document[]): Promise<{ id: string; inserted: any }[]>;
	remove_documents(documents: Document[]): Promise<{ id: string }[]>;
}

class VectorizeService implements Indexer {
	env: any;
	vectorize_index: any;

	// Normal signature with defaults
	constructor(env: any, vectorize_index: any) {
		this.env = env;
		this.vectorize_index = vectorize_index;
	}

	async index_documents(documents: Document[]): Promise<{ id: string; inserted: any }[]> {
		if (!documents.length) {
			return [];
		}

		const results: any[] = await Promise.all(
			documents.map(async (document: Document): Promise<any[]> => {
				return await this.index_document(document);
			})
		);
		return results;
	}

	async remove_documents(documents: Document[]): Promise<{ id: string }[]> {
		if (!documents.length) {
			return [];
		}

		const results: any[] = await Promise.all(
			documents.map(async (document: Document): Promise<any[]> => {
				return await this.remove_document(document);
			})
		);
		return results;
	}

	private async index_document(document: any): Promise<any> {
		const values = await this.generate_vector_embedding(document);

		const id = document.id;
		const inserted = await this.vectorize_index.upsert([
			{
				id: id,
				values,
			},
		]);

		return { id, inserted };
	}

	private async remove_document(document: any): Promise<any> {
		const id = document.id;
		await this.vectorize_index.deleteByIds([id]);
		return { id };
	}

	private async generate_vector_embedding(document: Document): Promise<any[]> {
		const { data } = await this.env.AI.run('@cf/baai/bge-base-en-v1.5', {
			text: [document.content],
		});
		const values = data[0];

		if (!values) {
			throw new Error('Failed to generate vector embedding');
		}
		return values;
	}
}

export { VectorizeService };
