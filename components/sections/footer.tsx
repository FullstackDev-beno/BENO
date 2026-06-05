"use client"

import Link from "next/link"
import { Globe, Share2, Twitter, Facebook, Instagram, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e8eef8]">
      <div className=" mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[220px_1fr_1fr_1fr] gap-2 lg:gap-14">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img src="/logo.svg" alt="Beno Support" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-[#4b5a72] leading-relaxed">
              Engineering Excellence in AI &amp; Technology since 2008.
            </p>
            <div className="flex items-center gap-3">
              <button className="text-[#94a3b8] hover:text-[#3b67ff] transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              <button className="text-[#94a3b8] hover:text-[#3b67ff] transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest text-[#0d1e3c] uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us",     href: "#" },
                { label: "Careers",      href: "#" },
                { label: "Case Studies", href: "#" },
                { label: "Contact",      href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-[#4b5a72] hover:text-[#3b67ff] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest text-[#0d1e3c] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                "Core Engineering & Application Architecture",
                "Agentic AI & Intelligent Automation",
                "Enterprise & Startup Tech Strategy",
                "Cloud & Platform Engineering",
                "Cyber Resilience & Threat Intelligence",
                "Digital Products & Experience Engineering",
                "Strategic IT Governance & Managed Services",
                "Workforce Technology & Human Capital Advisory",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#4b5a72] hover:text-[#3b67ff] transition-colors leading-snug block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest text-[#0d1e3c] uppercase mb-5">Industry</h4>
            <ul className="space-y-3">
              {[
                "Banking & Financial Services",
                "Healthcare & Life Sciences",
                "Manufacturing",
                "E-Commerce & Retail",
                "Logistics & Supply Chain",
                "Information Technology & SaaS",
                "Education & EdTech",
                "Insurance",
                "Government & Public Sector",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#4b5a72] hover:text-[#3b67ff] transition-colors leading-snug block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#e8eef8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94a3b8]">
            © 2026 Beno Support. Engineering Excellence in AI &amp; Technology.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Twitter,   href: "#" },
              { icon: Facebook,  href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Github,    href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <Link key={i} href={href} className="text-[#94a3b8] hover:text-[#3b67ff] transition-colors">
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
