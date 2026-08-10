const TRANSCRIPTION_PATHS = new Set([
  "/v1/audio/transcriptions",
  "/openai/v1/audio/transcriptions"
]);

function jsonError(message: string, status: number): Response {
  return Response.json(
    { error: { message, type: "invalid_request_error" } },
    { status }
  );
}

async function secretsMatch(provided: string, expected: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const [providedHash, expectedHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(provided)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected))
  ]);

  return crypto.subtle.timingSafeEqual(providedHash, expectedHash);
}

function bearerToken(request: Request): string {
  const authorization = request.headers.get("Authorization") ?? "";
  return authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return Response.json({ status: "ok" });
    }

    if (request.method !== "POST" || !TRANSCRIPTION_PATHS.has(url.pathname)) {
      return jsonError("Not found", 404);
    }

    const authorized = await secretsMatch(bearerToken(request), env.PROXY_API_KEY);
    if (!authorized) {
      return jsonError("Invalid API key", 401);
    }

    const contentType = request.headers.get("Content-Type") ?? "";
    if (!contentType.toLowerCase().startsWith("multipart/form-data;")) {
      return jsonError("Content-Type must be multipart/form-data", 415);
    }

    const contentLength = Number(request.headers.get("Content-Length") ?? "0");
    if (Number.isFinite(contentLength) && contentLength > 25 * 1024 * 1024) {
      return jsonError("Audio file exceeds the 25 MB Azure limit", 413);
    }

    try {
      const upstreamHeaders = new Headers();
      upstreamHeaders.set("Content-Type", contentType);
      upstreamHeaders.set("api-key", env.AZURE_OPENAI_API_KEY);

      const upstream = await fetch(env.AZURE_TRANSCRIPTION_URL, {
        method: "POST",
        headers: upstreamHeaders,
        body: request.body,
        redirect: "manual"
      });

      console.log(JSON.stringify({
        message: "transcription proxied",
        requestId: request.headers.get("cf-ray"),
        upstreamStatus: upstream.status
      }));

      const responseHeaders = new Headers(upstream.headers);
      responseHeaders.delete("set-cookie");
      responseHeaders.set("Cache-Control", "no-store");

      return new Response(upstream.body, {
        status: upstream.status,
        statusText: upstream.statusText,
        headers: responseHeaders
      });
    } catch (error) {
      console.error(JSON.stringify({
        message: "Azure transcription request failed",
        error: error instanceof Error ? error.message : String(error)
      }));
      return jsonError("Upstream transcription service unavailable", 502);
    }
  }
} satisfies ExportedHandler<Env>;