import * as React from 'react'
import { cn } from '../../lib/cn'

type TabsContextValue = {
  value: string
  setValue: (v: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

export function Tabs(props: {
  value?: string
  defaultValue?: string
  onValueChange?: (v: string) => void
  className?: string
  children: React.ReactNode
}) {
  const [internal, setInternal] = React.useState(props.defaultValue ?? '')
  const value = props.value ?? internal
  const setValue = (v: string) => {
    if (props.value === undefined) setInternal(v)
    props.onValueChange?.(v)
  }

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={props.className}>{props.children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex h-11 items-center rounded-2xl bg-white/6 p-1 ring-1 ring-white/12 backdrop-blur-xl',
        props.className,
      )}
      {...props}
    />
  )
}

export function TabsTrigger(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string },
) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('TabsTrigger must be used within Tabs')
  const active = ctx.value === props.value
  const { className, value, ...rest } = props
  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      className={cn(
        'h-9 rounded-xl px-3 text-sm font-medium transition',
        active ? 'bg-white/12 text-white' : 'text-white/70 hover:text-white',
        className,
      )}
      {...rest}
    />
  )
}

export function TabsContent(
  props: React.HTMLAttributes<HTMLDivElement> & { value: string },
) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('TabsContent must be used within Tabs')
  if (ctx.value !== props.value) return null
  const { className, ...rest } = props
  return <div className={cn('mt-6', className)} {...rest} />
}

