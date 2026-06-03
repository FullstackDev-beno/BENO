"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const tabs = ["AI & Automation", "Engineering & Architecture", "Cloud & Platform", "Cybersecurity", "Digital Products", "Startup Technology", "Industry Perspectives"]

const articles = [
  {
    category: "ENGINEERING",
    read: "5 MIN READ",
    title: "The Shift to Agentic AI: Beyond Simple Automation",
    excerpt: "How businesses are leveraging autonomous agents to handle complex multi-step workflows.",
    thumb: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    category: "CLOUD",
    read: "8 MIN READ",
    title: "FinOps in 2024: Mastering Cloud Unit Economics",
    excerpt: "Proven strategies for enterprises to regain control over their cloud spending while scaling.",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    category: "SECURITY",
    read: "6 MIN READ",
    title: "Building Cyber Resilience in an AI-Threat Landscape",
    excerpt: "Protecting enterprise data against the next generation of automated cybersecurity threats.",
    thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
]

export function BlogInsights() {
  const [activeTab, setActiveTab] = useState("AI & Automation")
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
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Animate cards on tab change
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".blog-card")
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 22, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out", stagger: 0.08 }
      )
    }
  }, [activeTab])

  return (
    <section ref={sectionRef} className="py-14 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div ref={headingRef} className="flex items-start justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h3M12 9h3M9 3v3M9 12v3" stroke="#3b67ff" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="9" cy="9" r="2.2" fill="#3b67ff"/>
            </svg>
            <span className="text-[#3b67ff] text-[13px] font-semibold tracking-widest uppercase">Blogs & Resources</span>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-[#3b67ff] font-semibold text-[14px] hover:gap-3 transition-all duration-200">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <h2 className="text-[28px] sm:text-[36px] lg:text-[50px] font-extrabold text-[#0d1e3c] leading-[1.08] tracking-[-1.5px] mb-4">
          AI, ENGINEERING & TECHNOLOGY INSIGHTS
        </h2>
        <p className="text-[#4b5a72] text-[15px] sm:text-[16px] leading-[1.8] mb-8">
          Explore expert perspectives on the future of AI transformation and digital architecture.
        </p>

        {/* Tab pills */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-medium border transition-all duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? "bg-[#3b67ff] text-white border-[#3b67ff] shadow-sm shadow-[#3b67ff]/25"
                  : "bg-white text-[#4b5a72] border-[#dde3f0] hover:border-[#3b67ff] hover:text-[#3b67ff]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Article cards */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {articles.map((a, i) => (
            <article
              key={i}
              className="blog-card group rounded-2xl overflow-hidden border border-[#e8eef8] hover:shadow-xl hover:border-[#3b67ff]/20 transition-all duration-300 cursor-pointer bg-white"
            >
              {/* Image */}
              <div className="h-[200px] overflow-hidden">
                <img
                  src={a.thumb}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[11px] font-bold text-[#6b7a99] tracking-widest mb-3">
                  {a.category} • {a.read}
                </p>
                <h3 className="text-[17px] font-bold text-[#0d1e3c] leading-snug mb-3 group-hover:text-[#3b67ff] transition-colors duration-200">
                  {a.title}
                </h3>
                <p className="text-[#4b5a72] text-[14px] leading-[1.75] mb-5">
                  {a.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[#0d1e3c] text-[13px] font-bold hover:text-[#3b67ff] transition-colors duration-200"
                >
                  Read Article
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}