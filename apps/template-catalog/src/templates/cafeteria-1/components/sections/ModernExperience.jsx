import { motion } from 'framer-motion'
import { Wifi, Music, Camera, Book } from 'lucide-react'

const ModernExperience = () => {
  const experiences = [
    {
      icon: Wifi,
      title: 'Espacio de Trabajo',
      description: 'WiFi de alta velocidad y ambiente perfecto para trabajar o estudiar.'
    },
    {
      icon: Music,
      title: 'Ambiente Musical',
      description: 'Playlist cuidadosamente seleccionada para cada momento del día.'
    },
    {
      icon: Camera,
      title: 'Instagrameable',
      description: 'Espacios únicos diseñados para capturar momentos perfectos.'
    },
    {
      icon: Book,
      title: 'Biblioteca Cafetera',
      description: 'Colección de libros sobre café y cultura para explorar.'
    }
  ]

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
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
            className="text-4xl lg:text-5xl font-light text-stone-900 mb-6"
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
            className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-stone-50 rounded-xl p-6 h-full hover:bg-amber-50 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <experience.icon className="w-6 h-6 text-amber-700" />
                </div>
                
                <h3 className="text-lg font-semibold text-stone-900 mb-3">
                  {experience.title}
                </h3>
                
                <p className="text-stone-600 leading-relaxed text-sm">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          className="bg-amber-50 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl text-amber-700 mb-4">&ldquo;</div>
            
            <blockquote className="text-xl font-light text-stone-900 mb-6 leading-relaxed">
              Aroma se ha convertido en mi oficina favorita. El ambiente es perfecto, 
              el café excepcional y el equipo siempre te hace sentir como en casa.
            </blockquote>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                <span className="text-amber-700 font-bold">M</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-stone-900 text-sm">María González</div>
                <div className="text-stone-600 text-sm">Escritora Freelance</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernExperience
