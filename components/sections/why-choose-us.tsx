"use client"

import { useRef, useEffect } from "react"
import {
  Globe,
  Wifi,
  TrendingUp,
  Users,
  Layers,
  Zap,
  Settings,
  ArrowRight,
} from "lucide-react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

import { AnimatedGradientBg } from "../ui/AnimatedBG"

const reasons = [
  {
    icon: Globe,
    title: "Multi-Centre Global\nDelivery",
    description:
      "Geographic redundancy and multilingual coverage driven by state-of-the-art delivery hubs across India, serving clients across the",
    links: ["USA", "Europe", "Middle East", "SE Asia", "Australia"],
  },
  {
    icon: Wifi,
    title: "Flexible Business\nModels",
    description:
      "Tailored engagement structures adapted to any workflow, including Time & Materials, Fixed Cost milestones, Distributed Squads, or Fully Outsourced management.",
    links: [],
  },
  {
    icon: TrendingUp,
    title: "200% Growth in\n3 Years",
    description:
      "Sustained, hyper-scale market expansion powered directly by exceptional client retention, predictable delivery quality, and high-impact digital engineering worldwide.",
    links: [],
  },
  {
    icon: Users,
    title: "15+ Years of\nEngineering Depth",
    description: "Established in ",
    year: "2008",
    extraDescription:
      ". Complex infrastructure and architecture problems are pre-solved through a mature, battle-tested engineering playbook.",
    links: [],
  },
  {
    icon: Layers,
    title: "Certified & Compliant",
    description:
      "Enterprise-grade risk mitigation strictly aligned to global benchmarks, including",
    certLinks: [
      "CMMI-Dev Level 3",
      "ISO 27001",
      "ISO 9001",
      "ISO 20000",
      "ISO 18295",
    ],
    links: [],
  },
  {
    icon: Zap,
    title: "AI-Native Operations",
    description:
      "AI-assisted delivery workflows natively embedded into core practices—cloud architecture, software engineering, and cybersecurity—for maximum speed and accuracy.",
    links: [],
  },
]

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── HEADING: clip-reveal with letter spacing collapse ─────────────────
      const heading = sectionRef.current?.querySelector("h2")
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, letterSpacing: "0.18em", y: 30 },
          {
            opacity: 1,
            letterSpacing: "-0.01em",
            y: 0,
            duration: 1.1,
            ease: "expo.out",
            scrollTrigger: { trigger: heading, start: "top 88%" },
          }
        )
      }

      // ── SUBTEXT: upward blur fade ─────────────────────────────────────────
      const sub = sectionRef.current?.querySelector("p")
      if (sub) {
        gsap.fromTo(
          sub,
          { opacity: 0, y: 24, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            delay: 0.18,
            scrollTrigger: { trigger: sub, start: "top 88%" },
          }
        )
      }

      // ── CARDS: alternating elastic entrance ───────────────────────────────
      // Odd-index from left, even-index from right, with depth pop
      const cards = cardsRef.current?.querySelectorAll(".reason-card")
      if (!cards?.length) return

      cards.forEach((card, i) => {
        const el = card as HTMLElement
        const fromLeft = i % 2 === 0
        const row = Math.floor(i / 3) // which grid row (0, 1)
        const col = i % 3             // which column

        gsap.set(el, {
          opacity: 0,
          x: fromLeft ? -80 : 80,
          y: 60,
          scale: 0.78,
          rotateY: fromLeft ? -12 : 12,
          transformPerspective: 1000,
          transformOrigin: fromLeft ? "left center" : "right center",
          willChange: "transform, opacity",
        })

        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 1.0,
          delay: row * 0.08 + col * 0.12,
          ease: "elastic.out(1, 0.55)",
          clearProps: "willChange,rotateY,transformPerspective,transformOrigin",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        })
      })

      // ── ICON: spin pop with delay matching card ────────────────────────────
      cards.forEach((card, i) => {
        const iconWrap = card.querySelector(".icon-wrap")
        if (!iconWrap) return
        const delay = Math.floor(i / 3) * 0.08 + (i % 3) * 0.12 + 0.2

        gsap.fromTo(
          iconWrap,
          { scale: 0, rotate: -90, opacity: 0 },
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.7,
            delay,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        )
      })

      // ── HOVER: magnetic tilt (3D rotate toward cursor) ────────────────────
      const cleanups: (() => void)[] = []

      cards.forEach((card) => {
        const el = card as HTMLElement

        const onMove = (e: MouseEvent) => {
          const rect  = el.getBoundingClientRect()
          const xPct  = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2
          const yPct  = ((e.clientY - rect.top)   / rect.height - 0.5) * 2

          gsap.to(el, {
            rotateY:  xPct * 10,
            rotateX: -yPct * 7,
            y: -10,
            scale: 1.03,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 1000,
          })
        }

        const onLeave = () => {
          gsap.to(el, {
            rotateY: 0, rotateX: 0, y: 0, scale: 1,
            duration: 0.55, ease: "elastic.out(1, 0.5)",
            clearProps: "rotateY,rotateX,transformPerspective",
          })
        }

        el.addEventListener("mousemove",  onMove)
        el.addEventListener("mouseleave", onLeave)
        cleanups.push(() => {
          el.removeEventListener("mousemove",  onMove)
          el.removeEventListener("mouseleave", onLeave)
        })
      })

      return () => cleanups.forEach((fn) => fn())
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br
  from-[#3b67ff]
  via-[#0f1b35]
  to-[#081120]"
    >
   
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Settings className="w-4 h-4 text-white/60" />
              <span className="text-sm text-white/60">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              WHY CHOOSE BENO SUPPORT
            </h2>

            <p className="text-white/60 text-sm sm:text-[15px] lg:text-base max-w-2xl leading-relaxed">
              Combining over 15 years of deep technical engineering expertise
              with AI-native operational execution to deliver secure, scalable,
              and compliant global solutions.
            </p>
          </div>

          <a
            href="#about"
            className="flex items-center gap-2 text-white text-sm font-medium hover:text-white/80 transition-colors shrink-0"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="
                reason-card
                group
                rounded-2xl
                p-5 sm:p-6 lg:p-7
                bg-white
                hover:bg-[#3b67ff]
                transition-all
                duration-300
                border border-transparent
                hover:border-white/10
                hover:-translate-y-1
              "
            >
              {/* Icon */}
              <div
                className="
                  icon-wrap
                  w-10 h-10 sm:w-11 sm:h-11
                  rounded-lg
                  flex items-center justify-center
                  mb-4 sm:mb-5
                  bg-[#eef2ff]
                  group-hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                <reason.icon
                  className="
                    w-5 h-5 sm:w-6 sm:h-6
                    text-[#3b67ff]
                    group-hover:text-white
                    transition-colors
                    duration-300
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  text-lg sm:text-xl lg:text-[22px]
                  font-bold
                  leading-tight
                  mb-3
                  whitespace-pre-line
                  text-[#1e3a5f]
                  group-hover:text-white
                  transition-colors
                  duration-300
                "
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-sm sm:text-[15px]
                  leading-relaxed
                  text-[#6b7280]
                  group-hover:text-white/70
                  transition-colors
                  duration-300
                "
              >
                {reason.description}

                {reason.year && (
                  <span className="text-[#3b82f6] underline">
                    {reason.year}
                  </span>
                )}

                {reason.extraDescription}

                {reason.links.length > 0 && (
                  <>
                    {" "}
                    {reason.links.map((link, i) => (
                      <span key={i}>
                        <a
                          href="#"
                          className="
                            text-[#3b82f6]
                            underline
                            hover:text-blue-300
                            transition-colors
                          "
                        >
                          {link}
                        </a>

                        {i < reason.links.length - 1 &&
                          (i === reason.links.length - 2
                            ? ", and "
                            : ", ")}
                      </span>
                    ))}
                    .
                  </>
                )}

                {reason.certLinks &&
                  reason.certLinks.length > 0 && (
                    <>
                      {" "}
                      {reason.certLinks.map((link, i) => (
                        <span key={i}>
                          <a
                            href="#"
                            className="
                              text-[#3b82f6]
                              underline
                              hover:text-blue-300
                              transition-colors
                            "
                          >
                            {link}
                          </a>

                          {i < reason.certLinks.length - 1 && ", "}
                        </span>
                      ))}
                      .
                    </>
                  )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}