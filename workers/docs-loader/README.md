# 23people Handbook: Docs Loader

This Cloudflare Worker handles the loading and processing of markdown documents from the 23people Handbook GitHub repository. It serves as the entry point for content changes, processing both webhook events from GitHub and manual reindexing requests.

## Features

- GitHub webhook processing for push events
- Signature verification for webhook security
- Markdown file filtering and processing
- Manual reindexing capability
- Queue-based document processing

## API Endpoints

### POST /webhook

Processes GitHub webhook events for repository changes.

- **Headers Required**:
    - `x-github-event`: Event type (only processes 'push')
    - `x-hub-signature-256`: SHA-256 signature for verification
    - `content-type`: application/json

- **Response**:

  ```json
  {
    "message": "Webhook processed successfully",
    "changes": {
      "added": 1,
      "modified": 2,
      "removed": 0,
      "total_processed": 3
    }
  }
  ```

### POST /reindex

Triggers a full reindexing of all markdown documents in the docs directory.

- **Response**:

  ```json
  {
    "message": "Reindex started successfully",
    "details": {
      "total_documents": 42,
      "status": "queued",
      "timestamp": "2025-02-10T17:04:16.243Z"
    }
  }
  ```

## Configuration

### Environment Variables

```toml
# wrangler.toml
name = "23people-handbook-docs-loader"
compatibility_flags = ["nodejs_compat"]
main = "src/index.ts"
compatibility_date = "2025-01-01"

# The following secrets must be set using wrangler:
# - GITHUB_WEBHOOK_SECRET
# - GITHUB_APP_ID
# - GITHUB_APP_PRIVATE_KEY
# - GITHUB_APP_INSTALLATION_ID
```

### Setting up Secrets

```bash
wrangler secret put GITHUB_WEBHOOK_SECRET
wrangler secret put GITHUB_APP_ID
wrangler secret put GITHUB_APP_PRIVATE_KEY
wrangler secret put GITHUB_APP_INSTALLATION_ID
```

## Development

### Prerequisites

- Node.js 18+
- npm
- Wrangler CLI

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
docs-loader/
├── src/
│   ├── handlers/
│   │   └── github.ts       # GitHub webhook handler
│   ├── services/
│   │   └── github.ts       # GitHub API interactions
│   ├── types.ts           # Type definitions
│   └── index.ts           # Main entry point
├── wrangler.toml          # Worker configuration
├── package.json
└── tsconfig.json
```

## Dependencies

- `hono`: Web framework for Cloudflare Workers
- `octokit`: GitHub API client
- `23people-handbook-cf-workers-shared`: Shared utilities and types

## GitHub Webhook Setup

1. In your GitHub repository settings, add a webhook:
   - Payload URL: Your worker's URL
   - Content type: application/json
   - Secret: Match with GITHUB_WEBHOOK_SECRET
   - Events: Just the push event

2. The webhook should receive events when:
   - Files are added, modified, or deleted in the docs directory
   - Changes are pushed to the main branch

## Testing

### Manual Testing

You can test the endpoints using curl:

```bash
# Test webhook endpoint
curl -X POST https://your-worker.workers.dev/webhook \
  -H "content-type: application/json" \
  -H "x-github-event: push" \
  -H "x-hub-signature-256: sha256=..." \
  -d '{"ref": "refs/heads/main", ...}'

# Test reindex endpoint
curl -X POST https://your-worker.workers.dev/reindex
```

## Error Handling

The worker includes comprehensive error handling for:

- Invalid webhook signatures
- Missing or invalid headers
- GitHub API errors
- Queue processing errors

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request

## License

See the LICENSE file in the root directory.
