"use client"

import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const industries = [
  { name: "Fintech",     svg: "fintech" },
  { name: "IT/SaaS",    svg: "cloud" },
  { name: "Healthcare",  svg: "health" },
  { name: "EdTech",      svg: "edu" },
  { name: "Government",  svg: "govt" },
  { name: "Travel",      svg: "plane" },
  { name: "Hospitality", svg: "hospitality" },
  { name: "E-commerce",  svg: "cart" },
  { name: "Telecom",     svg: "telecom" },
  { name: "Aviation",    svg: "aviation" },
  { name: "Insurance",   svg: "doc" },
  { name: "Gaming",      svg: "gaming" },
]

// Clean outline SVG paths matching the screenshot's icon style
const icons: Record<string, JSX.Element> = {
  // Fintech — classic bank/pillars icon
  fintech: (
    <>
      <line x1="3" y1="22" x2="21" y2="22" strokeWidth="1.6" />
      <line x1="3" y1="11" x2="21" y2="11" strokeWidth="1.6" />
      <polyline points="5,11 5,22" strokeWidth="1.6" />
      <polyline points="9,11 9,22" strokeWidth="1.6" />
      <polyline points="13,11 13,22" strokeWidth="1.6" />
      <polyline points="17,11 17,22" strokeWidth="1.6" />
      <polyline points="21,11 21,22" strokeWidth="1.6" />
      <polygon points="12,2 3,11 21,11" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  // IT/SaaS — cloud
  cloud: (
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  // Healthcare — medical briefcase/kit
  health: (
    <>
      <rect x="3" y="7" width="18" height="14" rx="2" strokeWidth="1.6" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="12" y1="11" x2="12" y2="17" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="9" y1="14" x2="15" y2="14" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  // EdTech — graduation cap
  edu: (
    <>
      <polygon points="12,2 2,7 12,12 22,7" strokeWidth="1.6" strokeLinejoin="round" />
      <polyline points="6,9.5 6,16" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 16c0 2.5 2.7 4 6 4s6-1.5 6-4" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  // Government — building with columns
  govt: (
    <>
      <rect x="3" y="9" width="18" height="13" rx="1" strokeWidth="1.6" />
      <polyline points="3,9 12,3 21,9" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      <line x1="7" y1="9" x2="7" y2="22" strokeWidth="1.4" />
      <line x1="12" y1="9" x2="12" y2="22" strokeWidth="1.4" />
      <line x1="17" y1="9" x2="17" y2="22" strokeWidth="1.4" />
      <line x1="3" y1="22" x2="21" y2="22" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  // Travel — paper plane / flight
  plane: (
    <path
      d="M21 3L3 10.5l7.5 3L14 21l3-7.5L21 3z"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  // Hospitality — bed/hotel
  hospitality: (
    <>
      <path d="M2 9V19" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M22 19V11a2 2 0 00-2-2H10a2 2 0 00-2 2v8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="14" width="20" height="5" rx="1" strokeWidth="1.6" />
      <circle cx="6" cy="12" r="1.5" strokeWidth="1.4" />
    </>
  ),
  // E-commerce — shopping cart
  cart: (
    <>
      <circle cx="9" cy="21" r="1" strokeWidth="1.6" />
      <circle cx="20" cy="21" r="1" strokeWidth="1.6" />
      <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  // Telecom — signal/wifi waves
  telecom: (
    <>
      <circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none" />
      <path d="M8.5 15.5a5 5 0 017 0" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 12a9.5 9.5 0 0114 0" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M1.5 8.5a14 14 0 0121 0" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  // Aviation — airplane silhouette (side view)
  aviation: (
    <>
      <path d="M12 2L4 14h4l-1 6 5-2 5 2-1-6h4L12 2z" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </>
  ),
  // Insurance — document with lines
  doc: (
    <>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeWidth="1.6" strokeLinejoin="round" />
      <polyline points="14,2 14,8 20,8" strokeWidth="1.6" strokeLinejoin="round" />
      <line x1="8" y1="13" x2="16" y2="13" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="8" y1="17" x2="12" y2="17" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
  // Gaming — gamepad/controller
  gaming: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="5" strokeWidth="1.6" />
      <line x1="6" y1="12" x2="10" y2="12" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="8" y1="10" x2="8" y2="14" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="16" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="13" r="1" fill="currentColor" stroke="none" />
    </>
  ),
}

export function IndustrySolutions() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 90%" } }
      )
      const cards = gridRef.current?.querySelectorAll(".ind-card")
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 18, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "back.out(1.4)", stagger: 0.028,
            scrollTrigger: { trigger: gridRef.current, start: "top 88%" } }
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

        {/* Grid — 2 rows × 6 cols matching screenshot */}
        <div ref={gridRef} className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="ind-card group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl
                border border-[#e8eef8] bg-white
                hover:border-[#3b67ff]/40
                hover:shadow-[0_8px_32px_rgba(59,103,255,0.13)]
                hover:bg-[#f5f8ff]
                transition-all duration-200 cursor-default"
            >
              {/* Icon container */}
              <div className="
                w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                flex items-center justify-center
                bg-[#f0f4ff] group-hover:bg-[#3b67ff]
                transition-colors duration-200
              ">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#3b67ff] group-hover:text-white group-hover:scale-110 transition-all duration-200"
                >
                  {icons[ind.svg]}
                </svg>
              </div>
              <span className="text-[#0d1e3c] group-hover:text-[#3b67ff] text-[12px] sm:text-[13px] font-semibold text-center leading-tight transition-colors duration-200">
                {ind.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}