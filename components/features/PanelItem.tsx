import Image from 'next/image'
import React from 'react'

type Props = {
  buttonTitle: string
  imageUrl: string
  subtitle: string
  title: string
}

export const PanelItem = ({
  buttonTitle,
  imageUrl,
  subtitle,
  title,
}: Props) => {
  return (
    <div className="panel panel-1 flex flex-col py-5 md:flex-row md:space-x-7">
      {/* <!-- Panel Image --> */}
      <div className="flex justify-center md:w-1/2">
        <Image
          height={0}
          width={0}
          src={imageUrl}
          alt=""
          className="relative z-10 w-auto"
        />
      </div>
      {/* <!-- Panel Content --> */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        <h3 className="mt-32 text-center text-3xl font-semibold first-letter:capitalize md:mt-0 md:text-left">
          {title}
        </h3>
        <p className="max-w-md text-center text-grayishBlue md:text-left">
          {subtitle}
        </p>
        <div className="mx-auto md:mx-0">
          <a
            href="#"
            className="mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-2 hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex"
          >
            {buttonTitle}
          </a>
        </div>
      </div>
    </div>
  )
}
