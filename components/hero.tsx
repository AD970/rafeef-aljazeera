'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-primary-dark/20 to-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-accent/15 to-primary-light/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-primary-dark mb-6 leading-tight"
        >
          نبني المستقبل
          <br />
          <span className="bg-gradient-to-r from-primary-dark via-primary-light to-accent bg-clip-text text-transparent">
            بأعلى معايير الجودة
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
        >
          تخصصنا في المقاولات والإنشاءات يجمع بين الخبرة العميقة والالتزام بأعلى معايير الجودة والأمان
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            className="bg-gradient-to-r from-primary-dark to-primary-light text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(13, 90, 61, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            اطلب استشارة
          </motion.button>

          <motion.button
            className="border-2 border-primary-dark text-primary-dark px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-primary-dark/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            رؤية مشاريعنا
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="mx-auto text-accent-gold" size={32} />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
    </section>
  )
}
