'use client'
import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  size: number; opacity: number
  color: string; pulse: number; pulseSpeed: number
}

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf = 0
    let particles: Particle[] = []
    const W = () => window.innerWidth
    const H = () => window.innerHeight

    const LIGHT_COLORS = ['#E84010', '#F5C800', '#1A3A8F', '#E84010', '#F5C800']
    const DARK_COLORS  = ['#9B6FFF', '#2DE8D0', '#FF5070', '#9B6FFF', '#2DE8D0']

    function init() {
      canvas!.width  = W()
      canvas!.height = H()
      const colors = resolvedTheme === 'light' ? LIGHT_COLORS : DARK_COLORS
      const count = Math.floor((W() * H()) / 22000)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W(),
        y: Math.random() * H(),
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, W(), H())
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy
        p.pulse += p.pulseSpeed
        const a = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse))
        if (p.x < 0) p.x = W(); if (p.x > W()) p.x = 0
        if (p.y < 0) p.y = H(); if (p.y > H()) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.round(a * 255).toString(16).padStart(2, '0')
        ctx.fill()
      }
      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const alpha = (1 - dist / 90) * 0.12
            ctx.strokeStyle = particles[i].color + Math.round(alpha * 255).toString(16).padStart(2, '0')
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    init()
    draw()
    const onResize = () => { init() }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} id="particle-canvas" aria-hidden="true" />
}
