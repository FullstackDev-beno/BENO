"use client"

import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const government = [
  { name: "Indian Air Force",  logo: "/publicimg/client7.png" },
  { name: "Indian Army",       logo: "/publicimg/client8.png" },
  { name: "Indian Railways",   logo: "/publicimg/client9.png" },
  { name: "Bihar Tourism",     logo: "/publicimg/client10.png" },
  { name: "Noida Authority",   logo: "/publicimg/client11.png" },
]

const technology = [
  { name: "Google",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Damco",       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Damco_logo.svg/200px-Damco_logo.svg.png" },
  { name: "NTT Data",    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/NTT-DATA-Logo.svg/200px-NTT-DATA-Logo.svg.png" },
  { name: "infodart",    logo: "https://www.infodart.com/wp-content/uploads/2021/01/infodart-logo.png" },
  { name: "Bit studios", logo: "https://bitstudios.com/wp-content/uploads/2021/06/bit-studios-logo.png" },
  { name: "Algoworks",   logo: "https://www.algoworks.com/wp-content/uploads/2021/09/algoworks-logo.png" },
]

const fintech = [
  { name: "GPay",     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/200px-Google_Pay_Logo.svg.png" },
  { name: "Yes Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Yes_Bank_Logo.svg/200px-Yes_Bank_Logo.svg.png" },
  { name: "BharatPe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/BharatPe_logo.svg/200px-BharatPe_logo.svg.png" },
]

const healthcare = [
  { name: "Max Healthcare",   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Max_Healthcare_logo.svg/200px-Max_Healthcare_logo.svg.png" },
  { name: "Fortis",           logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Fortis_Healthcare_logo.svg/200px-Fortis_Healthcare_logo.svg.png" },
  { name: "Prakash Hospital", logo: "https://www.prakashhospital.com/images/logo.png" },
]

const brandColors: Record<string, string> = {
  "Damco": "#e63224", "NTT Data": "#003087", "infodart": "#0078d7",
  "Bit studios": "#1a1a1a", "Algoworks": "#e84343",
  "Yes Bank": "#003399", "BharatPe": "#00b386",
  "Max Healthcare": "#004990", "Fortis": "#006b3f", "Prakash Hospital": "#e05c2e",
}

function ClientCard({ client, tall = false }: { client: { name: string; logo: string | null }; tall?: boolean }) {
  return (
    <div
      className="client-card group flex flex-col items-center justify-center gap-2 rounded-2xl border border-[#e8eef8] bg-white hover:border-[#3b67ff]/30 hover:shadow-lg transition-all duration-250 cursor-default"
      style={{ minHeight: tall ? 140 : 100, padding: tall ? "20px 16px" : "14px 12px" }}
    >
      {client.logo && (
        <img
          src={client.logo}
          alt={client.name}
          className={`object-contain group-hover:scale-105 transition-transform duration-300 ${tall ? "w-[80px] h-[64px]" : "w-[60px] h-[44px]"}`}
          onError={(e) => {
            const t = e.target as HTMLImageElement
            t.style.display = "none"
            const next = t.nextElementSibling as HTMLElement | null
            if (next) next.style.display = "block"
          }}
        />
      )}
      <span
        className={`font-bold text-center leading-tight ${tall ? "text-[13px]" : "text-[11px]"}`}
        style={{
          color: brandColors[client.name] ?? "#0d1e3c",
          display: client.logo ? "none" : "block",
        }}
      >
        {client.name}
      </span>
      <span className="text-[11px] text-[#6b7a99] font-medium text-center leading-tight">
        {client.name}
      </span>
    </div>
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0d1e3c] shrink-0">{label}</h3>
      <div className="flex-1 h-px bg-[#e2e8f4]" />
    </div>
  )
}

export function FeaturedClients() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { opacity: 0, y: 28 })
      gsap.to(headingRef.current, {
        opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 88%" },
      })

      const rows = sectionRef.current?.querySelectorAll(".client-row")
      rows?.forEach((row) => {
        const cards = row.querySelectorAll(".client-card")
        gsap.set(cards, { opacity: 0, y: 22, scale: 0.92 })
        gsap.to(cards, {
          opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out", stagger: 0.07,
          scrollTrigger: { trigger: row, start: "top 86%" },
        })
      })
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

        <div className="space-y-10 lg:space-y-14">

          {/* Government — 5 tall cards in one row */}
          <div className="client-row">
            <SectionLabel label="Government" />
            <div className="grid grid-cols-5 gap-4">
              {government.map((c) => <ClientCard key={c.name} client={c} tall />)}
            </div>
          </div>

          {/* Technology — 6 cards in one row */}
          <div className="client-row">
            <SectionLabel label="Technology" />
            <div className="grid grid-cols-6 gap-3 sm:gap-4">
              {technology.map((c) => <ClientCard key={c.name} client={c} />)}
            </div>
          </div>

          {/* Fintech + Healthcare — side by side */}
          <div className="client-row grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Fintech */}
            <div>
              <SectionLabel label="Fintech" />
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {fintech.map((c) => <ClientCard key={c.name} client={c} />)}
              </div>
            </div>
            {/* Healthcare */}
            <div>
              <SectionLabel label="Healthcare" />
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {healthcare.map((c) => <ClientCard key={c.name} client={c} />)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}