'use client'

import { motion } from 'framer-motion'
import { Eye, MessageSquare } from 'lucide-react'

export function VisionMission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Vision Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900">رؤيتنا</h2>
              </div>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  أن نكون الشركة الرائدة في قطاع المقاولات والإنشاءات بالمملكة العربية السعودية، 
                  معروفة بالابتكار والتميز والالتزام بأعلى معايير الجودة.
                </p>
                <p>
                  نسعى لبناء مشاريع تترك أثراً إيجابياً في المجتمع وتساهم في تطور البنية التحتية 
                  الوطنية من خلال تطبيق أحدث التقنيات والممارسات العالمية.
                </p>
                <p>
                  رؤيتنا هي أن نكون شركاء موثوقين في تحقيق أحلام عملائنا وتحويلها إلى واقع ملموس 
                  يتسم بالاستدامة والجودة العالية.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="md:order-1 relative h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8c] to-[#0f1f35]" />
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
              }} />
              <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-8">
                <Eye className="w-20 h-20 mb-6 opacity-80" />
                <p className="text-2xl font-bold mb-4">بناء المستقبل</p>
                <p className="text-lg opacity-90">مع الالتزام والابتكار والتميز</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Message Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900">رسالتنا</h2>
              </div>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  تقديم حلول إنشائية متكاملة وابتكارية تلبي احتياجات السوق المتطورة بأعلى معايير 
                  الأداء والأمان والاستدامة البيئية.
                </p>
                <p>
                  نركز على بناء علاقات طويلة الأمد مع عملائنا من خلال التزامنا التام بالشفافية والجودة 
                  والالتزام بالمواعيد والميزانيات المتفق عليها.
                </p>
                <p>
                  نستثمر في تطوير فريقنا وتبني أحدث التقنيات لضمان تقديم أفضل الحلول الهندسية 
                  والإنشائية التي تسهم في تطور المملكة والمنطقة.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f35] via-[#1e3a5f] to-[#2d5a8c]" />
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
              }} />
              <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-8">
                <MessageSquare className="w-20 h-20 mb-6 opacity-80" />
                <p className="text-2xl font-bold mb-4">خدمة متميزة</p>
                <p className="text-lg opacity-90">بأعلى معايير المهنية والجودة</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 pt-12 border-t border-gray-200"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-slate-900 text-center mb-12">
            قيمنا الأساسية
          </motion.h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'النزاهة', description: 'الشفافية والصدق في كل تعاملاتنا' },
              { title: 'الجودة', description: 'التميز والدقة في كل مشروع' },
              { title: 'الالتزام', description: 'الوفاء بالعهود والمسؤوليات' },
              { title: 'الابتكار', description: 'البحث عن حلول جديدة ومتطورة' },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold text-[#1e3a5f] mb-3">{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
