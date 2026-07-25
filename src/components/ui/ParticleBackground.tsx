'use client'
import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
  type: 'naruto' | 'aizen'
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const animFrameRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const isDark = theme === 'dark'
    particlesRef.current = []

    const spawn = () => {
      if (particlesRef.current.length > 60) return
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(Math.random() * 1.5 + 0.5),
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100,
        type: isDark ? 'aizen' : 'naruto',
      })
    }

    // Draw shuriken (Naruto)
    const drawShuriken = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.translate(x, y)
      ctx.rotate(Date.now() * 0.002)
      ctx.strokeStyle = `rgba(225,64,17,${opacity})`
      ctx.fillStyle = `rgba(253,213,1,${opacity * 0.5})`
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 2)
        ctx.moveTo(0, 0)
        ctx.lineTo(size * 0.4, size * 0.15)
        ctx.lineTo(size, 0)
        ctx.lineTo(size * 0.4, -size * 0.15)
      }
      ctx.fill()
      ctx.stroke()
      ctx.restore()
    }

    // Draw butterfly petal (Aizen / Kyoka Suigetsu)
    const drawButterfly = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.translate(x, y)
      const t = Date.now() * 0.001
      ctx.rotate(t * 0.3)
      // Wing left
      ctx.beginPath()
      ctx.ellipse(-size * 0.5, 0, size * 0.6, size * 0.3, -0.4, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(167,139,250,${opacity * 0.6})`
      ctx.fill()
      // Wing right
      ctx.beginPath()
      ctx.ellipse(size * 0.5, 0, size * 0.6, size * 0.3, 0.4, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(45,212,191,${opacity * 0.4})`
      ctx.fill()
      // Body
      ctx.beginPath()
      ctx.ellipse(0, 0, size * 0.1, size * 0.5, 0, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(196,181,253,${opacity})`
      ctx.fill()
      ctx.restore()
    }

    let spawnTimer = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      spawnTimer++
      if (spawnTimer % 20 === 0) spawn()

      particlesRef.current = particlesRef.current.filter(p => p.life < p.maxLife)

      for (const p of particlesRef.current) {
        p.x += p.vx
        p.y += p.vy
        p.life++

        const lifeRatio = p.life / p.maxLife
        const fadeOpacity = p.opacity * (lifeRatio < 0.2 ? lifeRatio / 0.2 : lifeRatio > 0.8 ? (1 - lifeRatio) / 0.2 : 1)

        if (isDark) {
          drawButterfly(ctx, p.x, p.y, p.size * 2, fadeOpacity)
        } else {
          drawShuriken(ctx, p.x, p.y, p.size * 2, fadeOpacity)
        }
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      aria-hidden="true"
    />
  )
}
