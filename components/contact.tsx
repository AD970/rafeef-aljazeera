'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [expandedContact, setExpandedContact] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: 'رقم الهاتف',
      value: '+966 11 1234 5678',
      href: 'tel:+966111234567',
    },
    {
      icon: <FaWhatsapp size={24} />, // Fixed typo: capitalized F to match react-icons export syntax
      label: 'رقم الواتساب',
      value: '+966 544175444',
      href: 'https://api.whatsapp.com/send?phone=966544175444',
    },
    {
      icon: <Mail size={24} />,
      label: 'البريد الإلكتروني',
      value: 'v62@hotmail.com',
      href: 'mailto:v62@hotmail.com',
    },
    {
      icon: <MapPin size={24} />,
      label: 'الموقع',
      value: 'الرياض، حي حطين، طريق الأمير محمد بن سلمان بن عبدالعزيز',
      href: '#',
    },
  ]

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
  } as const

  return (
    <section id="contact" className="py-20 px-6 bg-neutral-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-gold font-bold text-lg mb-2">اتصل بنا</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            دعونا نبني مستقبلك معاً
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            تواصل معنا لمناقشة مشروعك وكيفية يمكننا مساعدتك تحقيق رؤيتك
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {contactInfo.map((info, idx) => {
              const IconInstance = info.icon
              if (info.label === 'الموقع') {
                return (
                  <motion.div key={info.label} variants={itemVariants} className="overflow-hidden">
                    <motion.button
                      onClick={() => setExpandedContact(expandedContact === idx ? null : idx)}
                      className="w-full flex items-start text-start gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-accent-gold hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ x: 6 }}
                    >
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-dark to-primary-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-[#1C3A3D]">
                        {IconInstance}
                      </div>
                      <div className="flex-1 text-start">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-primary-dark mb-1">{info.label}</h3>
                          <ChevronLeft className={`duration-300 ${expandedContact === idx ? '-rotate-90' : ''}`}/>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{info.value}</p>
                      </div>
                    </motion.button>

                    <AnimatePresence>
                      {expandedContact === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="px-6 space-y-2 pt-4 pb-6 bg-white border-t border-neutral-200 text-start"
                        >
                          <a href="#" className="mt-3 inline-block text-primary-dark font-semibold text-start">عرض على الخريطة</a>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14491.366934330315!2d46.61205!3d24.766615!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ1JzU5LjgiTiA0NsKwMzYnNDMuNCJF!5e0!3m2!1sen!2sdz!4v1781182093064!5m2!1sen!2sdz"
                            className='w-full h-52'
                            style={{ border: 0, borderRadius: '8px' }}
                            loading="lazy"
                            allowFullScreen={true}
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              }

              // Checks both strings safely using clean explicit evaluation syntax
              const isNumericField = info.label === 'رقم الهاتف' || info.label === 'رقم الواتساب'

              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-accent-gold hover:shadow-lg transition-all duration-300 group text-start"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-dark to-primary-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-[#1C3A3D">
                    {IconInstance}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-primary-dark mb-1">{info.label}</h3>
                    <p 
                      className={`text-slate-600 ${isNumericField ? 'text-right' : ''}`} 
                      dir={isNumericField ? 'ltr' : 'rtl'}
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-4 text-start">
              <p className="text-slate-700 font-bold mb-4">تابعنا على وسائل التواصل</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.tiktok.com/@rafeefaljazeera?_t=8nvbKiOWeBx&_r=1"
                  className="w-10 h-10 rounded-lg bg-[#0f1f35] border text-white border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0f1f35] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTiktok />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <img src='what-we-do.jpg' className='rounded-md sm:h-screen' />
        </div>
      </div>
    </section>
  )
}