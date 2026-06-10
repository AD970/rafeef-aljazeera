'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle } from 'lucide-react'

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const values = [
    { label: 'النزاهة', description: 'التزام كامل بالشفافية والأمانة' },
    { label: 'الجودة', description: 'أعلى معايير في كل عمل' },
    { label: 'الالتزام', description: 'تسليم في الوقت والميزانية' },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-gold font-bold text-lg mb-2">من نحن</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            رؤيتنا و قيمنا
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            نسعى لبناء مستقبل مزدهر من خلال مشاريع عالية الجودة تعكس التميز والابتكار
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary-light opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white text-6xl font-bold mb-4">25+</p>
                <p className="text-white text-xl">سنة من الخبرة</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-primary-dark mb-4">
                رائدون في المقاولات والإنشاءات
              </h3>
              <p className="text-slate-700 leading-relaxed">
                مع ربع قرن من الخبرة، نحن متخصصون في تقديم حلول إنشائية متكاملة تجمع بين الابتكار والجودة والالتزام بالمعايير الدولية.
              </p>
            </motion.div>

            {values.map((value, index) => (
              <motion.div
                key={value.label}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-light/5 transition-colors duration-300"
              >
                <CheckCircle className="text-accent-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-primary-dark text-lg mb-1">{value.label}</h4>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
