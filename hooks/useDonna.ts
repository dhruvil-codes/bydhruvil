"use client"
import { useState, useRef } from "react"
import { toast } from "sonner"

type Message = { id: string; role: "user" | "assistant"; content: string; isPreloaded?: boolean }

export function useDonna() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [playingId, setPlayingId] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // TYPE A: preloaded — instant answer + voice
  async function sendPreloaded(question: string, answer: string) {
    const userMsgId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const assistantMsgId = `assistant-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    setMessages(prev => [
      ...prev,
      { id: userMsgId, role: "user", content: question, isPreloaded: true },
      { id: assistantMsgId, role: "assistant", content: answer, isPreloaded: true },
    ])
  }

  // TYPE B: custom — LLM stream, no voice
  async function sendCustom(userText: string) {
    const userMsgId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const assistantMsgId = `assistant-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const updated = [
      ...messages,
      { id: userMsgId, role: "user" as const, content: userText }
    ]
    setMessages(updated)
    setLoading(true)
    let fullResponse = ""

    try {
      const res = await fetch("/api/donna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      })

      const reader = res.body!.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const lines = decoder.decode(value).split("\n")
        for (const line of lines) {
          if (line.startsWith("data: ") && !line.includes("[DONE]")) {
            try {
              const { text } = JSON.parse(line.slice(6))
              fullResponse += text
              setMessages(prev => {
                const copy = [...prev]
                const last = copy[copy.length - 1]
                if (last?.role === "assistant" && last.id === assistantMsgId) {
                  copy[copy.length - 1] = { id: assistantMsgId, role: "assistant", content: fullResponse }
                } else {
                  copy.push({ id: assistantMsgId, role: "assistant", content: fullResponse })
                }
                return copy
              })
            } catch {}
          }
        }
      }
    } finally {
      setLoading(false)
    }
  }

  async function toggleAudio(msgId: string, text: string) {
    if (playingId === msgId) {
      if (audioRef.current) {
        audioRef.current.pause()
      }
      setPlayingId(null)
      return
    }

    if (audioRef.current) {
      audioRef.current.pause()
    }

    setPlayingId(msgId)

    try {
      const ttsRes = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })
      if (!ttsRes.ok) {
        if (ttsRes.status === 402) {
          toast.error("Voice synthesis limit reached (Payment Required)")
        } else {
          toast.error(`Voice synthesis failed (Status ${ttsRes.status})`)
        }
        throw new Error(`TTS API failed with status: ${ttsRes.status}`)
      }
      const blob = await ttsRes.blob()
      const url = URL.createObjectURL(blob)
      
      const audio = new Audio(url)
      audioRef.current = audio
      
      audio.onended = () => {
        setPlayingId(current => current === msgId ? null : current)
      }

      await audio.play().catch((playErr) => {
        console.error("Audio play failed:", playErr)
        toast.error("Could not play audio playback. Please check your browser audio permissions.")
        setPlayingId(current => current === msgId ? null : current)
      })
    } catch (e: any) {
      console.error("TTS error", e)
      if (e && e.message && !e.message.includes("TTS API failed with status:")) {
        toast.error("Could not play voice response. Please try again.")
      }
      setPlayingId(current => current === msgId ? null : current)
    }
  }

  return { messages, loading, playingId, sendPreloaded, sendCustom, toggleAudio }
}
