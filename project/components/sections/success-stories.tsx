"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const caseStudies = [
  {
    tag: "CMS Transformation",
    tagBg: "#1a1a1a",
    title: "Bihar Tourism — CMS & Adobe Experience Cloud",
    description: "Modernizing regional tourism with a globally accessible digital experience platform.",
    thumb: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    thumbBg: "#1a7a3c",
  },
  {
    tag: "AI Automation",
    tagBg: "#1a1a1a",
    title: "Enterprise AI Agentic Implementation",
    description: "Reducing operational costs by 40% through custom AI workflow orchestration.",
    thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    thumbBg: "#0d1e3c",
  },
  {
    tag: "Cloud Scale",
    tagBg: "#1a1a1a",
    title: "Cloud Modernization Case Study",
    description: "Transitioning legacy infrastructure to a secure, elastic hybrid cloud environment.",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    thumbBg: "#b94040",
  },
  {
    tag: "Product Launch",
    tagBg: "#1a1a1a",
    title: "Startup Product Engineering Case Study",
    description: "Accelerating Time-to-Market for a disruptive Fintech platform in North America.",
    thumb: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    thumbBg: "#2a8a7a",
  },
]

export function SuccessStories() {
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
      const cards = gridRef.current?.querySelectorAll(".cs-card")
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 30, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out", stagger: 0.1,
            scrollTrigger: { trigger: gridRef.current, start: "top 84%" } }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-14 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div ref={headingRef} className="flex items-start justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h3M12 9h3M9 3v3M9 12v3" stroke="#3b67ff" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="9" cy="9" r="2.2" fill="#3b67ff"/>
              </svg>
              <span className="text-[#3b67ff] text-[13px] font-semibold tracking-widest uppercase">Case Studies</span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] lg:text-[46px] font-extrabold text-[#0d1e3c] leading-[1.1] tracking-[-1px] mb-4">
              SUCCESS STORIES
            </h2>
            <p className="text-[#4b5a72] text-[15px] sm:text-[16px] leading-[1.8] max-w-[680px]">
              Explore how Beno Support helps businesses accelerate innovation, optimize operations, modernize infrastructure,
              and achieve measurable digital transformation outcomes.
            </p>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-[#3b67ff] font-semibold text-[14px] whitespace-nowrap mt-2 hover:gap-3 transition-all duration-200">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2-col grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((s, i) => (
            <div
              key={i}
              className="cs-card group rounded-2xl overflow-hidden border border-[#e8eef8] hover:shadow-xl hover:border-[#3b67ff]/20 transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden" style={{ background: s.thumbBg }}>
                <img
                  src={s.thumb}
                  alt={s.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-[12px] font-semibold"
                  style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
                >
                  {s.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0d1e3c] mb-2 leading-snug group-hover:text-[#3b67ff] transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="text-[#4b5a72] text-[14px] leading-[1.75]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}