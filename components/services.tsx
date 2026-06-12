'use client'

import { motion,Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Ruler, Paintbrush, Briefcase, ArrowLeft } from 'lucide-react'
import { Separator } from './ui/separator'

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const services = [
    {
      icon: Building2,
      title: 'انشاء القصور والفلل والعمائر',
      description:
        'نقوم بالإدارة والإشراف على كافة خدمات المقاولات العامة من بناء الهياكل الخرسانية من جسور و أسقف وأساسات باستخدام أحدث التقنيات والمواد المبتكرة في البناء الخرساني وفقا لاشتراطات ومواصفات الكود السعودي للبناء.',
      img: '/services/انشاء_القصور.jpg',
    },
    {
      icon: Paintbrush,
      title: 'الترميم والتشطيبات ',
      description:
      'نقوم بتنفيذ جميع أعمال الترميم والتشطيبات الداخلية والخارجية للمباني بما في ذلك أعمال اللياسة والدهان وتأسيس أعمال الكهرباء والسباكة وتركيب البلاط وجميع الديكورات الداخلية من أسقف مستعارة وجبس بورد مع اضفاء لمسات فنية متميزة وأنيقة بما يلائم تطلعات عملائنا، ونبحث عن كل مايضمن الجودة في أعمالنا من أدوات وخبرات ذات كفاءة عالية. ',
      img: '/services/التشطيب.jpg',
    },
    {
      icon: Briefcase,
      title: "انشاء الملاحق",
      description:
        'نقوم بإنشاء جميع الملاحق السفلية والعلوية والغرف والمجالس والمستودعات ودورات المياه وخدمات الترميم وانشاء أسقف سندوتش بانل وأعمال التشطيب الداخلية والخارجية والمرافق الكهربائية والصحية العالية الجودة مع التزامنا بأعلى معايير الجودة والابتكار والدقة في التنفيذ. فعالة لكل مراحل المشروع من التخطيط إلى التسليم',
      img: '/services/انشاء_الملاحق.jpg',
    },
  ]

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-neutral-50 to-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-gold font-bold text-lg mb-2">خدماتنا</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            حلول شاملة للبناء والتطوير
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات المتخصصة التي تغطي جميع جوانب مشاريعك
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => {
            const Icon = service.icon

            return (

              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={'hover'}
                className="group relative p-8 rounded-2xl gap-4   border border-neutral-300 cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">

                {/* Image with zoom on group hover */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-[200px] w-[400px] object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                 <p className='text-black/60 font-bold'>0{index +1}/</p>
                <h1 className='text-2xl font-bold'>
                  {service.title}
                </h1>
                <p className='text-black/80 '>{service.description}</p>
                </div>
               <motion.a
                                href="/contact"
                                className="inline-flex items-center gap-2 font-semibold mt-6  transition-colors group"
                                whileHover={{ x: 5 }}
                              >
                                <span className='group-hover:text-primary'>تواصل معنا</span>
                                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 group-hover:text-primary transition-transform" />
                              </motion.a>
              </motion.div>
            )
          })}
        </motion.div>
        
      </div>
    </section>
  )
}
