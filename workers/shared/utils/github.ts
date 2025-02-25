// @shared/utils/github.ts
import { Webhooks } from "@octokit/webhooks";
const sigHeaderName = "X-Hub-Signature-256";
const sigHashAlg = "sha256";
/**
 * Verifies the authenticity of a GitHub webhook request.
 * Uses HMAC-SHA256 for signature verification.
 *
 * @param payload - The raw request body
 * @param signature - The x-hub-signature-256 header value (must include 'sha256=' prefix)
 * @param secret - The webhook secret configured in GitHub
 * @returns Promise<boolean> - True if signature is valid
 */
export async function verifyGitHubWebhook(
  payload: string,
  signature: string,
  secret: string
): Promise<boolean> {
  try {
    const webhooks = new Webhooks({
      secret,
    });

    return await webhooks.verify(payload, signature);
  } catch (error) {
    console.error("Error verifying webhook signature:", error);
    return false;
  }
}

function hexToBytes(hex: string): Uint8Array {
  let len = hex.length / 2;
  let bytes = new Uint8Array(len);

  let index = 0;
  for (let i = 0; i < hex.length; i += 2) {
    let c = hex.slice(i, i + 2);
    let b = parseInt(c, 16);
    bytes[index] = b;
    index += 1;
  }

  return bytes;
}
