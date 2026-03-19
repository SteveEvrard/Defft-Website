import { motion } from 'framer-motion'

export function BackgroundGlows() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-[-120px] h-[520px] w-[520px] rounded-full bg-defft-teal/18 blur-3xl"
        animate={{ x: [0, 24, -8, 0], y: [0, 12, 0, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-32 top-[-180px] h-[620px] w-[620px] rounded-full bg-defft-orange/18 blur-3xl"
        animate={{ x: [0, -18, 10, 0], y: [0, 14, 4, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[30%] top-[55%] h-[520px] w-[520px] rounded-full bg-white/6 blur-3xl"
        animate={{ x: [0, 14, -10, 0], y: [0, -10, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_40%)]" />
    </div>
  )
}

