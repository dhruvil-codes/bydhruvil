"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface BorderGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode

  width?: string
  height?: string
  aspectRatio?: string

  animationDuration?: number
  rotationDirection?: "normal" | "reverse"
  paused?: boolean
  hoverOnly?: boolean

  gradientType?: "conic" | "radial" | "linear"
  gradientColors?: string[]
  colorPreset?:
    | "nature"
    | "ocean"
    | "sunset"
    | "aurora"
    | "neon"
    | "fire"
    | "ice"
    | "royal"
    | "cyberpunk"
    | "pastel"
    | "custom"

  glowIntensity?: number
  borderWidth?: string
  blurAmount?: string
  inset?: string
  glowSpread?: string
  innerGlow?: boolean

  backgroundColor?: string
  innerClassName?: string
}

const colorPresets: Record<string, string[]> = {
  nature: [
    "#669900",
    "#88bb22",
    "#99cc33",
    "#aaddaa",
    "#ccee66",
    "#006699",
    "#228888",
    "#3399cc",
    "#55aacc",
    "#669900",
  ],
  ocean: [
    "#006699",
    "#1177aa",
    "#2288bb",
    "#3399cc",
    "#44aadd",
    "#55bbee",
    "#66ccff",
    "#44bbee",
    "#2299cc",
    "#006699",
  ],
  sunset: [
    "#ff6600",
    "#ff7711",
    "#ff8822",
    "#ff9900",
    "#ffaa22",
    "#ffbb44",
    "#ffcc00",
    "#ff9933",
    "#ff7722",
    "#ff6600",
  ],
  aurora: [
    "#00ff87",
    "#22ffaa",
    "#44ffcc",
    "#60efff",
    "#88ddff",
    "#bb99ff",
    "#dd77ee",
    "#ff68f0",
    "#ff55cc",
    "#00ff87",
  ],
  neon: [
    "#ff00ff",
    "#00ffff",
    "#ff00aa",
    "#00ffaa",
    "#ff0066",
    "#00ffcc",
    "#ff00ff",
  ],
  fire: [
    "#ff0000",
    "#ff3300",
    "#ff6600",
    "#ff9900",
    "#ffcc00",
    "#ff3300",
    "#ff0000",
  ],
  ice: [
    "#e0f7ff",
    "#b3ecff",
    "#80e1ff",
    "#4dd6ff",
    "#1acbff",
    "#00bfff",
    "#0099cc",
  ],
  royal: [
    "#2b1055",
    "#4b0082",
    "#6a0dad",
    "#8a2be2",
    "#9932cc",
    "#ba55d3",
    "#2b1055",
  ],
  cyberpunk: ["#ff0080", "#ff00ff", "#7928ca", "#2afadf", "#00ffcc", "#ff0080"],
  pastel: ["#ffd1dc", "#ffe4b5", "#e0bbff", "#c1f0f6", "#fef9c3", "#ffd1dc"],
  custom: [
    "#669900",
    "#99cc33",
    "#ccee66",
    "#006699",
    "#3399cc",
    "#990066",
    "#cc3399",
    "#ff6600",
    "#ff9900",
    "#ffcc00",
  ],
}

export const BorderGlow = React.forwardRef<HTMLDivElement, BorderGlowProps>(
  (
    {
      children,
      className,
      innerClassName,

      width = "100%",
      height,
      aspectRatio,

      animationDuration = 5,
      rotationDirection = "normal",
      paused = false,
      hoverOnly = false,

      gradientType = "conic",
      gradientColors,
      colorPreset = "custom",

      glowIntensity = 1,
      borderWidth = "1.5px",
      blurAmount = "1.5rem",
      inset = "-1em",
      glowSpread = "1",
      innerGlow = false,

      backgroundColor,

      style,
      ...props
    },
    ref
  ) => {
    const colors =
      gradientColors || colorPresets[colorPreset] || colorPresets.custom

    const gradientTypeMap: Record<string, string> = {
      conic: "conic-gradient(from 0deg",
      radial: "radial-gradient(circle",
      linear: "linear-gradient(to right",
    }
    const gradientStart = gradientTypeMap[gradientType] || gradientTypeMap.conic
    const gradientStr = `${gradientStart}, ${colors.join(", ")})`

    return (
      <div
        ref={ref}
        className={cn(
          "group relative isolate rounded-md",
          className
        )}
        style={
          {
            width,
            height,
            aspectRatio,
            "--glow-animation-duration": `${animationDuration}s`,
            "--glow-direction": rotationDirection === "reverse" ? "reverse" : "normal",
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {/* 1. Outer Blurry Glow (positioned behind the element, bleeds outwards) */}
        {!innerGlow && (
          <div
            className={cn(
              "absolute -z-20 pointer-events-none transition-opacity duration-300 rounded-[inherit]",
              paused && "[animation-play-state:paused]",
              hoverOnly && "opacity-0 group-hover:opacity-100"
            )}
            style={{
              inset,
              filter: `blur(${blurAmount})`,
              opacity: glowIntensity,
            }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] aspect-square rounded-[50%] animate-glow-rotate"
                style={{
                  background: gradientStr,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            </div>
          </div>
        )}

        {/* 2. Content Container (clips inner content, has background color if specified) */}
        <div
          className={cn(
            "relative z-10 h-full w-full overflow-hidden rounded-[inherit] p-4",
            innerClassName
          )}
          style={{
            background: backgroundColor,
          }}
        >
          {children}
        </div>

        {/* 3. Inner Crisp Gradient Border (rendered on top of content background, but clicks pass through) */}
        <div
          className={cn(
            "absolute inset-0 z-20 pointer-events-none rounded-[inherit] glow-border-masked",
            paused && "[animation-play-state:paused]",
            hoverOnly && "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          )}
          style={{
            "--glow-border-width": borderWidth,
          } as React.CSSProperties}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] aspect-square rounded-[50%] animate-glow-rotate"
            style={{
              background: gradientStr,
              animationPlayState: paused ? "paused" : "running",
            }}
          />
        </div>
      </div>
    )
  }
)

BorderGlow.displayName = "BorderGlow"

export default BorderGlow
