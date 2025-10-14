import { motion, useScroll, useTransform } from 'framer-motion'
import { Coffee, Heart, Leaf, Star, Users, Award } from 'lucide-react'

const OverlappingAbout = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 2000], [0, -300])
  const y2 = useTransform(scrollY, [0, 2000], [0, 150])
  const scale = useTransform(scrollY, [800, 1200], [0.8, 1])
  const opacity = useTransform(scrollY, [600, 1000], [0, 1])

  const stats = [
    { icon: Coffee, value: '10K+', label: 'Tazas servidas', color: '#8B4513' },
    { icon: Users, value: '2K+', label: 'Clientes felices', color: '#D2B48C' },
    { icon: Award, value: '15+', label: 'Premios ganados', color: '#A0522D' },
    { icon: Star, value: '4.9', label: 'Calificación', color: '#C19A6B' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Cada grano cuenta una historia de dedicación y amor por el café perfecto.',
      color: '#8B4513',
      position: { top: '20%', left: '10%' }
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Comprometidos con el medio ambiente y el comercio justo.',
      color: '#A0522D',
      position: { top: '60%', right: '15%' }
    },
    {
      icon: Star,
      title: 'Excelencia',
      description: 'La calidad no es negociable, solo lo mejor llega a tu taza.',
      color: '#D2B48C',
      position: { bottom: '20%', left: '20%' }
    }
  ]

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-stone-900 via-amber-900 to-stone-900 overflow-hidden">
      {/* Background layers with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-orange-500 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-500 to-transparent rounded-full blur-3xl"></div>
        </div>
      </motion.div>

      {/* Main content container */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center"
        style={{ scale, opacity }}
      >
        <div className="max-w-7xl mx-auto px-8 py-20">
          {/* Main title section - positioned asymmetrically */}
          <motion.div
            className="absolute top-20 right-20 max-w-md"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl font-black text-white mb-6"
              style={{
                textShadow: '3px 3px 0px #8B4513',
                transform: 'rotate(-2deg)',
                lineHeight: '0.9'
              }}
            >
              NUESTRA
              <br />
              <span className="text-amber-600">HISTORIA</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Desde 2018, hemos estado redefiniendo la experiencia del café, 
              creando un espacio donde la innovación se encuentra con la tradición.
            </motion.p>
          </motion.div>

          {/* Floating value cards */}
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="absolute bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-xs border border-white/20"
              style={value.position}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 5,
                boxShadow: `0 20px 40px ${value.color}30`
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: value.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}

          {/* Stats section - bottom overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black/80 to-transparent backdrop-blur-lg border-t border-white/20"
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto px-8 py-12">
              <div className="grid grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2"
                      style={{ 
                        borderColor: stat.color,
                        backgroundColor: `${stat.color}20`
                      }}
                      whileHover={{ 
                        backgroundColor: stat.color,
                        scale: 1.2 
                      }}
                    >
                      <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                    </motion.div>
                    
                    <motion.div
                      className="text-4xl font-black text-white mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + 0.3,
                        type: "spring" 
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Central logo/emblem */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-2xl border-4 border-white/20"
              animate={{ 
                boxShadow: [
                  '0 0 20px #FF6B35',
                  '0 0 40px #FF6B35',
                  '0 0 20px #FF6B35'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.2, rotate: 360 }}
            >
              <Coffee className="w-16 h-16 text-white" />
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-40 left-40"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-4 h-4 bg-orange-400 rounded-full opacity-60"></div>
          </motion.div>

          <motion.div
            className="absolute bottom-40 right-40"
            animate={{ 
              rotate: [360, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-6 h-6 bg-purple-400 rounded-full opacity-40"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default OverlappingAbout
