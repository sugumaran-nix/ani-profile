import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sugumaran S — AI/ML Engineer & Full Stack Developer',
  description:
    'Portfolio of Sugumaran S — MCA Graduate, AI/ML Engineer, Full Stack Developer specializing in Python, FastAPI, React, Next.js, NLP, and Machine Learning.',
  keywords: [
    'AI Engineer',
    'ML Engineer',
    'Python Developer',
    'Full Stack Developer',
    'NLP',
    'FastAPI',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Sugumaran S', url: 'https://github.com/sugumaran-nix' }],
  openGraph: {
    title: 'Sugumaran S — AI/ML Engineer',
    description: 'Building intelligent systems end-to-end.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
