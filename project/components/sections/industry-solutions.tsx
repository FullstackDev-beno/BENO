"use client"

import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const industries = [
  { name: "BFSI",        icon: "🏛", svg: "bank" },
  { name: "Healthcare",  icon: "🏥", svg: "health" },
  { name: "Manufacturing", icon: "🏭", svg: "factory" },
  { name: "E-Commerce",  icon: "🛒", svg: "cart" },
  { name: "Logistics",   icon: "🚚", svg: "truck" },
  { name: "IT/SaaS",     icon: "☁", svg: "cloud" },
  { name: "Education",   icon: "🎓", svg: "edu" },
  { name: "Insurance",   icon: "📄", svg: "doc" },
  { name: "Real Estate", icon: "🏢", svg: "building" },
  { name: "Government",  icon: "🏛", svg: "govt" },
  { name: "Travel",      icon: "✈", svg: "plane" },
  { name: "Startups",    icon: "🚀", svg: "rocket" },
]

// SVG icon paths matching screenshot's line-icon style
const icons: Record<string, string> = {
  bank:     "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11",
  health:   "M12 3h-2a2 2 0 00-2 2v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2V5a2 2 0 00-2-2zm-1 9v-2m0 0V8m0 2H9m2 0h2",
  factory:  "M2 20h20M5 20V8l5-5v17M10 3h10v17M14 8h2M14 12h2M14 16h2",
  cart:     "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0",
  truck:    "M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11v14H5zm7-14h5l3 4v7h-8V3zM7 19a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z",
  cloud:    "M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z",
  edu:      "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  doc:      "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M12 18v-6M9 15h6",
  building: "M3 21h18M9 21V7l6-4v18M3 21V11l6-4",
  govt:     "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11",
  plane:    "M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 5.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
  rocket:   "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z",
}

export function IndustrySolutions() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 88%" } }
      )
      const cards = gridRef.current?.querySelectorAll(".ind-card")
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 24, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out", stagger: 0.055,
            scrollTrigger: { trigger: gridRef.current, start: "top 84%" } }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-14 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={headingRef} className="mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h3M12 9h3M9 3v3M9 12v3" stroke="#3b67ff" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="9" cy="9" r="2.2" fill="#3b67ff"/>
            </svg>
            <span className="text-[#3b67ff] text-[13px] font-semibold tracking-widest uppercase">Industries We Serve</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#0d1e3c] leading-[1.1] tracking-[-1px] mb-4">
            INDUSTRY-FOCUSED TECHNOLOGY SOLUTIONS
          </h2>
          <p className="text-[#4b5a72] text-[15px] sm:text-[16px] leading-[1.8] max-w-[680px]">
            We help startups, SMBs, and enterprises modernize operations, improve efficiency,
            strengthen security, and accelerate digital transformation across diverse industries.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="ind-card group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-[#e8eef8] bg-white hover:border-[#3b67ff]/30 hover:shadow-lg hover:shadow-[#3b67ff]/08 transition-all duration-250 cursor-default"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b67ff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300"
              >
                <path d={icons[ind.svg]} />
              </svg>
              <span className="text-[#0d1e3c] text-[12px] sm:text-[13px] font-semibold text-center leading-tight">
                {ind.name}
              </span>
            </div>
          ))}
        </div>

        {/* Blue bottom strip */}
        {/* <div className="mt-16 h-[6px] w-full rounded-full bg-gradient-to-r from-[#3b67ff] via-[#4d7bff] to-[#3b67ff]" /> */}
      </div>
    </section>
  )
}