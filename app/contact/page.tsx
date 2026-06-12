import { ContactHero } from '@/components/contact-hero'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import React from 'react'

type Props = {}

export const metadata = {
  title: 'تواصل معنا - رفيف الجزيرة',
  description: 'تعرف على رؤية ورسالة شركة رفيف الجزيرة وقيمنا الأساسية',
}
function page({}: Props) {
  return (
    <>
    <Navbar />
        <ContactHero />

<Footer />
    </>
  )
}

export default page