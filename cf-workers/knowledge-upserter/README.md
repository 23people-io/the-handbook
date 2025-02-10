# 23people Handbook: Knowledge Upserter

This Cloudflare Worker processes and indexes documents from the 23people Handbook into Cloudflare Vectorize. It consumes messages from a queue populated by the docs-loader worker, generates embeddings for the documents, and updates the vector store accordingly.

## Features

- Queue-based document processing
- Document embedding generation
- Vectorize index management
- Support for document addition, updates, and deletion
- Batch processing capabilities

## Processing Pipeline

1. **Queue Consumption**:
   - Receives document messages from the queue
   - Validates message format and content

2. **Document Processing**:
   - Extracts content from markdown files
   - Performs text chunking and preprocessing
   - Handles metadata preservation

3. **Embedding Generation**:
   - Generates embeddings for document chunks
   - Uses OpenAI's text-embedding-ada-002 model

4. **Vector Store Management**:
   - Upserts vectors into Cloudflare Vectorize
   - Handles document deletions
   - Maintains metadata associations

## Configuration

### Environment Variables

```toml
# wrangler.toml
name = "23people-handbook-knowledge-upserter"
compatibility_flags = ["nodejs_compat"]
main = "src/index.ts"
compatibility_date = "2025-01-01"

# The following secrets must be set using wrangler:
# - OPENAI_API_KEY
# - VECTORIZE_INDEX_NAME
```

### Setting up Secrets

```bash
wrangler secret put OPENAI_API_KEY
```

### Vectorize Setup

```bash
# Create the vector index if it doesn't exist
wrangler vectorize create 23people-handbook-index \
  --dimensions=1536 \
  --metric=cosine
```

## Development

### Prerequisites

- Node.js 18+
- npm
- Wrangler CLI
- Access to OpenAI API
- Cloudflare Vectorize enabled in your account

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

### Deployment

```bash
npm run deploy
```

## Project Structure

```
knowledge-upserter/
├── src/
│   ├── handlers/
│   │   └── queue.ts       # Queue message handler
│   ├── services/
│   │   ├── embeddings.ts  # Embedding generation
│   │   └── vectorize.ts   # Vectorize operations
│   ├── types.ts          # Type definitions
│   └── index.ts          # Main entry point
├── wrangler.toml         # Worker configuration
├── package.json
└── tsconfig.json
```

## Message Format

The worker expects queue messages in the following format:

```typescript
interface QueueMessage {
  type: 'add' | 'update' | 'remove';
  document: {
    id: string;
    path: string;
    content: string;
    metadata: Record<string, any>;
  };
}
```

## Dependencies

- `openai`: OpenAI API client for embeddings
- `@cloudflare/workers-types`: Types for Cloudflare Workers
- `23people-handbook-cf-workers-shared`: Shared utilities and types

## Processing Configuration

- **Chunk Size**: 512 tokens
- **Overlap**: 50 tokens
- **Model**: text-embedding-ada-002
- **Vector Dimensions**: 1536
- **Similarity Metric**: Cosine

## Error Handling

The worker includes robust error handling for:

- Invalid queue messages
- OpenAI API failures
- Vectorize operation errors
- Rate limiting
- Transient failures with retry logic

## Monitoring

Monitor the worker's performance through:

- Cloudflare Workers analytics
- Custom error logging
- Queue monitoring
- Vectorize metrics

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request

## License

See the LICENSE file in the root directory.
