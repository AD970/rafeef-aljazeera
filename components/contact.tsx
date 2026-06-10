'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'رقم الهاتف',
      value: '+966 11 1234 5678',
      href: 'tel:+966111234567',
    },
    {
      icon: Mail,
      label: 'البريد الإلكتروني',
      value: 'info@rafeef.com',
      href: 'mailto:info@rafeef.com',
    },
    {
      icon: MapPin,
      label: 'الموقع',
      value: 'الرياض، المملكة العربية السعودية',
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
  }

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
            {contactInfo.map((info) => {
              const Icon = info.icon

              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-accent-gold hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-dark to-primary-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-primary-dark mb-1">{info.label}</h3>
                    <p className="text-slate-600">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-slate-700 font-bold mb-4">تابعنا على وسائل التواصل</p>
              <div className="flex gap-4">
                {['instagram', 'twitter', 'linkedin', 'facebook'].map((social) => (
                  <motion.button
                    key={social}
                    className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social === 'instagram' && '📷'}
                    {social === 'twitter' && '𝕏'}
                    {social === 'linkedin' && '💼'}
                    {social === 'facebook' && 'f'}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-primary-dark mb-2">الاسم الكامل</label>
                <motion.input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="أدخل اسمك الكامل"
                  className="w-full px-6 py-3 rounded-lg border border-neutral-200 focus:border-primary-dark focus:ring-2 focus:ring-primary-light/30 outline-none transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary-dark mb-2">البريد الإلكتروني</label>
                <motion.input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="بريدك الإلكتروني"
                  className="w-full px-6 py-3 rounded-lg border border-neutral-200 focus:border-primary-dark focus:ring-2 focus:ring-primary-light/30 outline-none transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary-dark mb-2">رقم الهاتف</label>
                <motion.input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+966 XX XXX XXXX"
                  className="w-full px-6 py-3 rounded-lg border border-neutral-200 focus:border-primary-dark focus:ring-2 focus:ring-primary-light/30 outline-none transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary-dark mb-2">رسالتك</label>
                <motion.textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="شرح موجز عن مشروعك..."
                  rows={5}
                  className="w-full px-6 py-3 rounded-lg border border-neutral-200 focus:border-primary-dark focus:ring-2 focus:ring-primary-light/30 outline-none transition-all duration-300 resize-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className={`w-full py-3.5 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                submitted
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-primary-dark to-primary-light text-white hover:shadow-lg'
              }`}
              whileHover={!submitted ? { scale: 1.02 } : {}}
              whileTap={!submitted ? { scale: 0.98 } : {}}
            >
              {submitted ? (
                <>
                  <span>✓ تم الإرسال بنجاح</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  إرسال الرسالة
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
