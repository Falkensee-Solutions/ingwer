import { cloudflareTest } from "@cloudflare/vitest-pool-workers";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    cloudflareTest({
      wrangler: { configPath: "./wrangler.jsonc" },
      miniflare: {
        bindings: {
          AZURE_OPENAI_API_KEY: "test-azure-key",
          PROXY_API_KEY: "test-proxy-key"
        }
      }
    })
  ],
  test: {
    pool: "cloudflare"
  }
});