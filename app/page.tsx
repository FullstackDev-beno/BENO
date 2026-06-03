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
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"

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
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
