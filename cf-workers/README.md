# Cloudflare Workers for 23people Handbook

This directory contains Cloudflare Workers that handle different aspects of the 23people Handbook's content processing and indexing pipeline.

## Project Structure

```text
cf-workers/
├── shared/              # Shared code between workers
│   ├── types/           # TypeScript type definitions
│   ├── readers/         # Content readers implementations
│   └── utils/           # Shared utilities
│
├── docs-loader/         # Worker to handle GitHub webhooks and content loading
├── knowledge-upserter/  # Worker to process and index documents
└── knowledge-api/       # Worker to handle RAG queries (planned)
```

## Workflow

```mermaid
flowchart TD
    subgraph GitHub["GitHub Repository"]
        MD[Markdown Files]
        WH[Webhook Events]
    end

    subgraph Workers["Cloudflare Workers"]
        subgraph DL["docs-loader"]
            WHH[Webhook Handler]
            RI[Reindex Handler]
        end
        
        subgraph KU["knowledge-upserter"]
            QH[Queue Handler]
            EP[Embeddings Processor]
        end
        
        subgraph KA["knowledge-api"]
            RAG[RAG Implementation]
            Search[Search Handler]
        end
    end

    subgraph Storage["Cloudflare Storage"]
        Queue[(Queue)]
        Vector[(Vectorize)]
    end

    %% Connections
    MD --> WH
    WH --> |trigger| WHH
    WHH --> |process| Queue
    RI --> |load all| Queue
    Queue --> |consume| QH
    QH --> |generate| EP
    EP --> |store| Vector
    RAG --> |query| Vector
    Search --> |use| RAG

    %% Styling
    classDef storage fill:#f96,stroke:#333,stroke-width:2px
    classDef worker fill:#58a6ff,stroke:#333,stroke-width:2px
    classDef github fill:#2ea44f,stroke:#333,stroke-width:2px,color:white
    
    class Queue,Vector storage
    class DL,KU,KA worker
    class GitHub github
```

## Workers

### docs-loader

Handles GitHub webhooks and document loading from the handbook repository.

- **Main Features**:
    - Processes GitHub push webhooks
    - Loads markdown files from the repository
    - Validates webhook signatures
    - Queues documents for processing

- **Endpoints**:
    - `POST /webhook`: GitHub webhook endpoint
    - `POST /reindex`: Manually trigger full content reindexing

### knowledge-upserter (WIP)

Processes documents and updates the vector store.

### knowledge-api (Planned)

Will handle RAG-based queries against the indexed content.

## Shared Code

The `shared` directory contains code used across multiple workers:

- **Types**: Common TypeScript interfaces and types
- **Readers**: Implementations for different content sources
- **Utils**: Shared utility functions

## Development

### Prerequisites

- Node.js 18+
- npm
- Wrangler CLI (`npm install -g wrangler`)

### Setup

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
cd docs-loader
wrangler secret put GITHUB_WEBHOOK_SECRET
wrangler secret put GITHUB_APP_ID
wrangler secret put GITHUB_APP_PRIVATE_KEY
wrangler secret put GITHUB_APP_INSTALLATION_ID
```

### Local Development

```bash
cd <worker-directory>
npm run dev
```

### Deployment

```bash
cd <worker-directory>
npm run deploy
```

## GitHub App Configuration

The workers interact with GitHub through a GitHub App. To set up:

1. Create a GitHub App in your organization
2. Generate a private key
3. Install the app in your repository
4. Configure webhook settings:
   - Webhook URL: Your docs-loader worker URL
   - Secret: Match with GITHUB_WEBHOOK_SECRET
   - Events: Push events

## Architecture

```mermaid
graph TD
    GH[GitHub Repository] -->|Webhook| DL[docs-loader]
    DL -->|Queue Message| KU[knowledge-upserter]
    KU -->|Index| VS[Vectorize]
    KA[knowledge-api] -->|Query| VS
```

- **docs-loader**: Entry point for content changes
- **knowledge-upserter**: Processing and indexing
- **knowledge-api**: Query interface
- **Vectorize**: Vector store for embeddings

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

See the LICENSE file in the root directory.
