'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  variant?: 'home' | 'standard'
}

export function Navbar({ variant = 'standard' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'من نحن', href: '/about' },
    { label: 'خدماتنا', href: '/services' },
    { label: 'مشاريعنا', href: '/portfolio' },
    { label: 'اتصل بنا', href: '#contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const isHomeVariant = variant === 'home'
  const bgClass = isHomeVariant 
    ? isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    : 'bg-white shadow-sm'

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 px-6' : 'py-4 px-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${bgClass}`}
      />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className={`text-2xl font-bold flex items-center gap-2 ${
         isHomeVariant && !isScrolled ? 'text-white' : 'text-slate-900'
          }` }
          whileHover={{ scale: 1.05 }}
        >
          <img src="/logo.png" alt="Rafeef Al Jazeera Logo" className="w-18 h-18" />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={`font-medium text-sm transition-colors duration-300 relative group ${
                isHomeVariant && !isScrolled 
                  ? 'text-white hover:text-gray-200' 
                  : 'text-slate-700 hover:text-[#1e3a5f]'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
              <span className={`absolute bottom-0 right-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                isHomeVariant && !isScrolled ? 'bg-white' : 'bg-[#1e3a5f]'
              }`} />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className={`hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
            isHomeVariant && !isScrolled
              ? 'bg-white text-[#1e3a5f] hover:bg-gray-100'
              : 'bg-[#1e3a5f] text-white hover:bg-[#0f1f35]'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          اتصل بنا
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden p-2 transition-colors ${
            isHomeVariant && !isScrolled ? 'text-white' : 'text-slate-900'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          className="absolute top-full right-0 left-0 mt-2 mx-4 backdrop-blur-xl bg-white/95 rounded-xl shadow-xl p-4 border border-white/20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 px-4 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full mt-4 block text-center bg-emerald-700 text-white py-2.5 rounded-lg font-medium hover:bg-emerald-800 transition-colors"
          >
            اتصل بنا
          </a>
        </motion.nav>
      )}
    </motion.header>
  )
}
