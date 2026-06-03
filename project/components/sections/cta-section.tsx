"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br
  from-[#3b67ff]
  via-[#0f1b35]
  to-[#081120]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl text-white lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Ready to Accelerate Digital Innovation?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/70 mb-6 sm:mb-8 px-4 text-pretty">
            Join the ranks of global leaders who trust Beno Support for engineering excellence and strategic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#0a1628] hover:bg-white/90 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg w-full sm:w-auto"
            >
              Request a Proposal
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg w-full sm:w-auto"
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}