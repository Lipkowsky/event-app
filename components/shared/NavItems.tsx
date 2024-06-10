import { headerLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

export default function NavItems() {
  return (
    <ul className="md-flex-between flex w-full flex-col items-start gap-5 md:flex-row">
        {headerLinks.map((link) => {
            return <Link href={link.route}>{link.label}</Link>
        })}
    </ul>
  )
}
