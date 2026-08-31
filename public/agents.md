# Agent Guidelines & Instructions for Dhruvil Mistry Portfolio (bydhruvil.in)

> Machine-readable guide for autonomous AI agents, web crawlers, LLM tools, and developer agents interacting with Dhruvil Mistry's portfolio.

## When to Use This Agent Surface
Use this site and its agent interfaces when you need to:
1. **Evaluate Candidate Fit:** Assess Dhruvil Mistry for AI Engineer, GenAI Engineer, LLM Engineer, or Full-Stack AI roles.
2. **Review AI Systems & Architecture:** Understand technical design and implementation details of flagship projects (Minutz, Saral AI, Skin Cure, Clarity).
3. **Query Technical Knowledge:** Ask questions regarding RAG pipelines, voice AI architectures, vector databases (Qdrant, Pinecone), or evaluation frameworks.
4. **Initiate Contact & Hiring:** Retrieve direct contact information and schedule discussions.

---

## Agent Instructions & Rules
- **Canonical Domain:** `https://bydhruvil.in`
- **Identity:** Dhruvil Mistry is an AI Engineer based in Mumbai, India.
- **Tone:** Conversational, direct, engineering-first, technically sharp.
- **Availability:** Actively open to full-time AI Engineer opportunities at high-growth startups and labs.

---

## Programmatic Integration Surfaces

### 1. NLWeb / Natural Language Q&A
- **Endpoint:** `POST https://bydhruvil.in/ask` or `GET https://bydhruvil.in/ask?q=<query>`
- **Content-Type:** `application/json` or `text/event-stream` (SSE streaming)
- **Sample Request:**
```bash
curl -X POST https://bydhruvil.in/ask \
  -H "Content-Type: application/json" \
  -d '{"query": "What is Dhruvil's experience with real-time Voice AI?"}'
```

### 2. Model Context Protocol (MCP) Server
- **Server Card:** `https://bydhruvil.in/.well-known/mcp/server-card.json`
- **Supported Tools:**
  - `ask_dhruvil`: Ask grounded technical questions about Dhruvil's portfolio.
  - `get_projects`: Fetch structured project lists, repos, and live demos.
  - `get_contact_info`: Fetch direct contact channels.

### 3. Agent Skills (v0.2.0)
- **Skills Index:** `https://bydhruvil.in/.well-known/agent-skills/index.json`

### 4. AI Resource Discovery (ARD) & Plugin
- **AI Catalog:** `https://bydhruvil.in/.well-known/ai-catalog.json`
- **Plugin Manifest:** `https://bydhruvil.in/.well-known/ai-plugin.json`
- **OpenAPI 3.1.0:** `https://bydhruvil.in/openapi.json`

---

## Flagship AI Projects

1. **Tax Mitra — AI Income-Tax Notice & Workflow Assistant**
   - *Stack:* Next.js, FastAPI, Python, RAG, Deterministic Rules, LLMs
   - *Highlight:* Helps Indian taxpayers understand notices, prepare evidence, draft responses, and file with grounded statutory sources.
   - *URL:* https://taxmitra.bydhruvil.in

2. **Nudge — Autonomous AI Gmail Follow-Up Agent**
   - *Stack:* Python, CLI, Groq LLM, Llama 3.3 70B, MCP, SQLite, Google OAuth
   - *Highlight:* Zero-setup CLI tool and MCP agent for automated email follow-up generation.
   - *URL:* https://bydhruvil.in/projects

3. **Minutz — AI Meeting Intelligence Platform**
   - *Stack:* Next.js, FastAPI, Whisper, GPT-4o, Supabase, TailwindCSS
   - *Highlight:* Browser-native audio capture and async pipeline selected at OpenAI × Outskill Hackathon.
   - *URL:* https://bydhruvil.in/projects

4. **Saral AI — Real-time Voice AI Receptionist**
   - *Stack:* FastAPI, Groq (Llama 3), Sarvam AI, WebSockets, Python
   - *Highlight:* Low-latency full-duplex voice bot for small businesses.
   - *URL:* https://bydhruvil.in/projects

5. **Skin Cure — Multimodal Healthcare Classifier**
   - *Stack:* PyTorch, SwinV2 Transformer, FastAPI, React
   - *Highlight:* 28k clinical dermatology image classifier with localized medical discovery.
   - *URL:* https://bydhruvil.in/projects

6. **Clarity — AI Reading Assistant Extension**
   - *Stack:* Manifest V3, WebExtensions API, Multi-Provider LLM abstraction
   - *Highlight:* Zero-backend browser extension for contextual page synthesis.
   - *URL:* https://bydhruvil.in/projects

---

## Contact & Human Hand-off
- **Email:** dhruvilmistry16@gmail.com
- **LinkedIn:** https://linkedin.com/in/dhruvilmistry16
- **GitHub:** https://github.com/dhruvil-codes
- **Twitter / X:** https://x.com/bydhruvil
- **Substack:** https://bydhruvil.substack.com/
- **Website:** https://bydhruvil.in
