import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'
import { SiteFooter, SiteHeader } from '@/components/site/marketing'
import { cn } from '@/lib/utils'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Defft.ai | System of Recommendation™',
  description:
    'Defft.ai is the System of Recommendation™ for packaging distributors. Replace the Guesswork Tax with recommendation-driven sales.',
  icons: {
    icon: '/defft-icon.png',
    shortcut: '/defft-icon.png',
    apple: '/defft-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(manrope.variable, fraunces.variable, 'min-h-screen bg-site text-slate-950 antialiased')}>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.14),transparent_40%),radial-gradient(circle_at_top_right,rgba(240,107,56,0.14),transparent_42%)]" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
