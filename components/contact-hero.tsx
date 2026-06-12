'use client'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Mail, MapPin, Phone, ArrowLeft } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export function ContactHero() {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: 'رقم الهاتف',
      value: '+966 11 1234 5678',
      href: 'tel:+966111234567',
    },
    {
      icon: <FaWhatsapp size={24} />,
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
      href: 'https://maps.app.goo.gl/UnUZSpTqVoj68pdN6',
    },
  ]
    
  const AnimatedCounter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0)
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

    useEffect(() => {
      if (!inView) return

      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 30)

      return () => clearInterval(timer)
    }, [inView, target])

    return (
      <div ref={ref} className="text-center">
        <div className="text-5xl font-bold text-[#1e3a5f] mb-2">{count}+</div>
      </div>
    )
  }

  // Animation variants for the card container staggered loading sequence
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  }

  return (
    <section className="pt-32 pb-16 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            تواصل معنا
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            نجيب عن استفساراتك وأسئلتك ونساعدك في تحويل رؤيتك إلى واقع ملموس
          </p>
        </motion.div>

        {/* Dynamic Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {contactInfo.map((info, idx) => {
            const isNumeric = info.label === 'رقم الهاتف' || info.label === 'رقم الواتساب'

            return (
              <motion.a
                key={idx}
                href={info.href}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#1e3a5f]/30 transition-all duration-300 text-start"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#1e3a5f] group-hover:bg-[#1e3a5f] group-hover:text-white transition-all duration-300 mb-5">
                    {info.icon}
                  </div>

                  {/* Labels and values */}
                  <h3 className="text-sm font-semibold text-slate-400 mb-2">
                    {info.label}
                  </h3>
                  
                  <p 
                    className={`text-lg font-bold text-slate-800 leading-snug break-words ${isNumeric ? 'text-right' : ''}`}
                    dir={isNumeric ? 'ltr' : 'rtl'}
                  >
                    {info.value}
                  </p>
                </div>

                {/* Micro action footer helper */}
                {info.href !== '#' && (
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#1e3a5f] opacity-80 group-hover:opacity-100 transition-opacity">
                    <span>تواصل الآن</span>
                    <ArrowLeft size={16} className="transform group-hover:translate-x-[-4px] transition-transform duration-300" />
                  </div>
                )}
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}