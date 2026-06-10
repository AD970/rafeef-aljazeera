'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      title: 'برج التجارة الحديث',
      location: 'الرياض',
      category: 'commercial',
      image: 'bg-gradient-to-br from-blue-500 to-blue-700',
    },
    {
      title: 'مجمع سكني فاخر',
      location: 'جدة',
      category: 'residential',
      image: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    },
    {
      title: 'منصة لوجستية',
      location: 'الدمام',
      category: 'industrial',
      image: 'bg-gradient-to-br from-amber-500 to-amber-700',
    },
    {
      title: 'مركز طبي متخصص',
      location: 'الرياض',
      category: 'healthcare',
      image: 'bg-gradient-to-br from-red-500 to-red-700',
    },
    {
      title: 'فندق خمس نجوم',
      location: 'جدة',
      category: 'hospitality',
      image: 'bg-gradient-to-br from-purple-500 to-purple-700',
    },
    {
      title: 'مدرسة دولية',
      location: 'الدمام',
      category: 'education',
      image: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
    },
  ]

  const categories = [
    { label: 'الكل', value: 'all' },
    { label: 'تجاري', value: 'commercial' },
    { label: 'سكني', value: 'residential' },
    { label: 'صناعي', value: 'industrial' },
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-gold font-bold text-lg mb-2">مشاريعنا</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            محفظة المشاريع الناجحة
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            شاهد مجموعة من مشاريعنا الرائدة التي حققت معايير تميز عالمية
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex gap-4 justify-center mb-12 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2.5 rounded-lg font-bold transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-primary-dark to-primary-light text-white shadow-lg'
                  : 'bg-neutral-100 text-slate-700 hover:bg-neutral-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              variants={itemVariants}
              layout
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-64 shadow-lg"
            >
              {/* Background */}
              <div className={`absolute inset-0 ${project.image}`} />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-dark/80 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 flex items-center gap-2">
                  <span>📍</span>
                  {project.location}
                </p>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-3.5 rounded-lg font-bold text-lg border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            شاهد كل المشاريع
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
