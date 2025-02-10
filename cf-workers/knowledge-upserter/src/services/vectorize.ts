class VectorizeService {
	vectorizeIndex: VectorizeIndex;

	constructor(env: Env) {
		if (!env.VECTORIZE_INDEX_ID) {
			throw new Error('Vectorize index not initialized');
		}
		this.vectorizeIndex = env.VECTORIZE_INDEX_ID;
	}

	async upsertEmbeddings(embeddings: Embedding[]): Promise<VectorizeVectorMutation> {
		let vectors: VectorizeVector[] = [];

		for (const embedding of embeddings) {
			vectors.push({
				id: embedding.id,
				values: embedding.values,
				metadata: embedding.metadata,
			});
		}

		let inserted = await this.vectorizeIndex.upsert(vectors);
		return inserted;
	}

	// async deleteVectorsByPrefix(path: string): Promise<void> {
	// 	const vectors = await this.env.VECTORIZE_INDEX_ID.list({ prefix: path });
	// 	await this.env.VECTORIZE_INDEX_ID.deleteByIds(vectors.vectors.map((v) => v.id));
	// }
}

export { VectorizeService };
