import { Metadata } from 'llamaindex';

/*
The type definition for the documents type that 
represents the documents to be loaded into the queue.
 */
export interface HandbookMetadata extends Metadata {
	action: string; // Action to be performed on the document (upsert | delete)
	sha: string; // SHA of the Github file
	path: string; // Path in the github repository
	url: string; // Github URL of the document
	raw_url: string; // Raw URL of the document
	section: string; // Main section where the document belongs into the handbook
}
