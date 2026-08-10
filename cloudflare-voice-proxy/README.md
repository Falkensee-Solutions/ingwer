# VoiceInk Azure OpenAI proxy

OpenAI-kompatibler Transkriptionsendpunkt für VoiceInk. Der Worker ergänzt intern die von Azure benötigte API-Version und leitet den Multipart-Upload streamend weiter.

## Endpunkte

- `POST /v1/audio/transcriptions`
- `POST /openai/v1/audio/transcriptions`
- `GET /health`

## Secrets

- `AZURE_OPENAI_API_KEY`: Schlüssel der Azure-OpenAI-Ressource
- `PROXY_API_KEY`: separater Schlüssel, den VoiceInk als API-Key verwendet

Secrets werden ausschließlich mit Wrangler gesetzt und gehören nicht in Dateien oder Git.

## VoiceInk

- API Endpoint: `https://<worker>.workers.dev/v1/audio/transcriptions`
- API Key: Wert von `PROXY_API_KEY`
- Model Name: `gpt-4o-transcribe`