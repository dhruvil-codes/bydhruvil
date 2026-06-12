"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { AnimatePresence, motion } from "motion/react"
import { X, Sparkles, Volume2, VolumeX, Loader2, ArrowLeft } from "lucide-react"
import { toast } from "sonner"

const SPEED_FACTOR = 1
const FORM_WIDTH = 360

const PRELOADED = [
  {
    question: "What has Dhruvil built?",
    answer: "I've built Minutz, an AI meeting intelligence tool, and Clarity, an AI reading assistant — both shipped in 2024. Currently, I'm building LegalMind, an AI risk analyser, and Skin Cure, an AI dermatology app.",
    soundPath: "/sounds/built.mp3"
  },
  {
    question: "Is Dhruvil open to work?",
    answer: "Yes! I'm open to work and collaboration. I'm particularly interested in product design, AI-powered applications, and full-stack developer roles.",
    soundPath: "/sounds/work.mp3"
  },
  {
    question: "What tech does Dhruvil use?",
    answer: "I work with Next.js, TypeScript, Tailwind CSS, Framer Motion, and a range of AI APIs including NVIDIA NIM, Fish Audio, and various LLMs.",
    soundPath: "/sounds/tech.mp3"
  }
]

export function MorphPanel() {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)

  const [showForm, setShowForm] = React.useState(false)
  const [activePrompt, setActivePrompt] = React.useState<number | null>(null)
  const [playingId, setPlayingId] = React.useState<number | null>(null)
  const [audioLoading, setAudioLoading] = React.useState(false)

  const stopAudio = React.useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    setPlayingId(null)
    setAudioLoading(false)
  }, [])

  const triggerClose = React.useCallback(() => {
    setShowForm(false)
    setActivePrompt(null)
    stopAudio()
  }, [stopAudio])

  const triggerOpen = React.useCallback(() => {
    setShowForm(true)
  }, [])

  const playVoice = React.useCallback(async (index: number, soundPath: string) => {
    if (playingId === index) {
      stopAudio()
      return
    }

    stopAudio()
    setPlayingId(index)
    setAudioLoading(true)

    try {
      const audio = new Audio(soundPath)
      audioRef.current = audio
      
      audio.onended = () => {
        setPlayingId(current => current === index ? null : current)
      }

      audio.onplaying = () => {
        setAudioLoading(false)
      }

      audio.onerror = () => {
        toast.error("Failed to load audio file.")
        stopAudio()
      }

      await audio.play().catch((playErr) => {
        console.error("Audio play failed:", playErr)
        toast.error("Could not play audio. Check browser audio permissions.")
        setPlayingId(current => current === index ? null : current)
      })
    } catch (e: any) {
      console.error("Audio error", e)
      toast.error("Could not play voice response.")
      stopAudio()
    }
  }, [playingId, stopAudio])

  const handleSelectPrompt = React.useCallback((index: number) => {
    setActivePrompt(index)
    playVoice(index, PRELOADED[index].soundPath)
  }, [playVoice])

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

  const currentHeight = showForm ? (activePrompt !== null ? 280 : 220) : 44

  return (
    <div
      className="flex items-end justify-end select-none"
      style={{
        width: showForm ? FORM_WIDTH : "auto",
        height: showForm ? (activePrompt !== null ? 280 : 220) : "auto",
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
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border shrink-0 bg-muted">
                  <img
                    src="/images/dhruvil.png"
                    alt="Dhruvil Mistry"
                    className="w-full h-full object-cover"
                  />
                </div>
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
              {activePrompt === null ? (
                // Prompt Selection List
                <div className="flex flex-col gap-2 w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
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
                // Selected Q&A View
                <div className="flex flex-col gap-3.5 w-full h-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {/* Selected Question */}
                  <div className="text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-xl px-3.5 py-2.5 self-start max-w-[95%]">
                    {PRELOADED[activePrompt].question}
                  </div>

                  {/* Answer Text */}
                  <div className="text-xs text-muted-foreground leading-relaxed bg-muted/20 border border-border/40 rounded-xl p-3.5">
                    {PRELOADED[activePrompt].answer}
                  </div>

                  {/* Audio Controls & Status */}
                  <div className="flex items-center justify-between border border-border/40 rounded-xl p-2.5 bg-muted/10 mt-auto">
                    <button
                      type="button"
                      onClick={() => playVoice(activePrompt, PRELOADED[activePrompt].soundPath)}
                      className="flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer"
                    >
                      {audioLoading ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Loading...</span>
                        </>
                      ) : playingId === activePrompt ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5" />
                          <span>Stop Voice</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Listen Answer</span>
                        </>
                      )}
                    </button>

                    {/* Playing Voice status / visualizer indicator */}
                    {playingId === activePrompt && !audioLoading && (
                      <div className="flex items-center gap-0.5 pr-2 select-none h-3">
                        <span className="w-0.5 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms", animationDuration: "0.6s" }} />
                        <span className="w-0.5 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms", animationDuration: "0.6s" }} />
                        <span className="w-0.5 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms", animationDuration: "0.6s" }} />
                        <span className="w-0.5 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: "450ms", animationDuration: "0.6s" }} />
                      </div>
                    )}
                  </div>

                  {/* Back Navigation */}
                  <button
                    type="button"
                    onClick={() => {
                      stopAudio()
                      setActivePrompt(null)
                    }}
                    className="mt-1 self-start text-[11px] text-muted-foreground hover:text-foreground font-medium transition-colors cursor-pointer flex items-center gap-1.5 py-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Ask another question</span>
                  </button>
                </div>
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
