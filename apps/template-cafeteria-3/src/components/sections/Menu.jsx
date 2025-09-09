/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Thermometer, Clock, Star } from 'lucide-react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('signature')

  const categories = [
    { id: 'signature', name: 'Signature', icon: Star },
    { id: 'espresso', name: 'Espresso', icon: Coffee },
    { id: 'cold', name: 'Fríos', icon: Thermometer },
    { id: 'seasonal', name: 'Temporada', icon: Clock },
  ]

  const menuItems = {
    signature: [
      {
        name: "Aroma Especial",
        description: "Nuestra mezcla secreta con notas de chocolate y vainilla",
        price: "$8.50",
        temperature: "hot",
        popular: true
      },
      {
        name: "Golden Latte",
        description: "Espresso con leche dorada, cúrcuma y miel de abeja",
        price: "$9.00",
        temperature: "hot",
        popular: false
      },
      {
        name: "Cloud Nine",
        description: "Café con espuma de lavanda y toque de bergamota",
        price: "$9.50",
        temperature: "hot",
        popular: true
      }
    ],
    espresso: [
      {
        name: "Espresso Clásico",
        description: "Shot perfecto de espresso con crema dorada",
        price: "$4.50",
        temperature: "hot",
        popular: false
      },
      {
        name: "Americano",
        description: "Espresso alargado con agua caliente",
        price: "$5.50",
        temperature: "hot",
        popular: true
      },
      {
        name: "Cortado",
        description: "Espresso con un toque de leche vaporizada",
        price: "$6.00",
        temperature: "hot",
        popular: false
      }
    ],
    cold: [
      {
        name: "Cold Brew Nitro",
        description: "Café frío con nitrógeno para una textura cremosa",
        price: "$7.50",
        temperature: "cold",
        popular: true
      },
      {
        name: "Iced Caramel Swirl",
        description: "Café helado con remolino de caramelo artesanal",
        price: "$8.00",
        temperature: "cold",
        popular: false
      },
      {
        name: "Frappé Chocolate",
        description: "Mezcla helada de café, chocolate y crema batida",
        price: "$8.50",
        temperature: "cold",
        popular: true
      }
    ],
    seasonal: [
      {
        name: "Pumpkin Spice Latte",
        description: "Calabaza, canela y especias con espresso cremoso",
        price: "$9.50",
        temperature: "hot",
        popular: true
      },
      {
        name: "Winter Berry",
        description: "Café con frutos rojos y un toque de vainilla",
        price: "$9.00",
        temperature: "hot",
        popular: false
      },
      {
        name: "Spring Blossom",
        description: "Café floral con notas de jazmín y miel",
        price: "$9.50",
        temperature: "hot",
        popular: false
      }
    ]
  }

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-cream-50 to-coffee-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-coffee-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 border-2 border-coffee-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-coffee-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-coffee-500 font-medium tracking-wider text-sm uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Nuestro Menú
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-coffee-900 mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Sabores que
            <span className="text-coffee-600"> Inspiran</span>
          </motion.h2>
          <motion.p
            className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Cada bebida es una creación única, preparada con ingredientes premium 
            y técnicas artesanales que despiertan tus sentidos.
          </motion.p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-coffee-600 text-white shadow-lg'
                  : 'bg-white text-coffee-700 hover:bg-coffee-100 border border-coffee-200'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu items */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              {/* Item image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-coffee-200 to-coffee-300 overflow-hidden">
                {item.popular && (
                  <motion.div
                    className="absolute top-4 right-4 bg-coffee-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Popular
                  </motion.div>
                )}
                
                {/* Temperature indicator */}
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center ${
                  item.temperature === 'hot' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                }`}>
                  <Thermometer className="h-6 w-6" />
                </div>

                {/* Coffee cup illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-32 bg-coffee-100 rounded-lg relative shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-2 bg-coffee-700 rounded-lg"></div>
                    <div className="absolute top-2 left-2 right-2 h-4 bg-cream-200 rounded-lg"></div>
                    {/* Handle */}
                    <div className="absolute right-0 top-1/2 w-4 h-8 border-4 border-coffee-200 rounded-r-lg"></div>
                  </motion.div>
                </div>
              </div>

              {/* Item content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <motion.h3
                    className="text-xl font-display font-semibold text-coffee-900 group-hover:text-coffee-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.h3>
                  <span className="text-2xl font-bold text-coffee-600">{item.price}</span>
                </div>
                <p className="text-coffee-700 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <motion.button
                  className="w-full bg-coffee-100 text-coffee-700 py-3 rounded-xl font-medium hover:bg-coffee-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agregar al Carrito
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-coffee-700 mb-6 text-lg">
            ¿No encuentras lo que buscas? Nuestros baristas pueden crear algo especial para ti.
          </p>
          <motion.button
            className="bg-coffee-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-coffee-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Bebida Personalizada
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu
