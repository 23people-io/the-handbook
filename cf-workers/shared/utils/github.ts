// @shared/utils/github.ts

/**
 * Verifies the authenticity of a GitHub webhook request.
 * Uses HMAC-SHA256 for signature verification.
 *
 * @param payload - The raw request body
 * @param signature - The x-hub-signature-256 header value
 * @param secret - The webhook secret configured in GitHub
 * @returns Promise<boolean> - True if signature is valid
 */
export async function verifyGitHubWebhook(
  payload: string,
  signature: string,
  secret: string
): Promise<boolean> {
  try {
    // Remove 'sha256=' prefix from signature
    const providedSignature = signature.replace("sha256=", "");

    // Convert secret to crypto key
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      {
        name: "HMAC",
        hash: { name: "SHA-256" },
      },
      false,
      ["sign"]
    );

    // Calculate expected signature
    const payloadBytes = encoder.encode(payload);
    const signatureBytes = await crypto.subtle.sign("HMAC", key, payloadBytes);

    // Convert to hex string
    const expectedSignature = Array.from(new Uint8Array(signatureBytes))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // Compare signatures using timing-safe comparison
    return timingSafeEqual(providedSignature, expectedSignature);
  } catch (error) {
    console.error("Error verifying webhook signature:", error);
    return false;
  }
}

/**
 * Performs a timing-safe comparison of two strings.
 * This helps prevent timing attacks when comparing signatures.
 *
 * @param a - First string to compare
 * @param b - Second string to compare
 * @returns boolean - True if strings are equal
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}
