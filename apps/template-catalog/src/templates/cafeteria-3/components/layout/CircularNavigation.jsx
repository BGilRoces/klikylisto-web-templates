/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, User, Menu, Sparkles, MessageCircle, Home } from 'lucide-react'

const CircularNavigation = ({ currentSection, setCurrentSection }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)

  const navItems = [
    { icon: Home, label: 'Inicio', id: 0, color: '#8B4513' },
    { icon: User, label: 'Historia', id: 1, color: '#D2B48C' },
    { icon: Menu, label: 'Menú', id: 2, color: '#A0522D' },
    { icon: Sparkles, label: 'Experiencia', id: 3, color: '#6B4423' },
    { icon: MessageCircle, label: 'Contacto', id: 4, color: '#C19A6B' },
  ]

  const handleSectionChange = (sectionId) => {
    setCurrentSection(sectionId)
    const sectionNames = ['home', 'about', 'menu', 'experience', 'contact']
    document.getElementById(sectionNames[sectionId])?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'experience', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setCurrentSection])

  return (
    <motion.div 
      className="fixed top-8 right-8 z-50"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 1.5, type: "spring" }}
    >
      {/* Main circle button */}
      <motion.div
        className="relative"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <motion.button
          className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30 shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: isExpanded 
              ? '0 0 30px rgba(255, 107, 53, 0.5)' 
              : '0 0 20px rgba(255, 255, 255, 0.3)' 
          }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Coffee className="w-6 h-6 text-white" />
          </motion.div>
        </motion.button>

        {/* Circular menu items */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div className="absolute inset-0">
              {navItems.map((item, index) => {
                const angle = (index * 72) - 90 // 360/5 = 72 degrees
                const radius = 80
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                  <motion.button
                    key={item.id}
                    className="absolute w-12 h-12 rounded-full flex items-center justify-center group"
                    style={{
                      backgroundColor: hoveredItem === index ? item.color : 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: `2px solid ${currentSection === item.id ? item.color : 'rgba(255, 255, 255, 0.3)'}`,
                      left: x + 32 - 24, // Center the button
                      top: y + 32 - 24,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: `0 0 20px ${item.color}`,
                    }}
                    whileTap={{ scale: 0.9 }}
                    onHoverStart={() => setHoveredItem(index)}
                    onHoverEnd={() => setHoveredItem(null)}
                    onClick={() => handleSectionChange(item.id)}
                  >
                    <item.icon 
                      className="w-5 h-5 transition-colors duration-200" 
                      style={{ 
                        color: hoveredItem === index ? '#000' : '#fff' 
                      }}
                    />
                    
                    {/* Tooltip */}
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: hoveredItem === index ? 1 : 0, y: hoveredItem === index ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.div>
                  </motion.button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress indicator */}
        <motion.div 
          className="absolute -inset-2 rounded-full border-2 border-transparent"
          style={{
            background: `conic-gradient(from 0deg, ${navItems[currentSection]?.color || '#FF6B35'} ${(currentSection + 1) * 20}%, transparent ${(currentSection + 1) * 20}%)`,
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  )
}

export default CircularNavigation
