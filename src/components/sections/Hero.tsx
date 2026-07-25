'use client'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { FlipFadeText } from '@/components/ui/FlipFadeText'
import { BurstButton } from '@/components/ui/BurstButton'
import { GooeyButton } from '@/components/ui/GooeyButton'
import { Download, Mail } from 'lucide-react'

function Ring({ size, speed, reverse }: { size: number; speed: number; reverse?: boolean }) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      style={{
        position: 'absolute',
        width: size, height: size,
        borderRadius: '50%',
        border: '1px solid color-mix(in srgb, var(--accent) 12%, transparent)',
        pointerEvents: 'none',
      }}
    />
  )
}

export function Hero() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg)',
        /* critical: start content BELOW the 52px navbar */
        paddingTop: 52,
      }}
    >
      {/* Ambient radial gradient */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: isDark
          ? 'radial-gradient(ellipse 60% 50% at 20% 55%, rgba(59,11,69,0.4) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 25%, rgba(45,212,191,0.07) 0%, transparent 60%)'
          : 'radial-gradient(ellipse 60% 50% at 25% 55%, rgba(253,213,1,0.2) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 25%, rgba(225,64,17,0.07) 0%, transparent 60%)',
      }} />

      {/* Decorative rings — centered behind content */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <Ring size={220} speed={24} />
        <Ring size={380} speed={36} reverse />
        <Ring size={540} speed={52} />
        {/* Soft glow orb */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', width: 200, height: 200, borderRadius: '50%',
            background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 35%, transparent) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative', zIndex: 1,
          maxWidth: 680, width: '100%',
          padding: '0 24px',
          textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0,
        }}
      >
        {/* Name — single line, never wraps */}
        <motion.h1
          className="f-display"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(52px, 10vw, 96px)',
            fontWeight: 900,
            lineHeight: 1,
            whiteSpace: 'nowrap',
            color: 'var(--txt)',
            marginBottom: 8,
          }}
        >
          Sugumaran{' '}
          <span style={{ color: 'var(--accent)' }}>S.</span>
        </motion.h1>

        {/* Flip-fade role titles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28 }}
          style={{ marginBottom: 28 }}
        >
          <FlipFadeText />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.65, delay: 0.38 }}
          className="divider"
          style={{ width: 180, marginBottom: 28 }}
        />

        {/* One-liner bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          style={{
            fontSize: 'clamp(14px, 2vw, 16px)',
            color: 'var(--txt-3)',
            lineHeight: 1.75,
            maxWidth: 520,
            marginBottom: 40,
          }}
        >
          MCA graduate building production-grade AI systems and full-stack applications.
          Python-first. Deployed and available immediately.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
        >
          <BurstButton href="/cv.pdf" download>
            <Download size={15} />
            Download CV
          </BurstButton>
          <GooeyButton href="#contact">
            <Mail size={15} />
            Contact Me
          </GooeyButton>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div style={{ width: 1, height: 44, background: 'linear-gradient(180deg, var(--accent), transparent)', borderRadius: 1 }} />
      </motion.div>
    </section>
  )
}
