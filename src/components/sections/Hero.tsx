'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Github, Mail, Linkedin, FileText, ArrowDown } from 'lucide-react'

const TITLES = [
  'AI/ML Engineer',
  'Full Stack Developer',
  'NLP Engineer',
  'Python Developer',
  'Backend Engineer',
]

function TypewriterTitle() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = TITLES[titleIdx]
    let timeout: NodeJS.Timeout

    if (!deleting && displayed === target) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed === '') {
      setDeleting(false)
      setTitleIdx((i) => (i + 1) % TITLES.length)
    } else if (!deleting) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
    } else {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIdx])

  return (
    <span>
      {displayed}
      <span className="animate-pulse" style={{ color: 'var(--accent-primary)' }}>|</span>
    </span>
  )
}

// Decorative rings — Naruto chakra OR Aizen reiatsu
function DecorativeRings({ isDark }: { isDark: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${200 + i * 150}px`,
            height: `${200 + i * 150}px`,
            borderColor: isDark
              ? `rgba(139,92,246,${0.15 - i * 0.04})`
              : `rgba(225,64,17,${0.12 - i * 0.03})`,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      {/* Center glow */}
      <motion.div
        className="absolute rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 200,
          height: 200,
          background: isDark
            ? 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(253,213,1,0.3) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

export function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: isDark
            ? 'var(--tw-gradient-from, transparent)'
            : 'var(--tw-gradient-from, transparent)',
          background: isDark
            ? 'radial-gradient(ellipse at 20% 50%, rgba(59,11,69,0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(45,212,191,0.1) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at 20% 50%, rgba(253,213,1,0.2) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(225,64,17,0.1) 0%, transparent 50%)',
        }}
      />

      <DecorativeRings isDark={isDark} />

      {/* Kanji watermark */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 font-display text-[180px] font-black leading-none select-none pointer-events-none"
        style={{
          color: isDark ? 'rgba(139,92,246,0.04)' : 'rgba(225,64,17,0.05)',
          writingMode: 'vertical-rl',
        }}
      >
        {isDark ? '藍染惣右介' : '渦巻きナルト'}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-mono tracking-widest border"
            style={{
              background: isDark ? 'rgba(139,92,246,0.15)' : 'rgba(225,64,17,0.08)',
              borderColor: 'var(--accent-primary)',
              color: 'var(--accent-primary)',
            }}
          >
            {isDark ? '⬡ AVAILABLE FOR OPPORTUNITIES' : '✦ OPEN TO WORK'}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-7xl font-black tracking-tight mb-4 glow-text"
          style={{ color: 'var(--text-primary)' }}
        >
          Sugumaran
          <span className="block" style={{ color: 'var(--accent-primary)' }}>
            Kugan S
          </span>
        </motion.h1>

        {/* Typewriter title */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl font-mono mb-6 h-9"
          style={{ color: 'var(--text-secondary)' }}
        >
          <TypewriterTitle />
        </motion.p>

        {/* Ink divider */}
        <motion.div variants={itemVariants} className="ink-divider max-w-xs mx-auto mb-8 rounded-full" />

        {/* Summary */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: 'var(--text-muted)' }}
        >
          MCA Graduate (2026) · Built ML systems achieving{' '}
          <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>87.57% F1-score</span>{' '}
          on fraud detection · Deployed real-time WebSocket collaboration · Python-first, full-stack capable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-14">
          <motion.a
            href="https://github.com/sugumaran-nix"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{
              background: 'var(--accent-primary)',
              color: '#fff',
              boxShadow: isDark
                ? '0 0 20px rgba(139,92,246,0.4)'
                : '0 0 20px rgba(225,64,17,0.4)',
            }}
          >
            <Github size={18} /> View GitHub
          </motion.a>
          <motion.a
            href="mailto:sugumarankugan@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-all duration-300"
            style={{
              borderColor: 'var(--accent-primary)',
              color: 'var(--accent-primary)',
              background: 'transparent',
            }}
          >
            <Mail size={18} /> Contact Me
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/sugumaran-nix"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-300"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)',
              background: 'var(--bg-card)',
            }}
          >
            <Linkedin size={18} /> LinkedIn
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-12"
        >
          {[
            { value: '4+', label: isDark ? 'Deployed Systems' : 'Projects Shipped' },
            { value: '87.57%', label: isDark ? 'Fraud F1-Score' : 'ML F1-Score' },
            { value: '2026', label: isDark ? 'MCA Graduate' : 'Anna University' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display text-2xl font-bold"
                style={{ color: 'var(--accent-primary)' }}
              >
                {stat.value}
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
          style={{ color: 'var(--text-muted)' }}
        >
          <span className="text-xs font-mono tracking-widest">
            {isDark ? 'ENTER THE SOUL SOCIETY' : 'BEGIN THE MISSION'}
          </span>
          <ArrowDown size={20} style={{ color: 'var(--accent-primary)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
