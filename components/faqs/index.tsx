import { IFaq } from '@/types'
import { useState } from 'react'
import { FaqItem } from './FaqItem'

const faqs: IFaq[] = [
  {
    id: 1,
    title: 'What is Bookmark?',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit empora facere iste veritatis possimus necessitatibus repellendus consequuntur, atque aliquam. Autem quas voluptates suscipit illum id dolores, voluptatum officia cupiditate officiis.',
  },
  {
    id: 2,
    title: 'How can I request a new browser?',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit empora facere iste veritatis possimus necessitatibus repellendus consequuntur, atque aliquam. Autem quas voluptates suscipit illum id dolores, voluptatum officia cupiditate officiis.',
  },
  {
    id: 3,
    title: 'Is ther a mobile app?',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit empora facere iste veritatis possimus necessitatibus repellendus consequuntur, atque aliquam. Autem quas voluptates suscipit illum id dolores, voluptatum officia cupiditate officiis.',
  },
  {
    id: 4,
    title: 'What about other Chromium browsers?',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit empora facere iste veritatis possimus necessitatibus repellendus consequuntur, atque aliquam. Autem quas voluptates suscipit illum id dolores, voluptatum officia cupiditate officiis.',
  },
]

export const Faqs = () => {
  const [activeFaqId, setActiveFaqId] = useState(0)
  return (
    <>
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-center text-2xl font-semibold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-graishBlue mx-auto max-w-lg px-6 text-center">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to email us.
          </p>
        </div>
      </section>{' '}
      <section id="faq-accordion">
        {/* <!-- Main Container --> */}
        <div className="container mx-auto mb-32 px-6">
          {/* <!-- Accordion Container --> */}
          <div className="m-8 mx-auto max-w-2xl overflow-hidden">
            {/* <!-- Tab 1 --> */}
            {(faqs || []).map((item, id) => (
              <FaqItem
                key={id}
                {...item}
                activeFaqId={activeFaqId}
                setActiveFaqId={(id) => setActiveFaqId(id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
