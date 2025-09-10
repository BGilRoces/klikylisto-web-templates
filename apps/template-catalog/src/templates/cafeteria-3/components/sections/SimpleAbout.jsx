import { motion } from 'framer-motion'
import { Heart, Leaf, Award, Users } from 'lucide-react'

const SimpleAbout = () => {
  const values = [
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Cada grano es seleccionado con amor y dedicación para ofrecerte la mejor experiencia.'
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Comprometidos con el comercio justo y prácticas amigables con el medio ambiente.'
    },
    {
      icon: Award,
      title: 'Calidad',
      description: 'Solo trabajamos con los mejores granos de café de especialidad del mundo.'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Creamos un espacio donde las personas se conectan a través del amor por el café.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
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
            NUESTRA HISTORIA
          </motion.p>
          
          <motion.h2
            className="text-4xl lg:text-6xl font-light text-stone-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Más que café,
            <br />
            <span className="font-bold text-amber-700">una experiencia</span>
          </motion.h2>

          <motion.p
            className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Desde 2018, hemos estado dedicados a crear momentos únicos a través del arte del café. 
            Cada taza cuenta una historia de origen, proceso y pasión.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <value.icon className="w-8 h-8 text-amber-700" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-stone-900 mb-3">{value.title}</h3>
              <p className="text-stone-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: '10K+', label: 'Tazas servidas' },
            { number: '500+', label: 'Clientes felices' },
            { number: '5', label: 'Años de experiencia' },
            { number: '15+', label: 'Variedades de café' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl lg:text-5xl font-bold text-amber-700 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-stone-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleAbout
