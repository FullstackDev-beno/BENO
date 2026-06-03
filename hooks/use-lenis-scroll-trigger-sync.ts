"use client"

import { getLenisInstance } from "@/lib/lenis-instance"

interface ScrollToOptions {
  offset?: number
  duration?: number
  easing?: (t: number) => number
  immediate?: boolean
}

/**
 * Returns a `scrollTo` helper that delegates to the Lenis instance
 * created by SmoothScrollProvider.  All ScrollTrigger syncing is
 * already handled at the provider level — this hook is purely for
 * triggering programmatic smooth scrolls (e.g. nav anchor links).
 *
 * Usage:
 *   const { scrollTo } = useLenisScrollTriggerSync()
 *   <button onClick={() => scrollTo('#services')}>Jump</button>
 */
export function useLenisScrollTriggerSync() {
  const scrollTo = (
    target: string | number | HTMLElement,
    options?: ScrollToOptions
  ) => {
    const lenis = getLenisInstance()
    if (lenis) {
      lenis.scrollTo(target as any, options)
    } else {
      // Fallback to native scroll if Lenis is not mounted yet
      if (typeof target === "string") {
        const el = document.querySelector(target)
        el?.scrollIntoView({ behavior: "smooth" })
      } else if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" })
      }
    }
  }

  return { scrollTo }
}
