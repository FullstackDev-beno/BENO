"use client"

import { BadgeCheck, FileText, Settings, Star, UserRoundCheck } from "lucide-react"
import { useState } from "react"

// ─────────────────────────────────────────────────────────────
// SAMPLE DATA SHAPE — swap this per service page
// ─────────────────────────────────────────────────────────────
const SAMPLE_DATA = {
  hero: {
    tagline: "Engineered for Scale",
    tagline2: "Built for Innovation",
    description:
      "We engineer resilient SaaS platforms, cloud-native architectures, and enterprise applications that power modern business growth.",
    ctaLabel: "Get A Free Consultation",
    badges: ["Clutch", "Good firms"],
    // heroImage: "/images/hero-person.png"  ← pass your image URL
  },

  intro: {
    sectionLabel: "Intro",
    title: "BEYOND CODE: HIGH-PERFORMANCE SOFTWARE ENGINEERING",
    paragraphs: [
      "Modern businesses require more than software development — they require scalable engineering systems built for performance, security, and continuous innovation.",
      "At Beno Support, we help organizations develop cloud-native applications, SaaS platforms, mobile experiences, and API-driven ecosystems that support digital transformation and long-term business growth.",
      "Our engineering teams combine architecture expertise, agile delivery, DevOps practices, and product-focused execution to deliver high-performance digital solutions.",
    ],
  },

  capabilities: {
    sectionLabel: "Core Engineering Capabilities",
    title: "CORE ENGINEERING CAPABILITIES",
    ctaLabel: "Explore More Services",
    cards: [
      {
        icon: "🌐",
        title: "Custom SaaS Development",
        description:
          "We design and develop scalable SaaS platforms that support subscription models, enterprise workflows, and cloud-native scalability for startups, STBs, and growing enterprises.",
        features: [
          "Multi-tenant SaaS architecture",
          "Subscription & billing integrations",
          "Role-based access systems",
          "Scalable backend engineering",
          "Cloud-native deployment",
          "Performance optimization",
        ],
        highlighted: false,
      },
      {
        icon: "💻",
        title: "Web Application Development",
        description:
          "Our web engineering services focus on secure, responsive, and scalable applications built using modern frontend and backend technologies.",
        features: [
          "Custom web applications",
          "Progressive web apps",
          "Secure authentication systems",
          "API-first architecture",
          "Real-time dashboards",
          "Scalable frontend frameworks",
        ],
        highlighted: false,
      },
      {
        icon: "📱",
        title: "Mobile App Development (iOS & Android)",
        description:
          "We create high-performance mobile applications for iOS and Android platforms that deliver seamless user experiences and scalable business functionality.",
        features: [
          "Native & cross-platform apps",
          "Flutter & React Native development",
          "Enterprise mobility solutions",
          "Mobile UI/UX optimization",
          "Secure mobile integrations",
          "App modernisation services",
        ],
        highlighted: true,
      },
    ],
  },

  industries: {
    sectionLabel: "Industries",
    title: "INDUSTRIES WE ENGINEER FOR",
    items: [
      { icon: "🏦", label: "BFSI" },
      { icon: "🏥", label: "Healthcare" },
      { icon: "🏭", label: "Manufacturing" },
      { icon: "🛒", label: "E-Commerce" },
      { icon: "🚚", label: "Logistics" },
      { icon: "💻", label: "IT/SaaS" },
      { icon: "🎓", label: "Education" },
      { icon: "📋", label: "Insurance" },
      { icon: "🏠", label: "Real Estate" },
      { icon: "🏛️", label: "Government" },
      { icon: "✈️", label: "Travel" },
      { icon: "🚀", label: "Startups" },
    ],
  },

  useCases: {
    sectionLabel: "Case Study",
    title: "STRATEGIC USE CASES",
    cases: [
      {
        tabLabel: "BIHAR TOURISM",
        tabSub: "CMS & Mobile App Development",
        projectTitle: "State-Scale CMS & Mobile App Development",
        description:
          "Engineering a high-performance CMS web platform and integrated mobile application to modernise Bihar's digital tourism ecosystem.",
        bullets: [
          "Scalable Laravel CMS web platform deployed on Google Cloud",
          "Cross-platform Flutter mobile app with offline-first support",
          "Integrated in-app booking system for accommodations and tours",
        ],
        stats: [
          { value: "52%", label: "Increase in web traffic" },
          { value: "10K+", label: "App downloads in 90 days" },
          { value: "30%", label: "Boost in bookings" },
        ],
        ctaLabel: "View Case Study",
        // caseImage: "/images/bihar-tourism.png"
      },
      {
        tabLabel: "STRATOS",
        tabSub: "Enterprise SaaS Scaling",
        projectTitle: "Enterprise SaaS Platform Scaling",
        description:
          "Architected and scaled a multi-tenant SaaS platform from 500 to 50,000 active users with zero downtime migration.",
        bullets: [
          "Microservices re-architecture on AWS ECS",
          "Real-time analytics dashboard with WebSocket streams",
          "99.98% uptime SLA with automated failover",
        ],
        stats: [
          { value: "100x", label: "User growth in 8 months" },
          { value: "60%", label: "Infra cost reduction" },
          { value: "99.98%", label: "Uptime achieved" },
        ],
        ctaLabel: "View Case Study",
      },
      {
        tabLabel: "OMNI COGNITIVE",
        tabSub: "Intelligent AI Workflows",
        projectTitle: "Intelligent AI Workflow Automation",
        description:
          "Built an agentic AI platform that automates complex enterprise workflows, reducing manual processing time by 80%.",
        bullets: [
          "LLM-powered document parsing and routing engine",
          "Custom RAG pipeline with enterprise knowledge base",
          "Multi-agent orchestration with audit trail",
        ],
        stats: [
          { value: "80%", label: "Reduction in manual work" },
          { value: "3x", label: "Faster decision cycles" },
          { value: "40+", label: "Workflows automated" },
        ],
        ctaLabel: "View Case Study",
      },
    ],
  },
}

// ─────────────────────────────────────────────────────────────
// SECTION 1: HERO
// ─────────────────────────────────────────────────────────────
function HeroSection({ data }) {
  return (
    <section
      
      className="relative overflow-hidden bg-[#071020] min-h-screen flex flex-col"
    >
      <div className="relative z-10 flex-1 flex flex-col w-full mx-auto px-6 lg:px-10">

        {/* Spacer for fixed header */}
        <div className="h-[72px] shrink-0" />

        {/* GRID — left content | right stats */}
        <div className="flex-1 grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1.2fr_340px] gap-10 xl:gap-14 py-14 lg:py-0">

          {/* ─── LEFT ─── */}
          <div  className="flex flex-col justify-center">
            <h1 className="text-white font-extrabold leading-[1.08] tracking-[-2px] text-[38px] sm:text-[52px] md:text-[47px] lg:text-[52px] xl:text-[62px]">
              {data.tagline}{data.tagline2 && <><br />{data.tagline2}</>}
            </h1>

            <p className="mt-6 text-[#c8d4e3] text-[15px] sm:text-[17px] leading-[1.85] max-w-[560px]">
             {data.description}
            </p>

            {/* Single CTA */}
            <div className="mt-8">
              <button className="h-[50px] px-8 rounded-xl bg-[#3b67ff] text-white text-[15px] font-semibold hover:bg-[#2d55e0] transition-all active:scale-[0.98]">
                Get Started Now
              </button>
            </div>

            {/* Review badges */}
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              {/* Good firms */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-[#c89b2b] flex items-center justify-center shrink-0">
                  <Star className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-white text-[12px] font-semibold leading-tight">Good firms</p>
                  <div className="flex gap-[2px] mt-[2px]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-[10px] h-[10px] text-[#f59e0b] fill-[#f59e0b]" />)}
                  </div>
                </div>
              </div>

             

              {/* Clutch */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#ef4444] flex items-center justify-center shrink-0">
                  <span className="text-white text-[12px] font-extrabold leading-none">C</span>
                </div>
                <div>
                  <p className="text-white text-[12px] font-semibold leading-tight">Clutch</p>
                  <div className="flex gap-[2px] mt-[2px]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-[10px] h-[10px] text-[#f59e0b] fill-[#f59e0b]" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div className="h-[88px] shrink-0" />
      </div>

      {/* CENTER IMAGE — desktop absolute */}
      <div
        className="hidden lg:block absolute bottom-[88px] left-1/2 -translate-x-[30%] xl:-translate-x-[-10%] pointer-events-none z-20"
        style={{ width: "min(340px, 16vw)" }}
      >
        <img
          src="/images/herocenter.svg"
          alt="Hero"
          className="w-full object-contain drop-shadow-[0_0_60px_rgba(59,103,255,0.35)]"
        />
      </div>

      {/* Mobile center image */}
      <div className="lg:hidden relative flex justify-center my-4 z-10">
        <img
          src="/images/herocenter.svg"
          alt="Hero"
          className="w-[260px] sm:w-[300px] object-contain drop-shadow-2xl"
        />
      </div>

      {/* BLUE STRIP */}
      <div className="relative z-10 h-[88px] bg-gradient-to-r from-[#3b67ff] via-[#4d7bff] to-[#3b67ff] shrink-0" />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 2: INTRO
// ─────────────────────────────────────────────────────────────
function IntroSection({ data }) {
  return (
    <section style={{ background: "#fff", padding: "64px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        {/* Section label */}
         <div className="flex items-center gap-2 mb-3">
             <Settings className="w-4 h-4 text-black/60" />
            <span className="text-[#3b67ff] text-[13px] font-semibold tracking-widest uppercase">
             {data.sectionLabel}
            </span>
          </div>

        <h2 style={{
        //   fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
          fontSize: "clamp(22px, 3vw, 36px)",
          fontWeight: 800,
          color: "#0a1628",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          lineHeight: 1.15,
          marginBottom: 28,
        }}>
        {data.title.split(" ").slice(0, 4).join(" ")}<br/>  {data.title.split(" ")[4]}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {data.paragraphs.map((p, i) => (
            <p key={i} style={{
              color: "#4a5568",
              fontSize: 15,
              lineHeight: 1.75,
              textAlign: "center",
            }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 3: CAPABILITIES CARDS
// ─────────────────────────────────────────────────────────────
function CapabilitiesSection({ data }) {
  return (
    <section style={{
      background: "#0a1628",
      padding: "64px 40px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Label */}
        <div className="flex items-center gap-2 mb-3">
             <Settings className="w-4 h-4 text-white" />
            <span className="text-[#3b67ff] text-[13px] font-semibold tracking-widest uppercase">
             {data.sectionLabel}
            </span>
          </div>

        <h2 style={{
        //   fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
          fontSize: "clamp(24px, 3vw, 38px)",
          fontWeight: 800,
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          marginBottom: 40,
        }}>
          {data.title}
        </h2>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginBottom: 40,
        }}>
          {data.cards.map((card, i) => (
            <div
              key={i}
              style={{
                background: card.highlighted ? "#3b67ff" : "#fff",
                borderRadius: 12,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                position: "relative",
                overflow: "hidden",
                boxShadow: card.highlighted
                  ? "0 8px 32px rgba(59,103,255,0.4)"
                  : "0 2px 12px rgba(0,0,0,0.08)",
              }}
            >
              {/* Top accent stripe for highlighted */}
              {card.highlighted && (
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 4,
                  background: "rgba(255,255,255,0.3)",
                }} />
              )}

              <div style={{
                width: 44, height: 44,
                background: card.highlighted ? "rgba(255,255,255,0.15)" : "#eef2ff",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // fontSize: 20,
              }}>
                {card.icon}
              </div>
              

              <h3 style={{
                fontSize: 17,
                fontWeight: 700,
                color: card.highlighted ? "#fff" : "#0a1628",
                lineHeight: 1.3,
                // fontFamily: "'Barlow', sans-serif",
              }}>
                {card.title}
              </h3>

              <p style={{
                fontSize: 13,
                color: card.highlighted ? "rgba(255,255,255,0.82)" : "#4a5568",
                lineHeight: 1.65,
              }}>
                {card.description}
              </p>

              <div>
                <p style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: card.highlighted ? "rgba(255,255,255,0.7)" : "#3b67ff",
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}>
                  Key Features
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {card.features.map((f, fi) => (
                    <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{
                        color: card.highlighted ? "rgba(255,255,255,0.7)" : "#3b67ff",
                        fontSize: 11,
                        marginTop: 3,
                        flexShrink: 0,
                      }}>▸</span>
                      <span style={{
                        fontSize: 13,
                        color: card.highlighted ? "rgba(255,255,255,0.88)" : "#374151",
                        lineHeight: 1.45,
                      }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button style={{
            background: "#3b67ff",
            color: "#fff",
            border: "none",
            padding: "13px 32px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            letterSpacing: "0.3px",
          }}>
            {data.ctaLabel} <span style={{ fontSize: 16 }}>⌄</span>
          </button>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 4: INDUSTRIES
// ─────────────────────────────────────────────────────────────
function IndustriesSection({ data }) {
  return (
    <section style={{ background: "#fff", padding: "64px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ color: "#3b67ff", fontSize: 12 }}>⬡</span>
          <span style={{ color: "#3b67ff", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px" }}>{data.sectionLabel}</span>
        </div>

        <h2 style={{
        //   fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
          fontSize: "clamp(22px, 3vw, 36px)",
          fontWeight: 800,
          color: "#0a1628",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          marginBottom: 44,
        }}>
          {data.title}
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 12,
        }}>
          {data.items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                padding: "20px 12px",
                borderRadius: 10,
                border: "1px solid #e8ecf4",
                cursor: "pointer",
                transition: "all 0.2s",
                background: "#fafbfe",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#3b67ff"
                e.currentTarget.style.background = "#eef2ff"
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e8ecf4"
                e.currentTarget.style.background = "#fafbfe"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <span style={{ fontSize: 28 }}>{item.icon}</span>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#374151",
                textAlign: "center",
                letterSpacing: "0.2px",
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 5: USE CASES
// ─────────────────────────────────────────────────────────────
function UseCasesSection({ data }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = data.cases[activeIdx]

  return (
    <section style={{ background: "#f7f9fc", padding: "64px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ color: "#3b67ff", fontSize: 12 }}>⬡</span>
          <span style={{ color: "#3b67ff", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px" }}>{data.sectionLabel}</span>
        </div>

        <h2 style={{
        //   fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
          fontSize: "clamp(22px, 3vw, 36px)",
          fontWeight: 800,
          color: "#0a1628",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          marginBottom: 28,
        }}>
          {data.title}
        </h2>

        {/* Tab selector */}
        <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
          {data.cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              style={{
                padding: "12px 24px",
                borderRadius: 8,
                border: i === activeIdx ? "none" : "1.5px solid #d1d9e6",
                background: i === activeIdx ? "#3b67ff" : "#fff",
                color: i === activeIdx ? "#fff" : "#374151",
                cursor: "pointer",
                textAlign: "left",
                minWidth: 160,
                transition: "all 0.2s",
              }}
            >
              <div style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.5px",
                marginBottom: 4,
              }}>
                {c.tabLabel}
              </div>
              <div style={{
                fontSize: 11,
                opacity: i === activeIdx ? 0.85 : 0.6,
                lineHeight: 1.3,
              }}>
                {c.tabSub}
              </div>
            </button>
          ))}
        </div>

        {/* Case study card */}
        <div style={{
          background: "#fff",
          borderRadius: 14,
          border: "1px solid #e2e8f0",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 320,
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}>
          {/* Left: content */}
          <div style={{ padding: "36px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              {/* Logo/brand placeholder */}
              <div style={{
                width: 52, height: 52,
                background: "#e8f5e9",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                marginBottom: 20,
              }}>
                🌿
              </div>

              <h3 style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#0a1628",
                marginBottom: 12,
                // fontFamily: "'Barlow', sans-serif",
                lineHeight: 1.3,
              }}>
                {active.projectTitle}
              </h3>
              <p style={{ color: "#4a5568", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                {active.description}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                {active.bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: "#3b67ff", fontSize: 12, marginTop: 4, flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats row */}
            <div>
              <div style={{ display: "flex", gap: 28, marginBottom: 24, flexWrap: "wrap" }}>
                {active.stats.map((s, i) => (
                  <div key={i}>
                    <div style={{
                      fontSize: 28,
                      fontWeight: 800,
                      color: "#0a1628",
                    //   fontFamily: "'Barlow Condensed', sans-serif",
                      letterSpacing: "-0.5px",
                    }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.4, marginTop: 2 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <button style={{
                background: "#3b67ff",
                color: "#fff",
                border: "none",
                padding: "11px 24px",
                borderRadius: 7,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.2px",
              }}>
                {active.ctaLabel}
              </button>
            </div>
          </div>

          {/* Right: image / placeholder */}
          <div style={{
            background: "linear-gradient(135deg, #0d2550 0%, #1a3a6e 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {active.caseImage ? (
              <img src={active.caseImage} alt={active.projectTitle} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <div style={{
                textAlign: "center",
                color: "rgba(255,255,255,0.3)",
                fontSize: 13,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}>
                <span style={{ fontSize: 40 }}>📱</span>
                <span>caseImage prop</span>
              </div>
            )}
            {/* Decorative label */}
            <div style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "rgba(59,103,255,0.9)",
              color: "#fff",
              fontSize: 10,
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: 4,
              letterSpacing: "0.5px",
            }}>
              CMS Transformation
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// MASTER COMPONENT — pass `serviceData` prop per service page
// ─────────────────────────────────────────────────────────────
export default function ServicePage({ serviceData = SAMPLE_DATA }) {
  const { hero, intro, capabilities, industries, useCases } = serviceData
  return (
    <div     >
      <HeroSection data={hero} />
      <IntroSection data={intro} />
      <CapabilitiesSection data={capabilities} />
      <IndustriesSection data={industries} />
      <UseCasesSection data={useCases} />
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Named exports for individual section use
// ─────────────────────────────────────────────────────────────
export { HeroSection, IntroSection, CapabilitiesSection, IndustriesSection, UseCasesSection }