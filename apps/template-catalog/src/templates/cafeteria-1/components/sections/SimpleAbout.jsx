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
    <section id="about" className="py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          
          <motion.h2
            className="text-3xl lg:text-5xl font-light text-stone-900 mb-5"
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
            className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-amber-700" />
              </div>
              
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{value.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {[
              { number: '10K+', label: 'Tazas servidas' },
              { number: '500+', label: 'Clientes felices' },
              { number: '5', label: 'Años de experiencia' },
              { number: '15+', label: 'Variedades de café' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center min-w-[120px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-amber-700 mb-1">
                  {stat.number}
                </div>
                <div className="text-stone-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleAbout
