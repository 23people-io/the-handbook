interface Document {
	id: string; // Unique identifier for the document. It should be the SHA of the Github file
	action: string; // Action to be performed on the document (upsert | delete)
	sha: string; // SHA of the Github file
	path: string; // Path in the github repository
	content?: string; // The content of the document
	url: string; // Github URL of the document
	raw_url: string; // Raw URL of the document
	metadata: {
		section: string; // Main section where the document belongs into the handbook
	};
}

interface Embedding {
	id: string; // The document's Id
	values: number[]; // Embedding vector
	metadata: {
		path: string; // Path in the github repository
		section: string; // Main section where the document belongs into the handbook
	};
}

interface GitHubFile {
	path: string;
	url: string;
	sha: string;
	type: string;
}
