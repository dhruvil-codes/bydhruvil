"use client"

import React, { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "motion/react"
import { X, Send, Sparkles, Volume2, VolumeX } from "lucide-react"
import { useDonna } from "@/hooks/useDonna"
import { cn } from "@/lib/utils"


const PRELOADED = [
  {
    question: "What has Dhruvil built?",
    answer: "Dhruvil has built Minutz, an AI meeting intelligence tool, and Clarity, an AI reading assistant — both shipped in 2024. He's currently building LegalMind, an AI risk analyser, and Skin Cure, an AI dermatology app."
  },
  {
    question: "Is Dhruvil open to work?",
    answer: "Yes! Dhruvil is open to work and collaboration. He's particularly interested in product design, AI-powered applications, and full-stack development roles."
  },
  {
    question: "What tech does Dhruvil use?",
    answer: "Dhruvil works with Next.js, TypeScript, Tailwind CSS, Framer Motion, and a range of AI APIs including NVIDIA NIM, Fish Audio, and various LLM providers."
  }
]

interface DonnaPanelProps {
  isOpen: boolean
  onClose: () => void
  donna?: ReturnType<typeof useDonna>
}

export function DonnaPanel({ isOpen, onClose, donna: propDonna }: DonnaPanelProps) {
  const internalDonna = useDonna()
  const donna = propDonna || internalDonna
  const { messages, loading, playingId, sendPreloaded, sendCustom, toggleAudio } = donna
  const [inputText, setInputText] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)")
    setIsMobile(media.matches)
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [])
  
  const panelRef = useRef<HTMLDivElement>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom on updates
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, loading])

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 150)
    }
  }, [isOpen])

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Handle Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim() || loading) return

    const query = inputText.trim()
    setInputText("")
    await sendCustom(query)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          className="fixed z-50 flex flex-col overflow-hidden bg-[var(--color-background-primary)] bottom-0 left-0 right-0 h-[70vh] rounded-t-[16px] border-t border-border shadow-none md:bottom-24 md:right-6 md:top-auto md:left-auto md:w-[360px] md:h-[500px] md:rounded-2xl md:border md:border-border md:shadow-2xl"
          style={isMobile ? { boxShadow: "none" } : undefined}
          initial={isMobile ? { y: "100%", opacity: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
          animate={isMobile ? { y: 0, opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={isMobile ? { y: "100%", opacity: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
          transition={
            isMobile
              ? { type: "tween", duration: 0.25, ease: "easeOut" }
              : { type: "spring", stiffness: 400, damping: 30 }
          }
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/10 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-border shrink-0 bg-muted">
                <img
                  src="/images/dhruvil.png"
                  alt="Dhruvil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-1">
                  Dhruvil
                  <Sparkles className="w-3.5 h-3.5 text-violet-500 fill-violet-500/20" />
                </h3>
                <p className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Assistant
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground hover:bg-muted p-1.5 rounded-lg transition-colors cursor-pointer"
              aria-label="Close panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat content area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.length === 0 && (
              <div className="flex flex-col gap-4 py-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-start gap-3 bg-muted/20 border border-border/50 rounded-xl p-4">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border shrink-0 mt-0.5 bg-muted">
                    <img
                      src="/images/dhruvil.png"
                      alt="Dhruvil Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Meet Dhruvil</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      I'm Dhruvil's AI assistant. Select one of the quick questions below to hear my voice answer, or type any custom question.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Conversation History */}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col w-full",
                  msg.role === "user" ? "items-end animate-in slide-in-from-right-3 duration-300" : "items-start animate-in slide-in-from-left-3 duration-300"
                )}
              >
                <div
                  className={cn(
                    "text-sm px-4 py-2.5 rounded-2xl max-w-[85%] break-words leading-relaxed shadow-sm relative",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-none font-medium"
                      : "bg-muted text-foreground rounded-tl-none",
                    msg.role === "assistant" && msg.isPreloaded ? "pr-8 pb-3" : ""
                  )}
                >
                  {msg.content}
                  {msg.role === "assistant" && msg.isPreloaded && (
                    <button
                      type="button"
                      onClick={() => toggleAudio(msg.id, msg.content)}
                      className="absolute bottom-2 right-2 p-0.5 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer bg-transparent border-none"
                      aria-label={playingId === msg.id ? "Stop audio" : "Play audio"}
                    >
                      {playingId === msg.id ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
                {msg.role === "assistant" && !msg.isPreloaded && (
                  <span className="text-[10px] text-muted-foreground mt-1 ml-1.5 flex items-center gap-1 select-none">
                    🔇 Voice not available for custom questions
                  </span>
                )}
              </div>
            ))}

            {/* Streaming custom message loading indicator */}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex flex-col items-start w-full animate-in fade-in duration-200">
                <div className="bg-muted text-foreground px-4 py-2.5 rounded-2xl rounded-tl-none max-w-[85%] flex items-center gap-1.5 min-h-[38px]">
                  <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Chips Strip */}
          <div className="border-t-[0.5px] border-[var(--color-border-tertiary)] px-3 py-2 flex flex-col gap-1.5 bg-background shrink-0 select-none">
            <span className="text-[11px] text-muted-foreground font-medium">Quick questions</span>
            <div className="flex flex-wrap gap-1.5">
              {PRELOADED.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => sendPreloaded(item.question, item.answer)}
                  className="text-xs bg-muted/40 hover:bg-muted border border-border rounded-full px-3 py-1 text-foreground font-medium transition-colors cursor-pointer"
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>

          {/* Input form */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-border p-3 bg-muted/5 flex gap-2 items-center shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask me anything..."
              disabled={loading}
              className="flex-1 bg-background border border-border rounded-xl px-3.5 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-60 transition-opacity"
            />
            <button
              type="submit"
              disabled={loading || !inputText.trim()}
              className="bg-primary text-primary-foreground p-2 rounded-xl hover:opacity-90 disabled:opacity-40 transition-all select-none shrink-0"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
