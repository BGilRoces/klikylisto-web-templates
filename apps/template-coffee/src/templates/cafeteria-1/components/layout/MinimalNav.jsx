/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, Menu, X } from 'lucide-react'
import { useState } from 'react'

const MinimalNav = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { name: 'Inicio', href: '#home', action: null },
    { name: 'Nosotros', href: '#about', action: null },
    { name: 'Menú', href: '#menu', action: null },
    { name: 'Experiencia', href: '#experience', action: null },
    { name: 'Contacto', href: '#contact', action: null }
  ]

  const handleItemClick = (item, e) => {
    if (item.action) {
      e.preventDefault()
      item.action()
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => window.navigateToHome && window.navigateToHome()}
          >
            <Coffee className="w-8 h-8 text-amber-700" />
            <span className="text-2xl font-bold text-stone-900">Aroma</span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.div
            className="hidden lg:flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleItemClick(item, e)}
                className="text-stone-700 hover:text-amber-700 font-medium transition-colors duration-200 relative cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-700"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Hamburger Menu Button */}
          <motion.button
            className="lg:hidden text-stone-700 hover:text-amber-700 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleItemClick(item, e)}
                    className="block text-stone-700 hover:text-amber-700 font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-amber-50 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default MinimalNav
