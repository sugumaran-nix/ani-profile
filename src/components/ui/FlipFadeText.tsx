'use client'
import { useEffect, useState, useMemo, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TITLES = [
  'AI/ML ENGINEER',
  'NLP ENGINEER',
  'PYTHON DEVELOPER',
  'FULL STACK DEV',
  'BACKEND ENGINEER',
]

const Letter = memo(function Letter({ char, dur }: { char: string; dur: number }) {
  return (
    <motion.span
      style={{ transformStyle: 'preserve-3d', display: 'inline-block' }}
      variants={{
        initial: { rotateX: 90, y: 16, opacity: 0, filter: 'blur(6px)' },
        animate: {
          rotateX: 0, y: 0, opacity: 1, filter: 'blur(0px)',
          transition: { duration: dur, ease: [0.2, 0.65, 0.3, 0.9] },
        },
        exit: {
          rotateX: -90, y: -16, opacity: 0, filter: 'blur(6px)',
          transition: { duration: dur * 0.6, ease: 'easeIn' },
        },
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
})

const Word = memo(function Word({ text }: { text: string }) {
  const letters = useMemo(() => text.split(''), [text])
  return (
    <motion.div
      className="f-mono"
      style={{
        display: 'flex',
        gap: '0.04em',
        fontSize: 'clamp(14px, 3vw, 20px)',
        letterSpacing: '0.18em',
        color: 'var(--txt-2)',
        fontWeight: 500,
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 1 },
        animate: { opacity: 1, transition: { staggerChildren: 0.06 } },
        exit:    { opacity: 1, transition: { staggerChildren: 0.03 } },
      }}
    >
      {letters.map((ch, i) => <Letter key={`${ch}-${i}`} char={ch} dur={0.45} />)}
    </motion.div>
  )
})

export function FlipFadeText() {
  const [idx, setIdx] = useState(0)
  const next = useCallback(() => setIdx(p => (p + 1) % TITLES.length), [])
  useEffect(() => {
    const t = setInterval(next, 2600)
    return () => clearInterval(t)
  }, [next])

  return (
    <div style={{ perspective: '800px', height: 28, display: 'flex', alignItems: 'center' }}>
      <AnimatePresence mode="wait">
        <Word key={TITLES[idx]} text={TITLES[idx]} />
      </AnimatePresence>
    </div>
  )
}
