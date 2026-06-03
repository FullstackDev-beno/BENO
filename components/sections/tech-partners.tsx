"use client"

import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const partners = [
  {
    name: "Microsoft Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "Amazon Web Services",
    // AWS wordmark SVG via devicon
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Google Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Bitrix24",
    // No devicon — render as styled text logo
    icon: null,
  },
]

export function TechPartners() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const cardsRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 88%" } }
      )

      const cards = cardsRef.current?.querySelectorAll(".partner-card")
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 30, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out", stagger: 0.1,
            scrollTrigger: { trigger: cardsRef.current, start: "top 85%" } }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-br
  from-[#3b67ff]
  via-[#0f1b35]
  to-[#081120]" 
     
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h3M12 9h3M9 3v3M9 12v3" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="9" cy="9" r="2.2" fill="#60a5fa"/>
            </svg>
            <span className="text-[#60a5fa] text-[13px] font-semibold tracking-widest uppercase">
              Tech Alliances
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-extrabold text-white leading-[1.1] tracking-[-1px] mb-5">
            OUR TECH PARTNERS & CERTIFICATIONS
          </h2>
          <p className="text-[#8fa3c4] text-[15px] sm:text-[16px] leading-[1.8] max-w-[560px] mx-auto">
            Certified expertise across the platforms that power modern enterprises — from
            hyperscale cloud to business automation.
          </p>
        </div>

        {/* Partner Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="partner-card group bg-white rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center gap-5 hover:scale-[1.03] transition-transform duration-300 cursor-default"
              style={{ minHeight: 180 }}
            >
              {p.icon ? (
                <img
                  src={p.icon}
                  alt={p.name}
                  width={100}
                  height={60}
                  className="w-[90px] sm:w-[110px] h-[60px] object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0" }}
                />
              ) : (
                /* Bitrix24 text logo */
                <span className="text-[22px] font-extrabold tracking-tight" style={{ color: "#00adf2" }}>
                  Bitrix<span style={{ color: "#00adf2" }}>24</span>
                  <sup className="text-[12px] ml-0.5" style={{ color: "#00adf2" }}>©</sup>
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Partner names below cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-5">
          {partners.map((p) => (
            <p key={p.name} className="text-white text-[14px] sm:text-[15px] font-semibold text-center">
              {p.name}
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}