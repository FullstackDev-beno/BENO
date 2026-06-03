// components/ui/animated-gradient-bg.tsx

"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

export function AnimatedGradientBg() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating glow animations
      gsap.to(".glow-1", {
        x: 60,
        y: 40,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      gsap.to(".glow-2", {
        x: -50,
        y: 30,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      gsap.to(".glow-3", {
        x: 40,
        y: -50,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Grid subtle pulse
      gsap.to(".bg-grid", {
        opacity: 0.06,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }, bgRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={bgRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Glow 1 */}
      <div className="glow-1 absolute top-[-10%] left-[-5%] h-[420px] w-[420px] rounded-full bg-[#3b67ff]/20 blur-[120px]" />

      {/* Glow 2 */}
      <div className="glow-2 absolute top-[10%] right-[-10%] h-[380px] w-[380px] rounded-full bg-[#6d5dfc]/20 blur-[130px]" />

      {/* Glow 3 */}
      <div className="glow-3 absolute bottom-[-20%] left-[20%] h-[420px] w-[420px] rounded-full bg-[#2563eb]/10 blur-[140px]" />

      {/* Grid Overlay */}
      <div className="bg-grid absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Extra vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050816_100%)]" />
    </div>
  )
}