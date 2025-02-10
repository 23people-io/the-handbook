DROP TABLE IF EXISTS Documents;
CREATE TABLE IF NOT EXISTS Documents (    
    id TEXT,
    action TEXT,
    sha TEXT,
    path TEXT,
    content TEXT,
    url TEXT,
    raw_url TEXT,
    section TEXT,
    transaction_id NUMBER,
    created_at INTEGER DEFAULT CURRENT_TIMESTAMP
);