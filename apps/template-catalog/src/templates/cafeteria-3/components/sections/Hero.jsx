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
    <section id="home" className="h-[75vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-600/10"></div>
        
        {/* Floating orbs with glassmorphism */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/30 to-orange-600/20 rounded-full backdrop-blur-3xl border border-amber-300/20"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-tl from-amber-300/25 to-yellow-500/15 rounded-full backdrop-blur-2xl border border-amber-200/15"
          animate={{ 
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-orange-400/40 to-red-500/20 rounded-full backdrop-blur-xl border border-orange-300/25"
          animate={{ 
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Ambient light effects */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-orange-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              className="flex items-center space-x-3 mb-8"
            >
              <motion.div 
                className="p-2 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full backdrop-blur-sm border border-amber-300/30"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-amber-300" />
              </motion.div>
              <span className="text-amber-200 font-semibold tracking-widest text-sm uppercase bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">EXPERIENCIA PREMIUM</span>
            </motion.div>

            <motion.h1
              className="text-2xl md:text-4xl font-display font-black mb-3 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
                Despertar los
              </span>
              <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent relative">
                Sentidos
                <motion.div
                  className="absolute -bottom-4 left-0 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg shadow-amber-500/50"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-amber-100/90 mb-10 leading-relaxed max-w-xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Cada taza es una sinfonía de sabores cuidadosamente orquestada. 
              Descubre el arte del café artesanal donde la pasión se encuentra con la perfección.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="group relative bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-2xl font-bold text-lg overflow-hidden shadow-2xl shadow-amber-500/25 border border-amber-400/20"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Explorar Menú</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.button>
              
              <motion.button
                className="group relative bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-2xl font-semibold text-lg border-2 border-amber-300/30 hover:border-amber-300/50 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Nuestra Historia</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Premium Coffee Cup Visual */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          >
            {/* Main coffee cup with premium styling */}
            <div className="relative">
              <motion.div
                className="w-96 h-96 bg-gradient-to-br from-amber-50/90 via-orange-100/80 to-amber-200/70 rounded-full shadow-2xl relative overflow-hidden backdrop-blur-sm border-4 border-amber-300/30"
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Premium coffee liquid with multiple layers */}
                <motion.div
                  className="absolute bottom-10 left-10 right-10 h-56 bg-gradient-to-t from-amber-900 via-amber-800 to-amber-700 rounded-full shadow-inner"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                />
                
                {/* Luxurious coffee foam with texture */}
                <motion.div
                  className="absolute bottom-52 left-14 right-14 h-12 bg-gradient-to-r from-amber-50 via-cream-100 to-amber-100 rounded-full shadow-2xl border border-amber-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                />
                
                {/* Multiple steam layers for depth */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                  {Array.from({ length: 8 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-12 bg-gradient-to-t from-amber-300/60 via-amber-200/40 to-transparent rounded-full"
                      style={{
                        left: `${(i - 4) * 8}px`,
                      }}
                      animate={{
                        y: [-30, -80],
                        opacity: [0.8, 0],
                        scale: [1, 1.5],
                        x: [0, (i % 2 === 0 ? 10 : -10)]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>

                {/* Elegant cup handle with premium styling */}
                <motion.div
                  className="absolute right-0 top-1/2 w-20 h-24 border-8 border-amber-300/80 rounded-r-full shadow-xl backdrop-blur-sm"
                  initial={{ opacity: 0, x: 30, rotate: -15 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
                
                {/* Inner glow effect */}
                <div className="absolute inset-4 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-xl"></div>
              </motion.div>

              {/* Premium floating coffee beans with varied sizes and animations */}
              {Array.from({ length: 12 }, (_, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${i % 3 === 0 ? 'w-4 h-6' : i % 3 === 1 ? 'w-3 h-5' : 'w-2 h-4'} bg-gradient-to-br from-amber-800 to-amber-900 rounded-full shadow-lg`}
                  style={{
                    top: `${15 + Math.random() * 70}%`,
                    left: `${5 + Math.random() * 90}%`,
                  }}
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 5 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Ambient light rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-amber-300/20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-orange-400/30"
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Premium Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-amber-200/90 group cursor-pointer"
          >
            <span className="text-sm font-light mb-3 tracking-wide group-hover:text-amber-100 transition-colors">Descubre más</span>
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-amber-300/30 group-hover:border-amber-300/50 group-hover:bg-white/20 transition-all duration-300">
              <ChevronDown className="h-5 w-5" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
