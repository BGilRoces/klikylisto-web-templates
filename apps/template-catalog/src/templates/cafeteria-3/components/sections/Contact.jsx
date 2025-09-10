/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      info: ["Av. Principal 123", "Centro, Ciudad"],
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: ["+1 (555) 123-4567", "WhatsApp disponible"],
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email",
      info: ["hola@aromacafe.com", "info@aromacafe.com"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Horarios",
      info: ["Lun - Vie: 7:00 - 22:00", "Sáb - Dom: 8:00 - 23:00"],
      color: "from-yellow-400 to-orange-500"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cream-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-64 h-64 border-2 border-coffee-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-coffee-400 rounded-full"></div>
        <div className="absolute top-20 right-1/4 w-32 h-32 border-2 border-coffee-400 rounded-full"></div>
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
            Mantente en Contacto
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-coffee-900 mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Conversemos Sobre
            <span className="text-coffee-600"> Café</span>
          </motion.h2>
          <motion.p
            className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            ¿Tienes preguntas, sugerencias o simplemente quieres charlar sobre café? 
            Nos encantaría escucharte y ser parte de tu experiencia cafetera.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-coffee-900 mb-2">
                      {item.title}
                    </h3>
                    {item.info.map((line, i) => (
                      <p key={i} className="text-coffee-700">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              className="mt-12 h-64 bg-gradient-to-br from-coffee-200 to-coffee-300 rounded-2xl shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Map pins */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg"
                style={{ transform: 'translate(-50%, -50%)' }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="h-4 w-4" />
              </motion.div>
              
              {/* Mock roads */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-coffee-600 transform -translate-y-1/2"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-coffee-600 transform -translate-x-1/2"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-coffee-800 font-semibold text-lg">
                  Visítanos en el Centro
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-coffee-100">
              {!isSubmitted ? (
                <>
                  <motion.h3
                    className="text-2xl font-display font-bold text-coffee-900 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Envíanos un Mensaje
                  </motion.h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-coffee-700 font-medium mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-coffee-200 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 transition-all duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-coffee-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-coffee-200 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-coffee-700 font-medium mb-2">
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-coffee-200 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 transition-all duration-300 resize-none"
                        placeholder="Cuéntanos qué tienes en mente..."
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full bg-coffee-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-coffee-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensaje</span>
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-coffee-900 mb-4">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-coffee-700">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
