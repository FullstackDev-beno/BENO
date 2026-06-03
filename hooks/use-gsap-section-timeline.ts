"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"
import type { ScrollTrigger as STType } from "gsap/ScrollTrigger"

interface SectionTimelineOptions {
  /** ScrollTrigger start — default "top 80%" */
  start?: string
  /** ScrollTrigger end — default "bottom 20%" */
  end?: string
  /** Scrub value. false = snap play, number = lag, true = direct scrub */
  scrub?: boolean | number
  /** Pin the section during the timeline */
  pin?: boolean
  /** Pin spacing (adds extra scroll space). Default true */
  pinSpacing?: boolean
  /** Play once and don't reverse. Default true when scrub=false */
  once?: boolean
  /** invalidateOnRefresh for dynamic sizing */
  invalidateOnRefresh?: boolean
}

type AnimateFn = (tl: gsap.core.Timeline, el: HTMLElement) => void

/**
 * Reusable hook: creates a section-scoped GSAP Timeline driven by ScrollTrigger.
 * Automatically cleans up on unmount via gsap.context().revert().
 *
 * Usage:
 *   const ref = useGSAPSectionTimeline((tl, el) => {
 *     tl.from('.card', { opacity: 0, y: 60, stagger: 0.1 })
 *   }, [], { start: 'top 80%' })
 *   return <section ref={ref}>...</section>
 */
export function useGSAPSectionTimeline<T extends HTMLElement = HTMLDivElement>(
  animateFn: AnimateFn,
  deps: React.DependencyList = [],
  options: SectionTimelineOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: options.start ?? "top 80%",
          end: options.end,
          scrub: options.scrub ?? false,
          pin: options.pin ?? false,
          pinSpacing: options.pinSpacing ?? true,
          invalidateOnRefresh: options.invalidateOnRefresh ?? false,
          toggleActions:
            !options.scrub
              ? options.once !== false
                ? "play none none none"
                : "play reverse play reverse"
              : undefined,
        },
      })

      animateFn(tl, el)
    }, el)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
