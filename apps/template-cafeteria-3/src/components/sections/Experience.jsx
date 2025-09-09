/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Music, Wifi, BookOpen, Palette, Users } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      icon: Camera,
      title: "Espacio Instagrameable",
      description: "Rincones únicos diseñados para capturar momentos perfectos",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Music,
      title: "Ambiente Musical",
      description: "Playlist cuidadosamente seleccionada para cada momento del día",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: Wifi,
      title: "Zona de Trabajo",
      description: "WiFi de alta velocidad y espacios cómodos para trabajar",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Biblioteca de Café",
      description: "Libros sobre café y cultura cafetera para explorar",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Palette,
      title: "Arte Local",
      description: "Exposiciones rotativas de artistas locales",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Eventos Especiales",
      description: "Catas, talleres y eventos comunitarios regulares",
      color: "from-red-400 to-pink-500"
    }
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Escritora",
      content: "Aroma se ha convertido en mi oficina favorita. El ambiente es perfecto para la creatividad.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      role: "Fotógrafo",
      content: "Cada rincón de este lugar tiene una historia que contar. Perfecto para mis sesiones.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Estudiante",
      content: "El mejor lugar para estudiar. El café es increíble y el ambiente muy acogedor.",
      rating: 5
    }
  ]

  return (
    <section id="experience" className="py-20 bg-coffee-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-coffee-800 to-coffee-900"></div>
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-coffee-600 rounded-full opacity-10 blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-coffee-400 rounded-full opacity-10 blur-3xl"
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
            className="text-coffee-300 font-medium tracking-wider text-sm uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Experiencia Completa
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Más que una
            <span className="text-coffee-400"> Cafetería</span>
          </motion.h2>
          <motion.p
            className="text-xl text-coffee-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Un espacio diseñado para vivir experiencias únicas, donde cada visita 
            se convierte en un momento especial lleno de inspiración y conexión.
          </motion.p>
        </motion.div>

        {/* Experiences grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-coffee-800 rounded-2xl p-8 hover:bg-coffee-700 transition-all duration-300 relative overflow-hidden border border-coffee-600"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${experience.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${experience.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <experience.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold mb-4 relative z-10">
                  {experience.title}
                </h3>
                <p className="text-coffee-300 leading-relaxed relative z-10">
                  {experience.description}
                </p>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-coffee-600 opacity-0 group-hover:opacity-10 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-display font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Lo que Dicen Nuestros
            <span className="text-coffee-400"> Visitantes</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-coffee-800 rounded-2xl p-8 border border-coffee-600 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 text-6xl text-coffee-600 font-serif opacity-20">
                  &rdquo;
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-coffee-200 mb-6 italic leading-relaxed">
                    {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-coffee-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-coffee-400 text-coffee-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-coffee-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Vive la Experiencia Aroma
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
