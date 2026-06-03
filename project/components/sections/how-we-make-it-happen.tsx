"use client"

import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

import { Settings } from "lucide-react"

const steps = [
  {
    title: "CLIENT\nONBOARDING",
    step: "1",
    description:
      "Deep analysis of goals and daily tasks highlights ways to improve efficiency, setting up clear communication channels and a customized plan from day one.",
    descRow: "odd", // odd = 1st desc row (top-aligned with shorter connector)
  },
  {
    title: "SMART\nPLANNING",
    step: "2",
    description:
      "Project timelines and budgets stay on track through clear guidelines, realistic timelines, and risk prevention before any technical setup begins.",
    descRow: "even",
  },
  {
    title: "QUALITY\nBUILDING",
    step: "3",
    description:
      "Smart AI tools (like language and machine learning models) are used alongside proven quality methods to eliminate errors and constantly improve the product.",
    descRow: "odd",
  },
  {
    title: "SYSTEM\nSECURITY",
    step: "4",
    description:
      "Highly secure and scalable systems are built on top-tier cloud systems, supported by regular safety checks and active monitoring to prevent downtime.",
    descRow: "even",
  },
  {
    title: "LONG-TERM\nPARTNERSHIP",
    step: "5",
    description:
      "Success relies on shared milestones, regular reviews, and cost-saving choices that systematically clear out roadblocks and keep support simple.",
    descRow: "odd",
  },
]

// Innermost core colors vary slightly per screenshot
const coreColors = ["#3b67ff", "#3b67ff", "#2563eb", "#3b82f6", "#3b67ff"]
const midColors  = ["#0d1e3c", "#0d1e3c", "#0d2a70", "#0d1e3c", "#0d1e3c"]
const ringColors = ["#1a3a6b", "#1a3a6b", "#1a4aaa", "#1a3a6b", "#1e4480"]

export function HowWeMakeItHappen() {
  const sectionRef    = useRef<HTMLDivElement>(null)
  const headingRef    = useRef<HTMLDivElement>(null)
  const lineRef       = useRef<HTMLDivElement>(null)
  const circleRefs    = useRef<(HTMLDivElement | null)[]>([])
  const connectorRefs = useRef<(HTMLDivElement | null)[]>([])
  const descRefs      = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 1. Heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 88%" },
        }
      )

      // 2. Horizontal rule draws left → right
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1, duration: 1.4, ease: "power2.inOut",
          scrollTrigger: { trigger: lineRef.current, start: "top 82%" },
        }
      )

      // 3. Circles scale in with stagger
      circleRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.55 },
          {
            opacity: 1, scale: 1, duration: 0.75, ease: "back.out(1.7)",
            delay: i * 0.13,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        )
        // Idle float
        gsap.to(el, {
          y: -6, duration: 2.4 + i * 0.3, repeat: -1, yoyo: true,
          ease: "sine.inOut", delay: i * 0.4,
        })
      })

      // 4. Connectors grow down
      connectorRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { scaleY: 0, transformOrigin: "top center", opacity: 0 },
          {
            scaleY: 1, opacity: 1, duration: 0.55, ease: "power2.out",
            delay: i * 0.13 + 0.35,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        )
      })

      // 5. Description paragraphs
      descRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 18 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
            delay: i * 0.13 + 0.5,
            scrollTrigger: { trigger: el, start: "top 92%" },
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 lg:py-28 bg-[#f5f7fc] overflow-hidden"
    >
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">

        {/* ── SECTION HEADER ── */}
        <div ref={headingRef} className="mb-12 lg:mb-20">
          <div className="flex items-center gap-2 mb-3">
             <Settings className="w-4 h-4 text-black/60" />
            <span className="text-[#3b67ff] text-[13px] font-semibold tracking-widest uppercase">
              Our Process
            </span>
          </div>

          <h2 className="text-[30px] sm:text-[38px] lg:text-[46px] font-extrabold text-[#0d1e3c] leading-[1.1] tracking-[-1px] mb-4">
            HOW WE MAKE IT HAPPEN
          </h2>
          <p className="text-[#4b5a72] text-[15px] sm:text-[16px] leading-[1.8] max-w-[640px]">
            A structured delivery lifecycle powered by industry-leading tools and validated by
            global credentials.
          </p>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden lg:block">

          {/* CIRCLES ROW */}
          <div className="relative flex items-center justify-between gap-0">

            {/* Horizontal connector line behind circles */}
            <div
              ref={lineRef}
              className="absolute top-1/2 left-[calc(9%+10px)] right-[calc(9%+10px)] -translate-y-1/2 h-[1px] z-0"
              style={{ background: "linear-gradient(90deg, #c8d8f8 0%, #3b67ff55 50%, #c8d8f8 100%)" }}
            />

            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => { circleRefs.current[i] = el }}
                className="relative z-10"
                style={{ width: "18.5%", aspectRatio: "1/1" }}
              >
                <ConcentricCircle title={step.title} index={i} />
              </div>
            ))}
          </div>

          {/* CONNECTOR + BADGE + DESCRIPTION ROW */}
          <div className="flex justify-between mt-0">
            {steps.map((step, i) => {
              const isOdd = step.descRow === "odd"
              return (
                <div
                  key={i}
                  className="flex flex-col items-center"
                  style={{ width: "18.5%" }}
                >
                  {/* Connector stem */}
                  <div
                    ref={(el) => { connectorRefs.current[i] = el }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="w-px"
                      style={{
                        height: isOdd ? "16px" : "132px",
                        background: "linear-gradient(180deg, #3b67ff60, #3b67ff30)",
                      }}
                    />

                    {/* Number badge */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10"
                      style={{
                        background: "#3b67ff",
                        border: "3px solid #fff",
                        boxShadow: "0 4px 16px rgba(59,103,255,0.38)",
                      }}
                    >
                      <span className="text-white text-[13px] font-bold leading-none">{step.step}</span>
                    </div>

                    <div
                      className="w-px"
                      style={{
                        height: isOdd ? "44px" : "20px",
                        background: "linear-gradient(180deg, #3b67ff30, #3b67ff60)",
                      }}
                    />

                    {/* Arrow */}
                    <svg width="10" height="7" viewBox="0 0 10 7">
                      <path d="M5 7L0.5 0.5h9L5 7z" fill="#3b67ff" opacity="0.45"/>
                    </svg>
                  </div>

                  {/* Description */}
                  <div
                    ref={(el) => { descRefs.current[i] = el }}
                    className="mt-4 text-center text-[#4b5a72] leading-[1.72] px-1"
                    style={{ fontSize: "clamp(12px, 1vw, 13.5px)" }}
                  >
                    {step.description}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── MOBILE / TABLET ── */}
        <div className="lg:hidden space-y-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5">
              {/* Left track */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "#3b67ff",
                    border: "3px solid #fff",
                    boxShadow: "0 4px 14px rgba(59,103,255,0.35)",
                  }}
                >
                  <span className="text-white text-[13px] font-bold">{step.step}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: "linear-gradient(#3b67ff40,#3b67ff10)", minHeight: 48 }} />
                )}
              </div>

              {/* Right content */}
              <div className="flex-1 pb-2">
                <div className="w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] mb-4">
                  <ConcentricCircle title={step.title} index={i} />
                </div>
                <p className="text-[#4b5a72] text-[14px] leading-[1.78]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Concentric circle component
   4 rings: outermost transparent border ring,
   dark navy ring, medium navy ring, bright blue core
───────────────────────────────────────────── */
function ConcentricCircle({ title, index }: { title: string; index: number }) {
  return (
    <div className="relative w-full h-full" style={{ aspectRatio: "1/1" }}>

      {/* Ring 1 – outermost: transparent bg, thin light border */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: "1.5px solid #c3d4f0", background: "transparent" }}
      />

      {/* Ring 2 – dark navy (82% inset) */}
      <div
        className="absolute rounded-full"
        style={{ inset: "8%", background: midColors[index] }}
      />

      {/* Ring 3 – mid navy ring visible as a lighter band (18% inset) */}
      <div
        className="absolute rounded-full"
        style={{ inset: "18%", background: ringColors[index] }}
      />

      {/* Ring 4 – bright blue core with text (28% inset) */}
      <div
        className="absolute rounded-full flex items-center justify-center"
        style={{ inset: "28%", background: coreColors[index] }}
      >
        <span
          className="text-white font-extrabold text-center leading-[1.25] tracking-wide uppercase"
          style={{
            fontSize: "clamp(8px, 1.05vw, 13px)",
            whiteSpace: "pre-line",
            padding: "0 8%",
          }}
        >
          {title}
        </span>
      </div>
    </div>
  )
}