import { Link, useLocation } from 'wouter'
import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ButtonLink } from '../ui/button'
import { cn } from '../../lib/cn'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/engine', label: 'Engine' },
  { href: '/category', label: 'Category' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/team', label: 'Team' },
  { href: '/strategy', label: 'Strategy' },
]

export function SiteHeader() {
  const [location] = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setOpen(false), 0)
    return () => window.clearTimeout(t)
  }, [location])

  const active = useMemo(() => {
    const clean = location.split('#')[0].split('?')[0]
    return clean
  }, [location])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/8 ring-1 ring-white/12">
            <span className="font-display text-sm font-semibold text-white">D</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold tracking-tight text-white">
              Defft.ai
            </div>
            <div className="text-xs text-white/55">System of Recommendation</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive = item.href !== '/' ? active.startsWith(item.href) : active === '/'
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-xl px-3 py-2 text-sm transition',
                  isActive ? 'bg-white/8 text-white' : 'text-white/70 hover:text-white',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ButtonLink href="/roi" variant="primary" size="md">
              Run ROI Calculator
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/6 ring-1 ring-white/12 hover:bg-white/10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 pb-4">
              <div className="rounded-2xl bg-white/6 p-2 ring-1 ring-white/12 backdrop-blur-xl">
                <div className="grid">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'rounded-xl px-3 py-2.5 text-sm transition',
                        active.startsWith(item.href) ? 'bg-white/10 text-white' : 'text-white/75',
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-2 grid gap-2 p-2">
                  <ButtonLink href="/roi" variant="primary" size="lg">
                    Run ROI Calculator
                  </ButtonLink>
                  <ButtonLink href="/demo" variant="secondary" size="lg">
                    Book a demo
                  </ButtonLink>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

