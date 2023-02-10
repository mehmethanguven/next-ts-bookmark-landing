import { Downloads } from '@/components/downloads'
import { Faqs } from '@/components/faqs'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/newsletter'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <Hero />

      <Features />

      <Downloads />

      <Faqs />

      <Newsletter />

      <Footer />
    </div>
  )
}
