'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Mail, Github, Linkedin } from 'lucide-react'

const ROLES = [
  'AI/ML Engineer',
  'Full Stack Developer',
  'React + Python + FastAPI',
  'Still Learning, Always Shipping',
  'Open to Work',
]

const PROFILE_SOCIALS = [
  { Icon: Github,   href: 'https://github.com/sugumaran-nix',     label: 'GitHub'   },
  { Icon: Linkedin, href: 'https://linkedin.com/in/sugumaran-nix', label: 'LinkedIn' },
  { Icon: Mail,     href: 'mailto:sugumarankugan@gmail.com',        label: 'Email'    },
]

function GlitchName() {
  return (
    <div className="hero-name-wrap">
      <div className="hero-name-shadow" aria-hidden="true">SUGUMARAN</div>
      <h1 className="hero-name f-display">
        <span className="glitch" data-text="SUGUMARAN" style={{ display: 'block' }}>SUGUMARAN</span>
        <span className="accent glitch" data-text="S.">S.</span>
      </h1>
    </div>
  )
}

function RoleFlip() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % ROLES.length), 2200)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="hero-role-row">
      <span className="hero-role-label">▸</span>
      <div style={{ overflow: 'hidden', height: 24 }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={ROLES[idx]}
            className="hero-role-text"
            initial={{ y: 24, opacity: 0, skewX: -4 }}
            animate={{ y: 0, opacity: 1, skewX: 0 }}
            exit={{ y: -24, opacity: 0, skewX: 4 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ display: 'block' }}
          >
            {ROLES[idx]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}

function SpeedLines() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute', top: '50%', left: '30%',
        transform: 'translate(-50%, -50%)',
        width: '140%', height: '140%',
        opacity: 0.06, pointerEvents: 'none', zIndex: 0,
      }}
      viewBox="0 0 800 800"
    >
      {Array.from({ length: 36 }, (_, i) => {
        const angle = (i / 36) * 360
        const rad = (angle * Math.PI) / 180
        const x1 = 400 + Math.cos(rad) * 80
        const y1 = 400 + Math.sin(rad) * 80
        const x2 = 400 + Math.cos(rad) * 420
        const y2 = 400 + Math.sin(rad) * 420
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={i % 3 === 0 ? 3 : 1.5} strokeLinecap="square" />
      })}
    </svg>
  )
}

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = orbRef.current; if (!el) return
    const onMove = (e: MouseEvent) => {
      const rx = (e.clientX / window.innerWidth - 0.5) * 28
      const ry = (e.clientY / window.innerHeight - 0.5) * 18
      el.style.transform = `translate(${rx}px, ${ry}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const slamLeft  = { hidden: { x: -120, opacity: 0, skewX: -8 }, show: { x: 0, opacity: 1, skewX: 0, transition: { type: 'spring', stiffness: 260, damping: 18 } } }
  const slamUp    = { hidden: { y: 80, opacity: 0, scaleY: 1.15 }, show: { y: 0, opacity: 1, scaleY: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } } }
  const slamRight = { hidden: { x: 120, opacity: 0, skewX: 8 }, show: { x: 0, opacity: 1, skewX: 0, transition: { type: 'spring', stiffness: 260, damping: 18 } } }

  return (
    <section id="hero" className="hero-root screentone">
      <div ref={orbRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', transition: 'transform 0.12s linear' }}>
        <div className="hero-orb" style={{ width: 480, height: 480, top: -120, left: -100, background: 'var(--acc)', opacity: 0.10 }} />
        <div className="hero-orb" style={{ width: 320, height: 320, bottom: 0, right: '35%', background: 'var(--acc2)', opacity: 0.08, animationDelay: '-3s' }} />
        <div className="hero-orb" style={{ width: 220, height: 220, top: '25%', right: '10%', background: 'var(--acc3)', opacity: 0.07, animationDelay: '-5s' }} />
      </div>

      {/* Centred wrapper — matches sec-inner max-width & side padding */}
      <div className="hero-inner">
        {/* LEFT */}
        <motion.div className="hero-left" variants={container} initial="hidden" animate="show">
          <SpeedLines />
          <motion.div variants={slamLeft}>
            <span className="hero-eyebrow f-mono">MCA Grad · Anna University · Coimbatore, India</span>
          </motion.div>
          <motion.div variants={slamLeft} style={{ position: 'relative', zIndex: 1 }}>
            <GlitchName />
          </motion.div>
          <motion.div variants={slamUp}>
            <p className="hero-subtitle f-title">AI / ML — Full Stack — NLP</p>
          </motion.div>
          <motion.div variants={slamUp}>
            <RoleFlip />
          </motion.div>
          <motion.p className="hero-bio" variants={slamUp}>
            Recent MCA grad from Anna University. I build full-stack AI apps — the kind that
            actually do something useful, not just hello world with a neural network slapped on.
            Four projects, all deployed, all open source. Looking for a team that ships.
          </motion.p>
          <motion.div className="hero-ctas" variants={slamUp}>
            <a href="/resume.pdf" download className="btn-primary">
              <Download size={14} /> Download CV
            </a>
            <a href="#contact" className="btn-sec">
              <Mail size={14} /> Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — profile card */}
        <motion.div className="hero-right" variants={container} initial="hidden" animate="show">
          <motion.div
            className="profile-card"
            variants={slamRight}
            whileHover={{ x: -4, y: -4, boxShadow: '8px 8px 0 var(--txt)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <img
              src="https://github.com/sugumaran-nix.png"
              alt="Sugumaran S."
              className="profile-card-img"
            />
            <p className="profile-card-info f-mono">
              MCA '26 · building full-stack AI apps that actually work
              <br />
              <span style={{ color: 'var(--acc)', fontWeight: 700 }}>open to work</span>
            </p>
            <div className="profile-card-socials">
              {PROFILE_SOCIALS.map(({ Icon, href, label }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="profile-soc-btn" aria-label={label}
                >
                  <Icon size={14} />
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em' }}>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 40, background: 'var(--bg2)',
        clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
        pointerEvents: 'none', zIndex: 3,
      }} />
    </section>
  )
}
