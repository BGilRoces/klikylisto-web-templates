/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Globe, Clock, Users, Coffee, Sparkles, Award, Shield } from 'lucide-react'

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
      icon: Trophy,
      number: "4.9",
      title: "Calificación",
      description: "Excelencia comprobada"
    }
  ]

  const values = [
    {
      icon: Sparkles,
      title: "Pasión",
      description: "Cada grano cuenta una historia de dedicación y amor por el café perfecto."
    },
    {
      icon: Award,
      title: "Excelencia", 
      description: "La calidad no es negociable, solo lo mejor llega a tu taza."
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Creamos conexiones auténticas a través del café premium."
    },
    {
      icon: Shield,
      title: "Sostenibilidad",
      description: "Comprometidos con el medio ambiente y el comercio justo."
    }
  ]

  return (
    <section id="about" className="py-6 bg-gradient-to-br from-amber-900 via-orange-950 to-amber-900 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-600/20 to-amber-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-tl from-orange-400/25 to-amber-500/20 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-orange-500/20 to-amber-600/20 backdrop-blur-xl rounded-full border border-orange-300/30 mb-4 shadow-xl shadow-orange-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-orange-200 font-bold tracking-widest text-sm uppercase">Nuestra Historia</span>
          </motion.div>
          
          <motion.h2
            className="text-2xl md:text-3xl font-display font-black mb-3 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              Desde 2018, hemos estado redefiniendo la
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-300 via-amber-400 to-orange-300 bg-clip-text text-transparent">
              experiencia del café, creando un espacio donde la
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-300 via-amber-400 to-orange-300 bg-clip-text text-transparent">
              innovación se encuentra con la tradición.
            </span>
          </motion.h2>
        </motion.div>

        {/* Compact Achievements Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="relative bg-white/10 backdrop-blur-xl p-3 rounded-2xl border border-orange-300/30 shadow-xl shadow-orange-500/10 group-hover:shadow-orange-500/20 transition-all duration-300 h-full text-center">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                >
                  <achievement.icon className="w-5 h-5 text-white" />
                </motion.div>
                
                <motion.div
                  className="text-2xl font-black text-orange-300 mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  {achievement.number}
                </motion.div>
                
                <h3 className="text-sm font-bold text-white mb-1">
                  {achievement.title}
                </h3>
                
                <p className="text-orange-100/70 text-xs">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compact Values Section */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <div className="relative bg-white/5 backdrop-blur-md p-3 rounded-xl border border-orange-300/20 group-hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400/20 to-amber-500/20 rounded-lg flex items-center justify-center mb-3">
                  <value.icon className="w-4 h-4 text-orange-300" />
                </div>
                
                <h4 className="text-white font-semibold mb-2 text-sm">
                  {value.title}
                </h4>
                
                <p className="text-orange-100/60 text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About