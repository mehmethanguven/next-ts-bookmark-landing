import { useState } from 'react'
import { toast } from 'react-toastify'

export const Newsletter = () => {
  const [email, setEmail] = useState('')
  const notify = (title: string) =>
    toast(`🦄 ${title}`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    notify(`Dear ${email}. Thanks for subscribing.`)
  }
  return (
    <section id="newsletter" className="bg-softBlue">
      {/* <!-- Main Container --> */}
      <div className="mx-auto max-w-lg py-24">
        <p className="mb-6 text-center text-lg uppercase tracking-widest text-white">
          35,000+ Already Joined
        </p>
        <h2 className="mb-6 px-3 text-center text-3xl font-semibold text-white md:text-4xl">
          Stay up-to-date with what we&apos;re doing
        </h2>

        {/* <!-- Form --> */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-2xl flex-col items-start justify-center space-y-6 px-6 text-base md:flex-row md:space-y-0 md:space-x-4 md:px-0"
        >
          {/* <!-- Input & Button Container --> */}
          <div className="mx-auto flex flex-col items-center justify-between md:mx-0 md:flex-row">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="border-1 mb-4 flex-1 rounded-lg border-white px-6 pt-3 pb-2 focus:outline-none md:mr-3 md:mb-0"
              placeholder="Enter your email address"
            />

            <input
              type="submit"
              className="inline-flex transform cursor-pointer rounded-lg bg-softRed px-6 py-3 text-center font-semibold text-white duration-200 hover:opacity-90 focus:outline-none"
              value="Contact Us"
            />
          </div>
        </form>
      </div>
    </section>
  )
}
