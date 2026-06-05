import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScrollProvider } from '@/providers/smooth-scroll-provider'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Beno Support | Engineering Innovation Since 2008',
  description: 'Beno Support is a global technology and IT services provider built on engineering and AI-native innovation. 15+ years of excellence in Core Engineering, AI Automation, and Digital Products.',
  keywords: ['AI', 'Engineering', 'Technology Solutions', 'Digital Transformation', 'Cloud Solutions', 'DevOps'],
  openGraph: {
    title: 'Beno Support | Engineering Innovation Since 2008',
    description: 'Global technology partner for AI-native solutions and digital transformation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beno Support | Engineering Innovation Since 2008',
    description: 'Global technology partner for AI-native solutions and digital transformation.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
