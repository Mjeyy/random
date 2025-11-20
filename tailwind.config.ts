import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0A1A',
        accent: {
          gold: '#FFD700',
          turquoise: '#A0E7E5',
          darkBlue: '#1A1A2E',
        },
        text: {
          primary: '#E0E0FF',
          secondary: '#B0B0D0',
          heading: 'rgba(255, 255, 255, 0.95)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'coin-flip': 'coin-flip 2s cubic-bezier(0.4, 0, 0.6, 1)',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.3s ease-out',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { transform: 'scale(1.02)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        'coin-flip': {
          '0%': { transform: 'rotateY(0deg) translateY(0px)' },
          '50%': { transform: 'rotateY(1800deg) translateY(-200px)' },
          '100%': { transform: 'rotateY(3600deg) translateY(0px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'gold-glow': '0 0 20px rgba(255, 215, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config

