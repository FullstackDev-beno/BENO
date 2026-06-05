"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "@/lib/gsap"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

// ─── FAQ Data ──────────────────────────────────────────────────────────────────
const faqs = [
  {
    question: "What services does Beno Support offer?",
    answer:
      "We offer end-to-end technology services including core engineering, Agentic AI, Cloud Platform engineering, Cybersecurity, Digital Experience design, and Strategic Tech Governance.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "We specialize in Banking & Finance (BFSI), E-Commerce & Retail, Healthcare, Education, Manufacturing, and Enterprise solutions.",
  },
  {
    question: "How can you help with AI consulting?",
    answer:
      "We provide strategic AI consulting, model selection, implementation, and integration services tailored to your business goals.",
  },
  {
    question: "Do you provide cloud modernization services?",
    answer:
      "Yes, we offer cloud-native transformation, microservices architecture, API development, and CI/CD pipelines.",
  },
  {
    question: "How do you ensure SaaS scalability?",
    answer:
      "We implement scalable architectures using cloud-native technologies, containerization, microservices, and auto-scaling solutions.",
  },
  {
    question: "What is your approach to Cybersecurity?",
    answer:
      "We follow zero-trust architecture, regular audits, penetration testing, and compliance frameworks (SOC2, ISO 27001, GDPR).",
  },
  {
    question: "Do you offer Managed IT services?",
    answer:
      "Yes, we provide 24/7 monitoring, infrastructure management, security operations, and dedicated support teams.",
  },
  {
    question: "Where is Beno Support located?",
    answer:
      "We have a global presence with offices across multiple locations to provide round-the-clock support worldwide.",
  },
]

// ─── CTAFAQSection ─────────────────────────────────────────────────────────────
export function CTAFAQSection() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const paraRef     = useRef<HTMLParagraphElement>(null)
  const buttonsRef  = useRef<HTMLDivElement>(null)
  const glowRef     = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient glow drift
      gsap.to(glowRef.current, {
        x: 40,
        y: -30,
        scale: 1.15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Entrance timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 50, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.95, ease: "expo.out" },
        0
      )
      tl.fromTo(
        paraRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.25
      )
      const btns = buttonsRef.current?.children
      if (btns) {
        tl.fromTo(
          Array.from(btns),
          { opacity: 0, scale: 0.7, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.75, stagger: 0.12, ease: "elastic.out(1, 0.5)" },
          0.45
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">

        {/* ── Left: CTA — dark gradient ── */}
        <div className="relative py-20 sm:py-24 lg:py-32 px-10 sm:px-14 lg:px-20 xl:px-24 bg-gradient-to-br from-[#3b67ff] via-[#0f1b35] to-[#081120] overflow-hidden flex flex-col justify-center gap-8">
          {/* Ambient glow orb */}
          <div
            ref={glowRef}
            className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#3b67ff]/25 blur-[120px] pointer-events-none will-change-transform"
          />
          {/* Top label */}
          <div className="relative z-10 inline-flex items-center gap-2 self-start">
            <span className="w-2 h-2 rounded-full bg-[#3b67ff] ring-4 ring-[#3b67ff]/30" />
            <span className="text-[11px] font-semibold tracking-widest text-white/50 uppercase">Get In Touch</span>
          </div>

          <div className="relative z-10 space-y-5">
            <h2
              ref={headingRef}
              className="text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[52px] font-extrabold text-white leading-[1.1] tracking-[-1px] text-balance will-change-transform"
            >
              Ready to Accelerate<br />Digital Innovation?
            </h2>
            <p
              ref={paraRef}
              className="text-[15px] sm:text-[17px] text-white/65 leading-[1.8] max-w-[420px] will-change-transform"
            >
              Join the ranks of global leaders who trust Beno Support for engineering excellence and strategic growth. 500+ projects delivered. 15+ years of depth.
            </p>
          </div>

          {/* Stats row */}
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

          <div ref={buttonsRef} className="relative z-10 flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-white text-[#0a1628] hover:bg-white/90 px-8 py-6 text-[15px] font-semibold rounded-xl w-full sm:w-auto will-change-transform"
            >
              Request a Proposal
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-[15px] rounded-xl w-full sm:w-auto will-change-transform"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* ── Right: FAQ — white background ── */}
        <div className="bg-white-75 py-20 sm:py-24 lg:py-32 px-10 sm:px-14 lg:px-20 xl:px-24 flex flex-col justify-center">
          {/* Top label */}
          <div className="inline-flex items-center gap-2 self-start mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b67ff]" />
            <span className="text-[11px] font-semibold tracking-widest text-[#3b67ff] uppercase">FAQ</span>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[22px] sm:text-[26px] lg:text-[30px] font-extrabold text-[#0d1e3c] mb-8 tracking-[-0.5px]"
          >
            Frequently Asked Questions
          </motion.h3>

          <div className="divide-y divide-[#e8eef8]">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
                >
                  <span className="text-[14px] sm:text-[15px] font-semibold text-[#0d1e3c] pr-4 group-hover:text-[#3b67ff] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openIndex === index ? "bg-[#3b67ff]" : "bg-[#f1f5fd]"
                  }`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-all duration-200 ${
                        openIndex === index ? "rotate-180 text-white" : "text-[#94a3b8]"
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[13px] sm:text-[14px] text-[#4b5a72] leading-relaxed pb-5 pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

