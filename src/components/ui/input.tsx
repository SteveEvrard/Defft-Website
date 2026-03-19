import * as React from 'react'
import { cn } from '../../lib/cn'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props
  return (
    <input
      className={cn(
        'h-11 w-full rounded-xl bg-white/5 px-3 text-sm text-white ring-1 ring-white/12 backdrop-blur placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-defft-orange/50',
        className,
      )}
      {...rest}
    />
  )
}

