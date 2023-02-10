import { navLinks } from '@/data'
import { NavItem } from './Navtem'

export const DesktopMenu = () => {
  return (
    <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
      {(navLinks || []).map((item, id) => (
        <NavItem
          key={id}
          {...item}
          className="tracking-widest hover:text-softRed"
        />
      ))}

      <a
        href="#"
        className="rounded-lg border-2 border-softRed bg-softRed px-8 py-2 text-white shadow-md hover:bg-white hover:text-softRed"
      >
        Login
      </a>
    </div>
  )
}
