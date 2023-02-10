import Image from 'next/image'
import clsx from 'clsx'

type Props = {
  imageUrl: string
  title: string
  subtitle: string
  buttonTitle: string
  className?: string
}

export const DownloadBox = ({
  buttonTitle,
  imageUrl,
  title,
  subtitle,
  className,
}: Props) => {
  return (
    <div
      className={clsx(
        'mt-10 flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:my-0 md:w-1/3',
        className
      )}
    >
      {/* <!-- Image --> */}
      <div className="flex justify-center">
        <Image height={0} width={0} className="w-auto" src={imageUrl} alt="" />
      </div>
      {/* <!-- Text --> */}
      <h5 className="pt-6 text-xl font-bold">{title}</h5>
      <p className="text-gray-400">{subtitle}</p>

      {/* <!-- Dots --> */}
      <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
        <a
          href="#"
          className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue"
        >
          {buttonTitle}
        </a>
      </div>
    </div>
  )
}
