'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Building2, Hammer, Clipboard, Users, BadgeCheck } from 'lucide-react'
import { GrUserWorker } from 'react-icons/gr'

const AnimatedCounter = ({ target, label }: { target: number; label: string }) => {
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
      <div className="text-4xl font-bold text-[#1e3a5f] mb-2">{count}+</div>
      <p className="text-slate-600">{label}</p>
    </div>
  )
}

// Specific overlay counter for the right-side card
const OverlayCounter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
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
    }, 50)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-center">
      <div className="text-7xl font-bold  text-white mb-1">{count}+</div>
      <p className="text-white/80 text-sm">{label}</p>
    </div>
  )
}

export function WhatWeDo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">من نحن</h2>
              <p className="text-lg text-slate-600">
          شركة رفيف الجزيرة للمقاولات والإنشاءات، خبرة تمتد لأكثر من 25 عامًا في تقديم خدمات البناء والتطوير العقاري بأعلى معايير الجودة والاحترافية. نحن ملتزمون بتحويل رؤى عملائنا إلى واقع ملموس من خلال فريق متخصص ومشاريع ناجحة في مختلف القطاعات.
              </p>
            </motion.div>

             <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8">
              <AnimatedCounter target={150} label="مشاريع مكتملة" />
              <AnimatedCounter target={25} label="سنة خبرة" />
              <AnimatedCounter target={500} label="عميل راضي" />
              <AnimatedCounter target={200} label="فريق محترف" />
            </motion.div> 

            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="/portfolio"
                className="inline-block px-8 py-3 bg-[#1e3a5f] text-white rounded-lg font-semibold hover:bg-[#0f1f35] transition-colors"
              >
                استعرض أعمالنا
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            {/* {[
              {
                icon: Building2,
                title: 'المقاولات الشاملة',
                desc: 'مشاريع سكنية وتجارية بأعلى معايير الجودة والسلامة',
              },
              {
                icon: Hammer,
                title: 'التصميم والتنفيذ',
                desc: 'فريق متخصص في الهندسة والعمارة والتصميم الداخلي',
              },
              {
                icon: Clipboard,
                title: 'إدارة المشاريع',
                desc: 'تنسيق احترافي من المرحلة الأولى حتى الانتهاء',
              },
              {
                icon: Users,
                title: 'الفريق المتميز',
                desc: 'محترفون بخبرات عميقة في مجال البناء والعقارات',
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))} */}
          <div className="h-full relative w-full">

            <img src="/what-we-do.jpg" alt="What We Do" className="rounded-lg shadow-lg w-full sm:w-[500px] h-auto sm:h-[600px]" />
            <div className="absolute inset-0 sm:inset-0 sm:right-0  sm:flex-row flex-col flex z-10 w-full sm:w-auto -top-4 sm:-top-4 h-full sm:h-auto">
              <motion.div
                className="flex flex-col justify-between pb-8 bg-[#1e3a5f] text-white w-full min-h-[220px] sm:h-[440px] sm:w-[240px] px-4 py-2 backdrop-blur-sm"
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, ease: 'easeOut' }}
                 viewport={{ once: true, margin: '-100px' }}
               >
                 <GrUserWorker size='80'/>
               <motion.div variants={itemVariants} className=" gap">
                 <OverlayCounter target={50} label=" موظفًا محترفًا من المهندسين والفنيين" /> </motion.div>
                </motion.div>


              <motion.div
                className="flex flex-col justify-between pb-8 bg-[#C53F44] text-white w-full min-h-[300px] sm:h-[440px] sm:w-[240px] px-4 py-2 backdrop-blur-sm"
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, ease: 'easeOut' }}
                 viewport={{ once: true, margin: '-100px' }}
               >
                <svg className='absolute left-0 top-0' xmlns="http://www.w3.org/2000/svg" fill="#fff" width="128" height="128" viewBox="0 0 32 32"><path d="M16 24v8h-7.938l-4.063-4.125-4-3.875v-8h8l8 8zM32 24v8h-7.938l-4.063-4.125-4-3.875v-8h8l8 8zM16 8v8h-7.938l-4.063-4.125-4-3.875v-8h8l8 8zM32 8v8h-7.938l-4.063-4.125-4-3.875v-8h8l8 8z"></path></svg>
                 <BadgeCheck size='80'/>
               <motion.div variants={itemVariants} className=" gap">
                 <OverlayCounter target={5} label=" وثائق اعتماد" /> </motion.div>
                </motion.div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
