export interface Document {
  id: string;
  path: string;
  content: string;
  metadata: Record<string, any>;
  embedding?: number[];
}

export interface ReaderOptions {
  includedPaths?: string[];
  includedFilters?: string[];
  recursive?: boolean;
}

export interface BaseReader {
  loadData(options: ReaderOptions): Promise<Document[]>;
}
