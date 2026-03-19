import * as React from 'react'
import { cn } from '../../lib/cn'

export function Badge(
  props: React.HTMLAttributes<HTMLSpanElement> & { variant?: 'neutral' | 'accent' },
) {
  const { className, variant = 'neutral', ...rest } = props
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset',
        variant === 'accent'
          ? 'bg-defft-orange/15 text-defft-orange ring-defft-orange/25'
          : 'bg-white/6 text-white/75 ring-white/12',
        className,
      )}
      {...rest}
    />
  )
}

