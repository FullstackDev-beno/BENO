"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { _setLenisInstance } from "@/lib/lenis-instance"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Lenis v1: drives native window.scrollY via RAF — no scrollerProxy needed.
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    })

    lenisRef.current = lenis
    _setLenisInstance(lenis)

    // After each Lenis scroll update, tell ScrollTrigger to re-read scroll pos.
    lenis.on("scroll", ScrollTrigger.update)

    // Drive Lenis RAF from the GSAP ticker — single source of timing truth.
    const rafFn = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(rafFn)

    // Prevent GSAP from applying lag compensation that would desync Lenis.
    gsap.ticker.lagSmoothing(0)

    // Refresh once layout is stable.
    ScrollTrigger.refresh()

    return () => {
      gsap.ticker.remove(rafFn)
      lenis.off("scroll", ScrollTrigger.update)
      lenis.destroy()
      lenisRef.current = null
      _setLenisInstance(null)
    }
  }, [])

  return <>{children}</>
}
