import { Tabs } from './Tabs'

export const Features = () => {
  return (
    <>
      <section id="features">
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-center text-4xl font-semibold">Features</h2>
          <p className="mx-auto max-w-md text-center text-grayishBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>
      <Tabs />
    </>
  )
}
