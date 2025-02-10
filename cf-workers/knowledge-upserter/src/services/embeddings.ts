class EmbeddingService {
	embeddingModel: string;
	embeddingDimensions: number;
	openaiApiKey: string;
	openaiEmbeddingsApiEndpoint: string;

	constructor(env: Env) {
		if (!env.EMBEDDINGS_MODEL) {
			throw new Error('Embeddings model not initialized');
		}

		if (!env.EMBEDDINGS_DIMENSIONS) {
			throw new Error('Embeddings dimensions not initialized');
		}

		if (!env.OPENAI_API_KEY) {
			throw new Error('OpenAI API key not initialized');
		}

		this.embeddingModel = env.EMBEDDINGS_MODEL;
		this.openaiApiKey = env.OPENAI_API_KEY;
		this.embeddingDimensions = env.EMBEDDINGS_DIMENSIONS;
		this.openaiEmbeddingsApiEndpoint = env.OPENAI_EMBEDDINGS_API_ENDPOINT;
	}

	/**
	 * Generates embeddings for a list of documents.
	 */
	async generateEmbeddings(document: Document): Promise<Embedding> {
		const response = await fetch(this.openaiEmbeddingsApiEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.openaiApiKey}`,
			},
			body: JSON.stringify({
				input: document.content,
				model: this.embeddingModel,
				dimensions: this.embeddingDimensions,
			}),
		});

		if (!response.ok) {
			throw new Error(`Failed to generate embedding: ${response.statusText}`);
		}

		const data = (await response.json()) as { data: { embedding: number[] }[] };
		const embeddingValues = data.data[0].embedding;

		return {
			id: document.id, // Use the document's SHA as the embedding ID
			values: embeddingValues,
			metadata: {
				path: document.path,
				section: document.metadata.section,
			},
		};
	}
}

export { EmbeddingService };
