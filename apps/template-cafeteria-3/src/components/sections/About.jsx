/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Award, Users, Leaf } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Pasión por el Café",
      description: "Cada grano es seleccionado cuidadosamente y tostado con amor para crear la experiencia perfecta."
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Trabajamos solo con los mejores proveedores para garantizar la más alta calidad en cada taza."
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Somos más que una cafetería, somos un punto de encuentro para amantes del buen café."
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Comprometidos con prácticas sustentables y comercio justo con nuestros productores."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border border-coffee-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-coffee-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-coffee-300 rounded-full"></div>
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
            Nuestra Historia
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-coffee-900 mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Donde Nace la
            <span className="text-coffee-600"> Magia</span>
          </motion.h2>
          <motion.p
            className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Desde 2020, hemos sido pioneros en crear experiencias de café únicas, 
            combinando técnicas artesanales tradicionales con innovación moderna para 
            despertar todos tus sentidos.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main image placeholder - you can replace with actual image */}
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-coffee-200 to-coffee-400 rounded-2xl shadow-2xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Coffee plantation silhouette effect */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-coffee-800 to-transparent"></div>
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-coffee-700 rounded-full opacity-60"></div>
                <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-coffee-600 rounded-full opacity-70"></div>
                <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-coffee-800 rounded-full opacity-50"></div>
                
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-6xl font-display font-bold mb-2">2020</div>
                    <div className="text-lg font-medium">Año de Fundación</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating stats */}
              <motion.div
                className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-coffee-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-coffee-600">1000+</div>
                <div className="text-coffee-700 font-medium">Tazas Servidas</div>
                <div className="text-coffee-700 font-medium">Diariamente</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 bg-coffee-600 text-white rounded-2xl shadow-xl p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold">25+</div>
                <div className="font-medium">Variedades</div>
                <div className="font-medium">de Café</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-start space-x-4 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-coffee-100 rounded-2xl flex items-center justify-center group-hover:bg-coffee-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="h-8 w-8 text-coffee-600 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-coffee-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-coffee-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-coffee-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-coffee-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Conoce Nuestro Proceso
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About
