'use client'
import styled from 'styled-components'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  download?: boolean
  type?: 'button' | 'submit'
}

const Wrapper = styled.div`
  button, a {
    font-family: var(--font-body);
    font-weight: bold;
    font-size: 14px;
    color: white;
    background-color: #171717;
    padding: 0.9em 2em;
    border: none;
    border-radius: 0.5rem;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: color 0.3s;
  }
  .dark button, .dark a {
    background-color: #1E1840;
  }
  span:not(.text) {
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%,-50%);
    height: 30px; width: 30px;
    background-color: var(--accent);
    border-radius: 50%;
    transition: 0.6s ease;
  }
  .text { position: relative; }
  span:nth-child(1) { transform: translate(-3.3em,-4em); }
  span:nth-child(2) { transform: translate(-6em,1.3em); }
  span:nth-child(3) { transform: translate(-0.2em,1.8em); }
  span:nth-child(4) { transform: translate(3.5em,1.4em); }
  span:nth-child(5) { transform: translate(3.5em,-3.8em); }
  button:hover span:not(.text),
  a:hover span:not(.text) {
    transform: translate(-50%,-50%) scale(4);
    transition: 1.5s ease;
  }
`

export function BurstButton({ children, href, onClick, download, type = 'button' }: Props) {
  const inner = (
    <>
      <span /><span /><span /><span /><span />
      <span className="text">{children}</span>
    </>
  )

  return (
    <Wrapper>
      {href ? (
        <a href={href} download={download}>{inner}</a>
      ) : (
        <button type={type} onClick={onClick}>{inner}</button>
      )}
    </Wrapper>
  )
}
