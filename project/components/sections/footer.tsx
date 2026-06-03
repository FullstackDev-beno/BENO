"use client"

import Link from "next/link"
import Image from "next/image"
import { Globe, Share2, Twitter, Facebook, Instagram, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Image src="/logo.png" alt="Beno Support" width={140} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Engineering Excellence in AI &amp; Technology since 2008.
            </p>
            <div className="flex items-center gap-3">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-foreground uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Case Studies", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-foreground uppercase mb-4">Services</h4>
            <ul className="space-y-3">
              {["AI & ML", "Cloud Strategy", "Engineering", "Security"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-foreground uppercase mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Security Compliance"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Beno Support. Engineering Excellence in AI &amp; Technology.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Twitter, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Github, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <Link key={i} href={href} className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}