"use client"

import { useEffect, useRef } from "react"
import { FileText, BadgeCheck, UserRoundCheck, Star } from "lucide-react"
import { gsap } from "@/lib/gsap"

// Pre-defined headline lines for clean stagger reveal
const HEADLINE_LINES = [
  "Innovating Tomorrow,",
  "Empowering Today— 15 Years of",
  "Depth.",
  "Now AI-Native.",
]

export function HeroSection() {
  const heroRef     = useRef<HTMLDivElement>(null)
  const videoRef    = useRef<HTMLVideoElement>(null)
  const overlayRef  = useRef<HTMLDivElement>(null)
  // Refs for each headline line's inner (animating) span
  const lineRefs    = useRef<(HTMLSpanElement | null)[]>([])
  const paraRef     = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const badgesRef   = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)

  // ── CINEMATIC LOAD SEQUENCE ──────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines  = lineRefs.current.filter(Boolean)
      const stats  = statsRef.current ? Array.from(statsRef.current.children) : []
      const badges = badgesRef.current ? Array.from(badgesRef.current.children) : []

      // Start everything hidden
      gsap.set([lines, paraRef.current, ctaRef.current, badges, stats], {
        opacity: 0,
      })
      gsap.set(lines, { yPercent: 110 })
      gsap.set(paraRef.current, { y: 28 })
      gsap.set(ctaRef.current, { scale: 0.7, y: 16 })
      gsap.set(badges, { x: -24 })
      gsap.set(stats, {
        y: 70,
        scale: 0.82,
        rotateX: 14,
        transformPerspective: 1000,
        transformOrigin: "center top",
      })

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } })

      // 1. Video scales in from slight zoom
      tl.fromTo(
        videoRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 2.4, ease: "power2.out" },
        0
      )

      // 2. Overlay fades in subtly (already visible via CSS, just ensuring)
      tl.to(overlayRef.current, { opacity: 1, duration: 0.6 }, 0)

      // 3. Headline lines stagger up through clip container
      tl.to(
        lines,
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.09,
          ease: "expo.out",
        },
        0.45
      )

      // 4. Paragraph slides up
      tl.to(
        paraRef.current,
        { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
        0.88
      )

      // 5. CTA button elastic pop
      tl.to(
        ctaRef.current,
        { scale: 1, y: 0, opacity: 1, duration: 0.75, ease: "elastic.out(1, 0.5)" },
        1.05
      )

      // 6. Badge items stagger from left
      tl.to(
        badges,
        { x: 0, opacity: 1, duration: 0.55, stagger: 0.1, ease: "back.out(2)" },
        1.18
      )

      // 7. Stat cards pop from depth with stagger
      tl.to(
        stats,
        {
          y: 0,
          scale: 1,
          rotateX: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(2)",
          clearProps: "rotateX,transformPerspective,transformOrigin",
        },
        1.05
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // ── MOUSE PARALLAX ────────────────────────────────────────────────────────────
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const onMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth  - 0.5) * 2
      const yPct = (e.clientY / window.innerHeight - 0.5) * 2

      // Video drifts opposite to cursor (depth illusion)
      gsap.to(videoRef.current, {
        x: xPct * -18,
        y: yPct * -12,
        duration: 1.4,
        ease: "power1.out",
        overwrite: "auto",
      })
    }

    const onLeave = () => {
      gsap.to(videoRef.current, {
        x: 0,
        y: 0,
        duration: 1.8,
        ease: "power2.out",
        overwrite: "auto",
      })
    }

    hero.addEventListener("mousemove", onMove)
    hero.addEventListener("mouseleave", onLeave)
    return () => {
      hero.removeEventListener("mousemove", onMove)
      hero.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#071020] min-h-screen flex flex-col"
    >
      {/* ─── BACKGROUND VIDEO ─── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
        src="/hero.mp4"
      />

      {/* Dark overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-[#071020]/65 z-[1]" />

      <div className="relative z-10 flex-1 flex flex-col w-full mx-auto px-6 lg:px-10">

        {/* Spacer for fixed header */}
        <div className="h-[72px] shrink-0" />

        {/* GRID — left content | right stats */}
        <div className="flex-1 grid lg:grid-cols-[1fr_260px] xl:grid-cols-[1.2fr_280px] gap-10 xl:gap-14 py-14 lg:py-0">

          {/* ─── LEFT ─── */}
          <div className="flex flex-col justify-center">
            {/* Headline: each line wrapped in overflow-hidden clip container */}
            <h1 className="text-white font-extrabold leading-[1.08] tracking-[-2px] text-[38px] sm:text-[52px] md:text-[47px] lg:text-[52px] xl:text-[62px]">
              {HEADLINE_LINES.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-[0.06em]">
                  <span
                    ref={(el) => { lineRefs.current[i] = el }}
                    className="block will-change-transform"
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              ref={paraRef}
              className="mt-6 text-[#c8d4e3] text-[15px] sm:text-[17px] leading-[1.85] max-w-[560px] will-change-transform"
            >
              Transforming businesses with cutting-edge technology and tailored solutions
              for the modern enterprise. We bridge the gap between legacy stability and
              future-ready intelligence.
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="mt-8 will-change-transform">
              <button className="h-[50px] px-8 rounded-xl bg-[#3b67ff] text-white text-[15px] font-semibold hover:bg-[#2d55e0] transition-colors active:scale-[0.98]">
                Get Started Now
              </button>
            </div>

            {/* Review badges */}
            <div ref={badgesRef} className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 will-change-transform">
                <div className="w-7 h-7 rounded-md bg-[#c89b2b] flex items-center justify-center shrink-0">
                  <Star className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-white text-[12px] font-semibold leading-tight">Good firms</p>
                  <div className="flex gap-[2px] mt-[2px]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-[10px] h-[10px] text-[#f59e0b] fill-[#f59e0b]" />)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 will-change-transform">
                <div className="w-7 h-7 rounded-full bg-[#ef4444] flex items-center justify-center shrink-0">
                  <span className="text-white text-[12px] font-extrabold leading-none">C</span>
                </div>
                <div>
                  <p className="text-white text-[12px] font-semibold leading-tight">Clutch</p>
                  <div className="flex gap-[2px] mt-[2px]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-[10px] h-[10px] text-[#f59e0b] fill-[#f59e0b]" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT — compact stat cards ─── */}
          <div className="flex flex-col justify-end pb-6 lg:pb-10">
            <div ref={statsRef} className="flex flex-col gap-2.5">

              {/* Projects Delivered */}
              <div className="rounded-xl border border-white/10 bg-[#0e1a30]/80 backdrop-blur-xl px-3.5 py-2.5 will-change-transform">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[#94a3b8] text-[11px] font-medium tracking-wide">Projects Delivered</p>
                    <h3 className="text-white text-[24px] font-bold leading-tight mt-0.5">500+</h3>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#0d2f33] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-[#10b981]" />
                  </div>
                </div>
              </div>

              {/* Client Retention Rate */}
              <div className="rounded-xl border border-white/10 bg-[#0e1a30]/80 backdrop-blur-xl px-3.5 py-2.5 will-change-transform">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[#94a3b8] text-[11px] font-medium tracking-wide">Client Retention Rate</p>
                    <h3 className="text-white text-[24px] font-bold leading-tight mt-0.5">96%</h3>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#2d1a0a] flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-4 h-4 text-[#f97316]" />
                  </div>
                </div>
              </div>

              {/* Years of Experience */}
              <div className="rounded-xl border border-white/10 bg-[#0e1a30]/80 backdrop-blur-xl px-3.5 py-2.5 will-change-transform">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[#94a3b8] text-[11px] font-medium tracking-wide">Years of Experience</p>
                    <h3 className="text-white text-[24px] font-bold leading-tight mt-0.5">10+</h3>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#0f2540] flex items-center justify-center shrink-0">
                    <UserRoundCheck className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="h-[88px] shrink-0" />
      </div>

      {/* BLUE STRIP */}
      <div className="relative z-10 h-[88px] bg-gradient-to-r from-[#3b67ff] via-[#4d7bff] to-[#3b67ff] shrink-0" />
    </section>
  )
}