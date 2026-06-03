"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const paraRef     = useRef<HTMLParagraphElement>(null)
  const buttonsRef  = useRef<HTMLDivElement>(null)
  const glowRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Ambient glow drift (infinite) ────────────────────────────────────────
      gsap.to(glowRef.current, {
        x: 40,
        y: -30,
        scale: 1.15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // ── Entrance timeline ─────────────────────────────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Heading words reveal from below
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 50, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.95, ease: "expo.out" },
        0
      )

      // Paragraph slides up
      tl.fromTo(
        paraRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.25
      )

      // Buttons elastic pop with stagger
      const btns = buttonsRef.current?.children
      if (btns) {
        tl.fromTo(
          Array.from(btns),
          { opacity: 0, scale: 0.7, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "elastic.out(1, 0.5)",
          },
          0.45
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br
        from-[#3b67ff]
        via-[#0f1b35]
        to-[#081120]
        overflow-hidden"
    >
      {/* Ambient glow orb */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] rounded-full
          bg-[#3b67ff]/20 blur-[120px]
          pointer-events-none will-change-transform"
      />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            ref={headingRef}
            className="text-2xl sm:text-3xl text-white lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-balance will-change-transform"
          >
            Ready to Accelerate Digital Innovation?
          </h2>
          <p
            ref={paraRef}
            className="text-sm sm:text-base lg:text-lg text-white/70 mb-6 sm:mb-8 px-4 text-pretty will-change-transform"
          >
            Join the ranks of global leaders who trust Beno Support for engineering excellence and strategic growth.
          </p>
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-[#0a1628] hover:bg-white/90 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg w-full sm:w-auto will-change-transform"
            >
              Request a Proposal
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg w-full sm:w-auto will-change-transform"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}