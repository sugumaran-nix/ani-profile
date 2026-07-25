'use client'
import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const isDark = resolvedTheme === 'dark'
    const particles: { x: number; y: number; vx: number; vy: number; life: number; max: number; size: number }[] = []

    const spawn = () => {
      if (particles.length >= 40) return
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 1.2 + 0.4),
        life: 0,
        max: Math.random() * 160 + 80,
        size: Math.random() * 3 + 1.5,
      })
    }

    let tick = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      tick++
      if (tick % 18 === 0) spawn()

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx; p.y += p.vy; p.life++
        if (p.life >= p.max) { particles.splice(i, 1); continue }

        const t = p.life / p.max
        const alpha = t < 0.2 ? t / 0.2 : t > 0.8 ? (1 - t) / 0.2 : 1
        ctx.save()
        ctx.globalAlpha = alpha * 0.5
        ctx.translate(p.x, p.y)

        if (!isDark) {
          // Naruto: shuriken
          ctx.rotate(tick * 0.03)
          ctx.fillStyle = '#E14011'
          ctx.strokeStyle = '#FDD501'
          ctx.lineWidth = 0.8
          ctx.beginPath()
          for (let s = 0; s < 4; s++) {
            ctx.rotate(Math.PI / 2)
            ctx.moveTo(0, 0)
            ctx.lineTo(p.size * 0.5, p.size * 0.2)
            ctx.lineTo(p.size * 1.4, 0)
            ctx.lineTo(p.size * 0.5, -p.size * 0.2)
          }
          ctx.fill(); ctx.stroke()
        } else {
          // Aizen: butterfly
          ctx.scale(p.size * 0.4, p.size * 0.4)
          ctx.beginPath()
          ctx.ellipse(-1.2, 0, 1.5, 0.7, -0.4, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(167,139,250,0.7)'
          ctx.fill()
          ctx.beginPath()
          ctx.ellipse(1.2, 0, 1.5, 0.7, 0.4, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(45,212,191,0.6)'
          ctx.fill()
        }
        ctx.restore()
      }
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.55 }}
    />
  )
}
