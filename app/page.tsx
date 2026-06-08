import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { FeaturedCarousel } from '@/components/sections/featured-carousel'
import { Categories } from '@/components/sections/categories'
import { Stats } from '@/components/sections/stats'
import { Testimonials } from '@/components/sections/testimonials'
import { Pricing } from '@/components/sections/pricing'
import { Newsletter } from '@/components/sections/newsletter'

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCarousel />
        <Categories />
        <Stats />
        <Testimonials />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
