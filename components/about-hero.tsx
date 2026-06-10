'use client'

import { motion } from 'framer-motion'

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            من نحن
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            شركة رفيف الجزيرة متخصصة في المقاولات والإنشاءات منذ أكثر من 25 سنة، 
            حيث اكتسبنا خبرة عميقة في تنفيذ مشاريع سكنية وتجارية بأعلى معايير الجودة والأمان.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: '150+', label: 'مشروع منجز' },
            { number: '200+', label: 'فريق متخصص' },
            { number: '25+', label: 'سنة خبرة' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold text-[#1e3a5f] mb-3">
                {stat.number}
              </div>
              <p className="text-lg text-slate-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
