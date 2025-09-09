/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'

const FloatingElements = () => {
  // Coffee beans floating elements
  const coffeeBeams = Array.from({ length: 12 }, (_, i) => (
    <motion.div
      key={`bean-${i}`}
      className="absolute w-2 h-3 bg-coffee-600 rounded-full opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        delay: Math.random() * 4,
        ease: "easeInOut"
      }}
    />
  ))

  // Floating circles
  const floatingCircles = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={`circle-${i}`}
      className={`absolute rounded-full opacity-10 ${
        i % 3 === 0 ? 'bg-coffee-400' : i % 3 === 1 ? 'bg-cream-400' : 'bg-coffee-300'
      }`}
      style={{
        width: `${20 + Math.random() * 40}px`,
        height: `${20 + Math.random() * 40}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.3, 0.1],
        y: [-30, 30, -30],
      }}
      transition={{
        duration: 10 + Math.random() * 6,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: "easeInOut"
      }}
    />
  ))

  // Steam effects
  const steamElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={`steam-${i}`}
      className="absolute w-1 h-8 bg-gradient-to-t from-coffee-200 to-transparent rounded-full opacity-30"
      style={{
        left: `${20 + Math.random() * 60}%`,
        top: `${20 + Math.random() * 60}%`,
      }}
      animate={{
        y: [-40, -80],
        opacity: [0.3, 0],
        scale: [1, 1.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: i * 0.7,
        ease: "easeOut"
      }}
    />
  ))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Coffee beans */}
      {coffeeBeams}
      
      {/* Floating circles */}
      {floatingCircles}
      
      {/* Steam elements */}
      {steamElements}
      
      {/* Large decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 border border-coffee-200 rounded-full opacity-5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-48 h-48 border border-cream-300 rounded-full opacity-5"
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 border border-coffee-300 rounded-full opacity-5"
        animate={{
          rotate: [0, 180, 360],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default FloatingElements
