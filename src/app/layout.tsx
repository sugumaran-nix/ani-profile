import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { GooSvg } from '@/components/ui/GooSvg'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sugumaran S — AI/ML & Full Stack Engineer',
  description: 'Portfolio of Sugumaran S — MCA graduate specializing in AI/ML, Python, FastAPI, React, Next.js, and NLP.',
  authors: [{ name: 'Sugumaran S', url: 'https://github.com/sugumaran-nix' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/ninja-naruto" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/alzelvin" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          {/* Single global gooey SVG filter — referenced by all gooey buttons */}
          <GooSvg />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
