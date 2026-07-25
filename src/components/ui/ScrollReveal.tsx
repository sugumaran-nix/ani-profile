'use client'
import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right'
    const els = document.querySelectorAll<HTMLElement>(selectors)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
