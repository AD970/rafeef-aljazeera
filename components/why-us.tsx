'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Award, Users, TrendingUp, Zap } from 'lucide-react'

export function WhyUs() {
  const [expanded, setExpanded] = useState<number | null>(0)

  const reasons = [
    {
      icon: Award,
      title: 'الخبرة والاحترافية',
      shortDesc: 'أكثر من 25 سنة في مجال المقاولات',
      fullDesc: 'نمتلك خبرة عميقة تمتد لأكثر من ربع قرن في مجال المقاولات والإنشاءات بالمملكة العربية السعودية. فريقنا يتكون من محترفين متخصصين بمختلف التخصصات الهندسية والعمرانية، مما يضمن تنفيذ عالي الجودة لكل مشروع. لدينا سجل حافل بالمشاريع الناجحة التي تعكس التزامنا بالتميز والابتكار.',
    },
    {
      icon: Users,
      title: 'فريق متميز ومؤهل',
      shortDesc: 'أكثر من 200 متخصص محترف',
      fullDesc: 'يضم فريقنا أكثر من 200 متخصص مؤهل في مختلف المجالات الهندسية والإدارية والفنية. كل عضو في الفريق يمتلك شهادات احترافية معترف بها دولياً ويخضع لتدريب مستمر لمواكبة أحدث التطورات في صناعة البناء والإنشاء. نؤمن بأن نجاح مشاريعنا يعتمد بشكل أساسي على كفاءة وتفاني فريقنا.',
    },
    {
      icon: TrendingUp,
      title: 'جودة ومواصفات عالية',
      shortDesc: 'التزام بأعلى معايير الجودة العالمية',
      fullDesc: 'نلتزم بأعلى المواصفات والمعايير الهندسية العالمية في جميع مشاريعنا. نستخدم أفضل المواد الخام الموثوقة والتقنيات الحديثة في التنفيذ. كل مرحلة من مراحل المشروع تخضع لفحوصات جودة صارمة لضمان تحقيق أهداف المشروع بالكامل والحفاظ على السلامة الهندسية الكاملة.',
    },
    {
      icon: Zap,
      title: 'الالتزام والموثوقية',
      shortDesc: 'تسليم في الوقت المحدد والميزانية المتفق عليها',
      fullDesc: 'نتعهد بتسليم جميع مشاريعنا في الوقت المحدد والالتزام الكامل بالميزانية المتفق عليها مع عدم أي تأخير أو تجاوز في التكاليف. نمتلك إدارة مشاريع متقدمة وأنظمة مراقبة فعالة تضمن تنفيذ المشروع بكفاءة عالية. رضا عملائنا وثقتهم هو أولويتنا الأولى.',
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            لماذا نحن
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600"
          >
            اكتشف ما يجعل رفيف الجزيرة الخيار الأفضل للمشاريع الإنشائية المتميزة
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#1e3a5f] transition-colors"
            >
              {/* Accordion Header */}
              <motion.button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                whileHover={{ paddingLeft: 24 + 4, paddingRight: 24 - 4 }}
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a5f]/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{reason.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{reason.shortDesc}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-[#1e3a5f]" />
                </motion.div>
              </motion.button>

              {/* Accordion Content */}
              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-6 bg-white border-t border-gray-200">
                      <p className="text-slate-700 leading-relaxed text-lg">
                        {reason.fullDesc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
