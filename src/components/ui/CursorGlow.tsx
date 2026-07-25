'use client'
import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let x = -500, y = -500
    let cx = -500, cy = -500
    let raf = 0

    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY }
    window.addEventListener('mousemove', onMove)

    function animate() {
      cx += (x - cx) * 0.1
      cy += (y - cy) * 0.1
      el!.style.left = cx + 'px'
      el!.style.top  = cy + 'px'
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
