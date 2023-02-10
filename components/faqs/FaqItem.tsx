import clsx from 'clsx'
import React from 'react'

type Props = {
  id: number
  title: string
  subtitle: string
  activeFaqId: number
  setActiveFaqId: (id: number) => void
}

export const FaqItem = ({
  id,
  title,
  subtitle,
  activeFaqId,
  setActiveFaqId,
}: Props) => {
  const handleActive = (id: number) => {
    setActiveFaqId(id)
    console.log('id', id, activeFaqId)
  }
  return (
    <div
      className="group border-b py-1 outline-none"
      onClick={() => handleActive(id)}
    >
      {/* <!-- Tab Flex Container --> */}
      <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
        {/* <!-- Tab Title --> */}
        <div className="ease transition duration-500 group-hover:text-red-500">
          {title}
        </div>
        {/* <!-- Arrow --> */}
        <div
          className={clsx(
            ' ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500',
            id === activeFaqId && '-rotate-180 text-red-500'
          )}
        >
          <svg width="18" height="12">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </div>
      </div>

      {/* <!-- Tab Inner Content --> */}
      <div
        className={clsx(
          'ease overflow-hidden transition duration-500 group-focus:max-h-screen',
          id === activeFaqId ? 'block' : 'hidden'
        )}
      >
        <p className="py-2 text-justify text-gray-400">{subtitle}</p>
      </div>
    </div>
  )
}
