import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function Page(props: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto max-w-6xl px-4 py-12 lg:py-16', props.className)}>{props.children}</div>
}

export function PageTitle(props: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <div className="grid gap-4">
      {props.eyebrow ? <div className="text-sm font-semibold text-white/70">{props.eyebrow}</div> : null}
      <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{props.title}</h1>
      {props.subtitle ? <p className="max-w-3xl text-base leading-relaxed text-white/70">{props.subtitle}</p> : null}
      {props.children}
    </div>
  )
}

