import { navLinks } from '@/data'
import Image from 'next/image'
import { NavItem } from '../header/Navtem'

export const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue py-16">
      {/* <!-- Footer Flex Container --> */}
      <div className="container mx-auto flex flex-col items-center justify-between space-y-16 px-6 md:flex-row md:space-y-0">
        {/* <!-- Logo/Menu Container --> */}
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light text-grayishBlue md:flex-row md:space-y-0 md:space-x-14">
          <Image
            height={0}
            width={0}
            src="images/logo-bookmark-footer.svg"
            alt=""
            className="mb-1 w-auto"
          />

          {(navLinks || []).map((item, id) => (
            <NavItem
              key={id}
              {...item}
              className="uppercase hover:text-softRed"
            />
          ))}
        </div>

        {/* <!-- Social Container --> */}
        <div className="flex space-x-10">
          <a href="#">
            <Image
              height={0}
              width={0}
              src="images/icon-facebook.svg"
              alt=""
              className="ficon h-6 w-6"
            />
          </a>
          <a href="#">
            <Image
              height={0}
              width={0}
              src="images/icon-twitter.svg"
              alt=""
              className="ficon h-6 w-6"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
