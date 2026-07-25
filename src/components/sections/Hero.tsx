'use client'
import { motion } from 'framer-motion'
import { FlipFadeText } from '@/components/ui/FlipFadeText'
import { BurstButton } from '@/components/ui/BurstButton'
import { GooeyButton } from '@/components/ui/GooeyButton'
import { useTheme } from 'next-themes'
import { Github, Mail } from 'lucide-react'

function Rings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {[180, 320, 460].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full border"
          style={{
            width: size, height: size,
            borderColor: `color-mix(in srgb, var(--accent) ${12 - i * 3}%, transparent)`,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 22 + i * 8, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      <motion.div
        className="absolute rounded-full"
        animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 180, height: 180,
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 30%, transparent) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

export function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at 30% 60%, rgba(59,11,69,0.35) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, rgba(45,212,191,0.08) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at 30% 60%, rgba(253,213,1,0.18) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, rgba(225,64,17,0.08) 0%, transparent 50%)',
        }}
      />

      <Rings />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl sm:text-8xl font-black tracking-tight mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          Sugumaran
          <span className="block" style={{ color: 'var(--accent)' }}>S.</span>
        </motion.h1>

        {/* Flip fade titles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-2 h-10"
          style={{ color: 'var(--text-muted)' }}
        >
          <FlipFadeText />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="divider my-8 mx-auto"
        />

        {/* One-line bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12"
          style={{ color: 'var(--text-muted)' }}
        >
          MCA graduate building production-grade AI systems and full-stack applications.
          Python-first. Deployed and available immediately.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-5 justify-center"
        >
          <BurstButton href="/cv.pdf" download>
            Download CV
          </BurstButton>
          <GooeyButton
            href="#contact"
            color={isDark ? '#A78BFA' : '#E14011'}
          >
            <Mail size={15} /> Contact Me
          </GooeyButton>
        </motion.div>
      </motion.div>

      {/* Scroll nudge */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-px h-10 rounded-full" style={{ background: 'linear-gradient(180deg, var(--accent), transparent)' }} />
      </motion.div>
    </section>
  )
}
