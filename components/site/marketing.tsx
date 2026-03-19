import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  DatabaseZap,
  Factory,
  Handshake,
  LayoutDashboard,
  LineChart,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { href: '/product', label: 'Product' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
]

const footerColumns: Array<{
  title: string
  items: Array<{ label: string; href?: string }>
}> = [
  {
    title: 'Product',
    items: [
      { label: 'System of Recommendation™', href: '/product' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Use Cases', href: '/use-cases' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Problem', href: '/problem' },
      { label: 'Book Demo', href: 'mailto:hello@defft.ai' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { label: 'hello@defft.ai', href: 'mailto:hello@defft.ai' },
      { label: 'Packaging distribution focus' },
      { label: 'Mid-market sales teams' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'System of Recommendation™ positioning' },
      { label: 'Knowledge Mortality Problem™ concept' },
      { label: 'Trademark details available on request' },
    ],
  },
]

type ButtonLinkProps = {
  href: string
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function ButtonLink({
  href,
  children,
  className,
  variant = 'primary',
}: ButtonLinkProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200',
    variant === 'primary' &&
      'bg-[linear-gradient(135deg,#f06b38,#eb8f45)] text-white shadow-[0_16px_45px_rgba(236,102,53,0.32)] hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(236,102,53,0.38)]',
    variant === 'secondary' &&
      'border border-slate-200 bg-white text-slate-900 shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-[0_14px_30px_rgba(20,184,166,0.12)]',
    variant === 'ghost' && 'text-slate-700 hover:bg-white/70 hover:text-slate-950',
    className,
  )

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" />
    </>
  )

  if (href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  children: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn('mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10', className)}>
      {(eyebrow || title || description) && (
        <div className={cn('mb-10 max-w-3xl', align === 'center' && 'mx-auto text-center')}>
          {eyebrow ? (
            <div className="mb-4 inline-flex rounded-full border border-orange-200/70 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-600 backdrop-blur">
              {eyebrow}
            </div>
          ) : null}
          {title ? (
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
          ) : null}
        </div>
      )}
      {children}
    </section>
  )
}

export function SurfaceCard({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <div
      id={id}
      className={cn(
        'rounded-[28px] border border-white/80 bg-[rgba(255,255,255,0.88)] p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function BrandLogo({
  variant = 'full',
  className,
}: {
  variant?: 'full' | 'icon'
  className?: string
}) {
  if (variant === 'icon') {
    return (
      <Image
        src="/defft-icon.png"
        alt="Defft.ai icon"
        width={48}
        height={48}
        className={cn('h-12 w-12 object-contain', className)}
        priority
      />
    )
  }

  return (
    <Image
      src="/defft-logo.png"
      alt="Defft.ai"
      width={279}
      height={96}
      className={cn('h-10 w-auto object-contain sm:h-11', className)}
      priority
    />
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[rgba(248,248,244,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3 text-slate-950">
          <BrandLogo className="h-9 sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <ButtonLink href="mailto:hello@defft.ai" className="px-4 py-2.5">
            Book Demo
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/70 bg-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_repeat(5,minmax(0,1fr))]">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-3 text-slate-950">
              <BrandLogo className="h-10" />
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Recommendation intelligence for packaging distributors that want fewer missed deals, faster rep
              ramp, and stronger institutional knowledge.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold text-slate-950">{column.title}</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                {column.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link href={item.href} className="transition hover:text-slate-950">
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Defft.ai. Recommendation, not guesswork.</p>
          <p>Built for sales leaders in packaging distribution.</p>
        </div>
      </div>
    </footer>
  )
}

type PageHeroProps = {
  badge: string
  title: string
  description: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
  aside?: ReactNode
}

export function PageHero({
  badge,
  title,
  description,
  primaryHref = 'mailto:hello@defft.ai',
  primaryLabel = 'Book Demo',
  secondaryHref,
  secondaryLabel,
  aside,
}: PageHeroProps) {
  return (
    <Section className="pt-14 sm:pt-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
            {badge}
          </div>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            {secondaryHref && secondaryLabel ? (
              <ButtonLink href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
        {aside ? aside : <CompactValuePanel />}
      </div>
    </Section>
  )
}

export function FinalCta({
  title = 'Book a demo and see how Defft.ai sharpens recommendation quality.',
  description = 'Walk through the accounts, products, and selling moments where guesswork is costing your team the most.',
}: {
  title?: string
  description?: string
}) {
  return (
    <Section className="pb-24">
      <SurfaceCard className="overflow-hidden bg-[linear-gradient(135deg,rgba(12,78,74,0.98),rgba(11,104,98,0.96)_40%,rgba(241,122,59,0.92)_115%)] p-0 text-white">
        <div className="grid gap-8 px-8 py-10 sm:px-12 sm:py-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
              Conversion CTA
            </div>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink
              href="mailto:hello@defft.ai"
              className="bg-white text-slate-950 shadow-none hover:bg-slate-100 hover:shadow-none"
            >
              Book Demo
            </ButtonLink>
            <ButtonLink
              href="mailto:hello@defft.ai"
              variant="secondary"
              className="border-white/20 bg-white/10 text-white hover:border-white/35 hover:bg-white/15 hover:text-white"
            >
              Contact Team
            </ButtonLink>
          </div>
        </div>
      </SurfaceCard>
    </Section>
  )
}

function MetricChip({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</div>
      <div className={cn('mt-2 text-2xl font-semibold tracking-tight', accent)}>{value}</div>
    </div>
  )
}

export function CompactValuePanel() {
  return (
    <SurfaceCard className="overflow-hidden border-slate-200/90 p-0">
      <div className="border-b border-slate-200 bg-[linear-gradient(145deg,rgba(15,23,42,0.02),rgba(20,184,166,0.08),rgba(255,255,255,0.95))] px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo variant="icon" className="h-9 w-9" />
              <div>
                <div className="text-sm font-semibold text-slate-950">Branch Readiness Snapshot</div>
                <div className="text-sm text-slate-500">Southwest packaging team</div>
              </div>
            </div>
          </div>
          <div className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
            Live model
          </div>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <MetricChip label="Acceptance rate" value="71%" accent="text-teal-700" />
          <MetricChip label="Margin lift" value="+4.8%" accent="text-orange-600" />
          <MetricChip label="Rep confidence" value="9.1/10" accent="text-slate-950" />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Next meeting</div>
              <div className="mt-2 text-lg font-semibold text-slate-950">Flagship Foods</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Recommend insulated mailers plus tape automation kit based on damaged cold-chain orders and margin
                mix.
              </p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-3 text-orange-600">
              <Target className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {['Margin upside: $18.4K', 'Cross-sell fit: High', 'Confidence: 92%'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SurfaceCard>
  )
}

export function HeroRecommendationPanel() {
  return (
    <SurfaceCard className="relative overflow-hidden border-slate-200/90 p-0">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_58%),radial-gradient(circle_at_top_right,rgba(240,107,56,0.16),transparent_52%)]" />
      <div className="relative p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo variant="icon" className="h-9 w-9" />
              <div>
                <div className="text-sm font-semibold text-slate-950">Recommendation Workspace</div>
                <div className="text-sm text-slate-500">Prepared for Monday branch pipeline review</div>
              </div>
            </div>
          </div>
          <div className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            System active
          </div>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <SurfaceCard className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Customer summary</div>
                  <div className="mt-2 text-lg font-semibold text-slate-950">Summit Beverage Logistics</div>
                </div>
                <div className="rounded-2xl bg-slate-900/95 px-3 py-2 text-right text-white">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-white/60">Meeting window</div>
                  <div className="text-sm font-semibold">Tuesday 8:30 AM</div>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ['Order pattern', 'Rising cold-chain volume'],
                  ['Margin pressure', 'Tape mix trending down'],
                  ['Risk flag', 'Lost last foam quote'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</div>
                    <div className="mt-2 text-sm font-medium text-slate-800">{value}</div>
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-orange-50 p-3 text-orange-600">
                  <Boxes className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Recommended product</div>
                  <div className="text-lg font-semibold text-slate-950">Insulated mailer bundle with premium tape</div>
                </div>
              </div>
              <div className="mt-4 rounded-3xl border border-teal-100 bg-[linear-gradient(135deg,rgba(240,253,250,1),rgba(255,247,237,0.96))] p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">Why this wins</span>
                  <span className="rounded-full bg-white px-2.5 py-1 font-semibold text-teal-700">92% confidence</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <li>Matches spoilage concern from the last three customer calls.</li>
                  <li>Improves mix margin without requiring a line change.</li>
                  <li>Aligns with supplier inventory that can ship same week.</li>
                </ul>
              </div>
            </SurfaceCard>
          </div>

          <div className="space-y-4">
            <SurfaceCard className="p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Rep guidance</div>
              <div className="mt-3 rounded-3xl bg-slate-950 p-5 text-white">
                <div className="text-sm text-white/70">Talk track cue</div>
                <p className="mt-3 text-sm leading-6 text-white/90">
                  Lead with spoilage reduction, then show how the bundle simplifies receiving and protects gross
                  margin.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  <Sparkles className="h-3.5 w-3.5" />
                  That&apos;s exactly what I would have said.
                </div>
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-950">Account expansion suggestions</div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Next best actions</span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  {
                    title: 'Add printed liner trial',
                    detail: 'Supports upcoming regional launch and increases attach rate.',
                    value: '$8.2K opportunity',
                  },
                  {
                    title: 'Introduce automation tape head',
                    detail: 'Reduces breakage on new shift and opens service discussion.',
                    value: '$12.7K opportunity',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-600">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </div>
      </div>
    </SurfaceCard>
  )
}

export function KnowledgeMortalityPanel() {
  const phases = [
    {
      title: 'Veteran sellers see patterns early',
      detail: 'They know which product wins for the account, the buyer, and the moment.',
      icon: Users,
      accent: 'bg-teal-50 text-teal-700',
    },
    {
      title: 'The reasoning lives in memory',
      detail: 'It is rarely captured in a structured, usable system the rest of the branch can trust.',
      icon: BrainCircuit,
      accent: 'bg-slate-100 text-slate-700',
    },
    {
      title: 'Retirement creates a knowledge cliff',
      detail: 'New reps inherit products, territory, and pressure, but not the intuition behind what works.',
      icon: CircleHelp,
      accent: 'bg-orange-50 text-orange-600',
    },
  ]

  return (
    <SurfaceCard className="overflow-hidden p-0">
      <div className="grid gap-px bg-slate-200 lg:grid-cols-3">
        {phases.map((phase, index) => (
          <div key={phase.title} className="bg-white p-6">
            <div className={cn('flex h-11 w-11 items-center justify-center rounded-2xl', phase.accent)}>
              <phase.icon className="h-5 w-5" />
            </div>
            <div className="mt-5 text-lg font-semibold text-slate-950">{phase.title}</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{phase.detail}</p>
            <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Stage {index + 1}
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 bg-[linear-gradient(90deg,rgba(240,253,250,1),rgba(255,247,237,0.95))] px-6 py-5 text-sm text-slate-700">
        Defft.ai turns disappearing seller intuition into repeatable branch intelligence the team can use before,
        during, and after every customer meeting.
      </div>
    </SurfaceCard>
  )
}

export function RecommendationBoard() {
  return (
    <SurfaceCard className="overflow-hidden p-0">
      <div className="grid gap-px bg-slate-200 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-950">Recommendation cockpit</div>
              <div className="text-sm text-slate-500">Built for managers, branch leaders, and field reps</div>
            </div>
            <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">Live preview</div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-3 text-slate-900">
                <LayoutDashboard className="h-5 w-5 text-teal-700" />
                <div className="font-semibold">Customer history</div>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl bg-white px-4 py-3">28-month buying timeline with mix, margin, and volume shifts.</div>
                <div className="rounded-2xl bg-white px-4 py-3">Recent objections tied to spoilage, freight, and automation readiness.</div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-3 text-slate-900">
                <Target className="h-5 w-5 text-orange-600" />
                <div className="font-semibold">Suggested SKU</div>
              </div>
              <div className="mt-4 rounded-2xl bg-white p-4 text-sm text-slate-600">
                Cushion wrap bundle with upgraded tape and seasonal insert based on current order shape and supplier
                availability.
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-3 text-slate-900">
                <BookOpenCheck className="h-5 w-5 text-teal-700" />
                <div className="font-semibold">Why this is right</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                <li>Maps to previous wins in adjacent beverage accounts.</li>
                <li>Preserves margin better than the current quote path.</li>
                <li>Addresses the buyer issue before the rep gets asked.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-3 text-slate-900">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                <div className="font-semibold">Margin and opportunity</div>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                <div className="rounded-2xl bg-white px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Gross margin lift</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">+4.8%</div>
                </div>
                <div className="rounded-2xl bg-white px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Expansion value</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">$31.1K</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(8,47,73,0.95))] p-6 text-white">
          <div className="text-xs uppercase tracking-[0.2em] text-white/55">Callouts</div>
          <div className="mt-4 space-y-4">
            {[
              ['Knows what to sell', 'Combines account patterns, product fit, and supplier reality.'],
              ['Knows why', 'Makes the reasoning visible enough for the manager and rep to trust.'],
              ['Knows when', 'Surfaces the timing signal before the opportunity goes cold.'],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-300" />
                  <div className="font-semibold text-white">{title}</div>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/72">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SurfaceCard>
  )
}

export function ComparisonGrid() {
  const columns = [
    {
      title: 'Guesswork-driven selling',
      accent: 'border-orange-200 bg-orange-50/80',
      items: [
        'Relies on rep memory in the moment',
        'Cross-sell timing depends on instinct',
        'New reps sound junior for too long',
        'Managers inspect after the fact',
      ],
    },
    {
      title: 'Recommendation-driven selling',
      accent: 'border-teal-200 bg-teal-50/80',
      items: [
        'Puts the next best recommendation in front of the rep',
        'Shows why the recommendation should win',
        'Compresses ramp by making veteran logic reusable',
        'Lets managers coach from system intelligence, not anecdotes',
      ],
    },
  ]

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {columns.map((column) => (
        <SurfaceCard key={column.title} className={cn('border p-6', column.accent)}>
          <div className="text-xl font-semibold text-slate-950">{column.title}</div>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
            {column.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-900/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SurfaceCard>
      ))}
    </div>
  )
}

export function ProcessSteps({
  steps,
}: {
  steps: Array<{ title: string; detail: string; icon: LucideIcon }>
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {steps.map((step, index) => (
        <SurfaceCard key={step.title} className="relative overflow-hidden p-6">
          <div className="absolute right-4 top-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
            Step {index + 1}
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(20,184,166,0.12),rgba(240,107,56,0.16))] text-slate-950">
            <step.icon className="h-5 w-5" />
          </div>
          <div className="mt-5 text-lg font-semibold text-slate-950">{step.title}</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{step.detail}</p>
        </SurfaceCard>
      ))}
    </div>
  )
}

export function MetricsRail({
  items,
}: {
  items: Array<{ label: string; value: string; note: string }>
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <SurfaceCard key={item.label} className="p-6">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
          <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{item.value}</div>
          <p className="mt-4 text-sm leading-6 text-slate-600">{item.note}</p>
        </SurfaceCard>
      ))}
    </div>
  )
}

export function UseCaseCards({
  items,
}: {
  items: Array<{ title: string; detail: string; icon: LucideIcon }>
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <SurfaceCard key={item.title} className="group p-6 transition duration-200 hover:-translate-y-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition group-hover:bg-teal-50 group-hover:text-teal-700">
            <item.icon className="h-5 w-5" />
          </div>
          <div className="mt-5 text-xl font-semibold text-slate-950">{item.title}</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
            Explore use case
            <ChevronRight className="h-4 w-4" />
          </div>
        </SurfaceCard>
      ))}
    </div>
  )
}

export function DataPipelineGraphic() {
  const sources = [
    { title: 'ERP', icon: DatabaseZap },
    { title: 'CRM', icon: Users },
    { title: 'Supplier data', icon: Factory },
    { title: 'External signals', icon: Radar },
  ]

  return (
    <SurfaceCard className="overflow-hidden p-0">
      <div className="grid gap-px bg-slate-200 lg:grid-cols-[0.95fr_1.1fr_0.95fr]">
        <div className="space-y-3 bg-white p-6">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Data inputs</div>
          {sources.map((source) => (
            <div key={source.title} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <source.icon className="h-4 w-4 text-teal-700" />
              <span className="text-sm font-medium text-slate-800">{source.title}</span>
            </div>
          ))}
        </div>

        <div className="bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(8,47,73,0.96))] p-6 text-white">
          <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
            Intelligence core
          </div>
          <div className="mt-5 text-2xl font-semibold">Defft Recommendation Engine</div>
          <p className="mt-3 text-sm leading-6 text-white/72">
            Normalizes customer, product, and context signals into a recommendation that sales teams can act on.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {['Account fit scoring', 'Product relevance mapping', 'Margin-aware ranking', 'Talk track generation'].map(
              (item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="space-y-3 bg-white p-6">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Outputs</div>
          {[
            'Meeting prep briefs',
            'In-call recommendations',
            'Manager coaching prompts',
            'Post-meeting intelligence',
          ].map((output) => (
            <div key={output} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
              {output}
            </div>
          ))}
        </div>
      </div>
    </SurfaceCard>
  )
}

export function MeetingJourney() {
  const stages = [
    {
      title: 'Before the meeting',
      detail: 'Prepare the rep with the right account context, likely objections, and specific recommendations.',
      icon: LayoutDashboard,
    },
    {
      title: 'During the meeting',
      detail: 'Keep the conversation focused on what should win with the buyer right now.',
      icon: Handshake,
    },
    {
      title: 'After the meeting',
      detail: 'Capture signal, refine the model, and give the manager coaching-grade feedback.',
      icon: LineChart,
    },
  ]

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {stages.map((stage) => (
        <SurfaceCard key={stage.title} className="p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-900">
            <stage.icon className="h-5 w-5" />
          </div>
          <div className="mt-5 text-xl font-semibold text-slate-950">{stage.title}</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{stage.detail}</p>
          <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
            {stage.title === 'Before the meeting' &&
              'Example output: Recommended beverage insulation bundle, rationale, and likely margin upside.'}
            {stage.title === 'During the meeting' &&
              'Example output: Buying signal prompts, cross-sell cues, and a concise explanation of why this bundle fits.'}
            {stage.title === 'After the meeting' &&
              'Example output: Acceptance signal, lost reason capture, and coaching notes for the manager review.'}
          </div>
        </SurfaceCard>
      ))}
    </div>
  )
}

export function CaseStudyCards() {
  const cases = [
    {
      name: 'Regional beverage packaging distributor',
      result: 'Lifted recommendation acceptance to 68% in the first pilot window.',
    },
    {
      name: 'Multi-branch industrial packaging seller',
      result: 'Reduced new rep ramp time by turning top seller logic into repeatable guidance.',
    },
    {
      name: 'Supplier-aligned distribution team',
      result: 'Improved expansion planning by surfacing better-fit product opportunities before quarterly reviews.',
    },
  ]

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {cases.map((item) => (
        <SurfaceCard key={item.name} className="p-6">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Case study</div>
          <div className="mt-4 text-xl font-semibold text-slate-950">{item.name}</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.result}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
            <ShieldCheck className="h-3.5 w-3.5 text-teal-700" />
            Sales-manager friendly rollout
          </div>
        </SurfaceCard>
      ))}
    </div>
  )
}

export function PilotFormMockup() {
  return (
    <SurfaceCard id="demo-form" className="p-0">
      <div className="grid gap-px bg-slate-200 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(8,47,73,0.96))] p-8 text-white">
          <div className="inline-flex rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Demo request
          </div>
          <h3 className="mt-5 text-3xl font-semibold tracking-tight">See Defft.ai on your accounts and products.</h3>
          <p className="mt-4 text-sm leading-7 text-white/74">
            We will walk through where the Guesswork Tax shows up, how Defft.ai fits your workflow, and what the team
            should expect from a focused demo conversation.
          </p>
          <div className="mt-8 space-y-4">
            {[
              'Recommended accounts and product families to review',
              'Expected metrics for acceptance, ramp, and revenue',
              'System fit for your current tools and workflow',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="h-4 w-4 text-teal-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {['Name', 'Company', 'Role', 'Team size', 'Systems used'].map((label, index) => (
              <label
                key={label}
                className={cn('block', label === 'Systems used' && 'sm:col-span-2')}
              >
                <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
                {label === 'Systems used' ? (
                  <textarea
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-300 focus:bg-white"
                    placeholder="e.g. ERP, CRM, pricing tools, supplier portals"
                    defaultValue=""
                  />
                ) : (
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-300 focus:bg-white"
                    placeholder={index === 0 ? 'Jordan Lee' : label === 'Company' ? 'Northwest Packaging' : label === 'Role' ? 'Regional Sales Leader' : '45 reps'}
                    defaultValue=""
                  />
                )}
              </label>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="mailto:hello@defft.ai">Book Demo</ButtonLink>
            <ButtonLink href="mailto:hello@defft.ai" variant="secondary">
              Contact Team
            </ButtonLink>
          </div>
        </div>
      </div>
    </SurfaceCard>
  )
}

export function HomeTeaserStats() {
  const items = [
    ['Decision problem', 'Most teams do not have a data problem. They have a decision problem.'],
    ['Knowledge retention', 'Veteran rep logic becomes reusable instead of disappearing with turnover.'],
    ['Manager confidence', 'Branch leaders coach from visible reasoning, not scattered anecdotes.'],
  ]

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map(([title, detail]) => (
        <SurfaceCard key={title} className="p-6">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{title}</div>
          <p className="mt-4 text-base leading-7 text-slate-700">{detail}</p>
        </SurfaceCard>
      ))}
    </div>
  )
}

export const siteIcons = {
  BarChart3,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
  DatabaseZap,
  Factory,
  Handshake,
  LayoutDashboard,
  Radar,
  Target,
  TrendingUp,
  Users,
}
