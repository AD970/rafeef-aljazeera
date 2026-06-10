'use client'

import { motion } from 'framer-motion'
import { Building2, Pencil, PaintBucket, ArrowLeft } from 'lucide-react'

export function ServicesPreview() {
  const services = [
    {
      icon: Building2,
      title: 'المقاولات العامة',
      description: 'نقدم خدمات المقاولات العامة الشاملة التي تشمل جميع مراحل المشروع من التخطيط والتصميم إلى التنفيذ والإشراف. نتعامل مع المشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة والسلامة. فريقنا المتخصص يضمن تسليم المشاريع في الوقت المحدد وبالميزانية المتفق عليها، مع الالتزام الكامل بجميع المعايير الهندسية والعمرانية السعودية.',
      bgColor: 'bg-slate-800',
      iconBgColor: 'bg-blue-400',
      iconTextColor: 'text-white',
    },
    {
      icon: Pencil,
      title: 'التصميم الهندسي والمعماري',
      description: 'يقدم فريقنا من المعماريين والمهندسين حلولاً تصميمية مبتكرة وعملية تجمع بين الجمال الفني والكفاءة الوظيفية. نستخدم أحدث التقنيات وأدوات التصميم الحديثة لتقديم تصاميم مستدامة وصديقة للبيئة. كل مشروع يتم دراسته بعمق للتأكد من أنه يلبي جميع احتياجات العميل والمتطلبات المحلية.',
      bgColor: 'bg-slate-800',
      iconBgColor: 'bg-cyan-400',
      iconTextColor: 'text-white',
    },
    {
      icon: PaintBucket,
      title: 'التشطيبات والديكور الداخلي',
      description: 'نتخصص في التشطيبات الفاخرة والديكور الداخلي عالي الجودة التي تعكس الذوق الرفيع والأناقة. يعمل فريقنا على اختيار أفضل المواد والخامات العالمية مع ضمان الحرفية العالية في التركيب والتنفيذ. من الطلاء والأرضيات إلى الأسقف والإضاءة، نوفر حلولاً شاملة متكاملة تحول المساحات إلى بيئات راقية ومريحة.',
      bgColor: 'bg-slate-800',
      iconBgColor: 'bg-emerald-400',
      iconTextColor: 'text-white',
    },
  ]

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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 bg-gray-50">
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
            خدماتنا الرئيسية
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            نقدم مجموعة شاملة من الخدمات في مجال المقاولات والإنشاءات والتصميم
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${service.bgColor} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative h-full flex flex-col`}
            >
              {/* Icon Box - Top Corner */}
              <div className={`${service.iconBgColor} w-20 h-20 rounded-lg flex items-center justify-center mb-8 absolute -top-3 -right-3 shadow-lg`}>
                <service.icon className={`w-10 h-10 ${service.iconTextColor}`} />
              </div>

              {/* Content */}
              <div className="pt-12 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed flex-grow text-sm">{service.description}</p>
                
                {/* Learn More Link */}
                <motion.a
                  href="/services"
                  className="inline-flex items-center gap-2 text-white font-semibold mt-6 hover:text-gray-200 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <span>عرض المزيد</span>
                  <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
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
            href="/services"
            className="inline-block px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#0f1f35] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            عرض جميع الخدمات
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
