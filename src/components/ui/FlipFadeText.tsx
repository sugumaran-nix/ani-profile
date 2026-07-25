'use client'
import { useEffect, useState, useMemo, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const TITLES = [
  'AI/ML ENGINEER',
  'NLP ENGINEER',
  'PYTHON DEVELOPER',
  'FULL STACK DEV',
  'BACKEND ENGINEER',
]

const Letter = memo(function Letter({ char, letterDuration }: { char: string; letterDuration: number }) {
  return (
    <motion.span
      style={{ transformStyle: 'preserve-3d', display: 'inline-block' }}
      variants={{
        initial: { rotateX: 90, y: 20, opacity: 0, filter: 'blur(8px)' },
        animate: {
          rotateX: 0, y: 0, opacity: 1, filter: 'blur(0px)',
          transition: { duration: letterDuration, ease: [0.2, 0.65, 0.3, 0.9] },
        },
        exit: {
          rotateX: -90, y: -20, opacity: 0, filter: 'blur(8px)',
          transition: { duration: letterDuration * 0.67, ease: 'easeIn' },
        },
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
})

const Word = memo(function Word({
  text, staggerDelay, exitStaggerDelay, letterDuration, className,
}: { text: string; staggerDelay: number; exitStaggerDelay: number; letterDuration: number; className?: string }) {
  const letters = useMemo(() => text.split(''), [text])
  return (
    <motion.div
      className={cn('flex gap-[0.05em] font-mono tracking-widest', className)}
      initial="initial" animate="animate" exit="exit"
      variants={{
        initial: { opacity: 1 },
        animate: { opacity: 1, transition: { staggerChildren: staggerDelay } },
        exit:    { opacity: 1, transition: { staggerChildren: exitStaggerDelay } },
      }}
    >
      {letters.map((char, i) => (
        <Letter key={`${char}-${i}`} char={char} letterDuration={letterDuration} />
      ))}
    </motion.div>
  )
})

export function FlipFadeText({ className }: { className?: string }) {
  const [index, setIndex] = useState(0)
  const updateIndex = useCallback(() => setIndex(p => (p + 1) % TITLES.length), [])
  useEffect(() => {
    const t = setInterval(updateIndex, 2500)
    return () => clearInterval(t)
  }, [updateIndex])

  return (
    <div className={cn('flex items-center justify-center', className)} style={{ perspective: '1000px' }}>
      <AnimatePresence mode="wait">
        <Word
          key={TITLES[index]}
          text={TITLES[index]}
          staggerDelay={0.07}
          exitStaggerDelay={0.04}
          letterDuration={0.5}
          className="text-xl sm:text-2xl"
        />
      </AnimatePresence>
    </div>
  )
}
