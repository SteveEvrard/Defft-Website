import * as React from 'react'
import { cn } from '../../lib/cn'

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props
  return (
    <div
      className={cn(
        'rounded-2xl bg-white/6 backdrop-blur-xl ring-1 ring-white/12 shadow-glow',
        className,
      )}
      {...rest}
    />
  )
}

export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pb-3', props.className)} {...props} />
}

export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'font-display text-lg font-semibold tracking-tight text-white',
        props.className,
      )}
      {...props}
    />
  )
}

export function CardDescription(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('mt-1 text-sm text-white/70', props.className)} {...props} />
  )
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pt-0', props.className)} {...props} />
}

export function CardFooter(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pt-0', props.className)} {...props} />
}

