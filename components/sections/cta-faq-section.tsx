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
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br
        from-[#3b67ff] via-[#0f1b35] to-[#081120] overflow-hidden"
    >
      {/* Ambient glow orb */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[500px] rounded-full
          bg-[#3b67ff]/25 blur-[120px]
          pointer-events-none will-change-transform"
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0 items-center">

          {/* ── Left: CTA ──────────────────────────────────────────────────── */}
          <div className="flex flex-col justify-center lg:pr-16 xl:pr-20">
            <h2
              ref={headingRef}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance will-change-transform"
            >
              Ready to Accelerate Digital Innovation?
            </h2>
            <p
              ref={paraRef}
              className="text-sm sm:text-base lg:text-lg text-white/70 mb-6 sm:mb-8 text-pretty will-change-transform"
            >
              Join the ranks of global leaders who trust Beno Support for engineering excellence and strategic growth.
            </p>
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="bg-white text-[#0a1628] hover:bg-white/90 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg w-full sm:w-auto will-change-transform"
              >
                Request a Proposal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg w-full sm:w-auto will-change-transform"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>

          {/* ── Divider ────────────────────────────────────────────────────── */}
          <div className="hidden lg:block self-stretch w-px bg-white/15" />

          {/* ── Right: FAQ ─────────────────────────────────────────────────── */}
          <div className="lg:pl-16 xl:pl-20">
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8"
            >
              Frequently Asked Questions
            </motion.h3>

            <div className="divide-y divide-white/10">
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
                    <span className="text-sm sm:text-base font-semibold text-white/90 pr-4 group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white/70 transition-all duration-200 ${
                        openIndex === index ? "rotate-180 text-white/70" : ""
                      }`}
                    />
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
                        <p className="text-xs sm:text-sm text-white/55 leading-relaxed pb-4 sm:pb-5">
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
      </div>
    </section>
  )
}
