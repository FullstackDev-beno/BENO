"use client"

import { useRef, useEffect, useState } from "react"
import {
  Code2, Globe, Smartphone, Link2, Layers, GitBranch,
  Shield, Zap, Lock, Award, Settings, TrendingUp, TrendingDown,
  Bug, AlertCircle, FileCheck, Activity, Eye, BarChart2,
  Server, Database, FileSearch, Headphones,
  Bot, Brain, Lightbulb, MessageSquare, RefreshCw, FileText,
  Palette, Monitor, Target, Search,
  Map, Building2, Rocket, Users, CheckCircle,
  PieChart, Clock, DollarSign,
  Cloud, Network, GitMerge,
  GraduationCap, UserCheck, Heart, BookOpen,
  ArrowRight, Star, ChevronDown,
} from "lucide-react"
import { gsap } from "@/lib/gsap"
import { IndustrySolutions } from "@/components/sections/industry-solutions"
import { CTAFAQSection } from "@/components/sections/cta-faq-section"
import { PartnerStrip } from "@/components/sections/partnerStrip"
import type { ServiceData, CapabilityCard } from "@/lib/services-data"
import Link from "next/link"

// ─── Icon map ──────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Globe, Smartphone, Link2, Layers, GitBranch,
  Shield, Zap, Lock, Award, Settings, TrendingUp, TrendingDown,
  Bug, AlertCircle, FileCheck, Activity, Eye, BarChart2,
  Server, Database, FileSearch, Headphones,
  Bot, Brain, Lightbulb, MessageSquare, RefreshCw, FileText,
  Palette, Monitor, Target, Search,
  Map, Building2, Rocket, Users, CheckCircle,
  PieChart, Clock, DollarSign,
  Cloud, Network, GitMerge,
  GraduationCap, UserCheck, Heart, BookOpen,
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function ServiceHero({ hero }: { hero: ServiceData["hero"] }) {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.fromTo(".sh-headline", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, 0)
        .fromTo(".sh-desc", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 0.3)
        .fromTo(".sh-cta", { opacity: 0, scale: 0.88 }, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" }, 0.5)
        .fromTo(".sh-badge", { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }, 0.6)
        .fromTo(".sh-img", { opacity: 0, scale: 0.9, x: 30 }, { opacity: 1, scale: 1, x: 0, duration: 1, ease: "expo.out" }, 0.2)
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#071020] min-h-screen flex flex-col"
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/herobg.svg')" }}
      />

      {/* Dark overlay — ensures text stays legible over any background */}
      <div className="absolute inset-0 z-[1] bg-[#071020]/72" />

      {/* Subtle blue-tinted gradient overlay for depth */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(59,103,255,0.18) 0%, transparent 70%)," +
            "linear-gradient(to bottom, transparent 60%, rgba(7,16,32,0.6) 100%)",
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,103,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,103,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col w-full max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Spacer for fixed header */}
        <div className="h-[72px] shrink-0" />

        {/* Full-width content — no right column */}
        <div className="flex-1 flex items-center py-16 lg:py-0">
          <div className="flex flex-col justify-center max-w-[720px]">
            {/* Breadcrumb */}
            <div className="sh-badge flex items-center gap-2 mb-6 opacity-0">
              <Link href="/" className="text-white/40 text-[13px] hover:text-white/70 transition-colors">Home</Link>
              <span className="text-white/25 text-[13px]">/</span>
              <span className="text-[#3b67ff] text-[13px] font-medium">Services</span>
            </div>

            <h1 className="sh-headline text-white font-extrabold leading-[1.08] tracking-[-2px] text-[38px] sm:text-[52px] lg:text-[60px] xl:text-[70px] opacity-0">
              {hero.tagline}
              {hero.tagline2 && (
                <>
                  <br />
                  <span className="text-[#3b67ff]">{hero.tagline2}</span>
                </>
              )}
            </h1>

            <p className="sh-desc mt-6 text-[#c8d4e3] text-[15px] sm:text-[17px] leading-[1.85] max-w-[580px] opacity-0">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="sh-cta mt-8 flex flex-wrap gap-3 opacity-0">
              {(hero.ctaButtons ?? ["Get a Free Consultation", "View Case Studies"]).map((btn, i) => (
                <button
                  key={btn}
                  className={i === 0
                    ? "h-[52px] px-8 rounded-xl bg-[#3b67ff] text-white text-[15px] font-semibold hover:bg-[#2d55e0] transition-all active:scale-[0.98] shadow-[0_8px_32px_rgba(59,103,255,0.4)]"
                    : "h-[52px] px-8 rounded-xl border border-white/15 text-white text-[15px] font-semibold hover:border-white/35 hover:bg-white/5 transition-all"
                  }
                >
                  {btn}
                </button>
              ))}
            </div>

          </div>
        </div>

        <div className="h-6 shrink-0" />
      </div>

      {/* PARTNER STRIP — same as home page */}
      <div className="relative z-10">
        <PartnerStrip />
      </div>
    </section>
  )
}

// ─── INTRO SECTION ─────────────────────────────────────────────────────────────
function ServiceIntro({ intro }: { intro: ServiceData["intro"] }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%" } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9h3M12 9h3M9 3v3M9 12v3" stroke="#3b67ff" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="9" cy="9" r="2.2" fill="#3b67ff"/>
          </svg>
          <span className="text-[#3b67ff] text-[12px] font-semibold tracking-widest uppercase">{intro.sectionLabel}</span>
        </div>

        <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold text-[#0a1628] leading-[1.1] tracking-[-1px] mb-6">
          {intro.title}
        </h2>

        {/* Divider */}
        <div className="h-[3px] w-16 rounded-full mx-auto mb-8"
          style={{ background: "linear-gradient(90deg, #3b67ff, #7b9fff)" }} />

        <div className="flex flex-col gap-4">
          {intro.paragraphs.map((p, i) => (
            <p key={i} className="text-[#4a5568] text-[15px] sm:text-[16px] leading-[1.8]">{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CAPABILITIES GRID (WhyChooseUs style) ─────────────────────────────────────
function ServiceCapabilitiesGrid({
  data,
  id,
}: {
  data: { sectionLabel: string; title: string; subtitle: string; cards: CapabilityCard[] }
  id: string
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
      })

      // Label chip
      const label = headingRef.current?.querySelector(".label-chip")
      if (label) tl.fromTo(label,
        { opacity: 0, y: 16, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)" }, 0
      )

      // Heading words
      const heading = headingRef.current?.querySelector("h2")
      if (heading) {
        const words = heading.textContent?.split(" ") ?? []
        heading.innerHTML = words
          .map(w => `<span class="word-span" style="display:inline-block;overflow:hidden;vertical-align:bottom"><span style="display:inline-block">${w}</span></span>`)
          .join(" ")
        tl.fromTo(heading.querySelectorAll(".word-span > span"),
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.7, stagger: 0.06, ease: "expo.out" }, 0.12
        )
      }

      // Subtitle
      const sub = headingRef.current?.querySelector("p")
      if (sub) tl.fromTo(sub,
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }, 0.4
      )

      // Cards 3D flip-in
      const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".cap-card")
      if (cards?.length) {
        gsap.set(cards, { opacity: 0, y: 90, rotateX: 28, scale: 0.82, transformPerspective: 1200, transformOrigin: "center bottom" })
        tl.to(cards, {
          opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 1.05,
          stagger: { each: 0.09, grid: [2, 3], from: "start" },
          ease: "elastic.out(1, 0.62)",
          clearProps: "rotateX,transformPerspective,transformOrigin",
        }, 0.55)

        // Icon spin-pop
        cards.forEach((card, i) => {
          const iconWrap = card.querySelector<HTMLElement>(".icon-wrap")
          if (!iconWrap) return
          tl.fromTo(iconWrap,
            { scale: 0, rotate: -180, opacity: 0 },
            { scale: 1, rotate: 0, opacity: 1, duration: 0.65, ease: "elastic.out(1, 0.45)" },
            0.55 + i * 0.09 + 0.3
          )
        })

        // Card top line
        cards.forEach((card, i) => {
          const line = card.querySelector<HTMLElement>(".card-line")
          if (!line) return
          tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "power3.out" }, 0.55 + i * 0.09 + 0.5)
        })
      }

      // Hover: magnetic 3D tilt
      const cleanups: (() => void)[] = []
      cards?.forEach((card) => {
        const el = card as HTMLElement
        const onEnter = () => {
          gsap.to(el, { boxShadow: "0 32px 64px rgba(59,103,255,0.5), 0 0 0 1.5px rgba(255,255,255,0.18) inset", duration: 0.3, ease: "power2.out" })
          const icon = el.querySelector<HTMLElement>(".icon-wrap")
          if (icon) gsap.to(icon, { scale: 1.18, rotate: 8, duration: 0.35, ease: "back.out(2)" })
        }
        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect()
          const xPct = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2
          const yPct = ((e.clientY - rect.top)   / rect.height - 0.5) * 2
          gsap.to(el, { rotateY: xPct * 12, rotateX: -yPct * 8, y: -12, scale: 1.035, duration: 0.35, ease: "power2.out", transformPerspective: 1000 })
        }
        const onLeave = () => {
          gsap.to(el, { rotateY: 0, rotateX: 0, y: 0, scale: 1, boxShadow: "none", duration: 0.6, ease: "elastic.out(1, 0.5)", clearProps: "rotateY,rotateX,transformPerspective" })
          const icon = el.querySelector<HTMLElement>(".icon-wrap")
          if (icon) gsap.to(icon, { scale: 1, rotate: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" })
        }
        el.addEventListener("mouseenter", onEnter)
        el.addEventListener("mousemove",  onMove)
        el.addEventListener("mouseleave", onLeave)
        cleanups.push(() => {
          el.removeEventListener("mouseenter", onEnter)
          el.removeEventListener("mousemove",  onMove)
          el.removeEventListener("mouseleave", onLeave)
        })
      })
      return () => cleanups.forEach(fn => fn())
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d1e3c 0%, #0a1628 40%, #061020 100%)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #3b67ff 0%, transparent 70%)" }} />
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #4d7bff 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(59,103,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,103,255,0.6) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <div ref={headingRef} className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="label-chip flex items-center gap-2 mb-4 w-fit px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Settings className="w-3.5 h-3.5 text-[#3b67ff]" />
              <span className="text-[12px] font-semibold tracking-widest uppercase text-[#3b67ff]">{data.sectionLabel}</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-extrabold text-white tracking-[-1px] leading-[1.08] mb-5">
              {data.title}
            </h2>
            <p className="text-white/50 text-[14px] sm:text-[15px] lg:text-[16px] max-w-[600px] leading-[1.8]">
              {data.subtitle}
            </p>
          </div>
          <a href="#contact" className="group flex items-center gap-2 text-white/60 hover:text-white text-[14px] font-semibold transition-all duration-300 shrink-0 mt-1">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {data.cards.map((card, index) => {
            const IconComponent = iconMap[card.iconName] ?? Settings
            return (
              <div
                key={index}
                className="cap-card group relative rounded-2xl p-6 lg:p-7 cursor-default overflow-hidden border border-white/8"
                style={{
                  background: card.highlighted
                    ? "linear-gradient(145deg, rgba(59,103,255,0.35) 0%, rgba(59,103,255,0.15) 100%)"
                    : "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
                  backdropFilter: "blur(12px)",
                  willChange: "transform",
                  borderColor: card.highlighted ? "rgba(59,103,255,0.5)" : "rgba(255,255,255,0.08)",
                }}
              >
                {/* Hover bg fill */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: "linear-gradient(145deg, rgba(59,103,255,0.22) 0%, rgba(59,103,255,0.08) 100%)" }} />

                {/* Top accent line */}
                <div className="card-line absolute top-0 left-6 right-6 h-[2px] rounded-full origin-left"
                  style={{ background: "linear-gradient(90deg, #3b67ff, #7b9fff)" }} />

                {/* Icon */}
                <div className="icon-wrap relative z-10 w-11 h-11 rounded-xl flex items-center justify-center mb-5 border border-white/10"
                  style={{ background: "linear-gradient(135deg, rgba(59,103,255,0.35), rgba(59,103,255,0.12))" }}
                >
                  <IconComponent className="w-5 h-5 text-[#7b9fff] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-[18px] sm:text-[20px] font-bold leading-tight mb-3 whitespace-pre-line text-white tracking-[-0.3px]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-[13.5px] sm:text-[14px] leading-[1.78] text-white/45 group-hover:text-white/65 transition-colors duration-300">
                  {card.description}
                </p>

                {/* Features */}
                {card.features && card.features.length > 0 && (
                  <ul className="relative z-10 mt-4 pt-4 border-t border-white/[0.08] space-y-1.5">
                    {card.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <span className="text-[#3b67ff] text-[10px] mt-[3px] shrink-0">▸</span>
                        <span className="text-[12px] text-white/35 group-hover:text-white/55 transition-colors duration-300 leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── USE CASES SECTION ─────────────────────────────────────────────────────────
function ServiceUseCases({ useCases }: { useCases: ServiceData["useCases"] }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = useCases.cases[activeIdx]
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%" } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-[#f7f9fc]">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#3b67ff] text-[12px]">⬡</span>
          <span className="text-[#3b67ff] text-[12px] font-semibold tracking-widest uppercase">{useCases.sectionLabel}</span>
        </div>
        <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#0a1628] leading-[1.1] tracking-[-1px] mb-8">
          {useCases.title}
        </h2>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {useCases.cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`px-5 py-3 rounded-xl text-left transition-all duration-200 ${
                i === activeIdx
                  ? "bg-[#3b67ff] shadow-[0_8px_24px_rgba(59,103,255,0.4)]"
                  : "bg-white border border-[#d1d9e6] hover:border-[#3b67ff]/40"
              }`}
            >
              <div className={`text-[12px] font-bold tracking-widest mb-1 ${i === activeIdx ? "text-white" : "text-[#0a1628]"}`}>
                {c.tabLabel}
              </div>
              <div className={`text-[11px] leading-snug ${i === activeIdx ? "text-white/80" : "text-[#6b7280]"}`}>
                {c.tabSub}
              </div>
            </button>
          ))}
        </div>

        {/* Case study card */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-[0_4px_32px_rgba(0,0,0,0.07)] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[360px]">
          {/* Left: content */}
          <div className="p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center text-2xl mb-5">
                🏆
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0a1628] mb-3 leading-snug">
                {active.projectTitle}
              </h3>
              <p className="text-[#4a5568] text-[14px] leading-[1.7] mb-5">
                {active.description}
              </p>
              <ul className="space-y-2 mb-6">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#3b67ff] text-[12px] mt-1 shrink-0">▸</span>
                    <span className="text-[#374151] text-[13px] leading-[1.5]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex gap-7 mb-5 flex-wrap">
                {active.stats.map((s, i) => (
                  <div key={i}>
                    <p className="text-[26px] font-extrabold text-[#0a1628] leading-tight tracking-[-0.5px]">{s.value}</p>
                    <p className="text-[11px] text-[#6b7280] mt-1 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
              <button className="bg-[#3b67ff] text-white px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#2d55e0] transition-colors">
                {active.ctaLabel}
              </button>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative hidden lg:flex items-center justify-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0d2550 0%, #1a3a6e 100%)" }}>
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "linear-gradient(rgba(59,103,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,103,255,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="relative z-10 text-center">
              <img
                src="/images/herocenter.svg"
                alt={active.projectTitle}
                className="w-[200px] opacity-40 object-contain"
              />
              <div className="absolute top-3 right-3 bg-[#3b67ff]/90 text-white text-[10px] font-bold px-3 py-1 rounded tracking-wide">
                {active.tabLabel}
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-[rgba(59,103,255,0.85)] text-white text-[10px] font-bold px-3 py-1.5 rounded-md tracking-widest uppercase">
              {active.tabLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SERVICE-SPECIFIC CTA + FAQ ────────────────────────────────────────────────
function ServiceCTAFAQ({
  cta,
  faq,
}: {
  cta: NonNullable<ServiceData["cta"]>
  faq: NonNullable<ServiceData["faq"]>
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">

        {/* ── Left: CTA ── */}
        <div className="relative py-20 sm:py-24 lg:py-32 px-10 sm:px-14 lg:px-20 xl:px-24 bg-gradient-to-br from-[#3b67ff] via-[#0f1b35] to-[#081120] overflow-hidden flex flex-col justify-center gap-8">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#3b67ff]/25 blur-[120px] pointer-events-none" />

          <div className="relative z-10 inline-flex items-center gap-2 self-start">
            <span className="w-2 h-2 rounded-full bg-[#3b67ff] ring-4 ring-[#3b67ff]/30" />
            <span className="text-[11px] font-semibold tracking-widest text-white/50 uppercase">Get In Touch</span>
          </div>

          <div className="relative z-10 space-y-5">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[52px] font-extrabold text-white leading-[1.1] tracking-[-1px]">
              {cta.title}
            </h2>
            <p className="text-[15px] sm:text-[17px] text-white/65 leading-[1.8] max-w-[420px]">
              {cta.content}
            </p>
          </div>

          {/* Stats */}
          <div className="relative z-10 grid grid-cols-3 gap-4">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "96%",  label: "Client Retention" },
              { value: "15+",  label: "Years of Expertise" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/[0.07] border border-white/10 rounded-xl px-4 py-3 text-center">
                <p className="text-[22px] font-bold text-white leading-tight">{value}</p>
                <p className="text-[10px] text-white/45 font-medium mt-0.5 leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-wrap">
            {cta.buttons.map((btn, i) => (
              <button
                key={btn}
                className={i === 0
                  ? "bg-white text-[#0a1628] hover:bg-white/90 px-8 py-3.5 text-[15px] font-semibold rounded-xl"
                  : "border border-white/25 bg-transparent text-white hover:bg-white/10 px-8 py-3.5 text-[15px] rounded-xl"
                }
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* ── Right: FAQ ── */}
        <div className="bg-white py-20 sm:py-24 lg:py-32 px-10 sm:px-14 lg:px-20 xl:px-24 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 self-start mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b67ff]" />
            <span className="text-[11px] font-semibold tracking-widest text-[#3b67ff] uppercase">FAQ</span>
          </div>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-extrabold text-[#0d1e3c] mb-8 tracking-[-0.5px]">
            Frequently Asked Questions
          </h3>
          <div className="divide-y divide-[#e8eef8]">
            {faq.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenIdx(openIdx === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
                >
                  <span className="text-[14px] sm:text-[15px] font-semibold text-[#0d1e3c] pr-4 group-hover:text-[#3b67ff] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openIdx === index ? "bg-[#3b67ff]" : "bg-[#f1f5fd]"
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-all duration-200 ${
                      openIdx === index ? "rotate-180 text-white" : "text-[#94a3b8]"
                    }`} />
                  </span>
                </button>
                {openIdx === index && (
                  <p className="text-[13px] sm:text-[14px] text-[#4b5a72] leading-relaxed pb-5 pr-8">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

// ─── MAIN SERVICE PAGE CONTENT ─────────────────────────────────────────────────
export default function ServicePageContent({ service }: { service: ServiceData }) {
  return (
    <div>
      <ServiceHero hero={service.hero} />
      <ServiceIntro intro={service.intro} />
      <ServiceCapabilitiesGrid data={service.capabilities} id="capabilities" />
      <IndustrySolutions />
      <ServiceUseCases useCases={service.useCases} />
      <ServiceCapabilitiesGrid data={service.scale} id="scale" />
      {service.cta && service.faq
        ? <ServiceCTAFAQ cta={service.cta} faq={service.faq} />
        : <CTAFAQSection />
      }
    </div>
  )
}
