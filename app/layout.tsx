import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScrollProvider } from '@/providers/smooth-scroll-provider'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const BASE_URL = 'https://www.benosupport.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AI Engineering & Cloud Solutions Company | Beno Support',
    template: '%s | Beno Support',
  },
  description: 'Beno Support delivers AI engineering, software development, cloud infrastructure, cybersecurity, and digital transformation services for startups, SMBs, and enterprises worldwide.',
  keywords: [
    // Primary
    'AI engineering company',
    'software development company',
    'enterprise software solutions',
    'cloud consulting company',
    'AI consulting services',
    'cybersecurity services company',
    'platform engineering company',
    'digital transformation services',
    'managed IT services',
    'software development company India',
    // Secondary
    'SaaS development company',
    'DevOps consulting services',
    'enterprise AI solutions',
    'cloud modernization services',
    'Kubernetes consulting',
    'digital product engineering',
    'AI automation consulting',
    'enterprise cybersecurity',
    'managed cloud services',
    'startup software development company',
    'SMB digital transformation solutions',
  ],
  authors: [{ name: 'Beno Support', url: BASE_URL }],
  creator: 'Beno Support',
  publisher: 'Beno Support',
  category: 'Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Beno Support',
    title: 'AI Engineering & Cloud Solutions Company | Beno Support',
    description: 'Beno Support delivers AI engineering, software development, cloud infrastructure, cybersecurity, and digital transformation services for startups, SMBs, and enterprises worldwide.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Beno Support — AI Engineering & Cloud Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@benosupport',
    creator: '@benosupport',
    title: 'AI Engineering & Cloud Solutions Company | Beno Support',
    description: 'Beno Support delivers AI engineering, software development, cloud infrastructure, cybersecurity, and digital transformation services worldwide.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/whitelogo.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/logo.svg',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased overflow-x-hidden">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {/* JSON-LD — Organization structured data */}
        <Script id="json-ld-org" type="application/ld+json" strategy="beforeInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Beno Support",
            "url": "https://www.benosupport.com",
            "logo": "https://www.benosupport.com/logo.svg",
            "description": "Beno Support delivers AI engineering, software development, cloud infrastructure, cybersecurity, and digital transformation services for startups, SMBs, and enterprises worldwide.",
            "foundingDate": "2008",
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": "50-200" },
            "address": { "@type": "PostalAddress", "addressCountry": "IN" },
            "sameAs": [
              "https://www.linkedin.com/company/benosupport",
              "https://twitter.com/benosupport"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"]
            },
            "serviceArea": { "@type": "Place", "name": "Worldwide" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Technology Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Engineering" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Infrastructure" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Transformation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed IT Services" } }
              ]
            }
          }
        `}</Script>
        {/* Hidden Google Translate mount point */}
        <div id="google_translate_element" style={{ display: 'none' }} />
        <Script id="google-translate-init" strategy="afterInteractive">{`
          function googleTranslateElementInit() {
            new window.google.translate.TranslateElement(
              { pageLanguage: 'en', includedLanguages: 'en,pt,hi,ar,fr,es', autoDisplay: false },
              'google_translate_element'
            );
          }
        `}</Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
