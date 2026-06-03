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
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reason-card",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )
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