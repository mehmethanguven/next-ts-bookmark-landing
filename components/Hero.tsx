import Image from 'next/image'

export const Hero = () => {
  return (
    <section id="hero">
      {/* <!-- Container For Image & Content --> */}
      <div className="container mx-auto flex flex-col-reverse p-6 lg:mb-0 lg:flex-row">
        {/* <!-- Content --> */}
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-center text-3xl font-semibold lg:text-left lg:text-6xl">
            A Simple Bookmark Manager
          </h1>
          <p className="mx-auto max-w-md text-center text-lg text-gray-400 lg:mx-0 lg:mt-0 lg:text-left lg:text-2xl">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          {/* <!-- Buttons Container --> */}
          <div className="flex w-full items-center justify-center space-x-4 lg:justify-start">
            <a
              href="#"
              className="rounded border-2 border-softBlue bg-softBlue p-4 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-softBlue md:text-base"
            >
              Get It On Chrome
            </a>
            <a
              href="#"
              className="rounded border-2 border-gray-300 bg-gray-300 p-4 text-sm font-semibold text-black shadow-md hover:bg-white hover:text-gray-600 md:text-base"
            >
              Get It On Firefox
            </a>
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div className="bg-hero"></div>
          <Image
            height={0}
            width={0}
            src="images/illustration-hero.svg"
            alt=""
            className="relative z-10 w-auto overflow-x-visible lg:top-24 xl:top-0"
          />
        </div>
      </div>
    </section>
  )
}
