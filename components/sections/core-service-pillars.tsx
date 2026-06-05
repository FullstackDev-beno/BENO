"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Settings } from "lucide-react"
import Image from "next/image"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const services = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    title: "Core Engineering &\nApplication\nArchitecture",
    description: "Build scalable SaaS platforms, enterprise applications, APIs, mobile apps, and distributed systems with cloud-native software engineering expertise.",
    stat: "500+ apps shipped",
    statColor: "#10b981",
  },
  {
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    title: "Agentic AI &\nIntelligent\nAutomation",
    description: "Deploy enterprise AI agents, intelligent automation systems, and LLM-powered workflows that improve efficiency, customer experience, and operational intelligence.",
    stat: "40% cost reduction",
    statColor: "#3b67ff",
  },
  {
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop",
    title: "Enterprise & Startup\nTech Strategy",
    description: "Transform business operations with strategic technology consulting, modernization roadmaps, product architecture, and digital transformation advisory.",
    stat: "15+ years expertise",
    statColor: "#f59e0b",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    title: "Cloud & Platform\nEngineering",
    description: "Accelerate cloud adoption with Kubernetes, DevOps, multi-cloud infrastructure, platform engineering, and scalable deployment solutions.",
    stat: "99.98% uptime SLA",
    statColor: "#8b5cf6",
  },
  {
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
    title: "Cyber Resilience &\nThreat Intelligence",
    description: "Strengthen business security with proactive cybersecurity, threat intelligence, SOC services, compliance support, and AI security guardrails.",
    stat: "Zero-breach record",
    statColor: "#ef4444",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    title: "Digital Products &\nExperience\nEngineering",
    description: "Design user-centric digital experiences through UX research, UI engineering, product strategy, and conversion optimization.",
    stat: "96% retention rate",
    statColor: "#f97316",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    title: "Strategic IT Governance\n& Managed Services",
    description: "Optimize IT operations with managed infrastructure, vCIO consulting, helpdesk support, governance frameworks, and cloud management services.",
    stat: "24/7 managed support",
    statColor: "#0ea5e9",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    title: "Workforce Technology\n& Human Capital\nAdvisory",
    description: "Modernize workforce operations with HR tech integration, AI upskilling programs, HR automation, and workforce productivity solutions.",
    stat: "3x productivity gains",
    statColor: "#a855f7",
  },
]

export function CoreServicePillars() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= 1024

    const ctx = gsap.context(() => {
      // HEADER: staggered reveal
      const badge   = headerRef.current?.querySelector(".svc-label")
      const heading = headerRef.current?.querySelector("h2")
      const subtext = headerRef.current?.querySelector("p")

      if (badge) gsap.fromTo(badge,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.65, ease: "back.out(2)",
          scrollTrigger: { trigger: headerRef.current, start: "top 88%" } }
      )
      if (heading) gsap.fromTo(heading,
        { opacity: 0, y: 40, skewY: 1.5 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.0, ease: "expo.out", delay: 0.8,
          scrollTrigger: { trigger: headerRef.current, start: "top 88%" } }
      )
      if (subtext) gsap.fromTo(subtext,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2,
          scrollTrigger: { trigger: headerRef.current, start: "top 88%" } }
      )

      if (!isDesktop()) {
        // MOBILE: depth-pop stagger
        const mCards = trackRef.current?.querySelectorAll(".svc-card")
        if (mCards?.length) {
          gsap.set(mCards, {
            opacity: 0, y: 110, scale: 0.82,
            rotateX: 14, transformPerspective: 1200, transformOrigin: "center top",
            willChange: "transform, opacity",
          })
          gsap.to(mCards, {
            opacity: 1, y: 0, scale: 1, rotateX: 0,
            duration: 0.88, stagger: 0.1, ease: "back.out(2)",
            clearProps: "willChange,rotateX,transformPerspective,transformOrigin",
            scrollTrigger: { trigger: trackRef.current, start: "top 82%", toggleActions: "play none none none" },
          })
        }
        return
      }

      // DESKTOP: Awwwards horizontal pin
      const track = trackRef.current
      if (!track) return

      const cards = Array.from(track.querySelectorAll(".svc-card"))

      // All cards: full opacity from the start — no dimming
      gsap.set(cards, { opacity: 1 })

      const slideDistance = track.scrollWidth - window.innerWidth + 160

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${slideDistance}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // Track slides left immediately — no dwell, no blocking pause
      tl.to(track, { x: () => -slideDistance, ease: "none", duration: 1 })

      cards.forEach((card) => {
        const el  = card as HTMLElement
        const img = el.querySelector("img")
        const enter = () => {
          gsap.to(el,  { y: -10, scale: 1.02, duration: 0.4, ease: "power2.out" })
          if (img) gsap.to(img, { scale: 1.06, duration: 0.55, ease: "power2.out" })
        }
        const leave = () => {
          gsap.to(el,  { y: 0,  scale: 1,    duration: 0.4, ease: "power2.inOut" })
          if (img) gsap.to(img, { scale: 1,   duration: 0.55, ease: "power2.inOut" })
        }
        el.addEventListener("mouseenter", enter)
        el.addEventListener("mouseleave", leave)
      })
    }, sectionRef)

    const onResize = () => { ctx.revert(); ScrollTrigger.refresh() }
    window.addEventListener("resize", onResize, { passive: true })

    return () => {
      ctx.revert()
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden">

      {/* HEADER — always visible above the pin */}
      <div ref={headerRef} className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pb-8 lg:pb-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <div className="svc-label flex items-center gap-2 mb-3">
              <Settings className="w-4 h-4 text-[#1e3a5f]" />
              <span className="text-sm text-[#6b7280]">Our Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] tracking-tight mb-4">
              OUR CORE SERVICE PILLARS
            </h2>
            <p className="text-[#6b7280] text-sm sm:text-[15px] lg:text-base max-w-2xl leading-relaxed">
              Our technology services help startups, SMBs, and enterprises accelerate innovation, optimize operations, modernize infrastructure, and build scalable digital ecosystems for long-term growth.
            </p>
          </div>
          <a href="#services" className="flex items-center gap-2 text-[#1e3a5f] text-sm font-medium hover:text-[#3b67ff] transition-colors shrink-0">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* HORIZONTAL TRACK */}
      <div className="pl-4 sm:pl-6 lg:pl-8 pb-12 lg:pb-20">
        <div
          ref={trackRef}
          className="flex gap-5 lg:gap-7 flex-col sm:flex-col lg:flex-row lg:will-change-transform"
          style={{ width: "max-content" }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="svc-card group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100
                w-full sm:w-full lg:w-[clamp(300px,36vw,420px)] lg:flex-shrink-0 will-change-transform flex flex-col"
            >
              <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />
                <span
                  className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-white text-[11px] font-bold tracking-wide shadow-lg"
                  style={{ background: service.statColor }}
                >
                  {service.stat}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#1e3a5f] leading-tight mb-3 whitespace-pre-line group-hover:text-[#3b67ff] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#6b7280] text-sm sm:text-[15px] leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-5">
                  <Button className="w-full bg-[#3b67ff] hover:bg-[#2d4a7c] text-white py-3 text-sm sm:text-[15px] font-medium rounded-lg">
                    Request A Proposal
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
