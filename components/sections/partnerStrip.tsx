"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

const LOGOS = [
  "/companies/p8.svg",
  "/companies/p2.svg",
  "/companies/p3.svg",
  "/companies/p4.svg",
  "/companies/p5.svg",
  "/companies/p6.svg",
]

// Triple logos for guaranteed no-gap loop
const ITEMS = [...LOGOS, ...LOGOS, ...LOGOS]

export function PartnerStrip() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Wait one frame so layout is complete and offsetWidth is accurate
    const raf = requestAnimationFrame(() => {
      const totalW = track.scrollWidth
      const oneSetW = totalW / 3   // width of one set of 6 logos

      // Start at 0, animate to -oneSetW, then instantly reset — perfect loop
      const tween = gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -oneSetW,
          duration: 24,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => {
              const val = parseFloat(x)
              // Wrap: when we reach -oneSetW, snap back to 0
              return (((val % oneSetW) - oneSetW) % oneSetW) + "px"
            },
          },
        }
      )

      // Scale pulse per logo — each logo breathes independently
      const logos = track.querySelectorAll<HTMLElement>(".partner-logo")
      logos.forEach((logo, i) => {
        gsap.to(logo, {
          scale: 1.1,
          duration: 1.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: (i % LOGOS.length) * 0.3,
        })
      })

      return () => tween.kill()
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className="relative z-10 h-[88px] shrink-0 overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(90deg, #3b67ff 0%, #4d7bff 50%, #3b67ff 100%)",
      }}
    >
      {/* Vignette edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, #3b67ff, transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, #3b67ff, transparent)" }} />

      {/* Track */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{ width: "max-content", gap: "72px" }}
        >
          {ITEMS.map((src, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center"
              style={{ width: 120, height: 48 }}   // ← fixed slot size, same for all
            >
              <img
                src={src}
                alt={`Partner ${(i % LOGOS.length) + 1}`}
                className="partner-logo max-h-full max-w-full object-contain brightness-0 invert opacity-85 select-none"
                draggable={false}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}