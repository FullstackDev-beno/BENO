import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { servicesData } from "@/lib/services-data"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import ServicePageContent from "@/components/sections/service-page-content"

// ─── Static params — pre-render all 8 service pages ───────────────────────────
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

// ─── Per-page SEO metadata ─────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug]
  if (!service) return { title: "Service Not Found | Beno Support" }
  return {
    title: service.meta.title,
    description: service.meta.description,
    alternates: { canonical: `https://www.benosupport.com/services/${slug}` },
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      url: `https://www.benosupport.com/services/${slug}`,
      type: "website",
    },
  }
}

// ─── Page component ────────────────────────────────────────────────────────────
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]
  if (!service) notFound()

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <ServicePageContent service={service} />
      </main>
      <Footer />
    </>
  )
}
