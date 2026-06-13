"use client"

import { BorderGlow } from "@/components/border-glow"
import { useChatContext } from "@/lib/chat-context"

export function GlowOverlay() {
  const { isChatOpen } = useChatContext()

  if (!isChatOpen) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] w-screen h-screen">
      <BorderGlow 
        className="w-full h-full pointer-events-none border-none rounded-none"
        colorPreset="pastel"
        glowIntensity={1}
        borderWidth="28px"
        blurAmount="16px"
        inset="0px"
      >
        <div className="w-full h-full pointer-events-none" />
      </BorderGlow>
    </div>
  )
}
