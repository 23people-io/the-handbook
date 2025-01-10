
export default {
  async upsert_vectors(paths: string[], env: Env) {

    
    const { data } = await env.AI.run("@cf/baai/bge-base-en-v1.5", {
        text: [text],
    });
    const values = data[0];

    if (!values) {
        throw new Error("Failed to generate vector embedding");
    }

    const { id } = path;
    const inserted = await env.HANDBOOK_INDEX.upsert([
        {
            id: id.toString(),
            values,
        },
    ]);

    return c.json({ id, text, inserted });
  },
};