export const metadata = {
  title: 'PT KPI - Konsultan Produktivitas Indonesia',
  description: 'Website resmi Konsultan Produktivitas Indonesia',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import contents from '../lib/contents'

export default function Home() {
  return (
    <>
      <Hero {...contents} />
      <Features {...contents} />
      <Zigzag {...contents} />
      {/* <Testimonials />
      <Newsletter /> */}
    </>
  )
}
