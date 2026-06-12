'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView,Variants } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export function HeroHome() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // تشغيل الفيديو فوراً أول ما يفتح المستخدم الصفحة بدون شروط لضمان الأداء السلس
  const isInView = useInView(containerRef)

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch((err) => console.log("Video play failed:", err))
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-slate-950"
    >
      {/* 1. استبدال الصورة الثابتة بالفيديو الخلفي التفاعلي مع الحفاظ على الأبعاد والـ Object Cover */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero-bg.mp4" // تأكد من وضع ملف الـ mp4 في هذا المسار داخل مجلد public
      />

      {/* 2. طبقة الـ Overlap والتشبع الأصلية الخاصة بك مع لمسة الـ Saturation لعزل بصري فخم */}
      <div className="absolute inset-0 bg-black/50 backdrop-saturate-150 z-10 pointer-events-none" />
      {/* طبقة التدرج الجانبي لتعميق السواد خلف النص العربي المكتوب على اليمين */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/80 z-10 pointer-events-none" />

      {/* Content */}
     <div className="relative z-10 max-w-7xl  px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col  gap-12 items-start">
          

          {/* Right Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-right"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance"
            >
              نبني المستقبل
              <br />
              <span className="text-gray-300">بأعلى معايير الجودة</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-200 mb-10 max-w-xl ml-auto"
            >
              أكثر من 25 سنة من الخبرة في تقديم مشاريع إنشائية متميزة وحلول هندسية مبتكرة
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-end"
            >
              <motion.a
                href="/portfolio"
                className="px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                استعرض أعمالنا
                <motion.div
                  className="group-hover:translate-x-1 transition-transform"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowLeft size={20} />
                </motion.div>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors inline-block text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                اطلب استشارة مجانية
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}