import { WorkflowEntrypoint, WorkflowEvent, WorkflowStep } from 'cloudflare:workers';
import { EmbeddingService } from './services/embeddings';
import { GithubService } from './services/github';
import { VectorizeService } from './services/vectorize';

function getFileSha(url: string): string {
	const urlParts = url.split('/');
	const sha = urlParts[urlParts.length - 1];
	return sha;
}

// <docs-tag name="workflow-entrypoint">
export class KnowledgeSeedingWorkflow extends WorkflowEntrypoint<Env, Document> {
	async run(event: WorkflowEvent<Document>, step: WorkflowStep) {
		const env = this.env;
		let content;
		let embeddings;

		try {
			content = await step.do('Fetch Document Content from Github', async () => {
				const githubService = await GithubService.createInstance(env);
				const document = event.payload;
				const sha = getFileSha(document.url);
				const content = await githubService.getRawFileContent(sha);
				console.log(`Fetched content for document: ${document.path}`);
				return content;
			});
		} catch (error) {
			console.error('Failed to fetch document content:', error);
			throw error;
		}

		try {
			embeddings = await step.do('Create Doc Embeddings', async () => {
				const generateEmbedding = new EmbeddingService(env);
				const document = event.payload;
				const newDocument = { ...document, content };
				const embeddings = await generateEmbedding.generateEmbeddings(newDocument);
				console.log(`Generated embedding for document: ${document.path}`);

				return embeddings;
			});
		} catch (error) {
			console.error('Failed to generate embedding:', error);
			throw error;
		}

		try {
			await step.do('Index Embedding', async () => {
				const vectorizeService = new VectorizeService(env);
				await vectorizeService.upsertEmbeddings([embeddings]);
				console.log(`Indexed embedding for document: ${event.payload.path}`);
			});
		} catch (error) {
			console.error('Failed to index embedding:', error);
			throw error;
		}
	}
}
// </docs-tag name="workflow-entrypoint">

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const document = await request.json();

		// Spawn a new instance and return the ID and status
		console.log(`Creating new workflow instance for document: ${JSON.stringify(document, null, 2)}`);
		let instance = await env.KNOWLEDGE_SEEDING_WORKFLOW.create({
			params: document,
		});

		console.log(`Created new workflow instance: ${instance.id}`);
		return new Response(JSON.stringify({ id: instance.id, status: instance.status }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},
	async queue(batch: MessageBatch<Document>, env: Env): Promise<void> {
		console.log(`Processing batch of ${batch.messages.length} documents`);

		for (const message of batch.messages) {
			try {
				console.log(`Processing document: ${message.body.path}`);
				const document = message.body;

				// Spawn a new instance and return the ID and status
				console.log(`Creating new workflow instance for document: ${document.path}`);
				let instance = await env.KNOWLEDGE_SEEDING_WORKFLOW.create({
					params: document,
				});

				console.log(`Created new workflow instance: ${instance.id}`);
				message.ack();
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : 'Unknown error';
				console.error(`Error processing document: ${errorMessage}`);
			}
		}
	},
};
