"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { motion } from "motion/react"
import { X, Sparkles, Volume2, VolumeX, ArrowLeft, Send } from "lucide-react"
import { toast } from "sonner"

const SPEED_FACTOR = 1
const FORM_WIDTH = 360

const PRELOADED = [
  {
    question: "What has Dhruvil built?",
    answer: "I've built Minutz, a browser-native AI meeting intelligence tool, and Clarity, an AI reading assistant — both shipped. I'm currently building LegalMind, an AI contract risk analyser. Skin Cure, my AI dermatology classifier trained on 28,000+ images, is also shipped.",
    soundPath: "/audio/donna/q1.mp3"
  },
  {
    question: "Is Dhruvil open to work?",
    answer: "Yes — I'm actively looking for roles at AI-native companies where I can go deep on real problems. I'm most excited by teams building at the frontier of LLMs, agentic systems, and production AI — places where I can ship fast, learn from sharp people, and grow into a stronger AI engineer.",
    soundPath: "/audio/donna/q2.mp3"
  },
  {
    question: "What tech does Dhruvil use?",
    answer: "My core stack is Next.js, FastAPI, and Tailwind. For AI, I work with LangChain and LangGraph for agentic workflows, plus APIs from OpenAI, Anthropic, and Gemini. I also use LlamaIndex for RAG pipelines and n8n for workflow automation.",
    soundPath: "/audio/donna/q3.mp3"
  }
]

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  soundPath?: string
  isStreaming?: boolean
}

export function MorphPanel() {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const [showForm, setShowForm] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([])
  const [inputValue, setInputValue] = React.useState("")
  const [isStreaming, setIsStreaming] = React.useState(false)
  const [playingId, setPlayingId] = React.useState<string | null>(null)

  const userMessageCount = messages.filter(msg => msg.role === "user").length

  const stopAudio = React.useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    setPlayingId(null)
  }, [])

  const triggerClose = React.useCallback(() => {
    setShowForm(false)
    stopAudio()
  }, [stopAudio])

  const triggerOpen = React.useCallback(() => {
    setShowForm(true)
  }, [])

  const handleBackToSuggestions = React.useCallback(() => {
    stopAudio()
    setMessages([])
  }, [stopAudio])

  const playVoice = React.useCallback(async (messageId: string, soundPath: string) => {
    if (playingId === messageId) {
      stopAudio()
      return
    }

    stopAudio()
    setPlayingId(messageId)

    try {
      const audio = new Audio(soundPath)
      audioRef.current = audio
      
      audio.onended = () => {
        setPlayingId(current => current === messageId ? null : current)
      }

      audio.onerror = () => {
        toast.error("Failed to load audio file.")
        stopAudio()
      }

      await audio.play().catch((playErr) => {
        console.error("Audio play failed:", playErr)
        toast.error("Could not play audio. Check browser audio permissions.")
        setPlayingId(current => current === messageId ? null : current)
      })
    } catch (e) {
      console.error("Audio error", e)
      toast.error("Could not play voice response.")
      stopAudio()
    }
  }, [playingId, stopAudio])

  const handleSelectPrompt = React.useCallback((index: number) => {
    const prompt = PRELOADED[index]
    const userMsgId = `user-${Date.now()}`
    const assistantMsgId = `assistant-${Date.now()}`
    
    const newMessages: Message[] = [
      { id: userMsgId, role: "user", content: prompt.question },
      { id: assistantMsgId, role: "assistant", content: prompt.answer, soundPath: prompt.soundPath }
    ]
    setMessages(newMessages)
    playVoice(assistantMsgId, prompt.soundPath)
  }, [playVoice])

  const handleSendCustomMessage = React.useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isStreaming) return

    const userText = inputValue.trim()
    setInputValue("")
    stopAudio()

    const userMsgId = `user-${Date.now()}`
    const assistantMsgId = `assistant-${Date.now()}`

    // Add user message and a placeholder assistant message
    const updatedMessages: Message[] = [
      ...messages,
      { id: userMsgId, role: "user", content: userText },
      { id: assistantMsgId, role: "assistant", content: "", isStreaming: true }
    ]
    setMessages(updatedMessages)
    setIsStreaming(true)

    try {
      // Send only the last 6 messages as history
      const chatHistory = updatedMessages
        .slice(0, -1)
        .slice(-6)
        .map(msg => ({ role: msg.role, content: msg.content }))

      const response = await fetch("/api/dhruvil/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: chatHistory
        })
      })

      if (!response.ok) {
        throw new Error("Failed to get response from assistant.")
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No reader available.")

      const decoder = new TextDecoder()
      let done = false
      let buffer = ""
      let currentAnswer = ""

      while (!done) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading
        if (value) {
          buffer += decoder.decode(value, { stream: !done })
          const parts = buffer.split("\n\n")
          buffer = parts.pop() || ""

          for (const part of parts) {
            const line = part.trim()
            if (line.startsWith("data: ")) {
              const dataStr = line.substring(6).trim()
              if (dataStr === "[DONE]") {
                continue
              }
              try {
                const parsed = JSON.parse(dataStr)
                if (parsed.text) {
                  currentAnswer += parsed.text
                  setMessages(prev => {
                    const next = [...prev]
                    const last = next[next.length - 1]
                    if (last && last.id === assistantMsgId) {
                      last.content = currentAnswer
                    }
                    return next
                  })
                }
              } catch (err) {
                console.error("JSON parse error:", err, dataStr)
              }
            }
          }
        }
      }

      setMessages(prev => {
        const next = [...prev]
        const last = next[next.length - 1]
        if (last && last.id === assistantMsgId) {
          last.isStreaming = false
        }
        return next
      })

    } catch (err) {
      console.error("Chat error:", err)
      const errMsg = err instanceof Error ? err.message : "Failed to chat."
      toast.error(errMsg)
      setMessages(prev => prev.filter(msg => msg.id !== assistantMsgId))
    } finally {
      setIsStreaming(false)
    }
  }, [inputValue, messages, isStreaming, stopAudio])

  // Scroll to bottom when messages change
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Handle click outside to close the panel
  React.useEffect(() => {
    function clickOutsideHandler(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node) && showForm) {
        triggerClose()
      }
    }
    document.addEventListener("mousedown", clickOutsideHandler)
    return () => document.removeEventListener("mousedown", clickOutsideHandler)
  }, [showForm, triggerClose])

  // Clean up audio on unmount
  React.useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const currentHeight = showForm 
    ? (messages.length > 0 ? 380 : 300) 
    : 44

  return (
    <div
      className="flex items-end justify-end select-none"
      style={{
        width: showForm ? FORM_WIDTH : "auto",
        height: currentHeight,
      }}
    >
      <motion.div
        ref={wrapperRef}
        data-panel
        className={cx(
          "bg-background z-3 flex flex-col overflow-hidden border border-border shadow-2xl rounded-2xl"
        )}
        initial={false}
        animate={{
          width: showForm ? FORM_WIDTH : "auto",
          height: currentHeight,
          borderRadius: showForm ? 16 : 22,
        }}
        transition={{
          type: "spring",
          stiffness: 550 / SPEED_FACTOR,
          damping: 45,
          mass: 0.7,
          delay: showForm ? 0 : 0.08,
        }}
      >
        {showForm ? (
          <div className="flex flex-col h-full w-full bg-background text-foreground">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/10 shrink-0">
              <div className="flex items-center gap-2.5">
                {messages.length > 0 ? (
                  <button
                    onClick={handleBackToSuggestions}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted p-1 rounded-lg transition-colors cursor-pointer mr-0.5"
                    aria-label="Back to suggestions"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border shrink-0 bg-muted">
                    <img
                      src="/images/dhruvil.png"
                      alt="Dhruvil Mistry"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-semibold text-foreground flex items-center gap-1">
                    Dhruvil Mistry
                    <Sparkles className="w-3.5 h-3.5 text-violet-500 fill-violet-500/20 animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Ask me anything
                  </p>
                </div>
              </div>
              <button
                onClick={triggerClose}
                className="text-muted-foreground hover:text-foreground hover:bg-muted p-1.5 rounded-lg transition-colors cursor-pointer"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-start">
              {messages.length === 0 ? (
                // Prompt Selection List (Suggestions)
                <div className="flex flex-col gap-2 w-full animate-in fade-in duration-300">
                  {PRELOADED.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectPrompt(idx)}
                      className="w-full text-left text-xs bg-muted/30 hover:bg-muted/80 border border-border/80 rounded-xl px-4 py-3 text-foreground font-medium transition-all duration-200 cursor-pointer flex items-center justify-between group"
                    >
                      <span>{item.question}</span>
                      <Volume2 className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground group-hover:scale-105 transition-all shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              ) : (
                // Chat History View
                <div className="flex flex-col gap-3 w-full animate-in fade-in duration-300">
                  {messages.map((msg) => {
                    const isPreloadedAssistant = msg.role === "assistant" && msg.soundPath

                    return (
                      <div
                        key={msg.id}
                        className={cx(
                          "text-xs leading-relaxed max-w-[85%] rounded-xl",
                          msg.role === "user"
                            ? "bg-primary/10 text-primary border border-primary/20 self-end px-3 py-2.5"
                            : cx(
                                "bg-muted/20 border border-border/40 text-muted-foreground self-start",
                                isPreloadedAssistant ? "relative pl-3 pt-2.5 pr-8 pb-7" : "px-3 py-2.5"
                              )
                        )}
                      >
                        <span>{msg.content}</span>

                        {msg.role === "assistant" && msg.isStreaming && msg.content === "" && (
                          <span className="inline-flex gap-1 items-center justify-center ml-1">
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms", animationDuration: "0.6s" }} />
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms", animationDuration: "0.6s" }} />
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms", animationDuration: "0.6s" }} />
                          </span>
                        )}

                        {isPreloadedAssistant && !msg.isStreaming && (
                          <button
                            type="button"
                            onClick={() => playVoice(msg.id, msg.soundPath!)}
                            className="absolute bottom-1.5 right-1.5 p-0.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center justify-center bg-transparent border-0"
                            aria-label="Listen response"
                          >
                            {playingId === msg.id ? (
                              <VolumeX className="w-3.5 h-3.5" />
                            ) : (
                              <Volume2 className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}
                      </div>
                    )
                  })}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="p-3 border-t border-border bg-muted/5 shrink-0 flex items-center justify-center min-h-[56px]">
              {userMessageCount >= 8 ? (
                <div className="text-center text-xs text-muted-foreground font-medium py-1 animate-in fade-in duration-300">
                  That&apos;s all for now — reach me at{" "}
                  <a
                    href="mailto:dhruvilmistry16@gmail.com"
                    className="text-foreground hover:underline font-semibold"
                  >
                    dhruvilmistry16@gmail.com
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSendCustomMessage} className="flex gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Ask a custom question..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isStreaming}
                    className="flex-1 bg-muted/30 hover:bg-muted/50 focus:bg-muted/70 disabled:opacity-50 border border-border/80 rounded-xl px-3.5 py-2 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/45 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isStreaming}
                    className="bg-foreground text-background hover:opacity-90 disabled:opacity-40 p-2 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center justify-center shrink-0 w-8 h-8"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={triggerOpen}
            className="flex h-[44px] items-center gap-2.5 px-3.5 whitespace-nowrap select-none hover:bg-muted/50 transition-colors w-full justify-between cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full overflow-hidden border border-border shrink-0 bg-muted">
              <img
                src="/images/dhruvil.png"
                alt="Dhruvil Mistry"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-foreground pr-1">Ask him</span>
          </button>
        )}
      </motion.div>
    </div>
  )
}

export default MorphPanel
