import { IDownloadBox } from '@/types/index'
import { DownloadBox } from './DownloadBox'

const downloadBoxes: IDownloadBox[] = [
  {
    buttonTitle: 'Add & Install Extension',
    imageUrl: '/images/logo-chrome.svg',
    title: 'Add to Chrome',
    subtitle: 'Minimum Version 62',
    className: 'border',
  },
  {
    buttonTitle: 'Add & Install Extension',
    imageUrl: '/images/logo-firefox.svg',
    title: 'Add to Firefox',
    subtitle: 'Minimum Version 55',
    className: 'border md:mt-8',
  },
  {
    buttonTitle: 'Add & Install Extension',
    imageUrl: '/images/logo-opera.svg',
    title: 'Add to Opera',
    subtitle: 'Minimum Version 46',
    className: 'border md:mt-16',
  },
]

export const Downloads = () => {
  return (
    <>
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
            Download the extension
          </h2>
          <p className="mx-auto max-w-lg text-center text-grayishBlue">
            We&apos;ve got more browsers in the pipeline. Please do let us know
            if you&apos;ve got a favourite you&apos;d like us to prioritize.
          </p>
        </div>
      </section>
      <section id="download-boxes" className="py-32">
        {/* <!-- Boxes Container --> */}
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-10 md:flex-row md:space-x-7 md:px-6">
          {(downloadBoxes || []).map((item, id) => (
            <DownloadBox key={id} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}
