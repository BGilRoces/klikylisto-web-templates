/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play, Pause } from 'lucide-react'

const DiagonalHero = ({ setCurrentSection }) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [timeOfDay, setTimeOfDay] = useState('morning')
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, 200])
  const rotate = useTransform(scrollY, [0, 1000], [0, 15])

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setTimeOfDay('morning')
    else if (hour < 18) setTimeOfDay('afternoon')
    else setTimeOfDay('evening')

    setCurrentSection(0)
  }, [setCurrentSection])

  const colors = {
    morning: {
      primary: '#8B4513',
      secondary: '#D2B48C',
      accent: '#A0522D'
    },
    afternoon: {
      primary: '#6B4423',
      secondary: '#C19A6B',
      accent: '#8B6914'
    },
    evening: {
      primary: '#4A4A4A',
      secondary: '#708090',
      accent: '#696969'
    }
  }

  const currentColors = colors[timeOfDay]

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent})`
      }}
    >
      {/* Diagonal geometric shapes */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y1, rotate }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute w-96 h-96 opacity-20"
            style={{
              background: `linear-gradient(45deg, transparent 30%, ${currentColors.secondary} 50%, transparent 70%)`,
              transform: 'rotate(45deg)',
              top: '10%',
              left: '-10%'
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [45, 60, 45]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute w-64 h-64 opacity-30"
            style={{
              background: `radial-gradient(circle, ${currentColors.accent}, transparent)`,
              top: '60%',
              right: '-5%'
            }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Main content with asymmetric layout */}
      <div className="relative z-10 h-screen flex">
        {/* Left side - Main text (60% width) */}
        <motion.div 
          className="w-3/5 flex flex-col justify-center pl-16"
          style={{ y: y2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <motion.h1 
              className="text-7xl font-black leading-none mb-6 text-white"
              style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: `3px 3px 0px ${currentColors.secondary}`,
                transform: 'skew(-2deg)',
              }}
            >
              CAFÉ<br />
              <motion.span
                className="text-5xl"
                animate={{ color: [currentColors.primary, currentColors.accent, currentColors.primary] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ARTESANAL
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-lg text-white/80 mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Donde cada taza cuenta una historia única de sabor y tradición
            </motion.p>

            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300 transform"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  boxShadow: `8px 8px 0px ${currentColors.secondary}` 
                }}
              >
                EXPLORAR MENÚ
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="inline w-5 h-5 mr-2" /> : <Play className="inline w-5 h-5 mr-2" />}
                {isPlaying ? 'PAUSAR' : 'REPRODUCIR'}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side - Interactive coffee cup (40% width) */}
        <motion.div 
          className="w-2/5 flex items-center justify-center relative"
          style={{ y: y1 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 1, type: "spring" }}
          >
            {/* Coffee cup SVG */}
            <motion.svg
              width="300"
              height="400"
              viewBox="0 0 300 400"
              className="filter drop-shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {/* Cup body */}
              <motion.path
                d="M60 120 L60 300 Q60 350 110 350 L190 350 Q240 350 240 300 L240 120 Z"
                fill="white"
                stroke={currentColors.secondary}
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 2 }}
              />
              
              {/* Coffee liquid */}
              <motion.path
                d="M70 130 L70 290 Q70 330 110 330 L190 330 Q230 330 230 290 L230 130 Z"
                fill={currentColors.primary}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, delay: 2.5 }}
                style={{ transformOrigin: 'bottom' }}
              />

              {/* Cup handle */}
              <motion.path
                d="M240 180 Q280 180 280 220 Q280 260 240 260"
                fill="none"
                stroke={currentColors.secondary}
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 3 }}
              />

              {/* Steam effects */}
              {Array.from({ length: 5 }, (_, i) => (
                <motion.path
                  key={i}
                  d={`M${120 + i * 15} 80 Q${125 + i * 15} 60 ${120 + i * 15} 40 Q${115 + i * 15} 20 ${120 + i * 15} 0`}
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0], 
                    opacity: [0, 0.8, 0] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.2 + 3.5 
                  }}
                />
              ))}
            </motion.svg>

            {/* Floating particles around cup */}
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: currentColors.accent,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-2 font-medium">Descubre más</span>
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Time of day indicator */}
      <motion.div
        className="absolute top-8 left-8 bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 text-white font-medium"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        {timeOfDay === 'morning' && '🌅 Buenos días'}
        {timeOfDay === 'afternoon' && '☀️ Buenas tardes'}
        {timeOfDay === 'evening' && '🌙 Buenas noches'}
      </motion.div>
    </section>
  )
}

export default DiagonalHero
