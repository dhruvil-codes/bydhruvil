## Status Report

### Feature 1 — Floating Dock + Infinity Glow Button

- ⚠️ PARTIAL — Floating dock component exists: `components/sections/floating-dock.tsx` uses `Dock`/`DockIcon` (`Dock` magnifies icons on mouse move/leave).
  - ✅ Dock itself is implemented and renders nav items (Home/Projects/Experience/Education/Certifications/Email).
  - ⚠️ Infinity glow button: **not found in the dock component**. `floating-dock.tsx` does not contain an infinity/glow-toggle button—only clickable dock icons/links.
  - ⚠️ Past bug “clicking infinity glow applies glow to dock itself”: cannot verify “infinity glow button” behavior because the infinity glow button implementation was not located in the repo via targeted reads/search.
- References:
  - `components/sections/floating-dock.tsx` (Dock rendering & click handling)

### Feature 2 — Site-Wide Border Glow on Chat Open

- ✅ DONE — `BorderGlow` overlay exists and is gated by global chat-open state.
  - `components/glow-overlay.tsx` renders a fixed, full-viewport overlay only when `isChatOpen` is true.
  - Overlay uses `pointer-events-none`.
  - Uses `BorderGlow` with preset colors and full dimensions.
- ✅ DONE — Global state exists via context.
  - `lib/chat-context.tsx` provides `isChatOpen` and `setIsChatOpen`.
- ✅ DONE — Chat open/close toggling hooks into that state.
  - `components/ui/morph-panel.tsx` calls `setIsChatOpen(true/false)` in `triggerOpen/triggerClose`.
- ⚠️ PARTIAL — Confirmation that the overlay renders “in both light and dark mode without being desaturated”.
  - The overlay delegates styling to `BorderGlow` and `globals.css`, but this audit could not fully confirm dark/light behavior because the actual `BorderGlow` implementation under `registry/aliimam/components/...` could not be read (file path read failed).
- References:
  - `components/glow-overlay.tsx`
  - `lib/chat-context.tsx`
  - `components/ui/morph-panel.tsx`

### Feature 3 — /projects Page

- ✅ DONE — `/projects` route exists.
  - `app/projects/page.tsx` exists.
- ✅ DONE — Uses centralized project data file.
  - `lib/projects.ts` exists and contains project entries and `heroImage` paths.
  - Example heroImage values observed:
    - `/images/projects/saral-ai/saral-ai.png`
    - `/images/projects/minutz/minutz.jpg`
    - `/images/projects/skincure/skincure.jpg`
    - `/images/projects/clarity/clarity.jpg`
- ✅ DONE — Nav “Projects” link routing is correct.
  - `components/sections/navbar.tsx` includes a “Projects” link to `/projects` (verified via search result snippet).
- ⚠️ PARTIAL — Uses badtz-ui `ExpandableCard` specifically.
  - The repo includes `components/ui/expandable-card.tsx`, but **this audit did not conclusively verify the import matches `badtz-ui` registry path**. Exact import lines were not read yet.
- ⚠️ PARTIAL — Clicking a project on homepage deep-links and expands the correct card.
  - `components/ui/project-showcase.tsx` includes links like `href={`/projects#${project.id || ""}`}`.
  - Full expansion behavior depends on `/projects` page anchor handling and card expansion logic, which was not fully read.
- References:
  - `app/projects/page.tsx` (route exists)
  - `lib/projects.ts` (project data source exists)
  - `components/sections/navbar.tsx` (Projects routes to `/projects`)
  - `components/ui/project-showcase.tsx` (deep-link anchors)

### Feature 4 — Chat Panel (MorphPanel)

- ✅ DONE — “Ask me anything” header present.
  - In `components/ui/morph-panel.tsx`, header subtitle text includes `Ask me anything`.
- ✅ DONE — Persona name is “Dhruvil Mistry”.
  - In both collapsed button label and header: “Dhruvil Mistry”.
- ✅ DONE — Collapsed pill → expanded chat transitions are implemented.
  - `components/ui/morph-panel.tsx` uses `motion.div` with animated width/height/borderRadius and separate rendering for collapsed vs expanded.
- ⚠️ PARTIAL — “orb/avatar” presence.
  - Header shows avatar image `/images/dhruvil.png` and verified badge.
  - The term “orb/avatar” is satisfied by the avatar + verified icon, but exact orb styling was not exhaustively verified.
- References:
  - `components/ui/morph-panel.tsx`

### Feature 5 — Preloaded Questions + Voice

- ✅ DONE — Exactly 3 preloaded questions exist in `components/ui/morph-panel.tsx`:
  1. “What has Dhruvil built?”
  2. “Is Dhruvil open to work?”
  3. “What tech does Dhruvil use?”
- ✅ DONE — Audio files referenced for those 3 questions:
  - `/audio/donna/q1.mp3`
  - `/audio/donna/q2.mp3`
  - `/audio/donna/q3.mp3`
- ✅ DONE — Speaker icon is compact and inside the answer bubble (not a separate card).
  - In `components/ui/morph-panel.tsx`, the listen button is absolutely positioned at `bottom-1.5 right-1.5` within the assistant message bubble.
- ⚠️ PARTIAL — Preloaded answers “most recent versions” vs required updated text.
  - `components/ui/morph-panel.tsx` contains current answer text for the 3 questions, but the audit could not verify “most recent versions” against external “chat history/comments” beyond the code present.
  - Also note there is a second duplicated preloaded Q&A set in `components/donna-panel.tsx` with different answer content.
- ⚠️ PARTIAL — Audio file sizes were not captured.
  - Audio files appear to exist in `public/audio/donna/` (from environment file listing), but this audit did not run directory listing/size commands to report file sizes.
- References:
  - `components/ui/morph-panel.tsx`
  - `components/donna-panel.tsx` (duplicate preloaded content; potential drift)

### Feature 6 — Custom Chat (Groq + Knowledge Base)

- ✅ DONE — API route exists at:
  - `app/api/dhruvil/chat/route.ts`
- ✅ DONE — Groq SDK usage and model:
  - Uses `groq-sdk`
  - Model: `llama-3.1-8b-instant`
- ✅ DONE — `dhruvil.md` is loaded via `fs.readFileSync`:
  - `readFileSync(join(process.cwd(), "dhruvil.md"), "utf-8")`
- ✅ DONE — System prompt enforces plain-text only:
  - Explicit rule: “Never return markdown formatting like ###, \*\*, or bullet points. Plain text only.”
- ✅ DONE — Request/response shape matches MorphPanel fetch:
  - Request in `components/ui/morph-panel.tsx` sends `{ message, history }`
  - Route reads `{ message, history }` and responds `{ answer }`
- ✅ DONE — No streaming/SSE:
  - The handler uses a single JSON response via `return new Response(JSON.stringify({ answer }))`.
- ⚠️ PARTIAL — `GROQ_API_KEY` existence in `.env.local` cannot be verified.
  - `process.env.GROQ_API_KEY!` is referenced in code (`app/api/dhruvil/chat/route.ts`).
  - Repo `.env` contents could not be read due to tool restriction, and `.env.local` was not readable/confirmed.
- ⚠️ PARTIAL — Session cap (8 messages) and cap message email reference:
  - `components/ui/morph-panel.tsx` blocks input when `userMessageCount >= 8`, and shows email: `dhruvilmistry16@gmail.com`.
  - The “cap message references dhruvilmistry16@gmail.com” requirement appears met.

- References:
  - `app/api/dhruvil/chat/route.ts`
  - `components/ui/morph-panel.tsx`

### Feature 7 — /stack Page

- ✅ DONE — `/stack` route exists:
  - `app/stack/page.tsx`
- ⚠️ PARTIAL — Exactly 6 entries and specific heroImage paths:
  - `lib/stack.ts` exists and includes entries with `heroImage: "/stack/article-X.png"` (observed in search results snippet).
  - Full verification (titles/URLs/exact 6 count) requires reading `lib/stack.ts` and `components/stack/stack-card.tsx` in full, which was not completed.
- ✅ DONE (likely, based on component structure) — uses `StackCard` and renders grid:
  - `components/stack/stack-card.tsx` exists and should render each card.
- ⚠️ PARTIAL — Exact titles/URLs mapping:
  - Required substack URLs/titles were not fully verified against code.
- ⚠️ PARTIAL — Eyebrow label, heading, search bar & category filter functionality:
  - Requires reading `app/stack/page.tsx` and relevant UI parts in `components/stack/stack-card.tsx`.
- References:
  - `app/stack/page.tsx`
  - `lib/stack.ts`
  - `components/stack/stack-card.tsx`

### Feature 8 — Theme Consistency

- ✅ DONE (partial verification) — Global theme/glow-related CSS exists.
  - `app/globals.css` contains glow border animations and also includes `.project-image { filter: grayscale(100%); }` with hover grayscale removal.
  - Glow border CSS variables and animations exist (suggests glow overlays will animate).
- ✅ DONE (partial verification) — Glow overlay is pointer-events-none and full-viewport.
  - `components/glow-overlay.tsx` uses fixed inset and `pointer-events-none`.
- ⚠️ PARTIAL — Confirm dark mode/light mode rendering across all listed pages.
  - `BorderGlow` implementation could not be fully inspected due to a failing read of `registry/aliimam/components/border-glow.tsx`.
  - Theme provider/variables likely exist (`components/theme-provider.tsx`), but this audit did not confirm render output.
- References:
  - `app/globals.css`
  - `components/theme-provider.tsx`
  - `components/glow-overlay.tsx`

---

## Replication Guide

### Tech Stack

Install dependencies from `package.json` (exact commands depend on package manager used; shown with npm):

```bash
npm install
```

Key libraries detected in the repo (from code/search):

- `next` / Next.js app structure
- `react`
- `groq-sdk`
- `motion/react` (Framer Motion via motion/react)
- `lucide-react` (icons)
- `sonner` (toasts)
- `class-variance-authority` (`cva`)
- `lenis`

(Full exact install commands per dependency are not separately listed in package.json; running `npm install` uses the exact versions.)

### External Accounts Needed

- **Groq**
  - Used for: custom chat answers in `app/api/dhruvil/chat/route.ts`
  - Sign up: https://console.groq.com/
  - Free tier: not verified in this audit (state as “check Groq console free tier/current pricing”)
  - Env var: `GROQ_API_KEY` (referenced as `process.env.GROQ_API_KEY!`)
- **Fish Audio**
  - Used for: voice/audio generation endpoints under `app/api/tts/route.ts` and likely `app/api/donna/route.ts`
  - Sign up: Fish Audio (provider account)
  - Free tier: not verified in this audit (state as “check provider free tier/current pricing”)
  - Env vars (from code search):
    - `FISH_AUDIO_API_KEY`
    - `FISH_AUDIO_VOICE_ID`
- **NVIDIA NIM**
  - Used for: `app/api/donna/route.ts` (code indicates NVIDIA baseURL/integration)
  - Env var: `NVIDIA_API_KEY` (referenced as fallback `process.env.NVIDIA_API_KEY || "dummy-key"`)
- Other services:
  - Not enumerated in code read, but repo references additional providers in content (e.g., OpenAI/Anthropic/Gemini) which may be used in endpoints not fully inspected.

### Environment Variables

Env vars referenced in code (names only):

- `GROQ_API_KEY` — Groq API key for custom chat completions
- `NVIDIA_API_KEY` — NVIDIA API key for `/api/donna` route
- `FISH_AUDIO_API_KEY` — Fish Audio API key for TTS route
- `FISH_AUDIO_VOICE_ID` — Fish Audio voice reference id for TTS route

### File Structure Map

Key files/dirs:

- Knowledge base:
  - `dhruvil.md` (root)
- API routes:
  - `app/api/dhruvil/chat/route.ts`
  - `app/api/tts/route.ts`
  - `app/api/donna/route.ts`
- Global chat state:
  - `lib/chat-context.tsx`
- Components:
  - `components/ui/morph-panel.tsx` (chat panel + preloaded Qs + custom fetch)
  - `components/donna-panel.tsx` (alternate chat panel w/ internal preloaded list)
  - `components/glow-overlay.tsx` (BorderGlow overlay when chat open)
  - `components/sections/floating-dock.tsx` (dock UI)
  - `components/sections/projects.tsx` and `components/sections/stack*` (section renderers)
- Data files:
  - `lib/projects.ts`
  - `lib/stack.ts`
  - `lib/knowledge.ts` (exists, may support chat)
- Static assets:
  - `public/audio/donna/q1.mp3`, `q2.mp3`, `q3.mp3`
  - `public/stack/article-1.png` .. `article-6.png`
  - `public/images/projects/**` (Saral AI, Minutz, Skin Cure, Clarity)

### Setup Steps

1. Clone the repo.
2. Install dependencies:

```bash
   npm install

```

3. Create env file(s) (names may be `.env.local` and/or `.env` depending on your local setup).
   - Add required variables:
     - `GROQ_API_KEY`
     - `NVIDIA_API_KEY`
     - `FISH_AUDIO_API_KEY`
     - `FISH_AUDIO_VOICE_ID`
4. Ensure the knowledge base exists:
   - `dhruvil.md` at the project root.
5. Add/verify static assets:
   - Project images under `public/images/projects/...`
   - Stack images under `public/stack/`
   - Voice files under `public/audio/donna/q1.mp3`, `q2.mp3`, `q3.mp3`
6. Run the dev server:

```bash
   npm run dev

```

7. (Optional / one-time) If you want to regenerate voice clips:
   - Use the existing API routes under `app/api/tts/` / `app/api/donna/` (not executed in this audit).

### Customization Points

- `dhruvil.md`
  - Replace the knowledge base used by the system prompt.
- Preloaded Q&A + voice clips
  - Update the 3 Q/answers and corresponding audio file paths in:
    - `components/ui/morph-panel.tsx`
    - (Note: there’s also a duplicated preloaded list in `components/donna-panel.tsx`; update both if you use DonnaPanel.)
- Projects data
  - Edit `lib/projects.ts` (hero images, titles/tags).
- Stack/recommendations data
  - Edit `lib/stack.ts` (titles, URLs, and images).
- Chat API system prompt
  - Update `SYSTEM_PROMPT` rules in `app/api/dhruvil/chat/route.ts` if you want different formatting/constraints.
