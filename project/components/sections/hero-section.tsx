"use client"

import { useEffect, useRef } from "react"
import { FileText, BadgeCheck, UserRoundCheck, Star } from "lucide-react"
import { gsap } from "@/lib/gsap"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { opacity: 0, y: 40 })
      gsap.to(contentRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

      gsap.set(statsRef.current?.children || [], { opacity: 0, x: 40 })
      gsap.to(statsRef.current?.children || [], {
        opacity: 1, x: 0, duration: 0.7, stagger: 0.15, delay: 0.4, ease: "power3.out",
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#071020] min-h-screen flex flex-col"
    >
      {/* ─── BACKGROUND VIDEO ─── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero.mp4"
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-[#071020]/65 z-[1]" />

      <div className="relative z-10 flex-1 flex flex-col w-full mx-auto px-6 lg:px-10">

        {/* Spacer for fixed header */}
        <div className="h-[72px] shrink-0" />

        {/* GRID — left content | right stats */}
        <div className="flex-1 grid lg:grid-cols-[1fr_260px] xl:grid-cols-[1.2fr_280px] gap-10 xl:gap-14 py-14 lg:py-0">

          {/* ─── LEFT ─── */}
          <div ref={contentRef} className="flex flex-col justify-center">
            <h1 className="text-white font-extrabold leading-[1.08] tracking-[-2px] text-[38px] sm:text-[52px] md:text-[47px] lg:text-[52px] xl:text-[62px]">
              Innovating Tomorrow,
Empowering Today— 15 Years of
Depth.
Now AI-Native.
            </h1>

            <p className="mt-6 text-[#c8d4e3] text-[15px] sm:text-[17px] leading-[1.85] max-w-[560px]">
              Transforming businesses with cutting-edge technology
and tailored solutions for the
modern enterprise.
We bridge the gap between legacy stability and
future-ready intelligence.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <button className="h-[50px] px-8 rounded-xl bg-[#3b67ff] text-white text-[15px] font-semibold hover:bg-[#2d55e0] transition-all active:scale-[0.98]">
                Get Started Now
              </button>
            </div>

            {/* Review badges */}
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
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

              <div className="flex items-center gap-2">
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
              <div className="rounded-xl border border-white/10 bg-[#0e1a30]/80 backdrop-blur-xl px-3.5 py-2.5">
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
              <div className="rounded-xl border border-white/10 bg-[#0e1a30]/80 backdrop-blur-xl px-3.5 py-2.5">
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
              <div className="rounded-xl border border-white/10 bg-[#0e1a30]/80 backdrop-blur-xl px-3.5 py-2.5">
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