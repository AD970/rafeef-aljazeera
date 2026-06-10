import { Navbar } from '@/components/navbar'
import { AboutHero } from '@/components/about-hero'
import { VisionMission } from '@/components/vision-mission'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'عن الشركة - رفيف الجزيرة',
  description: 'تعرف على رؤية ورسالة شركة رفيف الجزيرة وقيمنا الأساسية',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <AboutHero />
        <VisionMission />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
