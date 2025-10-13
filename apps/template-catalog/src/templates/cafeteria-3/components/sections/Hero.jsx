/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Coffee, Star } from 'lucide-react'

const Hero = () => {
  const steamElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-8 bg-gradient-to-t from-coffee-300 to-transparent rounded-full opacity-70"
      style={{
        left: `${45 + (i * 2)}%`,
        top: '40%',
      }}
      animate={{
        y: [-20, -60],
        opacity: [0.7, 0],
        scale: [1, 1.2],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "easeOut"
      }}
    />
  ))

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-neutral-950">
      {/* Animated background with coffee beans pattern */}
      <div className="absolute inset-0">
        {/* Coffee beans subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(217, 119, 6, 0.4) 0%, transparent 50%)`
        }}></div>
        
        {/* Ambient lighting effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Coffee visual - Shows first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full order-1 lg:order-2"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px]">
              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl" />
              </motion.div>
              
              {/* Coffee icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Coffee className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 text-amber-500/30" strokeWidth={1} />
                  
                  {/* Steam effect */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-8 bg-gradient-to-t from-amber-400/40 to-transparent rounded-full"
                      style={{
                        left: `${40 + i * 10}%`,
                        top: '20%',
                      }}
                      animate={{
                        y: [-10, -40],
                        opacity: [0.6, 0],
                        scale: [1, 1.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] border border-amber-500/10 rounded-full" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px] border border-orange-500/10 rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-display font-black text-white leading-tight">
                El arte del
                <span className="block mt-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                  café perfecto
                </span>
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed max-w-xl">
                Cada taza cuenta una historia. Granos seleccionados, tostado artesanal 
                y la pasión por crear momentos inolvidables.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:scale-105 transition-all duration-300"
              >
                Explorar menú
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
              >
                Contáctanos
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 pt-8 border-t border-white/10">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">10K+</div>
                <div className="text-xs lg:text-sm text-neutral-400 mt-1">Tazas servidas</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">15+</div>
                <div className="text-xs lg:text-sm text-neutral-400 mt-1">Años de experiencia</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">4.9</div>
                <div className="text-xs lg:text-sm text-neutral-400 mt-1">Calificación</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
