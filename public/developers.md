# Developer & Agent Integration Guide for Dhruvil Mistry Portfolio

Welcome to the developer and agent integration documentation for `https://bydhruvil.in`.

## Quick Links
- **OpenAPI 3.1 Specification:** [`/openapi.json`](https://bydhruvil.in/openapi.json)
- **MCP Server Card:** [`/.well-known/mcp/server-card.json`](https://bydhruvil.in/.well-known/mcp/server-card.json)
- **AI Catalog (ARD):** [`/.well-known/ai-catalog.json`](https://bydhruvil.in/.well-known/ai-catalog.json)
- **Agent Guidelines:** [`/agents.md`](https://bydhruvil.in/agents.md)
- **Authentication Docs:** [`/auth.md`](https://bydhruvil.in/auth.md)
- **LLM Context:** [`/llms.txt`](https://bydhruvil.in/llms.txt)

---

## 1. Natural Language NLWeb Endpoint (`/ask`)
The `/ask` endpoint conforms to the NLWeb specification and provides grounded answers regarding Dhruvil Mistry's portfolio.

### GET Request
```bash
curl "https://bydhruvil.in/ask?q=Tell+me+about+Dhruvil's+experience+with+LLMs"
```

### POST Request
```bash
curl -X POST "https://bydhruvil.in/ask" \
  -H "Content-Type: application/json" \
  -d '{"query": "What are Dhruvil Mistry's flagship projects?"}'
```

### Streaming Request (SSE)
```bash
curl -N -X POST "https://bydhruvil.in/ask" \
  -H "Content-Type: application/json" \
  -H "Accept: text/event-stream" \
  -d '{"query": "Summarize Dhruvil's technical skills", "stream": true}'
```

---

## 2. Model Context Protocol (MCP) Server
To connect Claude Desktop, Cursor, Windsurf, or custom MCP clients to Dhruvil Mistry's MCP server:

```json
{
  "mcpServers": {
    "bydhruvil": {
      "url": "https://bydhruvil.in/ask"
    }
  }
}
```

### Supported Tools
- `ask_dhruvil`: Query Dhruvil's knowledge base.
- `get_projects`: Retrieve flagship project info and live links.
- `get_contact_info`: Retrieve verified contact channels.

---

## 3. WebMCP Browser Affordances
This website exposes WebMCP tool attributes and `window.modelContext` / `document.modelContext` registrations for browser-based agents.
