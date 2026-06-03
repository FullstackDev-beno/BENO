"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does Beno Support offer?",
    answer: "We offer end-to-end technology services including core engineering, Agentic AI, Cloud Platform engineering, Cybersecurity, Digital Experience design, and Strategic Tech Governance.",
  },
  {
    question: "Which industries do you specialize in?",
    answer: "We specialize in Banking & Finance (BFSI), E-Commerce & Retail, Healthcare, Education, Manufacturing, and Enterprise solutions.",
  },
  {
    question: "How can you help with AI consulting?",
    answer: "We provide strategic AI consulting, model selection, implementation, and integration services tailored to your business goals.",
  },
  {
    question: "Do you provide cloud modernization services?",
    answer: "Yes, we offer cloud-native transformation, microservices architecture, API development, and CI/CD pipelines.",
  },
  {
    question: "How do you ensure SaaS scalability?",
    answer: "We implement scalable architectures using cloud-native technologies, containerization, microservices, and auto-scaling solutions.",
  },
  {
    question: "What is your approach to Cybersecurity?",
    answer: "We follow zero-trust architecture, regular audits, penetration testing, and compliance frameworks (SOC2, ISO 27001, GDPR).",
  },
  {
    question: "Do you offer Managed IT services?",
    answer: "Yes, we provide 24/7 monitoring, infrastructure management, security operations, and dedicated support teams.",
  },
  {
    question: "Where is Beno Support located?",
    answer: "We have a global presence with offices across multiple locations to provide round-the-clock support worldwide.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-5 sm:py-6 text-left"
              >
                <span className="text-sm sm:text-base font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
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
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-5 sm:pb-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}