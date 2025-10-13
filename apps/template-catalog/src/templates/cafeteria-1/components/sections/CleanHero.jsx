/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { ArrowDown, Play, Coffee } from 'lucide-react'

const CleanHero = ({ onMenuClick }) => {
  return (
  <section id="home" className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-stone-50 to-amber-50 py-12 sm:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-8 lg:gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-amber-700 font-medium mb-3 tracking-wider text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            CAFÉ ARTESANAL DE ESPECIALIDAD
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-5xl lg:text-7xl font-light text-stone-900 mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cada taza es una
            <br />
            <span className="font-bold text-amber-700">experiencia</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl text-stone-600 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Descubre el arte del café de especialidad en un ambiente que despierta todos tus sentidos.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={onMenuClick}
              className="bg-amber-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-amber-800 transition-all duration-300 font-medium text-sm sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(180, 83, 9, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar Menú
            </motion.button>

            <motion.button
              className="border-2 border-stone-300 text-stone-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:border-amber-700 hover:text-amber-700 transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              Ver Historia
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Coffee Cup SVG for Small/Medium Screens */}
          <div className="lg:hidden relative mx-auto w-56 sm:w-80 h-56 sm:h-80 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.svg
              width="200"
              height="200"
              viewBox="0 0 300 300"
              className="relative z-10 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {/* Coffee Cup */}
              <motion.circle
                cx="150"
                cy="180"
                r="80"
                fill="#8B4513"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
              
              <motion.circle
                cx="150"
                cy="170"
                r="65"
                fill="#D2B48C"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              />
              
              {/* Steam */}
              {Array.from({ length: 3 }, (_, i) => (
                <motion.path
                  key={i}
                  d={`M${135 + i * 15} 100 Q${140 + i * 15} 80 ${135 + i * 15} 60 Q${130 + i * 15} 40 ${135 + i * 15} 20`}
                  stroke="#D2B48C"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0], 
                    opacity: [0, 0.6, 0] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.3 + 1.6 
                  }}
                />
              ))}
            </motion.svg>

            {/* Floating Elements */}
            {Array.from({ length: 5 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-amber-400 rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${20 + i * 10}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2 + 2,
                }}
              />
            ))}
          </div>

          {/* Coffee Cup SVG for Large Screens */}
          <div className="hidden lg:flex relative mx-auto w-96 h-96 items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              className="relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {/* Coffee Cup */}
              <motion.circle
                cx="150"
                cy="180"
                r="80"
                fill="#8B4513"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
              
              <motion.circle
                cx="150"
                cy="170"
                r="65"
                fill="#D2B48C"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              />
              
              {/* Steam */}
              {Array.from({ length: 3 }, (_, i) => (
                <motion.path
                  key={i}
                  d={`M${135 + i * 15} 100 Q${140 + i * 15} 80 ${135 + i * 15} 60 Q${130 + i * 15} 40 ${135 + i * 15} 20`}
                  stroke="#D2B48C"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0], 
                    opacity: [0, 0.6, 0] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.3 + 1.6 
                  }}
                />
              ))}
            </motion.svg>

            {/* Floating Elements */}
            {Array.from({ length: 5 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-amber-400 rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${20 + i * 10}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2 + 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - centered relative to the content */}
      <motion.div
        className="w-full flex justify-center mt-6 sm:mt-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-stone-500"
        >
          <span className="text-xs sm:text-sm mb-2">Descubre más</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CleanHero
