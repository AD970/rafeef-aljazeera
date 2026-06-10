'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [counters, setCounters] = useState({
    projects: 0,
    years: 0,
    clients: 0,
  })

  const stats = [
    {
      label: 'المشاريع المنجزة',
      value: 150,
      suffix: '+',
      icon: '🏗️',
    },
    {
      label: 'سنوات الخبرة',
      value: 25,
      suffix: '',
      icon: '⏰',
    },
    {
      label: 'العملاء السعداء',
      value: 500,
      suffix: '+',
      icon: '😊',
    },
    {
      label: 'فريق محترف',
      value: 200,
      suffix: '+',
      icon: '👥',
    },
  ]

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCounters({
        projects: Math.floor(stats[0].value * progress),
        years: Math.floor(stats[1].value * progress),
        clients: Math.floor(stats[2].value * progress),
      })

      if (progress === 1) clearInterval(timer)
    }, 30)

    return () => clearInterval(timer)
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section
      id="stats"
      className="py-20 px-6 bg-gradient-to-r from-primary-dark to-primary-light relative overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            إنجازاتنا بالأرقام
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            شهادة على التزامنا بالتميز والنمو المستمر
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-gold/0 to-accent-gold/0 group-hover:from-accent-gold/20 group-hover:to-accent-gold/10 transition-all duration-300" />

              <div className="relative">
                <p className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </p>

                {/* Counter value */}
                <div className="text-5xl font-bold text-accent-gold mb-2">
                  {index === 0 && counters.projects}
                  {index === 1 && counters.years}
                  {index === 2 && counters.clients}
                  {index === 3 && Math.floor(stats[3].value * (inView ? 1 : 0))}
                  <span className="text-3xl">{stat.suffix}</span>
                </div>

                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
    </section>
  )
}
