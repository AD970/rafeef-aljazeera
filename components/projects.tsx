'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { MapPin } from 'lucide-react'

export function Projects() {
  // Section and scroll target references
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  const [activeCategory, setActiveCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  // Standard Intersection Observer fallback using native useRef
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect() // trigger once
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'انشاء اولي',
      location: 'الرياض',
      category: 'commercial',
      image: '/projects/1.jpg',
    },
    {
      title: 'مجمع سكني فاخر',
      location: 'الرياض',
      category: 'residential',
      image: '/projects/2.jpg',
    },
    {
      title: 'تشطيب',
      location: 'الرياض',
      category: 'industrial',
      image: '/projects/3.jpg',
    },
    {
      title: 'خرصانة',
      location: 'الرياض',
      category: 'commercial',
      image: '/projects/4.jpg',
    },
    {
      title: 'فندق خمس نجوم',
      location: 'الرياض',
      category: 'commercial',
      image: '/projects/5.jpg',
    },
    {
      title: 'مدرسة دولية',
      location: 'الرياض',
      category: 'residential',
      image: '/projects/6.jpg',
    },
    {
      title: 'مجمع مستودعات ذكي',
      location: 'الرياض',
      category: 'industrial',
      image: '/projects/7.jpg',
    },
    {
      title: 'أبراج السكن المتميز',
      location: 'الرياض',
      category: 'residential',
      image: '/projects/8.jpg',
    },
    {
      title: 'مقر شركة رائدة',
      location: 'الرياض',
      category: 'commercial',
      image: '/projects/9.jpg',
    },
    {
      title: 'مركز بحوث وتطوير',
      location: 'الرياض',
      category: 'industrial',
      image: '/projects/10.jpg',
    },
    {
      title: 'منتجع ساحلي فاخر',
      location: 'الرياض',
      category: 'residential',
      image: '/projects/11.jpg',
    },
    {
      title: 'مجمع تجاري متكامل',
      location: 'الرياض',
      category: 'commercial',
      image: '/projects/12.jpg',
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

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  const handleToggleShow = () => {
    if (showAll) {
      setShowAll(false)
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setShowAll(true)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  } as const

  return (
    <section 
      id="projects" 
      className="py-20 px-6 bg-white scroll-mt-10" 
      ref={sectionRef}
    >
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
        {/* <motion.div
          className="flex gap-4 justify-center mb-12 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.1 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value)
                setShowAll(false)
              }}
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
        </motion.div> */}

        {/* Projects Grid Container */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          layout
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${project.image}`}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-64 shadow-lg bg-neutral-100"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-start transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {/* <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3> */}
                  <p className="text-white/80 flex items-center gap-1.5 text-sm">
                    <MapPin size={16} className="text-accent-gold" />
                    <span>{project.location}</span>
                  </p>
                </div>

                <div className="absolute inset-0 border-2 border-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={handleToggleShow}
              className="px-8 py-3.5 rounded-lg font-bold text-lg border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white hover:bg-[#1e3a5f] cursor-pointer transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'عرض أقل' : 'شاهد كل المشاريع'}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}