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
