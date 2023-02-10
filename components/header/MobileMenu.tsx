import clsx from 'clsx'
import { navLinks } from '@/data'
import { NavItem } from './Navtem'

type Props = {
  open: boolean
}

export const MobileMenu = ({ open }: Props) => {
  return (
    <div
      id="menu"
      className={clsx(
        'm-h-screen fixed inset-0 z-20 h-full w-full flex-col items-center divide-y divide-gray-500 self-end bg-veryDarkBlue px-6 py-1 pt-24 pb-4 uppercase tracking-widest text-white opacity-90',
        open ? 'flex' : 'hidden'
      )}
    >
      <div className="w-full py-3 text-center">
        {(navLinks || []).map((item, id) => (
          <NavItem key={id} {...item} className="block hover:text-softRed" />
        ))}
      </div>

      <div className="w-full py-3 text-center">
        <a href="#" className="block hover:text-softRed">
          Login
        </a>
      </div>
    </div>
  )
}
