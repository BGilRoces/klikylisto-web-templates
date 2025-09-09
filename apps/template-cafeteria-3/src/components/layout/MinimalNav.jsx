/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'

const MinimalNav = ({ scrollY, onMenuClick }) => {
  const navItems = [
    { name: 'Inicio', href: '#home', action: null },
    { name: 'Nosotros', href: '#about', action: null },
    { name: 'Menú', href: '#menu', action: onMenuClick },
    { name: 'Experiencia', href: '#experience', action: null },
    { name: 'Contacto', href: '#contact', action: null }
  ]

  const handleItemClick = (item, e) => {
    if (item.action) {
      e.preventDefault()
      item.action()
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'
      }}
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

          {/* Navigation Links */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
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

          {/* CTA Button */}
          <motion.button
            className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors duration-200"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reservar
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default MinimalNav
