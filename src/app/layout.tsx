import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { site } from '@/lib/site'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Go Below — Bespoke underground construction, UK',
    template: '%s — Go Below',
  },
  description: site.description,
  // Written as a sentence rather than a keyword list. The search territory
  // (underground rooms, residential bunker, underground garage/cinema,
  // basement construction, secure shelter) is carried by the page copy,
  // where it belongs.
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: site.url,
    siteName: site.name,
    title: 'Go Below — Bespoke underground construction, UK',
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Go Below — Bespoke underground construction, UK',
    description: site.description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${display.variable}`}>
      <body>
        {/*
          No Organization / LocalBusiness JSON-LD yet — it requires a
          confirmed legal name, address and contact details, and fabricating
          those would be both wrong and a structured-data violation. Add it
          in src/app/layout.tsx once site.ts carries real values.
        */}
        {children}
      </body>
    </html>
  )
}
