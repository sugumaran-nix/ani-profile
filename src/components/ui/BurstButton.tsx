import { ReactNode, AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  as?: 'a' | 'button'
  type?: 'button' | 'submit'
  onClick?: () => void
}

export function BurstButton({ children, as: Tag = 'a', type = 'button', onClick, ...rest }: Props) {
  const inner = (
    <>
      <span className="burst-dot" />
      <span className="burst-dot" />
      <span className="burst-dot" />
      <span className="burst-dot" />
      <span className="burst-dot" />
      <span className="burst-label">{children}</span>
    </>
  )

  if (Tag === 'button') {
    return (
      <button className="burst-btn" type={type} onClick={onClick}>
        {inner}
      </button>
    )
  }
  return (
    <a className="burst-btn" onClick={onClick} {...rest}>
      {inner}
    </a>
  )
}
