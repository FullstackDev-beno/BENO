"use client"

import { useRef, useEffect } from "react"
import {
  Globe, Wifi, TrendingUp, Users, Layers, Zap, Settings, ArrowRight,
} from "lucide-react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const reasons = [
  {
    icon: Globe,
    title: "Multi-Centre Global\nDelivery",
    description: "Geographic redundancy and multilingual coverage driven by state-of-the-art delivery hubs across India, serving clients across the",
    links: ["USA", "Europe", "Middle East", "SE Asia", "Australia"],
  },
  {
    icon: Wifi,
    title: "Flexible Business\nModels",
    description: "Tailored engagement structures adapted to any workflow, including Time & Materials, Fixed Cost milestones, Distributed Squads, or Fully Outsourced management.",
    links: [],
  },
  {
    icon: TrendingUp,
    title: "200% Growth in\n3 Years",
    description: "Sustained, hyper-scale market expansion powered directly by exceptional client retention, predictable delivery quality, and high-impact digital engineering worldwide.",
    links: [],
  },
  {
    icon: Users,
    title: "15+ Years of\nEngineering Depth",
    description: "Established in ",
    year: "2008",
    extraDescription: ". Complex infrastructure and architecture problems are pre-solved through a mature, battle-tested engineering playbook.",
    links: [],
  },
  {
    icon: Layers,
    title: "Certified & Compliant",
    description: "Enterprise-grade risk mitigation strictly aligned to global benchmarks, including",
    certLinks: ["CMMI-Dev Level 3", "ISO 27001", "ISO 9001", "ISO 20000", "ISO 18295"],
    links: [],
  },
  {
    icon: Zap,
    title: "AI-Native Operations",
    description: "AI-assisted delivery workflows natively embedded into core practices—cloud architecture, software engineering, and cybersecurity—for maximum speed and accuracy.",
    links: [],
  },
]

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── MASTER TIMELINE ────────────────────────────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
      })

      // ── LABEL chip ─────────────────────────────────────────────────────────
      const label = headingRef.current?.querySelector(".label-chip")
      if (label) {
        tl.fromTo(label,
          { opacity: 0, y: 16, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)" },
          0
        )
      }

      // ── HEADING: word-split stagger ────────────────────────────────────────
      const heading = headingRef.current?.querySelector("h2")
      if (heading) {
        const words = heading.textContent?.split(" ") ?? []
        heading.innerHTML = words
          .map(w => `<span class="word-span" style="display:inline-block;overflow:hidden;vertical-align:bottom">
            <span style="display:inline-block">${w}</span></span>`)
          .join(" ")

        tl.fromTo(
          heading.querySelectorAll(".word-span > span"),
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.7, stagger: 0.06, ease: "expo.out" },
          0.12
        )
      }

      // ── SUBTEXT ────────────────────────────────────────────────────────────
      const sub = headingRef.current?.querySelector("p")
      if (sub) {
        tl.fromTo(sub,
          { opacity: 0, y: 20, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
          0.4
        )
      }

      // ── VIEW ALL ───────────────────────────────────────────────────────────
      const viewAll = headingRef.current?.querySelector("a")
      if (viewAll) {
        tl.fromTo(viewAll,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
          0.5
        )
      }

      // ── CARDS: 3D flip-in with elastic bounce ──────────────────────────────
      const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".reason-card")
      if (cards?.length) {
        // Set initial state
        gsap.set(cards, {
          opacity: 0,
          y: 90,
          rotateX: 28,
          scale: 0.82,
          transformPerspective: 1200,
          transformOrigin: "center bottom",
        })

        tl.to(cards, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.05,
          stagger: {
            each: 0.09,
            grid: [2, 3],
            from: "start",
          },
          ease: "elastic.out(1, 0.62)",
          clearProps: "rotateX,transformPerspective,transformOrigin",
        }, 0.55)

        // ── ICON: spin-pop after card lands ────────────────────────────────
        cards.forEach((card, i) => {
          const iconWrap = card.querySelector<HTMLElement>(".icon-wrap")
          if (!iconWrap) return
          tl.fromTo(iconWrap,
            { scale: 0, rotate: -180, opacity: 0 },
            { scale: 1, rotate: 0, opacity: 1, duration: 0.65, ease: "elastic.out(1, 0.45)" },
            0.55 + i * 0.09 + 0.3
          )
        })

        // ── NUMBER/STAT highlight lines ─────────────────────────────────────
        cards.forEach((card, i) => {
          const line = card.querySelector<HTMLElement>(".card-line")
          if (!line) return
          tl.fromTo(line,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.5, ease: "power3.out" },
            0.55 + i * 0.09 + 0.5
          )
        })
      }

      // ── HOVER: magnetic 3D tilt ────────────────────────────────────────────
      const cleanups: (() => void)[] = []
      cards?.forEach((card) => {
        const el = card as HTMLElement

        const onEnter = () => {
          gsap.to(el, {
            boxShadow: "0 32px 64px rgba(59,103,255,0.5), 0 0 0 1.5px rgba(255,255,255,0.18) inset",
            duration: 0.3, ease: "power2.out",
          })
          // Icon bounce
          const icon = el.querySelector<HTMLElement>(".icon-wrap")
          if (icon) gsap.to(icon, { scale: 1.18, rotate: 8, duration: 0.35, ease: "back.out(2)" })
        }

        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect()
          const xPct = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2
          const yPct = ((e.clientY - rect.top)   / rect.height - 0.5) * 2
          gsap.to(el, {
            rotateY:  xPct * 12,
            rotateX: -yPct * 8,
            y: -12,
            scale: 1.035,
            duration: 0.35,
            ease: "power2.out",
            transformPerspective: 1000,
          })
        }

        const onLeave = () => {
          gsap.to(el, {
            rotateY: 0, rotateX: 0, y: 0, scale: 1,
            boxShadow: "none",
            duration: 0.6, ease: "elastic.out(1, 0.5)",
            clearProps: "rotateY,rotateX,transformPerspective",
          })
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
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d1e3c 0%, #0a1628 40%, #061020 100%)",
      }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #3b67ff 0%, transparent 70%)" }} />
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #4d7bff 0%, transparent 70%)" }} />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(59,103,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,103,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />
      </div>

      <div ref={headingRef} className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="label-chip flex items-center gap-2 mb-4 w-fit px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Settings className="w-3.5 h-3.5 text-[#3b67ff]" />
              <span className="text-[12px] font-semibold tracking-widest uppercase text-[#3b67ff]">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-extrabold text-white tracking-[-1px] leading-[1.08] mb-5">
              WHY CHOOSE BENO SUPPORT
            </h2>

            <p className="text-white/50 text-[14px] sm:text-[15px] lg:text-[16px] max-w-[600px] leading-[1.8]">
              Combining over 15 years of deep technical engineering expertise
              with AI-native operational execution to deliver secure, scalable,
              and compliant global solutions.
            </p>
          </div>

          <a href="#about"
            className="group flex items-center gap-2 text-white/60 hover:text-white text-[14px] font-semibold transition-all duration-300 shrink-0 mt-1"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reason-card group relative rounded-2xl p-6 lg:p-7 cursor-default overflow-hidden border border-white/8"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
                backdropFilter: "blur(12px)",
                willChange: "transform",
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
                <reason.icon className="w-5 h-5 text-[#7b9fff] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-[18px] sm:text-[20px] font-bold leading-tight mb-3 whitespace-pre-line text-white tracking-[-0.3px]">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-[13.5px] sm:text-[14px] leading-[1.78] text-white/45 group-hover:text-white/65 transition-colors duration-300">
                {reason.description}
                {reason.year && (
                  <span className="text-[#7b9fff] font-semibold">{reason.year}</span>
                )}
                {reason.extraDescription}
                {reason.links.length > 0 && (
                  <>{" "}{reason.links.map((link, i) => (
                    <span key={i}>
                      <a href="#" className="text-[#7b9fff] hover:text-white underline underline-offset-2 transition-colors">{link}</a>
                      {i < reason.links.length - 1 && (i === reason.links.length - 2 ? ", and " : ", ")}
                    </span>
                  ))}.</>
                )}
                {reason.certLinks?.length && (
                  <>{" "}{reason.certLinks.map((link, i) => (
                    <span key={i}>
                      <a href="#" className="text-[#7b9fff] hover:text-white underline underline-offset-2 transition-colors">{link}</a>
                      {i < reason.certLinks!.length - 1 && ", "}
                    </span>
                  ))}.</>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}