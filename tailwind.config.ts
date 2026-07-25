import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        // Naruto light theme
        naruto: {
          orange: '#E14011',
          'orange-light': '#FF6B35',
          gold: '#FDD501',
          'gold-dark': '#E5B800',
          blue: '#024DA1',
          'blue-light': '#1565C0',
          cream: '#FFFDF0',
          parchment: '#F5EED8',
          tan: '#D4A96A',
          ink: '#1A1A1A',
          'ink-light': '#3D3D3D',
        },
        // Aizen dark theme — brighter, more saturated for readability
        aizen: {
          void: '#0A0818',
          deep: '#130F2A',
          surface: '#1E1840',
          card: '#251E4F',
          border: '#3D2F7A',
          violet: '#8B5CF6',
          'violet-bright': '#A78BFA',
          'violet-glow': '#C4B5FD',
          turquoise: '#2DD4BF',
          'turquoise-bright': '#5EEAD4',
          crimson: '#EF4444',
          'crimson-bright': '#F87171',
          text: '#EDE9FE',
          'text-secondary': '#C4B5FD',
          'text-muted': '#8B7CB6',
          silver: '#DDD6FE',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse': 'spin-reverse 8s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'reiatsu': 'reiatsu 4s ease-in-out infinite',
        'butterfly': 'butterfly 8s ease-in-out infinite',
        'chakra-burst': 'chakraBurst 0.6s ease-out',
        'ink-draw': 'inkDraw 1.2s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        reiatsu: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: '0.7', transform: 'scale(1.1) rotate(180deg)' },
        },
        butterfly: {
          '0%': { transform: 'translate(0,0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '50%': { transform: 'translate(30px,-40px) rotate(25deg)' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(80px,10px) rotate(-15deg)', opacity: '0' },
        },
        chakraBurst: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
        inkDraw: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'naruto-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 20 L50 20 L38 30 L43 45 L30 36 L17 45 L22 30 L10 20 L25 20 Z' fill='none' stroke='%23FDD50115' stroke-width='1'/%3E%3C/svg%3E\")",
        'aizen-pattern': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='35' fill='none' stroke='%238B5CF608' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='20' fill='none' stroke='%238B5CF608' stroke-width='1'/%3E%3Cline x1='40' y1='5' x2='40' y2='75' stroke='%238B5CF605' stroke-width='1'/%3E%3Cline x1='5' y1='40' x2='75' y2='40' stroke='%238B5CF605' stroke-width='1'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'orange-glow': '0 0 20px rgba(225,64,17,0.4), 0 0 40px rgba(225,64,17,0.2)',
        'gold-glow': '0 0 20px rgba(253,213,1,0.4)',
        'violet-glow': '0 0 20px rgba(139,92,246,0.5), 0 0 40px rgba(139,92,246,0.3)',
        'violet-glow-lg': '0 0 40px rgba(139,92,246,0.6), 0 0 80px rgba(139,92,246,0.3)',
        'turquoise-glow': '0 0 20px rgba(45,212,191,0.4)',
        'crimson-glow': '0 0 20px rgba(239,68,68,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
