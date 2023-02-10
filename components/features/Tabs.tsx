import { ITab, IPanel } from '@/types'
import { useState } from 'react'
import { PanelItem } from './PanelItem'
import { TabItem } from './TabItem'

const tabs: ITab[] = [
  { id: 1, title: 'simple bookmarking' },
  { id: 2, title: 'speed searching' },
  { id: 3, title: 'easy sharing' },
]

const panels: IPanel[] = [
  {
    id: 1,
    buttonTitle: 'more info',
    imageUrl: '/images/illustration-features-tab-1.svg',
    title: 'bookmark in one click',
    subtitle:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    id: 2,
    buttonTitle: 'more info',
    imageUrl: '/images/illustration-features-tab-2.svg',
    title: 'intelligent search',
    subtitle:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    id: 3,
    buttonTitle: 'more info',
    imageUrl: '/images/illustration-features-tab-3.svg',
    title: 'share your bookmarks',
    subtitle:
      ' Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.',
  },
]

export const Tabs = () => {
  const [activeTabId, setActiveTabId] = useState(0)
  return (
    <section id="tabs">
      {/* <!-- Tabs/Panels Container --> */}
      <div className="container relative mx-auto my-6 mt-12 mb-32 px-6">
        <div className="bg-tabs"></div>
        {/* <!-- Tabs Flex Container --> */}
        <div className="mx-auto mb-6 flex max-w-xl flex-col justify-center border-b md:flex-row md:space-x-10">
          {(tabs || []).map((item, id) => (
            <TabItem
              key={id}
              {...item}
              activeTabId={activeTabId}
              setActiveTabId={(id: number) => setActiveTabId(id)}
            />
          ))}
        </div>

        {/* <!-- Tab Panels --> */}
        <div id="panels" className="container mx-auto">
          {(panels || [])
            .filter((item) => item.id === activeTabId)
            .map((item, id) => (
              <PanelItem key={id} {...item} />
            ))}
        </div>
      </div>
    </section>
  )
}
