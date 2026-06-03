"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Settings } from "lucide-react"
import Image from "next/image"
import { gsap } from "@/lib/gsap"

const services = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    title: "Core Engineering &\nApplication\nArchitecture",
    description: "Build scalable SaaS platforms, enterprise applications, APIs, mobile apps, and distributed systems with cloud-native software engineering expertise.",
  },
  {
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    title: "Agentic AI &\nIntelligent\nAutomation",
    description: "Deploy enterprise AI agents, intelligent automation systems, and LLM-powered workflows that improve efficiency, customer experience, and operational intelligence.",
  },
  {
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop",
    title: "Digital Products &\nExperience\nEngineering",
    description: "Design user-centric digital experiences through UX research, UI engineering, product strategy, and conversion optimization.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    title: "Cloud & DevOps\nEngineering",
    description: "Transform your infrastructure with cloud-native solutions, CI/CD pipelines, and modern DevOps practices for maximum efficiency.",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    title: "Data & Analytics\nSolutions",
    description: "Unlock insights from your data with advanced analytics, business intelligence, and data engineering solutions.",
  },
]

export function CoreServicePillars() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [currentIndex])

  const maxIndex = Math.max(0, services.length - itemsPerView)
  
  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const visibleServices = services.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Settings className="w-4 h-4 text-[#1e3a5f]" />
              <span className="text-sm text-[#6b7280]">Our Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] tracking-tight mb-4">
              OUR CORE SERVICE PILLARS
            </h2>
            <p className="text-[#6b7280] text-sm sm:text-[15px] lg:text-base max-w-2xl leading-relaxed">
              Our technology services help startups, SMBs, and enterprises accelerate innovation,
              optimize operations, modernize infrastructure, and build scalable digital ecosystems
              for long-term growth.
            </p>
          </div>
          <a href="#services" className="flex items-center gap-2 text-[#1e3a5f] text-sm font-medium hover:text-[#3b67ff] transition-colors shrink-0">
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className="absolute -left-4 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1e3a5f] hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-4 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1e3a5f] hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleServices.map((service, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#1e3a5f] leading-tight mb-3 whitespace-pre-line">
                    {service.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm sm:text-[15px] leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Button className="w-full bg-[#3b67ff] hover:bg-[#2d4a7c] text-white py-3 text-sm sm:text-[15px] font-medium rounded-lg">
                    Request A Proposal
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#1e3a5f]"
                  : "bg-[#d1d5db] hover:bg-[#9ca3af]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
