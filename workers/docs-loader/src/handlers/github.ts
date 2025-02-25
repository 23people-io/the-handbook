// src/handlers/github.ts
import { GithubReader } from '@shared/readers/github';

interface PushEvent {
	ref: string;
	repository: {
		name: string;
		owner: {
			name: string;
		};
	};
	commits: Array<{
		id: string;
		added: string[];
		removed: string[];
		modified: string[];
	}>;
}

// Filter markdown files from docs directory
function filterDocsFiles(files: string[]): string[] {
	return files.filter((file) => file.startsWith('docs/') && file.endsWith('.md'));
}

export async function handle(payload: PushEvent, env: any) {
	// Only process changes to the main branch
	if (!payload.ref.endsWith('/main')) {
		return { skipped: true, reason: 'Not main branch' };
	}

	const githubReader = await GithubReader.create(
		{
			appId: env.GITHUB_APP_ID,
			privateKey: env.GITHUB_APP_PRIVATE_KEY,
			installationId: env.GITHUB_APP_INSTALLATION_ID,
		},
		{
			owner: payload.repository.owner.name,
			name: payload.repository.name,
			branch: 'main',
		}
	);

	// Collect all affected markdown files
	const added = filterDocsFiles(payload.commits.flatMap((commit) => commit.added));
	const modified = filterDocsFiles(payload.commits.flatMap((commit) => commit.modified));
	const removed = filterDocsFiles(payload.commits.flatMap((commit) => commit.removed));

	// Process added and modified files
	const filesToProcess = [...new Set([...added, ...modified])];
	const documents = await Promise.all(
		filesToProcess.map(async (path) => {
			const content = await githubReader.getFileContent(path);
			return {
				path,
				content,
				id: payload.commits[0].id, // Using commit ID as document ID
				metadata: {
					commit_id: payload.commits[0].id,
					repository: payload.repository.name,
					branch: 'main',
				},
			};
		})
	);

	// Queue changes for processing
	const queuePromises = [
		// Queue added/modified documents
		...documents.map((doc) =>
			env.DOCS_TO_INDEX_QUEUE.send({
				type: added.includes(doc.path) ? 'add' : 'update',
				document: doc,
			})
		),
		// Queue removed documents
		...removed.map((path) =>
			env.DOCS_TO_INDEX_QUEUE.send({
				type: 'remove',
				document: { path },
			})
		),
	];

	await Promise.all(queuePromises);

	return {
		added: added.length,
		modified: modified.length,
		removed: removed.length,
		total_processed: queuePromises.length,
	};
}
