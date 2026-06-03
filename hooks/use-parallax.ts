"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

/**
 * Attaches a scrubbed parallax scroll effect to the returned ref.
 *
 * @param ySpeed  Vertical travel in percentage points (default 20).
 *                Positive = element drifts DOWN on scroll.
 *                Negative = element drifts UP (floating element feel).
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  ySpeed = 20
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -Math.abs(ySpeed) / 2 },
        {
          yPercent: Math.abs(ySpeed) / 2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [ySpeed])

  return ref
}
