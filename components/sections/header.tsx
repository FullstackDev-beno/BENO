"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "@/lib/gsap"
import { Menu, X, ChevronDown } from "lucide-react"

const navigation = [
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Industries", href: "#industries" },
  { name: "Company", href: "#company" },
  { name: "Careers", href: "#careers" },
  { name: "Case Studies", href: "#case-studies" },
]

const services = [
  [
    "Core Engineering & Application Architecture",
    "Cyber Resilience & Threat Intelligence",
  ],
  [
    "Agentic AI & Intelligent Automation",
    "Digital Products & Experience Engineering",
  ],
  [
    "Enterprise & Startup Tech Strategy",
    "Strategic IT Governance & Managed Services",
  ],
  [
    "Cloud & Platform Engineering",
    "Workforce Technology & Human Capital Advisory",
  ],
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const chevronRef = useRef<SVGSVGElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])
  const isOpenRef = useRef(false)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let prevScrolled = false
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)

      // Elastic logo swap only when state actually changes
      if (scrolled !== prevScrolled && logoRef.current) {
        prevScrolled = scrolled
        gsap.fromTo(
          logoRef.current,
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.65, ease: "elastic.out(1, 0.5)" }
        )
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const openDropdown = () => {
    if (isOpenRef.current) return

    isOpenRef.current = true
    setIsServicesOpen(true)

    const el = dropdownRef.current

    if (!el) return

    el.style.pointerEvents = "auto"

    gsap.killTweensOf(el)
    gsap.killTweensOf(itemRefs.current)

    gsap.set(el, {
      display: "block",
      opacity: 0,
      y: -12,
    })

    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: "power3.out",
    })

    gsap.fromTo(
      itemRefs.current,
      {
        opacity: 0,
        y: 18,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.42,
        ease: "power3.out",
        delay: 0.05,
      }
    )

    if (chevronRef.current) {
      gsap.to(chevronRef.current, {
        rotation: 180,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  const closeDropdown = () => {
    if (!isOpenRef.current) return

    isOpenRef.current = false
    setIsServicesOpen(false)

    const el = dropdownRef.current

    if (!el) return

    el.style.pointerEvents = "none"

    gsap.killTweensOf(el)

    gsap.to(el, {
      opacity: 0,
      y: -10,
      duration: 0.24,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(el, {
          display: "none",
        })
      },
    })

    if (chevronRef.current) {
      gsap.to(chevronRef.current, {
        rotation: 0,
        duration: 0.25,
        ease: "power2.out",
      })
    }
  }

  const handleServiceMouseEnter = (
    el: HTMLDivElement,
    isFirst: boolean
  ) => {
    const bar = el.querySelector<HTMLDivElement>(".service-bar")
    const label = el.querySelector<HTMLSpanElement>(".service-label")
    const underline = el.querySelector<HTMLSpanElement>(
      ".service-underline"
    )

    gsap.to(bar, {
      backgroundColor: "#3b67ff",
      duration: 0.2,
    })

    gsap.to(label, {
      color: "#3b67ff",
      duration: 0.2,
    })

    gsap.to(underline, {
      width: "100%",
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleServiceMouseLeave = (
    el: HTMLDivElement,
    isFirst: boolean
  ) => {
    const bar = el.querySelector<HTMLDivElement>(".service-bar")
    const label = el.querySelector<HTMLSpanElement>(".service-label")
    const underline = el.querySelector<HTMLSpanElement>(
      ".service-underline"
    )

    if (!isFirst) {
      gsap.to(bar, {
        backgroundColor: "#1e293b",
        duration: 0.2,
      })

      gsap.to(label, {
        color: "#1e293b",
        duration: 0.2,
      })
    }

    gsap.to(underline, {
      width: "0%",
      duration: 0.22,
      ease: "power2.in",
    })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
        onMouseLeave={() => {
          setTimeout(() => {
            if (!dropdownRef.current?.matches(":hover")) {
              closeDropdown()
            }
          }, 80)
        }}
      >
        <nav className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex h-16 sm:h-[72px] items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center shrink-0 hover:scale-[1.04] transition-transform duration-300 will-change-transform"
            >
              <div ref={logoRef}>
                {isScrolled ? (
                  <img
                    src="/logo.svg"
                    alt="Beno Support"
                    className="h-9 sm:h-10 w-auto block"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                ) : (
                  <img
                    src="/whitelogo.png"
                    alt="Beno Support"
                    className="h-9 sm:h-10 w-auto block"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                )}
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <button
                    key={item.name}
                    onMouseEnter={openDropdown}
                    onClick={() =>
                      isOpenRef.current
                        ? closeDropdown()
                        : openDropdown()
                    }
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-200 ${
                      isServicesOpen
                        ? "text-[#3b67ff]"
                        : isScrolled
                        ? "text-black"
                        : "text-white/90"
                    }`}
                  >
                    {item.name}

                    <ChevronDown
                      ref={chevronRef}
                      className="w-4 h-4"
                      style={{ transformOrigin: "50% 50%" }}
                    />
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-[15px] font-medium transition-colors duration-200 ${
                      isScrolled
                        ? "text-black hover:text-[#3b67ff]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <button
  className={`
    relative overflow-hidden
    px-6 py-2.5 text-[15px] font-semibold rounded-xl
    transition-all duration-300 group
    ${isScrolled
      ? "bg-[#3b67ff] text-white shadow-[0_4px_24px_rgba(59,103,255,0.45)]"
      : "bg-white text-[#3b67ff] shadow-[0_2px_12px_rgba(59,103,255,0.15)]"
    }
  `}
>
  {/* Shine sweep on hover */}
  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

  {/* Animated border ring */}
  <span className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100
    ${isScrolled ? "border-white/30" : "border-[#3b67ff]/40"}
  `} />

  {/* Text + arrow */}
  <span className="relative flex items-center gap-2">
    Contact Us
    <svg
      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 14 14" fill="none"
    >
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
</button>
            </div>

            {/* MOBILE MENU */}
            <button
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className={`lg:hidden p-2 -mr-2 ${
                isScrolled ? "text-[#3b67ff]" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* MEGA MENU */}
        <div
          ref={dropdownRef}
          style={{
            pointerEvents: "none",
            display: "none",
          }}
          className="
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            z-40
            w-[82%]
            max-w-[1250px]
            pt-4
          "
        >
          <div
            className="
              rounded-[32px]
              border
              border-[#e8eefc]
              bg-white/95
              backdrop-blur-2xl

              shadow-[0_30px_90px_rgba(0,0,0,0.10)]

              px-14
              py-12

              grid
              grid-cols-2
              gap-x-20
            "
          >
            {services.flatMap((pair, rowIdx) =>
              pair.map((label, colIdx) => {
                const flatIdx = rowIdx * 2 + colIdx

                const isFirst = flatIdx === 0

                return (
                  <div
                    key={label}
                    ref={(el) => {
                      if (el) itemRefs.current[flatIdx] = el
                    }}
                    className="
                      service-item
                      group
                      relative
                      flex
                      items-start
                      gap-4
                      py-5
                      px-4
                      rounded-2xl
                      cursor-pointer
                      transition-all
                      duration-300
                      hover:bg-[#f8fbff]
                    "
                    onMouseEnter={(e) =>
                      handleServiceMouseEnter(
                        e.currentTarget,
                        isFirst
                      )
                    }
                    onMouseLeave={(e) =>
                      handleServiceMouseLeave(
                        e.currentTarget,
                        isFirst
                      )
                    }
                  >
                    <div
                      className="
                        service-bar
                        mt-[3px]
                        w-1
                        self-stretch
                        min-h-[24px]
                        rounded-full
                        flex-shrink-0
                      "
                      style={{
                        backgroundColor: isFirst
                          ? "#3b67ff"
                          : "#1e293b",
                      }}
                    />

                    <div className="overflow-hidden">
                      <span
                        className="
                          service-label
                          relative
                          inline-block
                          text-[16px]
                          font-semibold
                          leading-snug
                        "
                        style={{
                          color: isFirst
                            ? "#3b67ff"
                            : "#1e293b",
                        }}
                      >
                        {label}

                        <span
                          className="
                            service-underline
                            absolute
                            bottom-[-4px]
                            left-0
                            h-[2px]
                            bg-[#3b67ff]
                            rounded-sm
                          "
                          style={{ width: "0%" }}
                        />
                      </span>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-16">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                className="block py-3 text-base font-medium text-[#3b67ff]"
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4">
              <button className="w-full bg-[#3b67ff] text-white font-semibold py-3 rounded-xl">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}