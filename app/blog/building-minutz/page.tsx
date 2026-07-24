import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FloatingDock from "@/components/sections/floating-dock";
import MorphPanel from "@/components/ui/morph-panel";
import { Crosshairs } from "@/components/ui/crosshairs";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Building Minutz: Capturing WebRTC Audio Streams in Chrome Extensions | Dhruvil Mistry",
  description: "An in-depth look at capturing audio streams natively inside Google Chrome, overcoming Manifest V3 restrictions, and streaming WebSockets to FastAPI.",
  alternates: {
    canonical: "https://bydhruvil.in/blog/building-minutz",
  },
  openGraph: {
    title: "Building Minutz: Capturing WebRTC Audio Streams in Chrome Extensions | Dhruvil Mistry",
    description: "An in-depth look at capturing audio streams natively inside Google Chrome, overcoming Manifest V3 restrictions, and streaming WebSockets to FastAPI.",
    url: "https://bydhruvil.in/blog/building-minutz",
    type: "article",
    publishedTime: "2026-07-21T00:00:00.000Z",
    authors: ["Dhruvil Mistry"],
    images: [
      {
        url: "/images/projects/minutz/minutz.jpg",
        width: 1200,
        height: 675,
        alt: "Building Minutz: WebRTC Audio Capture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Minutz: Capturing WebRTC Audio Streams in Chrome Extensions | Dhruvil Mistry",
    description: "Learn how to capture tab audio natively in Chrome Extensions Manifest V3 and stream raw PCM data via WebSockets.",
    images: ["/images/projects/minutz/minutz.jpg"],
  },
};

export default function BuildingMinutzBlogPage() {
  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": "https://bydhruvil.in/blog/building-minutz#article",
            "isPartOf": {
              "@id": "https://bydhruvil.in/#website"
            },
            "mainEntityOfPage": "https://bydhruvil.in/blog/building-minutz",
            "headline": "Building Minutz: Capturing WebRTC Audio Streams in Chrome Extensions",
            "description": "An in-depth look at capturing audio streams natively inside Google Chrome, overcoming Manifest V3 restrictions, and streaming WebSockets to FastAPI.",
            "image": "https://bydhruvil.in/images/projects/minutz/minutz.jpg",
            "datePublished": "2026-07-21T00:00:00.000Z",
            "dateModified": "2026-07-21T00:00:00.000Z",
            "author": {
              "@id": "https://bydhruvil.in/#person"
            },
            "publisher": {
              "@id": "https://bydhruvil.in/#person"
            }
          }),
        }}
      />
      {/* Hero background grid */}
      <div className="relative w-full bg-grid-dots">
        <Navbar />
      </div>

      {/* Main Blog Content */}
      <main className="max-w-screen overflow-x-hidden px-4 md:px-6 pb-10">
        <div className="mx-auto max-w-3xl relative">
          
          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Page Container */}
          <section className="relative border-x border-edge screen-line-before screen-line-after">
            <Crosshairs top={true} bottom={true} />
            
            {/* Header / Meta */}
            <header className="screen-line-after px-4 py-6 sm:px-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase bg-muted/60 border border-edge px-2 py-0.5 rounded-md">
                  Technical Article • 8 min read
                </span>
                <Link
                  href="/blog"
                  className="border border-border px-3 py-1 rounded-xl font-mono text-xs font-medium cursor-pointer group inline-flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-0.5" /> Back to Blog
                </Link>
              </div>

              <div className="space-y-3">
                <h1 className="font-semibold tracking-tight text-foreground text-2xl sm:text-3xl leading-tight">
                  Building Minutz: Capturing WebRTC Audio Streams in Chrome Extensions
                </h1>
                <p className="text-sm font-mono text-muted-foreground">
                  By Dhruvil Mistry • July 2026
                </p>
              </div>
            </header>

            <div className="p-4 sm:p-6 space-y-8">
              {/* Cover Image banner */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-edge bg-muted shadow-lg shadow-black/[0.03]">
                <Image
                  src="/images/projects/minutz/minutz.jpg"
                  alt="Minutz project screenshot showing meeting intelligence dashboard"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Introduction Quote */}
              <div className="border-l-2 border-primary pl-4 py-1 italic text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                &quot;The hardest part of building meeting intelligence isn&apos;t the AI. It&apos;s obtaining high-quality audio streams directly from the user&apos;s browser without breaking their flow.&quot;
              </div>

              {/* Article Content */}
              <div className="space-y-6 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                
                <p>
                  Most meeting recorders work by sending an automated bot (a headless Zoom or Google Meet client) to join the call. While this is straightforward, it is intrusive: bots clutter the meeting grid, require explicit admission, and alert everyone in the room. 
                </p>

                <p>
                  When I set out to build <strong>Minutz</strong>, I wanted an invisible, browser-native solution. No bot joins, no calendar invites, no notifications. Just a lightweight Chrome extension that captures the meeting&apos;s WebRTC streams directly inside the browser and feeds them into a FastAPI backend for Whisper transcription and GPT-4o analysis.
                </p>

                <p>
                  However, implementing this in modern Google Chrome extensions meant navigating the sandboxed restrictions of <strong>Manifest V3 (MV3)</strong>. Here is how I overcame these hurdles and built a reliable client-side audio capture pipeline.
                </p>

                {/* Section 1 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[01]</span> the manifest v3 sandboxing dilemma
                  </h2>
                  <p>
                    In Manifest V2, developers could spawn persistent background pages that had full access to standard Web APIs like Web Audio, WebRTC, and media capture interfaces. Manifest V3 replaced these background pages with transient <strong>Service Workers</strong>.
                  </p>
                  <p>
                    Because Service Workers lack a visual DOM context, they cannot access APIs like <code>navigator.mediaDevices.getUserMedia</code>. Furthermore, they terminate automatically after a short period of inactivity, which is catastrophic for recording a hour-long meeting.
                  </p>
                  <p>
                    To capture tab audio natively in Manifest V3, we must utilize a special component: <strong>Offscreen Documents</strong>.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[02]</span> setting up the offscreen document
                  </h2>
                  <p>
                    An Offscreen Document is a lightweight, invisible HTML file spawned programmatically by the background service worker. Because it runs in a standard window/document context, it has access to the full DOM and all media capture APIs.
                  </p>
                  <p>
                    First, declare the <code>offscreen</code> permission in your extension&apos;s <code>manifest.json</code>:
                  </p>
                  <pre className="bg-muted p-4 rounded-xl font-mono text-xs overflow-x-auto border border-edge text-foreground">
{`{
  "manifest_version": 3,
  "name": "Minutz Recorder",
  "permissions": ["offscreen", "tabCapture", "activeTab"],
  "background": {
    "service_worker": "background.js"
  }
}`}
                  </pre>
                  <p>
                    Then, inside <code>background.js</code>, write a helper function to spawn the offscreen document when the user clicks &quot;Start Recording&quot;:
                  </p>
                  <pre className="bg-muted p-4 rounded-xl font-mono text-xs overflow-x-auto border border-edge text-foreground">
{`async function setupOffscreenDocument(path) {
  const existingContexts = await chrome.runtime.getContexts({
    contextTypes: ['OFFSCREEN_DOCUMENT']
  });

  if (existingContexts.length > 0) {
    return;
  }

  await chrome.offscreen.createDocument({
    url: path,
    reasons: ['USER_MEDIA'],
    justification: 'Capturing WebRTC/tab audio for live transcription'
  });
}`}
                  </pre>
                </div>

                {/* Section 3 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[03]</span> capturing the tab audio stream
                  </h2>
                  <p>
                    Once the offscreen document is running, it can request the audio stream. In our offscreen script, we use <code>chrome.tabCapture.getMediaStream</code> to capture the audio of the active tab.
                  </p>
                  <pre className="bg-muted p-4 rounded-xl font-mono text-xs overflow-x-auto border border-edge text-foreground">
{`// Inside offscreen.js
chrome.runtime.onMessage.addListener(async (message) => {
  if (message.target === 'offscreen' && message.type === 'START_CAPTURE') {
    // Get the stream token sent from the background script
    const streamId = message.streamId;
    
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: 'tab',
          chromeMediaSourceId: streamId
        }
      },
      video: false
    });
    
    processAudioStream(stream);
  }
});`}
                  </pre>
                  <p>
                    Note: The background script must generate the stream token using <code>chrome.tabCapture.getMediaStreamId()</code> and pass it to the offscreen document to authorize the capture of the user&apos;s current tab.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[04]</span> processing and downsampling audio
                  </h2>
                  <p>
                    The browser captures audio at the system rate, usually 44.1kHz or 48kHz, encoded in 32-bit floating-point PCM. AI transcription services like OpenAI Whisper require 16-bit linear PCM (Int16) at a sample rate of 16kHz. 
                  </p>
                  <p>
                    Doing this conversion on the client side reduces network bandwidth by nearly 80%. We can implement this downsampling using the Web Audio API inside the offscreen document:
                  </p>
                  <pre className="bg-muted p-4 rounded-xl font-mono text-xs overflow-x-auto border border-edge text-foreground">
{`function processAudioStream(stream) {
  const audioCtx = new AudioContext({ sampleRate: 16000 });
  const source = audioCtx.createMediaStreamSource(stream);
  
  // Create a processor node
  const processor = audioCtx.createScriptProcessor(4096, 1, 1);
  
  source.connect(processor);
  processor.connect(audioCtx.destination);
  
  processor.onaudioprocess = (e) => {
    const float32Samples = e.inputBuffer.getChannelData(0);
    const int16Buffer = convertFloat32ToInt16(float32Samples);
    
    // Send binary buffer to background or directly to WebSocket
    sendAudioChunk(int16Buffer);
  };
}

function convertFloat32ToInt16(buffer) {
  let l = buffer.length;
  let buf = new Int16Array(l);
  while (l--) {
    let s = Math.max(-1, Math.min(1, buffer[l]));
    buf[l] = s < 0 ? s * 0x8000 : s * 0x7FFF;
  }
  return buf.buffer;
}`}
                  </pre>
                </div>

                {/* Section 5 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[05]</span> streaming to fastapi via websockets
                  </h2>
                  <p>
                    With the audio downsampled to 16kHz Int16 mono PCM, we stream the raw binary chunks over a persistent WebSocket connection to our FastAPI backend.
                  </p>
                  <pre className="bg-muted p-4 rounded-xl font-mono text-xs overflow-x-auto border border-edge text-foreground">
{`const ws = new WebSocket('wss://api.minutz.com/v1/recording/stream');

function sendAudioChunk(arrayBuffer) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(arrayBuffer);
  }
}`}
                  </pre>
                  <p>
                    On the FastAPI backend, we receive the binary frame and feed it into a local buffer. We can apply Voice Activity Detection (VAD) using <code>webrtcvad</code> to segment the audio into utterances before passing them to Whisper:
                  </p>
                  <pre className="bg-muted p-4 rounded-xl font-mono text-xs overflow-x-auto border border-edge text-foreground">
{`# FastAPI websocket endpoint
@app.websocket("/v1/recording/stream")
async def stream_audio(websocket: WebSocket):
    await websocket.accept()
    buffer = bytearray()
    
    try:
        while True:
            # Receive raw PCM bytes
            data = await websocket.receive_bytes()
            buffer.extend(data)
            
            # Process chunks in 30-second windows for Whisper
            if len(buffer) >= 16000 * 2 * 30: # 16kHz * 2 bytes/sample * 30s
                chunk = bytes(buffer[:960000])
                del buffer[:960000]
                
                # Send to Whisper transcription worker
                asyncio.create_task(transcribe_chunk(chunk))
    except WebSocketDisconnect:
        print("Client disconnected, closing stream.")`}
                  </pre>
                </div>

                {/* Section 6 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[06]</span> results and key takeaways
                  </h2>
                  <p>
                    By building this browser-native capture pipeline for Minutz, I was able to achieve:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Complete privacy:</strong> No third-party bot joins the call. Tab capture only grabs the meeting audio itself.</li>
                    <li><strong>Ultra-low latency:</strong> Streaming downsampled Int16 PCM chunks over WebSockets enables near-real-time transcription as the user speaks.</li>
                    <li><strong>Minimal server load:</strong> Offloading the downsampling and formatting math to the client browser keeps backend computational requirements focused strictly on transcription.</li>
                  </ul>
                  <p>
                    Building Chrome Extensions in the Manifest V3 era forces developers to rethink background processing, but tools like Offscreen Documents and Web Audio API make client-side audio capture robust and highly optimized.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          <Footer />
        </div>
      </main>

      <FloatingDock />
      <MorphPanel />
    </div>
  );
}
