import { useEffect } from 'react'
import Hero from '../components/sections/Hero.jsx'
import Marquee from '../components/sections/Marquee.jsx'
import FeaturedCollection from '../components/sections/FeaturedCollection.jsx'
import ShopByCategory from '../components/sections/ShopByCategory.jsx'
import NewArrivals from '../components/sections/NewArrivals.jsx'
import BrandStatement from '../components/sections/BrandStatement.jsx'
import AboutPreview from '../components/sections/AboutPreview.jsx'
import InstagramSection from '../components/sections/InstagramSection.jsx'
import Newsletter from '../components/sections/Newsletter.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'NATY X — Wear Confidence | Premium Nigerian Streetwear'
  }, [])

  return (
    <main>
      <Hero />
      <Marquee />
      <FeaturedCollection />
      <ShopByCategory />
      <NewArrivals />
      <BrandStatement />
      <AboutPreview />
      <InstagramSection />
      <Newsletter />
    </main>
  )
}
