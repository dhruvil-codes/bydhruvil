"use client"

import React from "react"

import { cn } from "@/lib/utils"

export interface ProgressiveBlurProps {
  className?: string
  height?: string
  position?: "top" | "bottom" | "both"
  blurLevels?: number[]
  children?: React.ReactNode
  direction?: "top" | "bottom" | "both"
  blurIntensity?: number
}

export function ProgressiveBlur({
  className,
  height,
  position,
  direction = "bottom",
  blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64],
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const finalPosition = position || direction
  const adjustedBlurLevels = blurLevels.map((level) => level * blurIntensity)

  // Create array with length equal to adjustedBlurLevels.length - 2 (for before/after pseudo elements)
  const divElements = Array(adjustedBlurLevels.length - 2).fill(null)

  const hasHeightClass = className?.split(" ").some((c) => c.startsWith("h-") || c.startsWith("max-h-") || c.startsWith("min-h-"))
  const finalHeight = height || (hasHeightClass ? undefined : "30%")

  return (
    <div
      className={cn(
        "gradient-blur pointer-events-none absolute inset-x-0 z-10",
        className,
        finalPosition === "top"
          ? "top-0"
          : finalPosition === "bottom"
            ? "bottom-0"
            : "inset-y-0"
      )}
      style={
        finalHeight
          ? {
              height: finalPosition === "both" ? "100%" : finalHeight,
            }
          : undefined
      }
    >
      {/* First blur layer (pseudo element) */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          backdropFilter: `blur(${adjustedBlurLevels[0]}px)`,
          WebkitBackdropFilter: `blur(${adjustedBlurLevels[0]}px)`,
          maskImage:
            finalPosition === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
              : finalPosition === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
          WebkitMaskImage:
            finalPosition === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
              : finalPosition === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
        }}
      />

      {/* Middle blur layers */}
      {divElements.map((_, index) => {
        const blurIndex = index + 1
        const startPercent = blurIndex * 12.5
        const midPercent = (blurIndex + 1) * 12.5
        const endPercent = (blurIndex + 2) * 12.5

        const maskGradient =
          finalPosition === "bottom"
            ? `linear-gradient(to bottom, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)`
            : finalPosition === "top"
              ? `linear-gradient(to top, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)`
              : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`

        return (
          <div
            key={`blur-${index}`}
            className="absolute inset-0"
            style={{
              zIndex: index + 2,
              backdropFilter: `blur(${adjustedBlurLevels[blurIndex]}px)`,
              WebkitBackdropFilter: `blur(${adjustedBlurLevels[blurIndex]}px)`,
              maskImage: maskGradient,
              WebkitMaskImage: maskGradient,
            }}
          />
        )
      })}

      {/* Last blur layer (pseudo element) */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: adjustedBlurLevels.length,
          backdropFilter: `blur(${adjustedBlurLevels[adjustedBlurLevels.length - 1]}px)`,
          WebkitBackdropFilter: `blur(${adjustedBlurLevels[adjustedBlurLevels.length - 1]}px)`,
          maskImage:
            finalPosition === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
              : finalPosition === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
          WebkitMaskImage:
            finalPosition === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
              : finalPosition === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
        }}
      />
    </div>
  )
}
