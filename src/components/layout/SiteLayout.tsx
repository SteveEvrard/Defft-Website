import type { ReactNode } from 'react'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { BackgroundGlows } from '../visual/BackgroundGlows'

export function SiteLayout(props: { children: ReactNode }) {
  return (
    <div className="min-h-dvh">
      <BackgroundGlows />
      <SiteHeader />
      <main className="relative">{props.children}</main>
      <SiteFooter />
    </div>
  )
}

