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
      { name: 'Espresso', price: '$3.50', description: 'Intenso y aromático, la base de todo buen café' },
      { name: 'Cappuccino', price: '$4.20', description: 'Equilibrio perfecto entre espresso y leche vaporizada' },
      { name: 'Latte', price: '$4.80', description: 'Suave y cremoso con arte en leche' },
      { name: 'Americano', price: '$3.80', description: 'Espresso alargado con agua caliente' },
      { name: 'Flat White', price: '$4.50', description: 'Intensidad del espresso con microespuma sedosa' },
      { name: 'Mocha', price: '$5.20', description: 'La combinación perfecta de café y chocolate' }
    ],
    cold: [
      { name: 'Cold Brew', price: '$4.50', description: 'Extracción fría durante 24 horas, suave y refrescante' },
      { name: 'Iced Latte', price: '$4.80', description: 'Nuestro latte clásico servido sobre hielo' },
      { name: 'Frappé', price: '$5.50', description: 'Bebida helada y cremosa perfecta para el verano' },
      { name: 'Affogato', price: '$6.20', description: 'Helado de vainilla "ahogado" en espresso caliente' },
      { name: 'Iced Americano', price: '$3.80', description: 'Americano servido sobre hielo con un toque cítrico' }
    ],
    specialty: [
      { name: 'Ethiopian Yirgacheffe', price: '$7.50', description: 'Notas florales y cítricas, cultivado en las montañas de Etiopía' },
      { name: 'Colombian Huila', price: '$6.80', description: 'Sabor balanceado con notas de caramelo y nuez' },
      { name: 'Jamaican Blue Mountain', price: '$12.00', description: 'Uno de los cafés más exclusivos del mundo' },
      { name: 'Hawaiian Kona', price: '$10.50', description: 'Suave y refinado, cultivado en suelo volcánico' }
    ],
    desserts: [
      { name: 'Tiramisú', price: '$6.50', description: 'Clásico italiano con café espresso y mascarpone' },
      { name: 'Cheesecake de Café', price: '$5.80', description: 'Cremoso cheesecake con infusión de café' },
      { name: 'Brownie de Chocolate', price: '$4.50', description: 'Húmedo brownie acompañado de helado de vainilla' },
      { name: 'Galletas Artesanales', price: '$3.20', description: 'Variedad de galletas horneadas diariamente' }
    ]
  }

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
          <div className="bg-white rounded-xl p-4 shadow-lg">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-amber-700 text-white shadow-md'
                    : 'text-stone-600 hover:text-amber-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-stone-900 group-hover:text-amber-700 transition-colors duration-300">
                  {item.name}
                </h3>
                <span className="text-2xl font-bold text-amber-700">{item.price}</span>
              </div>
              
              <p className="text-stone-600 leading-relaxed">{item.description}</p>
              
              <motion.button
                className="mt-4 text-amber-700 font-medium hover:text-amber-800 transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                Agregar al pedido →
              </motion.button>
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
