/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Users, Coffee, Award, Shield, Heart, Leaf, Star } from 'lucide-react'

const About = () => {
  const achievements = [
    {
      icon: Coffee,
      number: "10K+",
      title: "Tazas servidas",
      description: "Cada una perfecta"
    },
    {
      icon: Users,
      number: "2K+",
      title: "Clientes felices", 
      description: "Sonrisas garantizadas"
    },
    {
      icon: Award,
      number: "15+",
      title: "Premios ganados",
      description: "Reconocimiento mundial"
    },
    {
      icon: Star,
      number: "4.9",
      title: "Calificación",
      description: "Excelencia comprobada"
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Pasión",
      description: "Cada grano cuenta una historia de dedicación y amor por el café perfecto."
    },
    {
      icon: Award,
      title: "Excelencia", 
      description: "La calidad no es negociable, solo lo mejor llega a tu taza."
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Comercio justo y prácticas responsables con el medio ambiente."
    },
    {
      icon: Shield,
      title: "Confianza",
      description: "Transparencia y consistencia que nuestros clientes valoran."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-amber-200 mb-4">
            <Coffee className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Nuestra Historia</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-neutral-900 mb-4">
            Más que café, una
            <span className="block mt-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              experiencia única
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Desde 2010, hemos estado perfeccionando el arte del café. Cada taza es el resultado 
            de años de experiencia, pasión y dedicación.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 hover:border-amber-300 transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/50"
            >
              <achievement.icon className="w-10 h-10 text-amber-600 mb-4" strokeWidth={1.5} />
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-1">
                {achievement.number}
              </div>
              <div className="text-sm text-neutral-600 font-medium">{achievement.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 hover:border-amber-300 transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{value.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About