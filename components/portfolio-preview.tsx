'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function PortfolioPreview() {
  const projects = [
    {
      id: 1,
      title: 'برج سكني حديث',
      location: 'الرياض',
      image: '/construction-bg.png',
    },
    {
      id: 2,
      title: 'مركز تجاري متقدم',
      location: 'جدة',
      image: '/construction-bg.png',
    },
    {
      id: 3,
      title: 'مجمع سكني فاخر',
      location: 'الدمام',
      image: '/construction-bg.png',
    },
    {
      id: 4,
      title: 'مشروع إداري متكامل',
      location: 'الرياض',
      image: '/construction-bg.png',
    },
  ]

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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            أحدث أعمالنا
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            مشاريع متميزة تعكس خبرتنا وقدرتنا على تحقيق أعلى معايير الجودة
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200 shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="/portfolio"
            className="inline-block px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#0f1f35] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            استعرض جميع المشاريع
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
