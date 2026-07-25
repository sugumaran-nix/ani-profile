import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sugumaran S — AI/ML & Full Stack Engineer',
  description: 'Portfolio of Sugumaran S — MCA graduate specializing in AI/ML, Python, FastAPI, React, Next.js, and NLP.',
  keywords: ['AI Engineer', 'ML Engineer', 'Python Developer', 'Full Stack', 'NLP', 'FastAPI', 'React', 'Next.js'],
  authors: [{ name: 'Sugumaran S', url: 'https://github.com/sugumaran-nix' }],
  openGraph: {
    title: 'Sugumaran S — AI/ML & Full Stack Engineer',
    description: 'Building intelligent systems end-to-end.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts — body & mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* CDN Fonts — display fonts per theme */}
        <link href="https://fonts.cdnfonts.com/css/ninja-naruto" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/alzelvin" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
