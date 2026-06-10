'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Ruler, Paintbrush, Briefcase } from 'lucide-react'

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const services = [
    {
      icon: Building2,
      title: 'المقاولات العامة والإنشاءات',
      description:
        'خدمات شاملة للمشاريع الإنشائية الكبرى مع الالتزام بأعلى معايير السلامة والجودة',
      color: 'from-blue-500',
    },
    {
      icon: Ruler,
      title: 'التصميم الهندسي والمعماري',
      description:
        'تصاميم مبتكرة وعملية تجمع بين الجمال المعماري والكفاءة الهندسية',
      color: 'from-emerald-500',
    },
    {
      icon: Paintbrush,
      title: 'الترميم والتشطيبات الفاخرة',
      description:
        'تحويل المساحات بأعلى مستويات التشطيب والتفاصيل الفاخرة',
      color: 'from-amber-500',
    },
    {
      icon: Briefcase,
      title: 'إدارة المشاريع الإنشائية',
      description:
        'إدارة فعالة لكل مراحل المشروع من التخطيط إلى التسليم',
      color: 'from-purple-500',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-neutral-50 to-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-gold font-bold text-lg mb-2">خدماتنا</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            حلول شاملة للبناء والتطوير
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات المتخصصة التي تغطي جميع جوانب مشاريعك
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover="hover"
                className="group relative p-8 rounded-2xl bg-white border border-neutral-200 cursor-pointer transition-all duration-300 hover:bg-slate-200"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-dark/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon background */}
                <div 
                  className={` w-12 h-12 rounded-xl  bg-blue-600 group-hover:bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white group-hover:text-black" size={18} />
                </div>
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold  text-primary-dark mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>

                  {/* Accent line */}
                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-accent-gold to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
