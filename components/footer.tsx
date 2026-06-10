'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'الشركة',
      links: ['من نحن', 'المشاريع', 'الخدمات', 'الفريق'],
    },
    {
      title: 'الخدمات',
      links: ['المقاولات العامة', 'التصميم المعماري', 'إدارة المشاريع', 'التشطيبات'],
    },
    {
      title: 'سياسات',
      links: ['سياسة الخصوصية', 'شروط الاستخدام', 'سياسة الأمان', 'اتفاقية الخدمة'],
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-[#0f1f35] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main content */}
        <motion.div
          className="grid md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */} 
          <motion.div variants={itemVariants} className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Rafeef Al Jazeera Logo" className="w-14 h-14" />
              <div>
                <h2 className="text-xl font-bold">رفيف الجزيرة</h2>
                <p className="text-white/60 text-xs">Rafeef Al-Jazeera</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              شركة رائدة في قطاع المقاولات والإنشاءات مع التزام بأعلى معايير الجودة والأمان
            </p>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-bold text-lg mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white/60 text-sm text-center md:text-right">
            © {currentYear} رفيف الجزيرة. جميع الحقوق محفوظة
          </p>

          {/* Social links */}
          <div className="flex gap-4">
            {[
              { icon: '📷', label: 'Instagram' },
              { icon: '𝕏', label: 'Twitter' },
              { icon: '💼', label: 'LinkedIn' },
              { icon: 'f', label: 'Facebook' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0f1f35] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center shadow-lg hover:bg-[#0f1f35] transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ↑
      </motion.button>
    </footer>
  )
}
