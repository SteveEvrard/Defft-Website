import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        defft: {
          obsidian: '#050814',
          ink: '#070A18',
          orange: '#FF5A1F',
          teal: '#2EE7D0',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 10px 40px rgba(0,0,0,0.55)',
      },
    },
  },
} satisfies Config

