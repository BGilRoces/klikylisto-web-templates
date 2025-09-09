/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const FloatingCursor = ({ mousePosition }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovering(true)
      setCursorVariant('hover')
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorVariant('default')
    }

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      border: '2px solid rgba(139, 69, 19, 0.8)',
    },
    hover: {
      scale: 1.3,
      backgroundColor: 'rgba(139, 69, 19, 0.8)',
      border: '2px solid rgba(255, 255, 255, 0.8)',
    }
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
        animate={variants[cursorVariant]}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 28,
          backgroundColor: { duration: 0.2 },
          border: { duration: 0.2 }
        }}
      />

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-40"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(139, 69, 19, 0.4)'
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
          opacity: isHovering ? 0.3 : 0.6
        }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 20,
          delay: 0.05
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-white/30 pointer-events-none z-30"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.2 : 0.4,
          rotate: isHovering ? 180 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          delay: 0.1
        }}
      />

      {/* Sparkle effects when hovering */}
      {isHovering && (
        <>
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="fixed w-1 h-1 bg-amber-600 rounded-full pointer-events-none z-40"
              style={{
                left: `${mousePosition.x}%`,
                top: `${mousePosition.y}%`,
              }}
              initial={{ 
                scale: 0, 
                x: 0, 
                y: 0,
                opacity: 1
              }}
              animate={{
                scale: [0, 1, 0],
                x: Math.cos((i * 60) * Math.PI / 180) * 30,
                y: Math.sin((i * 60) * Math.PI / 180) * 30,
                opacity: [1, 1, 0]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </>
      )}
    </>
  )
}

export default FloatingCursor
