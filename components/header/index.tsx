import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="container relative mx-auto p-6">
      {/* <!-- Flex Container For Nav Items --> */}
      <div className="my-6 flex items-center justify-between space-x-20">
        {/* <!-- Logo --> */}
        <div className="z-30">
          <Image
            height={0}
            width={0}
            className="w-auto"
            src="images/logo-bookmark.svg"
            alt=""
            id="logo"
          />
        </div>

        {/* <!-- Menu Items --> */}
        <DesktopMenu />
        {/* <!-- Hamburger Button --> */}
        <button
          id="menu-btn"
          className={clsx(
            'hamburger z-30 block focus:outline-none md:hidden',
            open && 'open'
          )}
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* <!-- Mobile Menu --> */}
      <MobileMenu open={open} />
    </nav>
  )
}
