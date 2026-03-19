import { motion } from 'framer-motion'

const steps = [
  { title: 'Capture', desc: 'Meetings, transactions, outcomes' },
  { title: 'Connect', desc: 'Knowledge graph builds context' },
  { title: 'Recommend', desc: 'Next best actions and plays' },
  { title: 'Learn', desc: 'Outcomes reinforce what works' },
]

export function Flywheel() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <motion.div
          whileHover={{ rotate: 18 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent ring-1 ring-white/14"
        />
        <motion.div
          whileHover={{ rotate: -10 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          className="absolute inset-8 rounded-full bg-black/25 ring-1 ring-white/12"
        />

        <div className="absolute inset-0 grid place-items-center">
          <div className="rounded-2xl bg-white/6 px-4 py-3 ring-1 ring-white/12 backdrop-blur-xl">
            <div className="text-xs text-white/55">Compounding intelligence</div>
            <div className="mt-1 font-display text-sm font-semibold text-white">Knowledge graph flywheel</div>
          </div>
        </div>

        <div className="absolute inset-0">
          {[
            { x: '50%', y: '6%', c: 'bg-defft-orange/18 ring-defft-orange/25', t: 'Capture' },
            { x: '92%', y: '50%', c: 'bg-white/10 ring-white/16', t: 'Connect' },
            { x: '50%', y: '94%', c: 'bg-defft-teal/18 ring-defft-teal/25', t: 'Recommend' },
            { x: '8%', y: '50%', c: 'bg-white/10 ring-white/16', t: 'Learn' },
          ].map((p) => (
            <div
              key={p.t}
              className={`absolute grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl ring-1 ${p.c}`}
              style={{ left: p.x, top: p.y }}
            >
              <span className="text-[11px] font-semibold text-white">{p.t}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3">
        {steps.map((s) => (
          <div key={s.title} className="rounded-2xl bg-white/6 p-4 ring-1 ring-white/12">
            <div className="text-sm font-semibold text-white">{s.title}</div>
            <div className="mt-1 text-sm text-white/65">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

