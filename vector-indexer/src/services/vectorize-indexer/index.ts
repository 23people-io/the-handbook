import { Context } from "hono";
import { App } from "octokit";

async function upsert_vectors(paths: string[], c: Context): Promise<{ id: string; path: string; inserted: any }[]> {

    const results = [];

    for (const path of paths) {
        if (!path.startsWith(c.env.HANDBOOK_REPO_FILTER_PATH)) {
            continue;
        }
        const content = await get_content(path, c);

        const { data } = await c.env.AI.run("@cf/baai/bge-base-en-v1.5", {
            text: [content],
        });
        const values = data[0];

        if (!values) {
            throw new Error("Failed to generate vector embedding");
        }

        const id = path;
        const inserted = await c.env.HANDBOOK_INDEX.upsert([
            {
                id: id.toString(),
                values,
            },
        ]);

        results.push({ id, path, inserted });
    }

    return results;
}

async function delete_vectors(paths: string[], c: Context): Promise<{ id: string; path: string }[]> {
    const results = [];

    for (const path of paths) {
        if (!path.startsWith(c.env.HANDBOOK_REPO_FILTER_PATH)) {
            continue;
        }

        //FIXME: This is a hack, we should be using the id from the vector index
        const id = path;

        await c.env.HANDBOOK_INDEX.deleteByIds([id]);

        results.push({ id, path });
    }

    return results;
}

async function get_content(path: string, c: Context): Promise<string> {

    const github_app = new App({
        appId: c.env.VECTOR_INDEXER_GITHUB_APP_ID,
        privateKey: c.env.VECTOR_INDEXER_GITHUB_APP_PRIVATE_KEY
    });

    const octokit = await github_app.getInstallationOctokit(c.env.VECTOR_INDEXER_GITHUB_APP_INSTALLATION_ID);

    const response = await octokit.rest.repos.getContent({
        owner: c.env.HANDBOOK_REPO_OWNER,
        repo: c.env.HANDBOOK_REPO_NAME,
        path,
    });

    if (response.status !== 200) {
        throw new Error(`Failed to fetch content from ${path}: ${response.status}`);
    }

    return response.data.toString();
}

export { upsert_vectors, delete_vectors };

