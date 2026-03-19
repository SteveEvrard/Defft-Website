import * as React from 'react'
import { Link } from 'wouter'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-defft-orange/60 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-defft-orange text-black shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_14px_60px_rgba(255,90,31,0.35)] hover:bg-[#ff6a35]',
  secondary:
    'bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/14 hover:ring-white/25',
  ghost: 'bg-transparent text-white/85 hover:bg-white/6',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
}

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
    size?: ButtonSize
  },
) {
  const { className, variant = 'secondary', size = 'md', ...rest } = props
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    />
  )
}

export function ButtonLink(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    variant?: ButtonVariant
    size?: ButtonSize
  },
) {
  const { className, variant = 'secondary', size = 'md', href, ...rest } = props
  const isExternal =
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:')

  if (isExternal) {
    return (
      <a
        className={cn(base, variants[variant], sizes[size], className)}
        href={href}
        {...rest}
      />
    )
  }

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    />
  )
}

