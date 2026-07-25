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
        // These map to CSS variables so the font switches per theme automatically
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'blob-bounce': 'blob-bounce 5s infinite ease',
        'floating':    'floating 2600ms infinite linear',
        'spin-border': 'spin-border 5s infinite linear',
        'shimmer':     'shimmer 3s linear infinite',
      },
      boxShadow: {
        'accent-glow': '0 0 20px color-mix(in srgb, var(--accent) 40%, transparent)',
      },
    },
  },
  plugins: [],
}

export default config
