'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [burst, setBurst] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === 'dark'

  const toggle = () => {
    setBurst(true)
    setTimeout(() => setBurst(false), 600)
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div className="relative">
      {/* Burst ring animation */}
      <AnimatePresence>
        {burst && (
          <motion.div
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: isDark
                ? 'radial-gradient(circle, rgba(253,213,1,0.6) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)',
            }}
          />
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        aria-label={isDark ? 'Switch to Naruto (light) theme' : 'Switch to Aizen (dark) theme'}
        className="relative w-14 h-7 rounded-full border-2 transition-all duration-500 overflow-hidden focus:outline-none focus-visible:ring-2"
        style={{
          borderColor: isDark ? '#8B5CF6' : '#E14011',
          background: isDark
            ? 'linear-gradient(135deg, #1E1840, #3D2F7A)'
            : 'linear-gradient(135deg, #FDD501, #E14011)',
        }}
      >
        <motion.div
          animate={{ x: isDark ? 28 : 2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-lg"
          style={{
            background: isDark ? '#A78BFA' : '#FFFFFF',
          }}
        >
          {isDark ? '🦋' : '🍃'}
        </motion.div>
      </motion.button>

      {/* Label */}
      <span
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-mono whitespace-nowrap"
        style={{ color: 'var(--text-muted)' }}
      >
        {isDark ? 'Aizen' : 'Naruto'}
      </span>
    </div>
  )
}
