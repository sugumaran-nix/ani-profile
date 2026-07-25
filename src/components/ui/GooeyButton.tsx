'use client'
import styled from 'styled-components'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  target?: string
  rel?: string
  color?: string
}

const Wrapper = styled.div<{ $color: string }>`
  .c-button {
    font-family: var(--font-body);
    font-weight: 700;
    font-size: 14px;
    padding: 0.75em 1.6em;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    background: transparent;
    border: none;
    text-decoration: none;
  }
  .c-button--gooey {
    color: ${p => p.$color};
    text-transform: uppercase;
    letter-spacing: 2px;
    border: 2px solid ${p => p.$color};
    border-radius: 0;
    transition: color 700ms ease;
  }
  .c-button--gooey .blobs {
    height: 100%;
    filter: url(#goo);
    overflow: hidden;
    position: absolute;
    top: 0; left: 0; bottom: -3px; right: -1px;
    z-index: -1;
  }
  .c-button--gooey .blobs div {
    background-color: ${p => p.$color};
    width: 34%; height: 100%;
    border-radius: 100%;
    position: absolute;
    transform: scale(1.4) translateY(125%) translateZ(0);
    transition: transform 700ms ease;
  }
  .c-button--gooey .blobs div:nth-child(1) { left: -5%; }
  .c-button--gooey .blobs div:nth-child(2) { left: 30%; transition-delay: 60ms; }
  .c-button--gooey .blobs div:nth-child(3) { left: 66%; transition-delay: 25ms; }
  .c-button--gooey:hover { color: #fff; }
  .c-button--gooey:hover .blobs div { transform: scale(1.4) translateY(0) translateZ(0); }
`

export function GooeyButton({ children, href, onClick, target, rel, color = '#06c8d9' }: Props) {
  const inner = (
    <Wrapper $color={color}>
      <button className="c-button c-button--gooey" onClick={onClick}>
        {children}
        <div className="blobs">
          <div /><div /><div />
        </div>
      </button>
      <svg style={{ display: 'block', height: 0, width: 0, position: 'absolute' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </Wrapper>
  )

  if (href) {
    return <a href={href} target={target} rel={rel} style={{ textDecoration: 'none' }}>{inner}</a>
  }
  return inner
}
