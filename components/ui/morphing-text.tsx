"use client"

import { useCallback, useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

const morphTime = 1.5
const cooldownTime = 0.5

const useMorphingText = (texts: string[], trigger: number) => {
  const textIndexRef = useRef(0)
  const morphRef = useRef(0)
  const cooldownRef = useRef(0)
  const timeRef = useRef(new Date())
  const runningRef = useRef(false)
  const prevTriggerRef = useRef(-1)
  const textsRef = useRef(texts)

  useEffect(() => {
    textsRef.current = texts
  }, [texts])

  const text1Ref = useRef<HTMLSpanElement>(null)
  const text2Ref = useRef<HTMLSpanElement>(null)

  const setStyles = useCallback((fraction: number) => {
    const t = textsRef.current
    const [current1, current2] = [text1Ref.current, text2Ref.current]
    if (!current1 || !current2) return

    current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
    current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

    const invertedFraction = 1 - fraction
    current1.style.filter = `blur(${Math.min(
      8 / invertedFraction - 8,
      100
    )}px)`
    current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`

    current1.textContent = t[textIndexRef.current % t.length]
    current2.textContent = t[(textIndexRef.current + 1) % t.length]
  }, [])

  const doMorph = useCallback(() => {
    if (!runningRef.current) return

    morphRef.current -= cooldownRef.current
    cooldownRef.current = 0

    let fraction = morphRef.current / morphTime

    if (fraction > 1) {
      cooldownRef.current = cooldownTime
      fraction = 1
    }

    setStyles(fraction)

    if (fraction === 1) {
      textIndexRef.current++

      if (textIndexRef.current % textsRef.current.length === 0) {
        runningRef.current = false
      }
    }
  }, [setStyles])

  const doCooldown = useCallback(() => {
    if (!runningRef.current) return

    morphRef.current = 0
    const [current1, current2] = [text1Ref.current, text2Ref.current]
    if (current1 && current2) {
      current2.style.filter = "none"
      current2.style.opacity = "100%"
      current1.style.filter = "none"
      current1.style.opacity = "0%"
    }
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const newTime = new Date()
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000
      timeRef.current = newTime

      cooldownRef.current -= dt

      if (cooldownRef.current <= 0) doMorph()
      else doCooldown()
    }

    animate()
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [doMorph, doCooldown])

  const reset = useCallback(() => {
    runningRef.current = false
    textIndexRef.current = 0
    morphRef.current = 0
    cooldownRef.current = 0
    timeRef.current = new Date()

    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = textsRef.current[0]
      text1Ref.current.style.filter = "none"
      text1Ref.current.style.opacity = "100%"
      text2Ref.current.style.filter = "none"
      text2Ref.current.style.opacity = "0%"
    }
  }, [])

  const start = useCallback(() => {
    reset()
    runningRef.current = true
    timeRef.current = new Date()
  }, [reset])

  useEffect(() => {
    reset()
  }, [reset])

  useEffect(() => {
    if (trigger !== prevTriggerRef.current) {
      prevTriggerRef.current = trigger
      start()
    }
  }, [trigger, start])

  return { text1Ref, text2Ref }
}

interface MorphingTextProps {
  className?: string
  texts: string[]
  trigger?: number
}

const Texts: React.FC<
  Pick<MorphingTextProps, "texts" | "trigger">
> = ({ texts, trigger = 0 }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts, trigger)
  return (
    <span className="inline-grid">
      <span className="col-start-1 row-start-1" ref={text1Ref} />
      <span className="col-start-1 row-start-1" ref={text2Ref} />
    </span>
  )
}

const SvgFilters: React.FC = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
)

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
  trigger,
}) => (
  <div
    className={cn(
      "relative font-sans font-bold filter-[url(#threshold)_blur(0.6px)]",
      className
    )}
  >
    <Texts texts={texts} trigger={trigger} />
    <SvgFilters />
  </div>
)
