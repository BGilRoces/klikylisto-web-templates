/* eslint-disable react/prop-types */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Snowflake, Star, Heart } from 'lucide-react'

const ElegantMenu = ({ onMenuClick }) => {
  const [activeCategory, setActiveCategory] = useState('hot')

  const categories = [
    { id: 'hot', name: 'Calientes', icon: Coffee },
    { id: 'cold', name: 'Fríos', icon: Snowflake },
    { id: 'specialty', name: 'Especiales', icon: Star },
    { id: 'desserts', name: 'Postres', icon: Heart }
  ]

  const menuItems = {
    hot: [
      { name: 'Espresso', description: 'Intenso y aromático, la base de todo buen café' },
      { name: 'Cappuccino', description: 'Equilibrio perfecto entre espresso y leche vaporizada' },
      { name: 'Latte', description: 'Suave y cremoso con arte en leche' },
      { name: 'Americano', description: 'Espresso alargado con agua caliente' },
      { name: 'Flat White', description: 'Intensidad del espresso con microespuma sedosa' },
      { name: 'Mocha', description: 'La combinación perfecta de café y chocolate' }
    ],
    cold: [
      { name: 'Cold Brew', description: 'Extracción fría durante 24 horas, suave y refrescante' },
      { name: 'Iced Latte', description: 'Nuestro latte clásico servido sobre hielo' },
      { name: 'Frappé', description: 'Bebida helada y cremosa perfecta para el verano' },
      { name: 'Affogato', description: 'Helado de vainilla "ahogado" en espresso caliente' },
      { name: 'Iced Americano', description: 'Americano servido sobre hielo con un toque cítrico' }
    ],
    specialty: [
      { name: 'Ethiopian Yirgacheffe', description: 'Notas florales y cítricas, cultivado en las montañas de Etiopía' },
      { name: 'Colombian Huila', description: 'Sabor balanceado con notas de caramelo y nuez' },
      { name: 'Jamaican Blue Mountain', description: 'Uno de los cafés más exclusivos del mundo' },
      { name: 'Hawaiian Kona', description: 'Suave y refinado, cultivado en suelo volcánico' }
    ],
    desserts: [
      { name: 'Tiramisú', description: 'Clásico italiano con café espresso y mascarpone' },
      { name: 'Cheesecake de Café', description: 'Cremoso cheesecake con infusión de café' },
      { name: 'Brownie de Chocolate', description: 'Húmedo brownie acompañado de helado de vainilla' },
      { name: 'Galletas Artesanales', description: 'Variedad de galletas horneadas diariamente' }
    ]
  }

  const getCategoryInfo = (categoryKey) => {
    const categoryMap = {
      hot: {
        name: 'Calientes',
        icon: Coffee,
        optionActive: 'bg-amber-800 text-white shadow-md',
        optionInactive: 'text-amber-900 hover:text-amber-700',
        badgeClass:
          'inline-flex items-center gap-1.5 bg-amber-800 text-white px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide'
      },
      cold: {
        name: 'Fríos',
        icon: Snowflake,
        optionActive: 'bg-sky-600 text-white shadow-md',
        optionInactive: 'text-sky-800 hover:text-sky-600',
        badgeClass:
          'inline-flex items-center gap-1.5 bg-sky-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide'
      },
      specialty: {
        name: 'Especiales',
        icon: Star,
        optionActive: 'bg-yellow-600 text-white shadow-md',
        optionInactive: 'text-yellow-800 hover:text-yellow-600',
        badgeClass:
          'inline-flex items-center gap-1.5 bg-yellow-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide'
      },
      desserts: {
        name: 'Postres',
        icon: Heart,
        optionActive: 'bg-stone-700 text-white shadow-md',
        optionInactive: 'text-stone-800 hover:text-stone-700',
        badgeClass:
          'inline-flex items-center gap-1.5 bg-stone-700 text-white px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide'
      }
    }

    return categoryMap[categoryKey] || categoryMap.hot
  }

  const currentCategory = categories.find((c) => c.id === activeCategory)

  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-amber-700 font-medium mb-4 tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            NUESTRO MENÚ
          </motion.p>
          
          <motion.h2
            className="text-4xl lg:text-6xl font-light text-stone-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Sabores que
            <br />
            <span className="font-bold text-amber-700">despiertan</span>
          </motion.h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 shadow-lg flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const info = getCategoryInfo(category.id)
                const isActive = activeCategory === category.id

                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${isActive ? info.optionActive : info.optionInactive}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </motion.button>
                )
              })}
            </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-amber-200 relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Decorative top border - always visible */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800" />
              
              {/* Content */}
              <div className="p-4 sm:p-5">
                {/* Header with badge */}
                <div className="flex items-start justify-between mb-3">
                  {currentCategory && (
                    <div className={getCategoryInfo(currentCategory.id).badgeClass}>
                      <currentCategory.icon className="w-3.5 h-3.5" />
                      <span>{currentCategory.name}</span>
                    </div>
                  )}
                  
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ rotate: 180 }}
                  >
                    <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-amber-700 mb-2 leading-tight">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Bottom accent line - always visible */}
                <div className="flex items-center gap-2 pt-3 mt-3 border-t border-amber-100">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                </div>
              </div>

              {/* Hover glow effect - always visible but intensifies on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-amber-500/10 to-amber-500/5 group-hover:from-amber-500/10 group-hover:via-amber-500/15 group-hover:to-amber-500/10 transition-all duration-500 pointer-events-none rounded-xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={onMenuClick}
            className="bg-amber-700 text-white px-8 py-4 rounded-full hover:bg-amber-800 transition-all duration-300 font-medium shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(180, 83, 9, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Menú Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ElegantMenu