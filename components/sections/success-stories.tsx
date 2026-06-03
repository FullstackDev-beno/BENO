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
    stat: "3× faster content publishing",
  },
  {
    tag: "AI Automation",
    tagBg: "#1a1a1a",
    title: "Enterprise AI Agentic Implementation",
    description: "Reducing operational costs by 40% through custom AI workflow orchestration.",
    thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    thumbBg: "#0d1e3c",
    stat: "40% cost reduction",
  },
  {
    tag: "Cloud Scale",
    tagBg: "#1a1a1a",
    title: "Cloud Modernization Case Study",
    description: "Transitioning legacy infrastructure to a secure, elastic hybrid cloud environment.",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    thumbBg: "#b94040",
    stat: "99.98% uptime SLA",
  },
  {
    tag: "Product Launch",
    tagBg: "#1a1a1a",
    title: "Startup Product Engineering Case Study",
    description: "Accelerating Time-to-Market for a disruptive Fintech platform in North America.",
    thumb: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    thumbBg: "#2a8a7a",
    stat: "6-week MVP delivery",
  },
]

export function SuccessStories() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const trackRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only apply horizontal scroll on larger screens
    const isDesktop = () => window.innerWidth >= 1024

    const ctx = gsap.context(() => {
      // ── HEADING entrance ────────────────────────────────────────────────────
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "expo.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 88%" },
        }
      )

      if (!isDesktop()) {
        // ── MOBILE: simple depth-pop stagger ──────────────────────────────────
        const mobileCards = trackRef.current?.querySelectorAll(".story-card")
        if (mobileCards?.length) {
          gsap.set(mobileCards, {
            opacity: 0, y: 80, scale: 0.88,
            rotateX: 12, transformPerspective: 1000, transformOrigin: "center top",
          })
          gsap.to(mobileCards, {
            opacity: 1, y: 0, scale: 1, rotateX: 0,
            duration: 0.85, stagger: 0.1, ease: "back.out(2)",
            clearProps: "rotateX,transformPerspective,transformOrigin",
            scrollTrigger: { trigger: trackRef.current, start: "top 82%", toggleActions: "play none none none" },
          })
        }
        return
      }

      // ── DESKTOP: Awwwards-style horizontal pin ─────────────────────────────
      const track = trackRef.current
      if (!track) return

      const cards = track.querySelectorAll(".story-card")

      // All cards fully visible — cards 1–N start slightly pulled back
      gsap.set(cards[0], { scale: 1, y: 0, rotateX: 0 })
      gsap.set(Array.from(cards).slice(1), {
        scale: 0.88,
        y: 36,
        rotateX: 7,
        transformPerspective: 1100,
      })

      // DWELL: how many extra scroll-px card 0 stays before track moves
      const DWELL = 90
      const getSlide = () => track.scrollWidth - window.innerWidth + 120

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getSlide() + DWELL}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // Phase 1: dwell — nothing moves (card 0 stays visible)
      const dwellF = DWELL / (getSlide() + DWELL)
      tl.to({}, { duration: dwellF })

      // Phase 2: slide track left
      tl.to(
        track,
        { x: () => -getSlide(), ease: "none", duration: 1 - dwellF },
        dwellF
      )

      // Cards 1–N: slide into full position as track scrolls
      Array.from(cards).slice(1).forEach((card, i) => {
        const startOffset = dwellF + (i / (cards.length - 1)) * (1 - dwellF) * 0.7
        tl.to(
          card,
          { scale: 1, y: 0, rotateX: 0, ease: "power4.out", duration: 0.25,
            clearProps: "rotateX,transformPerspective" },
          startOffset
        )
      })

      // Hover: active card lifts
      cards.forEach((card) => {
        const el = card as HTMLElement
        const enter = () => gsap.to(el, { scale: 1.02, y: -6, duration: 0.35, ease: "power2.out" })
        const leave = () => gsap.to(el, { scale: 1,    y:  0, duration: 0.35, ease: "power2.inOut" })
        el.addEventListener("mouseenter", enter)
        el.addEventListener("mouseleave", leave)
      })
    }, sectionRef)

    const onResize = () => {
      ctx.revert()
      ScrollTrigger.refresh()
    }

    window.addEventListener("resize", onResize, { passive: true })
    return () => {
      ctx.revert()
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white overflow-hidden"
    >
      {/* Section header — always visible above the pin */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-14 sm:py-20 lg:py-24 pb-8 lg:pb-12">
        <div ref={headingRef} className="flex items-start justify-between gap-4">
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
      </div>

      {/* Horizontal track — scrolls on desktop, stacks on mobile */}
      <div className="pl-6 lg:pl-12 pb-14 lg:pb-24 overflow-visible">
        <div
          ref={trackRef}
          className="
            flex gap-6 lg:gap-8
            flex-col sm:flex-col lg:flex-row
            lg:will-change-transform
          "
          style={{ width: "max-content", paddingRight: "8vw" }}
        >
          {caseStudies.map((s, i) => (
            <div
              key={i}
              className="
                story-card
                group
                rounded-2xl overflow-hidden
                border border-[#e8eef8]
                cursor-pointer
                bg-white
                w-full
                sm:w-full
                lg:w-[clamp(340px,42vw,560px)]
                lg:flex-shrink-0
                will-change-transform
              "
            >
              {/* Thumbnail */}
              <div
                className="relative h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden"
                style={{ background: s.thumbBg }}
              >
                <img
                  src={s.thumb}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-[12px] font-semibold"
                  style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
                >
                  {s.tag}
                </span>
                {/* Stat badge */}
                <span className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-[#3b67ff] text-white text-[11px] font-bold tracking-wide">
                  {s.stat}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-7">
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0d1e3c] mb-2 leading-snug group-hover:text-[#3b67ff] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-[#4b5a72] text-[14px] leading-[1.75] mb-4">{s.description}</p>
                <span className="inline-flex items-center gap-1.5 text-[#3b67ff] text-[13px] font-semibold group-hover:gap-3 transition-all duration-300">
                  Read case study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}