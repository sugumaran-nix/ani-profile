'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div style={{ width: 70, height: 34 }} />

  const isLight = theme === 'light'

  return (
    <div className="toggle-wrap">
      <label className="toggle-label">
        <input
          type="checkbox"
          className="toggle-checkbox"
          checked={isLight}
          onChange={() => setTheme(isLight ? 'dark' : 'light')}
          aria-label="Toggle light/dark theme"
        />
        <span className="toggle-slider" />
      </label>
    </div>
  )
}
