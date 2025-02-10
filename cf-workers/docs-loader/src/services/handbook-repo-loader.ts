import { Document } from 'llamaindex';
import { Observability } from '../libs/observability';
import { GithubRepoReader } from '../libs/readers/github';
import { HandbookMetadata } from '../types';

class HandbookRepoLoaderService {
	githubRepoReader: GithubRepoReader;
	repoName: string;
	repoOwner: string;
	repoFromDirPath: string;
	docsToIndexQueue: Queue;
	observability: Observability;

	private constructor(env: Env, githubRepoReader?: GithubRepoReader, observability?: Observability) {
		if (!githubRepoReader) {
			throw new Error('GitHub repo reader not initialized');
		}

		if (!observability) {
			throw new Error('Observability service not initialized');
		}

		if (!env.REPO_NAME || !env.REPO_OWNER) {
			throw new Error('Repo name or owner not initialized');
		}

		if (!env.REPO_FROM_DIR_PATH) {
			throw new Error('Repo from dir path not initialized');
		}

		if (!env.DOCS_TO_INDEX_QUEUE) {
			throw new Error('Docs to index queue not initialized');
		}

		this.githubRepoReader = githubRepoReader;
		this.repoName = env.REPO_NAME;
		this.repoOwner = env.REPO_OWNER;
		this.observability = observability;
		this.repoFromDirPath = env.REPO_FROM_DIR_PATH;
		this.docsToIndexQueue = env.DOCS_TO_INDEX_QUEUE;
	}

	static async getInstance(env: Env): Promise<HandbookRepoLoaderService> {
		const githubRepoReader = await GithubRepoReader.createInstance(env);
		const observability = new Observability(env);

		return new HandbookRepoLoaderService(env, githubRepoReader, observability);
	}

	/**
	 * Load all files from the repository and send them to the queue
	 */
	async loadData(transactionId: string): Promise<Document[]> {
		const documents = await this.githubRepoReader.loadData(this.repoName, this.repoOwner, [this.repoFromDirPath], ['.md']);

		const handbookDocuments = await this.convertToHandbookDocuments(documents);

		await this.sendDocsToQueue(handbookDocuments, transactionId);

		return documents;
	}

	/**
	 * Convert the GitHub files to documents
	 * @param files The GitHub files
	 * @returns The documents
	 */
	async convertToHandbookDocuments(documents: Document[]): Promise<Document<HandbookMetadata>[]> {
		const handbookDocuments: Document<HandbookMetadata>[] = [];

		for (const doc of documents) {
			const newDocument = new Document<HandbookMetadata>({
				id_: doc.id_,
				text: doc.text,
				metadata: {
					section: this.getSection(doc.metadata.path),
					action: 'upsert', //FIXME: This should not be hardcoded
					sha: doc.metadata.sha || '',
					path: doc.metadata.path || '',
					url: doc.metadata.url || '',
					title: doc.metadata.title || '',
					raw_url: doc.metadata.raw_url || '',
				},
			});

			handbookDocuments.push(newDocument);
		}

		return handbookDocuments;
	}

	/**
	 * Get the section of the file into the handbook from the Path
	 * @param path The path
	 * @returns The section
	 */
	private getSection(path: string): string {
		const section = path.split('/').slice(-2)[0];
		return section;
	}

	/**
	 * Send the files to the queue
	 */
	private async sendDocsToQueue(documents: Document[], transactionId: string): Promise<void> {
		const queue = this.docsToIndexQueue;
		await Promise.all(
			documents.map(async (document) => {
				await queue.send(document);
				//await this.observabilityService.addDocument(document, transactionId);
			})
		);
	}
}

export { HandbookRepoLoaderService };
