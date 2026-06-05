import type { Metadata } from 'next'
import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { CoreServicePillars } from "@/components/sections/core-service-pillars"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { HowWeMakeItHappen } from "@/components/sections/how-we-make-it-happen"
import { TechnologyStack } from "@/components/sections/technology-stack"
import { TechPartners } from "@/components/sections/tech-partners"
import { IndustrySolutions } from "@/components/sections/industry-solutions"
import { FeaturedClients } from "@/components/sections/featured-clients"
import { SuccessStories } from "@/components/sections/success-stories"
import { EngineeringInnovation } from "@/components/sections/engineering-innovation"
import { BlogInsights } from "@/components/sections/blog-insights"
import { CTAFAQSection } from "@/components/sections/cta-faq-section"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
  title: 'AI Engineering & Cloud Solutions Company | Beno Support',
  description: 'Beno Support delivers AI engineering, software development, cloud infrastructure, cybersecurity, and digital transformation services for startups, SMBs, and enterprises worldwide.',
  alternates: {
    canonical: 'https://www.benosupport.com',
  },
  openGraph: {
    title: 'AI Engineering & Cloud Solutions Company | Beno Support',
    description: 'Beno Support delivers AI engineering, software development, cloud infrastructure, cybersecurity, and digital transformation services for startups, SMBs, and enterprises worldwide.',
    url: 'https://www.benosupport.com',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <CoreServicePillars />
        <WhyChooseUs />
        <HowWeMakeItHappen />
        <TechnologyStack />
        <TechPartners />
        <IndustrySolutions />
        <FeaturedClients />
        <SuccessStories />
        <EngineeringInnovation />
        <BlogInsights />
        <CTAFAQSection />
      </main>
      <Footer />
    </>
  )
}
