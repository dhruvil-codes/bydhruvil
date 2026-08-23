# Authentication & Authorization Guide (auth.md)

> Information on accessing programmatic surfaces on `https://bydhruvil.in`.

## Overview & Zero Friction Access
ByDhruvil APIs, NLWeb endpoints, and Model Context Protocol (MCP) server endpoints are **publicly readable without authentication** for read and query operations.

- **Public Endpoints:**
  - `GET /ask`
  - `POST /ask`
  - `POST /api/dhruvil/chat`
  - `GET /.well-known/mcp/server-card.json`
  - `GET /.well-known/ai-catalog.json`
  - `GET /.well-known/agent-skills/index.json`
  - `GET /openapi.json`

## Rate Limits & Fair Use
- **Rate Limit:** 30 requests per minute per IP or agent identity.
- **Agent Identity Headers (Optional):**
  - `User-Agent: YourAgentName/1.0`
  - `X-Agent-ID: agent_identifier`
- **Response upon Rate Limit Exceeded:** HTTP 429 Too Many Requests with `Retry-After` header.

## Scopes & OAuth Discovery
For integrations declaring scoped permissions:
- **OAuth Protected Resource:** `https://bydhruvil.in/.well-known/oauth-protected-resource`
- **Authorization Server:** `https://bydhruvil.in/.well-known/oauth-authorization-server`
- **Supported Scopes:**
  - `read:profile`: Access to biography and profile information.
  - `read:projects`: Access to project descriptions and technical breakdowns.
  - `read:blog`: Access to technical essays and articles.
  - `ask:ai`: Access to natural language Q&A endpoints (`/ask`, `/api/dhruvil/chat`).

## Web Bot Auth & Signatures
- **Signature Directory:** `https://bydhruvil.in/.well-known/http-message-signatures-directory`
- **Algorithm:** Ed25519 (EdDSA)

## Need More Access or Enterprise Discussion?
Contact Dhruvil Mistry directly at **dhruvilmistry16@gmail.com** or connect via [LinkedIn](https://linkedin.com/in/dhruvilmistry16).
