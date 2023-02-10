import clsx from 'clsx'
import React from 'react'
type Props = {
  id: number
  title: string
  activeTabId: number
  setActiveTabId: (value: number) => void
}

export const TabItem = ({ id, title, activeTabId, setActiveTabId }: Props) => {
  return (
    <div
      className="tab flex cursor-pointer justify-center border-b text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-b-0"
      data-target="panel-1"
    >
      <div
        onClick={() => setActiveTabId(id)}
        className={clsx(
          'py-5 capitalize',
          id === activeTabId && 'border-b-4 border-softRed'
        )}
        data-target="panel-1"
      >
        {title}
      </div>
    </div>
  )
}
