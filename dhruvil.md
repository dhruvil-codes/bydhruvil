# Dhruvil Mistry — Knowledge Base

## About Me
I'm an AI Engineer based in Mumbai, India, who specialises in building AI products which actually solves a problem. I integrate frontier LLMs (OpenAI, Anthropic, Gemini) into production workflows using LangChain, LlamaIndex, and FastAPI. I have hands-on experience with RAG pipelines, agentic architectures, and workflow automation using n8n. I'm skilled in prompt engineering, vector search, LLM evaluation, and shipping lightweight AI applications on AWS and Vercel across text, audio, and image workflows.

## Contact
- Email: dhruvilmistry16@gmail.com
- Location: Mumbai, India
- LinkedIn: linkedin.com/in/dhruvilmistry16
- GitHub: github.com/dhruvil-codes
- Twitter/X: @bydhruvil

## Projects

### Minutz — AI Meeting Intelligence Platform
Stack: FastAPI, Next.js, Whisper, GPT-4o, Supabase | Status: Live | Selected at OpenAI × Outskill Hackathon (1 from 1000, Amongst 30,000 entries)
- Engineered a browser-native meeting recorder that intercepts WebRTC audio streams directly inside Chrome — no bots joining meetings, no notifications, overcoming standard tab-capture limitations.
- Built an end-to-end async pipeline: 10-second audio chunks → FastAPI → ffmpeg merge → Whisper transcription → GPT-4o extraction of summaries, action items, and sentiment, with full turnaround in ~60 seconds.
- Shipped a full-stack product (Next.js, Supabase, Slack integration, 4 intelligence modes) on Vercel + Render. Works across Google Meet, Zoom, and Teams.
- Pricing: Starter (free), Pro ($19/mo), Team ($12/seat).

### Saral AI — Voice AI Receptionist
Stack: FastAPI, Python, Next.js, Sarvam AI, Groq LLM, WebSockets, webrtcvad | Status: In Progress
- Engineered a low-latency, real-time Voice AI Receptionist for MSMEs automating inbound customer phone calls over full-duplex WebSocket connections.
- Achieved sub-second conversational turns by combining Speech-to-Text (Sarvam saaras:v3), Groq LLM reasoning (openai/gpt-oss-20b), and streaming Text-to-Speech (Sarvam bulbul:v3).
- Implemented adaptive Voice Activity Detection (webrtcvad + RMS fallback) and pre-cached fallback responses in-memory for fault tolerance during third-party API timeouts.

### Skin Cure — Multimodal Healthcare AI
Stack: FastAPI, React, SwinV2, PyTorch | Status: Live
- Training a 24-class SwinV2-Base classifier on 28,000+ dermatology images, achieving ~78% accuracy.
- Building a FastAPI + React app that delivers AI predictions, confidence scores, and Google Maps-based dermatologist discovery.

### Clarity — AI Reading Assistant
Stack: JavaScript, OpenAI, Anthropic, Gemini APIs | Status: Live | GitHub: github.com/dhruvil-codes/clarity-extension
- Shipped a Chrome extension (MV3) delivering 1-click summarization, entity extraction, and contextual Q&A.
- Built a zero-backend, multi-provider LLM abstraction layer across GPT-4o Mini, Claude Haiku, and Gemini 2.5 Flash.
- Bring-your-own-key (BYOK) model with zero data custody.


## Work Experience

### AI/ML Intern — Infosys Springboard (Remote)
Sep 2025 – Nov 2025
- Reduced model error rates by 20% across production ML pipelines by engineering end-to-end preprocessing, feature engineering, and evaluation workflows using Scikit-Learn and PyTorch on enterprise datasets.
- Accelerated NLP delivery by building sentiment analysis, text classification, and keyword extraction workflows with Hugging Face transformers; improved prompt engineering strategy to reduce LLM hallucinations on enterprise data.
- Improved pipeline reproducibility and CI/CD deployment consistency by containerizing ML workflows with Docker, enabling repeatable model evaluation across environments.

### Full Stack Web Designer — Contra Platform (Remote)
Oct 2023 – Feb 2024
- Delivered 10+ full-stack applications with 95% client satisfaction and zero post-launch critical bugs.
- Reduced average delivery time by 30% through reusable design systems and component libraries.

## Technical Skills
- **Languages:** Python, JavaScript, HTML, CSS
- **Frameworks:** FastAPI, React, Next.js, LangChain, LlamaIndex
- **AI & Retrieval:** LLMs, Agentic AI, RAG Pipelines, Prompt Engineering, LLM Evaluation, Embeddings, OpenAI APIs, Anthropic APIs, Gemini APIs, Hugging Face, Whisper, NLP
- **Vector Databases:** Qdrant, Pinecone, ChromaDB
- **ML:** PyTorch, Scikit-Learn, Pytorch, Transformer Models
- **Automation:** n8n, workflow orchestration
- **Infrastructure:** PostgreSQL, MongoDB, Docker, Git, Vercel, Render

## Certifications
- Building LLM Applications with Prompt Engineering — NVIDIA
- Generative AI with LLMs — DeepLearning.AI
- Machine Learning Specialization — Stanford/Coursera

## Education
- B.E. Electronics & Telecommunications (2026), MCT Rajiv Gandhi Institute of Technology, Mumbai — CGPA: 7.0/10
- Diploma in Electronics & Telecommunications (2023), Thakur Polytechnic, Mumbai — 3rd Rank in Department

## Honors & Leadership
- Technical Lead, ISTE — organized and hosted multiple technical events across the college community.
- LinkedIn Creator — 3,000+ followers on AI, LLMs, and full-stack engineering.
- 1st Place, Model Making (Thakur Polytechnic, 2022)
- Runner-Up, TechnoFest State-Level Competition (2023)

## FAQ-Style Notes for the Assistant
- **What kind of roles am I looking for?** AI Engineer, GenAI Engineer, or LLM Engineer roles, ideally at funded early-stage (seed to Series A) startups, based in Mumbai or remote within India.
- **What am I best at?** Shipping production-grade AI systems end-to-end — not just demos — especially LLM integrations, RAG pipelines, and full-stack apps with real users.
- **What's my flagship project?** Minutz, an AI meeting intelligence platform that was selected at the OpenAI × Outskill Hackathon out of 1,000 entries.

## Random Fun Facts about me

- I love cats a little too much, that's why the cat which you see roaming around the website, she's Miko :)
- I prefer substacks over books, I can't complete a book but i can read a big substack article.
- Have always been a beach boy since childhood.
- I treat as tool to leverage what I'm building not as it's gonna take some job.


So yeah that's about it!
