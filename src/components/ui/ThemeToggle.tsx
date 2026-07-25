'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  .toggle-switch {
    position: relative;
    width: 64px;
    height: 32px;
    --light: #d8dbe0;
    --dark: #1E1840;
  }
  .switch-label {
    position: absolute;
    width: 100%;
    height: 32px;
    background-color: var(--dark);
    border-radius: 16px;
    cursor: pointer;
    border: 2px solid #3D2F7A;
    transition: background 0.3s;
  }
  .light-mode .switch-label {
    background-color: #e0c97f;
    border-color: #D4A96A;
  }
  .checkbox { position: absolute; display: none; }
  .slider {
    position: absolute;
    width: 100%; height: 100%;
    border-radius: 16px;
    transition: 0.3s;
  }
  .checkbox:checked ~ .slider { background-color: var(--light); }
  .slider::before {
    content: "";
    position: absolute;
    top: 5px; left: 6px;
    width: 18px; height: 18px;
    border-radius: 50%;
    box-shadow: inset 8px -3px 0 0 #d8dbe0;
    background-color: var(--dark);
    transition: 0.3s;
  }
  .checkbox:checked ~ .slider::before {
    transform: translateX(32px);
    background-color: #f5c518;
    box-shadow: none;
  }
`

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <Wrapper>
      <div className={`toggle-switch ${isDark ? '' : 'light-mode'}`}>
        <label className="switch-label">
          <input
            type="checkbox"
            className="checkbox"
            checked={!isDark}
            onChange={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle light/dark theme"
          />
          <span className="slider" />
        </label>
      </div>
    </Wrapper>
  )
}
