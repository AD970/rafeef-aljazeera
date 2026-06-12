'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, MessageSquare, Mail } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'الشركة',
      links: ['من نحن', 'المشاريع', 'الخدمات', 'الفريق'],
    },
    {
      title: 'الخدمات',
      links: ['المقاولات العامة', 'التصميم المعماري', 'إدارة المشاريع', 'التشطيبات'],
    },
   
  ]
  const contactInfo = {
  title: 'معلومات التواصل',
  details: [
    {
      id: 'address',
      label: 'العنوان',
      value: 'المملكة العربية السعودية، الرياض، حي حطين، طريق الأمير محمد بن سلمان بن عبدالعزيز',
      href: 'https://maps.app.goo.gl/UnUZSpTqVoj68pdN6',
      icon: MapPin,
    },
    {
      id: 'phone',
      label: 'الهاتف',
      value: '0544175444',
      href: 'tel:0544175444',
      icon: Phone,
    },
    {
      id: 'whatsapp',
      label: 'الواتساب',
      value: '+966544175444',
      href: 'https://api.whatsapp.com/send?phone=966544175444',
      icon: MessageSquare,
    },
    {
      id: 'email',
      label: 'البريد الالكتروني',
      value: 'v62@hotmail.com',
      href: 'mailto:v62@hotmail.com',
      icon: Mail,
    },
  ],}

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const importantLinks = [{
    title: 'الرئيسية',
    link: '/',
  },
  {
    title: 'من نحن',
    link: '/about',
  },{
    title: 'خدماتنا',
    link: '/services',
  },{
    title: 'مشاريعنا',
    link: '/portfolio',
  },{
    title: 'اتصل بنا',
    link: '/contact',
  },

]
  return (
    <footer className="bg-[#0f1f35] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main content */}
        <motion.div
          className="grid md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */} 
          <motion.div variants={itemVariants} className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Rafeef Al Jazeera Logo" className="w-14 h-14" />
              <div>
                <h2 className="text-xl font-bold">رفيف الجزيرة</h2>
                <p className="text-white/60 text-xs">Rafeef Al-Jazeera</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
نقوم بتنفيذ عقود مقاولات إنشاء وصيانة المبني وأعمال الديكورات الداخلية والخارجية والأعمال الميكانيكية والكهربائية وشبكات المياه والصرف الصحي وأعمال العزل المائي والحراري والأعمال المتعلقة بها.            </p>
        

          </motion.div>

          {/* Footer sections */}
          <div className="flex flex-col gap-3 ">
          <h1 className='text-white text-lg mb-1'>روابط مهمة</h1>
          {importantLinks.map((section) => (

            <motion.div key={section.title} variants={itemVariants} className=' group duration-300 transition-all hover:-translate-x-1 cursor-pointer '>
              <a href={section.link} className="text-white/70 group-hover:text-[#1e3a5f]  ">{section.title}</a>
              <Separator className='w-full h-[1px] bg-white/30 group-hover:bg-[#1e3a5f]' />
              </motion.div>
))}
          </div>

          <motion.div variants={itemVariants} className='flex flex-col gap-3 '>
            <h1 className='text-white text-lg mb-1'>معلومات التواصل</h1>
            {contactInfo.details.map((info) => (

              <a
                key={info.id}
                href={info.href}
                target='_blank'
                className="flex items-center text gap-2 text-white/70 duration-300 mb-2"
              >
               {info.label}: <br></br>
                {info.value}
              </a>
            ))}
            </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col relative md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white/60 text-sm text-center md:text-right">
            © {currentYear} رفيف الجزيرة. جميع الحقوق محفوظة
          </p>

          {/* Social links */}
          <div className="flex gap-4 text-white/70  relative duration-300 transition-colors text-sm">
         <a href='#' className='hover:text-white'>
          سياسة الخصوصية
         </a>
             <a href="/contact" className='hover:text-white'>

               اتصل بنا
             </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center shadow-lg hover:bg-[#0f1f35] transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ↑
      </motion.button>
    </footer>
  )
}
