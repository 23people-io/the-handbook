class Observability {
	docsToIndexDB: D1Database;

	constructor(env: Env) {
		if (!env.DOCS_TO_INDEX_DB) {
			throw new Error('Docs to index DB not initialized');
		}

		this.docsToIndexDB = env.DOCS_TO_INDEX_DB;
	}

	async addDocument(document: Document, transactionId: string): Promise<D1Result | undefined> {
		try {
			const { id, action, sha, path, content, url, raw_url, metadata } = document;

			// Asegúrate de que ningún valor sea undefined
			const safeId = id ?? '';
			const safeAction = action ?? '';
			const safeSha = sha ?? '';
			const safePath = path ?? '';
			const safeContent = content ?? '';
			const safeUrl = url ?? '';
			const safeRawUrl = raw_url ?? '';
			const safeSection = metadata.section ?? '';
			const safeTransactionId = transactionId ?? '';

			const insertQuery = `
            INSERT INTO Documents (id, action, sha, path, content, url, raw_url, section, transaction_id) 
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)
        `;

			const result = await this.docsToIndexDB
				.prepare(insertQuery)
				.bind(safeId, safeAction, safeSha, safePath, safeContent, safeUrl, safeRawUrl, safeSection, safeTransactionId)
				.run();
			return result;
		} catch (error) {
			console.error('Error inserting document:', error);
		}
	}
}

export { Observability };
