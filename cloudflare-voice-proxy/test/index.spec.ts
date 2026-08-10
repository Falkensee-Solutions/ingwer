import { env, SELF } from "cloudflare:test";
import { describe, expect, it } from "vitest";

describe("voice proxy", () => {
  it("reports healthy", async () => {
    const response = await SELF.fetch("https://example.com/health");
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ status: "ok" });
  });

  it("rejects requests without a proxy key", async () => {
    const response = await SELF.fetch("https://example.com/v1/audio/transcriptions", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data; boundary=test" },
      body: "--test--"
    });
    expect(response.status).toBe(401);
  });

  it("has generated secret bindings in the test environment", () => {
    expect(typeof env.AZURE_TRANSCRIPTION_URL).toBe("string");
  });
});