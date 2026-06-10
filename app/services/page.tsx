import { Navbar } from '@/components/navbar'
import { Services } from '@/components/services'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'خدماتنا - رفيف الجزيرة',
  description: 'اكتشف الخدمات المتنوعة التي نقدمها في مجال المقاولات والإنشاءات',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-20">
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
