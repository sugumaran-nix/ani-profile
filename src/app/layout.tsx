import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sugumaran S — AI/ML & Full Stack Engineer',
  description: 'Portfolio of Sugumaran S — MCA graduate building production-grade AI systems, NLP pipelines, and full-stack applications.',
  authors: [{ name: 'Sugumaran S', url: 'https://github.com/sugumaran-nix' }],
  openGraph: {
    title: 'Sugumaran S — AI/ML & Full Stack Engineer',
    description: 'MCA graduate. Python-first. Deployed and available immediately.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/ninja-naruto"    rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/anime-ace"        rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/samurai-blast"    rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/shoguns-clan"     rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
