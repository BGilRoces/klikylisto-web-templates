/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Menú', href: '#menu' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-amber-500/10 border-b border-amber-200/30' 
          : 'bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Premium Logo */}
          <motion.div 
            className="flex items-center space-x-4 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg shadow-amber-500/25 border border-amber-400/30"
                animate={{ 
                  boxShadow: [
                    '0 10px 25px rgba(245, 158, 11, 0.25)',
                    '0 15px 35px rgba(245, 158, 11, 0.4)',
                    '0 10px 25px rgba(245, 158, 11, 0.25)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Coffee className="h-8 w-8 text-white" />
              </motion.div>
              
              {/* Premium glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Pulse indicator */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
            
            <div>
              <span className={`text-3xl font-display font-black transition-colors duration-300 ${
                scrolled ? 'text-slate-800' : 'text-white'
              }`}>
                Aroma
              </span>
              <motion.div 
                className="text-xs font-medium tracking-widest opacity-75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ delay: 0.5 }}
              >
                <span className={scrolled ? 'text-amber-600' : 'text-amber-200'}>
                  PREMIUM COFFEE
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Premium Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative font-semibold transition-all duration-300 group ${
                  scrolled ? 'text-slate-700 hover:text-amber-700' : 'text-white/90 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Premium hover background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-lg backdrop-blur-sm border border-amber-300/30 opacity-0 group-hover:opacity-100 transition-all duration-300 -m-2 px-4 py-2"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
                
                {/* Elegant underline */}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full shadow-lg shadow-amber-400/50"></span>
              </motion.a>
            ))}
            
            <motion.button
              className="group relative bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-2xl font-bold overflow-hidden shadow-xl shadow-amber-500/25 border border-amber-400/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="relative z-10">Reservar Mesa</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </motion.button>
          </div>

          {/* Premium Mobile menu button */}
          <motion.button
            className={`lg:hidden p-3 rounded-2xl transition-all duration-300 backdrop-blur-md border ${
              scrolled 
                ? 'bg-white/80 border-amber-200/50 text-slate-700 hover:bg-amber-50 shadow-lg' 
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Premium Mobile Navigation */}
        <motion.div
          className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div 
            className="py-6 mt-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-amber-500/10 border border-amber-200/50"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="space-y-2 px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 text-slate-700 hover:text-amber-700 font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300 border border-transparent hover:border-amber-200/50"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ x: 8 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            <div className="px-6 pt-4 border-t border-amber-200/30 mt-4">
              <motion.button 
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-amber-500/25 border border-amber-400/30 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                Reservar Mesa
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation
