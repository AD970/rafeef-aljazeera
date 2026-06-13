import { Navbar } from '@/components/navbar'
import { HeroHome } from '@/components/hero-home'
import { WhatWeDo } from '@/components/what-we-do'
import { ServicesPreview } from '@/components/services-preview'
import { WhyUs } from '@/components/why-us'
import { PortfolioPreview } from '@/components/portfolio-preview'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { LocalBusinessSchema } from './schema'

export const metadata = {
  title: 'رفيف الجزيرة - الرئيسية',
  description: 'شركة متخصصة في المقاولات والإنشاءات بأعلى معايير الجودة',
}

export default function HomePage() {
  return (
    <>
    <LocalBusinessSchema />
      <Navbar variant="home" />
      <main className="overflow-hidden">
        <HeroHome />
        <WhatWeDo />
        <ServicesPreview />
        <WhyUs />
        <PortfolioPreview />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
