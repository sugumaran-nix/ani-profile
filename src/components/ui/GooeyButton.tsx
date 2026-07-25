import { ReactNode, AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  as?: 'a' | 'button'
  onClick?: () => void
}

export function GooeyButton({ children, as: Tag = 'a', onClick, ...rest }: Props) {
  if (Tag === 'button') {
    return (
      <button className="goo-btn" onClick={onClick} type="button">
        {children}
        <span className="goo-blobs">
          <span className="goo-blob" />
          <span className="goo-blob" />
          <span className="goo-blob" />
        </span>
      </button>
    )
  }
  return (
    <a className="goo-btn" onClick={onClick} {...rest}>
      {children}
      <span className="goo-blobs">
        <span className="goo-blob" />
        <span className="goo-blob" />
        <span className="goo-blob" />
      </span>
    </a>
  )
}
