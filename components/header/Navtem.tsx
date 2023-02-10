import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  url: string
  className: string
}

export const NavItem = ({ title, url, className }: Props) => {
  return (
    <Link href={url} className={className}>
      {title}
    </Link>
  )
}
