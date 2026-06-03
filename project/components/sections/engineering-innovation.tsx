"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const capabilities = [
  { label: "Software Engineering", icon: "M3 5h18M3 10h18M3 15h10" },
  { label: "Cloud Modernization",  icon: "M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" },
  { label: "AI Automation",        icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 14v-4m0-4h.01" },
  { label: "Cybersecurity",        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
]

export function EngineeringInnovation() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const leftRef     = useRef<HTMLDivElement>(null)
  const rightRef    = useRef<HTMLDivElement>(null)
  const cardsRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -32 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      )
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 32 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      )
      const cards = cardsRef.current?.querySelectorAll(".cap-card")
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 20, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out", stagger: 0.09,
            scrollTrigger: { trigger: cardsRef.current, start: "top 85%" } }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-14 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* Top label row */}
        <div className="flex items-center justify-between mb-10 lg:mb-2">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h3M12 9h3M9 3v3M9 12v3" stroke="#3b67ff" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="9" cy="9" r="2.2" fill="#3b67ff"/>
            </svg>
            <span className="text-[#3b67ff] text-[13px] font-semibold tracking-widest uppercase">About Beno Support</span>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-[#3b67ff] font-semibold text-[14px] hover:gap-3 transition-all duration-200">
            See More <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Two-col layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div ref={leftRef}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#0d1e3c] leading-[1.08] tracking-[-1.5px] mb-2">
              ENGINEERING INNOVATION
            </h2>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#3b67ff] leading-[1.08] tracking-[-1.5px] mb-6">
              SINCE 2008
            </h2>

            <p className="text-[#0d1e3c] text-[15px] sm:text-[16px] font-semibold leading-[1.8] mb-4">
              Beno Support has evolved from an IT services provider into an engineering-led AI and technology consulting
              company delivering scalable digital transformation solutions for startups, SMBs, and enterprises worldwide.
            </p>
            <p className="text-[#4b5a72] text-[15px] sm:text-[16px] leading-[1.8] mb-10">
              Our teams specialize in software engineering, cloud modernization, AI automation, cybersecurity, digital
              products, and enterprise technology strategy.
            </p>

            {/* Capability cards 2×2 */}
            <div ref={cardsRef} className="grid grid-cols-2 gap-3">
              {capabilities.map((c) => (
                <div
                  key={c.label}
                  className="cap-card flex items-center gap-3 p-4 rounded-xl border border-[#e8eef8] bg-[#f7f9fc] hover:border-[#3b67ff]/30 hover:shadow-sm transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#3b67ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                    <path d={c.icon} />
                  </svg>
                  <span className="text-[#0d1e3c] text-[13px] font-semibold leading-tight">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — building photo */}
          <div ref={rightRef} className="relative">
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/4.5" }}>
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85"
                alt="Beno Support office building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}