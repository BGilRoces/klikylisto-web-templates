/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-coffee-200 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-cream-300 rounded-full opacity-30"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0] 
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-coffee-400 rounded-full opacity-10"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Sparkles className="h-6 w-6 text-coffee-500" />
              <span className="text-coffee-600 font-medium tracking-wide">EXPERIENCIA ÚNICA</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold text-coffee-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Despertar los
              <span className="block text-coffee-600 relative">
                Sentidos
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-coffee-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-coffee-700 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Cada taza es una obra de arte, cada sorbo una experiencia memorable. 
              Descubre el café artesanal que transformará tu día.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="bg-coffee-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-coffee-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explorar Menú
              </motion.button>
              <motion.button
                className="border-2 border-coffee-600 text-coffee-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-coffee-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Nuestra Historia
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right content - Coffee cup visual */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Main coffee cup */}
            <div className="relative">
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-coffee-100 to-coffee-200 rounded-full shadow-2xl relative overflow-hidden"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Coffee liquid */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8 h-48 bg-gradient-to-t from-coffee-800 to-coffee-600 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
                
                {/* Coffee foam */}
                <motion.div
                  className="absolute bottom-44 left-12 right-12 h-8 bg-cream-100 rounded-full shadow-inner"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                />

                {/* Steam elements */}
                {steamElements}

                {/* Cup handle */}
                <motion.div
                  className="absolute right-0 top-1/2 w-16 h-20 border-8 border-coffee-300 rounded-r-full"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                />
              </motion.div>

              {/* Floating coffee beans */}
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-5 bg-coffee-700 rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-coffee-600"
          >
            <span className="text-sm font-medium mb-2">Descubre más</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
