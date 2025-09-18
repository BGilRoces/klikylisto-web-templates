/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

const BackgroundShifter = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Primary gradient layer */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            #8B4513 0%, 
            #D2B48C 30%, 
            #A0522D 50%, 
            #6B4423 70%, 
            #2C1810 100%)`
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 1, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary animated layer */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `conic-gradient(from ${mousePosition.x * 2}deg at ${mousePosition.x}% ${mousePosition.y}%, 
            #8B4513, 
            #A0522D, 
            #D2B48C, 
            #6B4423, 
            #C19A6B, 
            #8B6914, 
            #708090, 
            #8B4513)`
        }}
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-64 h-64 opacity-10"
        style={{
          left: `${mousePosition.x * 0.3}%`,
          top: `${mousePosition.y * 0.2}%`,
          background: 'linear-gradient(45deg, #8B4513, transparent)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          borderRadius: [
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '70% 30% 30% 70% / 70% 70% 30% 30%',
            '30% 70% 70% 30% / 30% 30% 70% 70%'
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-48 h-48 opacity-8"
        style={{
          right: `${(100 - mousePosition.x) * 0.2}%`,
          bottom: `${(100 - mousePosition.y) * 0.3}%`,
          background: 'linear-gradient(135deg, #D2B48C, transparent)',
          borderRadius: '50% 20% 80% 30% / 60% 30% 70% 40%'
        }}
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
          borderRadius: [
            '50% 20% 80% 30% / 60% 30% 70% 40%',
            '20% 80% 30% 50% / 30% 70% 40% 60%',
            '50% 20% 80% 30% / 60% 30% 70% 40%'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Particle system */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          style={{
            left: `${(mousePosition.x + i * 10) % 100}%`,
            top: `${(mousePosition.y + i * 8) % 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Dynamic noise texture */}
      <motion.div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px) scale(1.1)`
        }}
        animate={{
          scale: [1.1, 1.2, 1.1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default BackgroundShifter
