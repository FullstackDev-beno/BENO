"use client"

import { useEffect, useRef, useState } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const tabs = ["Front-end", "Back-end", "Database", "Cloud-Hosting", "Testing", "Artificial Intelligence"]

const techData: Record<string, { name: string; icon: string }[]> = {
  "Front-end": [
    { name: "React.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Angular",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Vue.js",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Next.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Nuxt.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
    { name: "TypeScript",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ],
  "Back-end": [
    { name: "Node.js",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Laravel",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Django",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Express",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "NestJS",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  ],
  "Database": [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Redis",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Firebase",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  "Cloud-Hosting": [
    { name: "AWS",            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Azure",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Google Cloud",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  ],
  "Testing": [
    { name: "Jest",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    { name: "Cypress",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" },
    { name: "Selenium",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
  ],
  "Artificial Intelligence": [
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "OpenCV",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Pandas",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  ],
}

export function TechnologyStack() {
  const [active, setActive] = useState("Front-end")
  const sectionRef  = useRef<HTMLDivElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const gridRef     = useRef<HTMLDivElement>(null)
  const prevTab     = useRef("Front-end")

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 88%" } }
    )
  }, [])

  // Tab switch animation
  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll(".tech-card")
    gsap.fromTo(cards,
      { opacity: 0, y: 22, scale: 0.93 },
      { opacity: 1, y: 0, scale: 1, duration: 0.38, ease: "power2.out", stagger: 0.045 }
    )
    prevTab.current = active
  }, [active])

  const items = techData[active] ?? []

  return (
    <section ref={sectionRef} className="py-14 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={headingRef} className="mb-10 lg:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h3M12 9h3M9 3v3M9 12v3" stroke="#3b67ff" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="9" cy="9" r="2.2" fill="#3b67ff"/>
            </svg>
            <span className="text-[#3b67ff] text-[13px] font-semibold tracking-widest uppercase">Technology Stack</span>
          </div>
          <h2 className="text-[30px] sm:text-[38px] lg:text-[46px] font-extrabold text-[#0d1e3c] leading-[1.1] tracking-[-1px] mb-4">
            OUR TECHNOLOGY & TOOL STACK
          </h2>
          <p className="text-[#4b5a72] text-[15px] sm:text-[16px] leading-[1.8] max-w-[620px]">
            Industry-leading platforms driving innovation, performance, and long-term security.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`shrink-0 px-5 py-2 rounded-lg text-[14px] font-medium border transition-all duration-200 whitespace-nowrap ${
                active === tab
                  ? "bg-[#3b67ff] text-white border-[#3b67ff] shadow-md shadow-[#3b67ff]/25"
                  : "bg-white text-[#4b5a72] border-[#dde3f0] hover:border-[#3b67ff] hover:text-[#3b67ff]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {items.map((tech, i) => (
            <div
              key={tech.name}
              className="tech-card group bg-[#f7f9fc] rounded-2xl p-6 sm:p-7 flex flex-col items-center gap-4 border border-[#eaeff8] hover:border-[#3b67ff]/30 hover:shadow-lg hover:shadow-[#3b67ff]/08 transition-all duration-250 cursor-default"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                width={52}
                height={52}
                className="w-[52px] h-[52px] object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0" }}
              />
              <span className="text-[#0d1e3c] text-[13px] font-semibold text-center leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}