import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'مشاريعنا - رفيف الجزيرة',
  description: 'استعرض مشاريعنا المتنوعة والمتميزة في المقاولات والعقارات',
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-20">
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
