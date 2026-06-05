"use client"

import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const government = [
  { name: "Indian Air Force",  logo: "/publicimg/airforce.svg" },
  { name: "Indian Army",       logo: "/publicimg/army.svg" },
  { name: "Indian Railways",   logo: "/publicimg/client3.png" },
  { name: "Bihar Tourism",     logo: "/publicimg/client9.png" },
  { name: "Noida Authority",   logo: "/publicimg/client4.png" },
]

const technology = [
  { name: "Google",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Damco",       logo: "/publicimg/client21.png" },
  { name: "NTT Data",    logo: "/publicimg/client14.png" },
  { name: "infodart",    logo: "/publicimg/client17.png" },
  { name: "Bit studios", logo: "/publicimg/client19.png" },
  { name: "Algoworks",   logo: "/publicimg/client20.png" },
]

const fintech = [
  { name: "GPay",     logo: "/publicimg/client28.png" },
  { name: "Yes Bank", logo: "/publicimg/client24.png" },
  { name: "Amazon Pay", logo: "/publicimg/client30.png" },
]

const healthcare = [
  { name: "Max Healthcare",   logo: "/publicimg/maxH.svg" },
  { name: "Fortis",           logo: "/publicimg/fortisH.svg" },
  { name: "Prakash Hospital", logo: "/publicimg/prakashH.svg" },
]

const brandColors: Record<string, string> = {
  "Damco": "#e63224", "NTT Data": "#003087", "infodart": "#0078d7",
  "Bit studios": "#1a1a1a", "Algoworks": "#e84343",
  "Yes Bank": "#003399", "BharatPe": "#00b386",
  "Max Healthcare": "#004990", "Fortis": "#006b3f", "Prakash Hospital": "#e05c2e",
}

// Repeat items enough times so the track is always wider than any viewport
const REPS = 7

// ─── ClientCard ───────────────────────────────────────────────────────────────
function ClientCard({
  client,
  tall = false,
}: {
  client: { name: string; logo: string | null }
  tall?: boolean
}) {
  return (
    <div
      className="
        flex-shrink-0 group
        flex flex-col items-center justify-center gap-2
        rounded-2xl border border-[#e8eef8] bg-white
        hover:border-[#3b67ff]/40
        hover:shadow-[0_10px_36px_rgba(59,103,255,0.13)]
        hover:bg-[#f5f8ff]
        transition-all duration-200 cursor-default select-none
      "
      style={{ width: tall ? 172 : 156, height: tall ? 144 : 104, padding: "12px 14px", flexShrink: 0 }}
    >
      {client.logo ? (
        <img
          src={client.logo}
          alt={client.name}
          draggable={false}
          className="object-contain group-hover:scale-108 transition-transform duration-300"
          style={{ width: tall ? 90 : 72, height: tall ? 58 : 40 }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
        />
      ) : (
        <span
          className="font-bold text-[13px] text-center leading-tight"
          style={{ color: brandColors[client.name] ?? "#0d1e3c" }}
        >
          {client.name}
        </span>
      )}
      <span className="text-[10px] text-[#6b7a99] font-semibold text-center leading-tight tracking-wide group-hover:text-[#3b67ff] transition-colors duration-200">
        {client.name}
      </span>
    </div>
  )
}

// ─── MarqueeRow ───────────────────────────────────────────────────────────────
function MarqueeRow({
  label,
  items,
  speed = 55,
  reverse = false,
  tall = false,
}: {
  label: string
  items: { name: string; logo: string | null }[]
  speed?: number
  reverse?: boolean
  tall?: boolean
}) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)
  const tweenRef   = useRef<gsap.core.Tween | null>(null)

  // Flatten REPS copies of the items array into a single array
  const repeated = Array.from({ length: REPS }, () => items).flat()

  useEffect(() => {
    const wrapper = wrapperRef.current
    const track   = trackRef.current
    if (!wrapper || !track) return

    let cancelled = false
    let cleanup: (() => void) | null = null

    // Wait one frame for layout to settle so scrollWidth is accurate
    const raf = requestAnimationFrame(() => {
      if (cancelled) return

      // Width of exactly one set of items
      const setW = track.scrollWidth / REPS

      // fromTo with repeat: -1 gives a perfect seamless loop:
      //   normal : 0 → -setW → (jumps to 0) → …
      //   reverse: -setW → 0 → (jumps to -setW) → …
      tweenRef.current = gsap.fromTo(
        track,
        { x: reverse ? -setW : 0 },
        {
          x: reverse ? 0 : -setW,
          duration: setW / speed,  // speed = px per second
          ease: "none",
          repeat: -1,
        }
      )

      const pause  = () => tweenRef.current?.pause()
      const resume = () => tweenRef.current?.resume()
      wrapper.addEventListener("mouseenter", pause)
      wrapper.addEventListener("mouseleave", resume)

      cleanup = () => {
        tweenRef.current?.kill()
        wrapper.removeEventListener("mouseenter", pause)
        wrapper.removeEventListener("mouseleave", resume)
      }
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      cleanup?.()
    }
  }, [reverse, speed])

  return (
    <div>
      {/* Row label */}
      <div className="flex items-center gap-4 mb-5">
        <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0d1e3c] shrink-0">{label}</h3>
        <div className="flex-1 h-px bg-[#e2e8f4]" />
      </div>

      {/* Marquee wrapper — edge fade via CSS mask */}
      <div
        ref={wrapperRef}
        className="overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
          maskImage:        "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-4 py-2"
          style={{ width: "max-content" }}
        >
          {repeated.map((client, i) => (
            <ClientCard key={`${label}-${i}`} client={client} tall={tall} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── FeaturedClients ──────────────────────────────────────────────────────────
export function FeaturedClients() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 90%" },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={headingRef} className="mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h3M12 9h3M9 3v3M9 12v3" stroke="#3b67ff" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="9" cy="9" r="2.2" fill="#3b67ff"/>
            </svg>
            <span className="text-[#3b67ff] text-[13px] font-semibold tracking-widest uppercase">Our Clients</span>
          </div>
          <h2 className="text-[30px] sm:text-[38px] lg:text-[46px] font-extrabold text-[#0d1e3c] leading-[1.1] tracking-[-1px] mb-4">
            OUR FEATURED CLIENTS
          </h2>
          <p className="text-[#4b5a72] text-[15px] sm:text-[16px] leading-[1.8] max-w-[700px]">
            We collaborate with startups, growing businesses, enterprises, and public sector organizations worldwide to
            deliver AI-driven innovation, scalable digital platforms, cloud transformation, and enterprise technology solutions.
          </p>
        </div>

        {/* Four labelled marquee strips — alternating direction for visual richness */}
        <div className="space-y-10 lg:space-y-14">
          <MarqueeRow label="Government"  items={government}  speed={44} tall         />
          <MarqueeRow label="Technology"  items={technology}  speed={55} reverse      />
          <MarqueeRow label="Fintech"     items={fintech}     speed={40}              />
          <MarqueeRow label="Healthcare"  items={healthcare}  speed={48} reverse      />
        </div>

      </div>
    </section>
  )
}