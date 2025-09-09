import { motion } from 'framer-motion'
import { Wifi, Music, Camera, Book, Clock, Users } from 'lucide-react'

const ModernExperience = () => {
  const experiences = [
    {
      icon: Wifi,
      title: 'Espacio de Trabajo',
      description: 'WiFi de alta velocidad y ambiente perfecto para trabajar o estudiar.',
      image: 'workspace'
    },
    {
      icon: Music,
      title: 'Ambiente Musical',
      description: 'Playlist cuidadosamente seleccionada para cada momento del día.',
      image: 'music'
    },
    {
      icon: Camera,
      title: 'Instagrameable',
      description: 'Espacios únicos diseñados para capturar momentos perfectos.',
      image: 'photos'
    },
    {
      icon: Book,
      title: 'Biblioteca Cafetera',
      description: 'Colección de libros sobre café y cultura para explorar.',
      image: 'books'
    },
    {
      icon: Clock,
      title: 'Horarios Flexibles',
      description: 'Abierto desde temprano hasta tarde para adaptarnos a tu rutina.',
      image: 'hours'
    },
    {
      icon: Users,
      title: 'Eventos',
      description: 'Talleres de barista, catas y eventos comunitarios regulares.',
      image: 'events'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
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
            EXPERIENCIA COMPLETA
          </motion.p>
          
          <motion.h2
            className="text-4xl lg:text-6xl font-light text-stone-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Más que un café,
            <br />
            <span className="font-bold text-amber-700">tu segundo hogar</span>
          </motion.h2>

          <motion.p
            className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Hemos creado un espacio donde puedes trabajar, relajarte, socializar y disfrutar 
            del mejor café en un ambiente acogedor y moderno.
          </motion.p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-stone-50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-amber-50 group-hover:shadow-lg">
                <motion.div
                  className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <experience.icon className="w-6 h-6 text-amber-700" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {experience.title}
                </h3>
                
                <p className="text-stone-600 leading-relaxed">
                  {experience.description}
                </p>

                <motion.div
                  className="mt-6 text-amber-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Descubre más →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          className="bg-amber-50 rounded-3xl p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl text-amber-700 mb-6">&ldquo;</div>
            
            <blockquote className="text-2xl lg:text-3xl font-light text-stone-900 mb-6 leading-relaxed">
              Aroma se ha convertido en mi oficina favorita. El ambiente es perfecto, 
              el café excepcional y el equipo siempre te hace sentir como en casa.
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                <span className="text-amber-700 font-bold text-lg">M</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-stone-900">María González</div>
                <div className="text-stone-600">Escritora Freelance</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernExperience
