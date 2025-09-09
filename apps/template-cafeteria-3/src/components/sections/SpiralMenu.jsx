import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Snowflake, Leaf, Zap, Heart, Star } from 'lucide-react'

const SpiralMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('hot')
  const [hoveredItem, setHoveredItem] = useState(null)

  const categories = [
    { id: 'hot', name: 'Calientes', icon: Flame, color: '#8B4513' },
    { id: 'cold', name: 'Fríos', icon: Snowflake, color: '#708090' },
    { id: 'specialty', name: 'Especiales', icon: Star, color: '#D2B48C' },
    { id: 'healthy', name: 'Saludables', icon: Leaf, color: '#A0522D' }
  ]

  const menuItems = {
    hot: [
      { name: 'Espresso Dimensional', price: '$4.50', description: 'Intenso y equilibrado', intensity: 5, icon: Zap },
      { name: 'Cappuccino Cósmico', price: '$5.20', description: 'Cremoso y aromático', intensity: 3, icon: Heart },
      { name: 'Latte Galáctico', price: '$5.80', description: 'Suave y delicado', intensity: 2, icon: Star },
      { name: 'Americano Infinito', price: '$4.00', description: 'Puro y directo', intensity: 4, icon: Flame },
      { name: 'Mocha Nebulosa', price: '$6.20', description: 'Chocolate y café', intensity: 3, icon: Heart },
      { name: 'Macchiato Estelar', price: '$5.50', description: 'Perfecto equilibrio', intensity: 4, icon: Zap }
    ],
    cold: [
      { name: 'Cold Brew Dimensional', price: '$5.50', description: 'Extracción fría perfecta', intensity: 4, icon: Snowflake },
      { name: 'Frappé Cósmico', price: '$6.80', description: 'Refrescante y cremoso', intensity: 2, icon: Star },
      { name: 'Iced Latte Galáctico', price: '$6.20', description: 'Frío y suave', intensity: 2, icon: Heart },
      { name: 'Affogato Estelar', price: '$7.50', description: 'Helado y espresso', intensity: 5, icon: Flame },
      { name: 'Smoothie Nebulosa', price: '$7.20', description: 'Frutas y café', intensity: 1, icon: Leaf }
    ],
    specialty: [
      { name: 'Café de Origen Único', price: '$8.50', description: 'Granos selectos', intensity: 5, icon: Star },
      { name: 'Golden Turmeric Latte', price: '$6.80', description: 'Antiinflamatorio', intensity: 1, icon: Heart },
      { name: 'Nitro Coffee', price: '$7.20', description: 'Textura sedosa', intensity: 4, icon: Zap },
      { name: 'Cascara Latte', price: '$6.50', description: 'Cáscara de café', intensity: 2, icon: Leaf }
    ],
    healthy: [
      { name: 'Matcha Dimensional', price: '$6.20', description: 'Antioxidantes naturales', intensity: 2, icon: Leaf },
      { name: 'Chai Cósmico', price: '$5.80', description: 'Especias aromáticas', intensity: 1, icon: Heart },
      { name: 'Green Coffee', price: '$5.50', description: 'Sin tostar, natural', intensity: 1, icon: Leaf },
      { name: 'Protein Coffee', price: '$7.50', description: 'Energía y proteína', intensity: 3, icon: Zap }
    ]
  }

  const getSpiralPosition = (index, total) => {
    const angle = (index / total) * 4 * Math.PI // 2 full spirals
    const radius = 50 + (index / total) * 200 // Expanding radius
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    return { x, y, angle }
  }

  return (
    <section id="menu" className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-900 to-stone-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-radial from-blue-400/20 to-transparent rounded-full"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-radial from-purple-400/20 to-transparent rounded-full"
          animate={{ scale: [1.5, 1, 1.5], rotate: [360, 180, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Title */}
        <motion.h2
          className="text-6xl font-black text-white mb-12 text-center"
          style={{
            textShadow: '3px 3px 0px #8B4513',
            transform: 'rotate(-1deg)'
          }}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          NUESTRO<br />
          <span className="text-amber-700">MENÚ</span>
        </motion.h2>

        {/* Category selector */}
        <motion.div
          className="flex gap-4 mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-white text-black shadow-2xl'
                  : 'bg-white/10 text-white border border-white/30 backdrop-blur-lg'
              }`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Spiral menu items */}
        <div className="relative w-full max-w-4xl h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: -180 }}
              transition={{ duration: 0.8 }}
            >
              {menuItems[selectedCategory].map((item, index) => {
                const position = getSpiralPosition(index, menuItems[selectedCategory].length)
                const category = categories.find(cat => cat.id === selectedCategory)
                
                return (
                  <motion.div
                    key={`${selectedCategory}-${index}`}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${position.x}px)`,
                      top: `calc(50% + ${position.y}px)`,
                    }}
                    initial={{ 
                      opacity: 0, 
                      scale: 0,
                      rotate: position.angle * (180 / Math.PI)
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: hoveredItem === index ? 1.1 : 1,
                      rotate: 0
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      zIndex: 10
                    }}
                    onHoverStart={() => setHoveredItem(index)}
                    onHoverEnd={() => setHoveredItem(null)}
                  >
                    <motion.div
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 min-w-72 border border-white/20 cursor-pointer"
                      style={{
                        boxShadow: hoveredItem === index 
                          ? `0 20px 40px ${category.color}50` 
                          : '0 10px 20px rgba(0,0,0,0.3)'
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <motion.div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: category.color }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <motion.div
                          className="text-2xl font-black text-white"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {item.price}
                        </motion.div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                      
                      {/* Intensity indicator */}
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-400 mr-2">Intensidad:</span>
                        {Array.from({ length: 5 }, (_, i) => (
                          <motion.div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < item.intensity ? 'bg-orange-400' : 'bg-gray-600'
                            }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 + i * 0.05 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Center circle */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center border-4 border-white/30"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {(() => {
                const CategoryIcon = categories.find(cat => cat.id === selectedCategory)?.icon
                return CategoryIcon ? <CategoryIcon className="w-8 h-8 text-white" /> : null
              })()}
            </motion.div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full text-lg shadow-2xl"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.5)' 
            }}
            whileTap={{ scale: 0.95 }}
          >
            PERSONALIZAR MI ORDEN
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default SpiralMenu
