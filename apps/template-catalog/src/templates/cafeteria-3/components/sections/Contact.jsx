/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, Calendar, Star, Coffee } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'consulta'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const contactMethods = [
    {
      icon: MapPin,
      title: "Ubicación Premium",
      primary: "Av. Gourmet 123, Plaza Premium",
      secondary: "Centro Empresarial, Madrid",
      action: "Ver en Mapa",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Phone,
      title: "Contacto Directo",
      primary: "+34 91 123 4567",
      secondary: "WhatsApp & Llamadas",
      action: "Llamar Ahora",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Mail,
      title: "Email Premium",
      primary: "hola@aroma.premium",
      secondary: "Respuesta en 2 horas",
      action: "Enviar Email",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Calendar,
      title: "Reservas VIP",
      primary: "Experiencias Exclusivas",
      secondary: "Catas privadas disponibles",
      action: "Reservar",
      gradient: "from-purple-500 to-pink-600"
    }
  ]

  const serviceOptions = [
    { value: 'consulta', label: 'Consulta General' },
    { value: 'reserva', label: 'Reserva Mesa Premium' },
    { value: 'evento', label: 'Evento Privado' },
    { value: 'cata', label: 'Cata Personalizada' },
    { value: 'catering', label: 'Servicio Catering' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '', service: 'consulta' })
    }, 4000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-6 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-600/20 to-orange-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-amber-400/25 to-yellow-500/20 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1.5 bg-amber-500/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-xl rounded-full border border-amber-300/30 mb-10 shadow-2xl shadow-amber-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              📞
            </motion.div>
            <span className="text-amber-200 font-bold tracking-widest text-sm uppercase">Conecta con Nosotros</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.div>
          </motion.div>
          
          <motion.h2
            className="text-2xl md:text-3xl font-display font-black mb-3 leading-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              Conversemos
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Sobre Café
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-amber-100/90 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            ¿Tienes preguntas, quieres reservar una experiencia premium o simplemente deseas charlar sobre el mundo del café? 
            Estamos aquí para crear momentos excepcionales contigo.
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative bg-white/10 backdrop-blur-xl p-3 rounded-3xl border border-amber-300/30 shadow-2xl shadow-amber-500/10 group-hover:shadow-amber-500/20 transition-all duration-500 h-full">
                <motion.div
                  className={`w-10 h-10 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mb-3 shadow-xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <method.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {method.title}
                </h3>
                
                <p className="text-amber-200 font-semibold mb-1">
                  {method.primary}
                </p>
                
                <p className="text-amber-100/70 text-sm mb-4">
                  {method.secondary}
                </p>
                
                <motion.button
                  className="w-full bg-white/10 hover:bg-white/20 text-amber-200 py-2 px-4 rounded-xl font-medium transition-all duration-300 border border-amber-300/30 hover:border-amber-300/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {method.action}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-amber-300/30 shadow-2xl shadow-amber-500/10">
              <h3 className="text-lg font-display font-bold text-white mb-3">
                Envíanos un <span className="text-amber-400">Mensaje Premium</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-amber-200 font-medium mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-white/10 backdrop-blur-md border border-amber-300/30 rounded-xl text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-200 font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/10 backdrop-blur-md border border-amber-300/30 rounded-xl text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300"
                      placeholder="+34 XXX XXX XXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-200 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/10 backdrop-blur-md border border-amber-300/30 rounded-xl text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-amber-200 font-medium mb-2">Tipo de Servicio</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/10 backdrop-blur-md border border-amber-300/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-slate-800 text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-amber-200 font-medium mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full p-3 bg-white/10 backdrop-blur-md border border-amber-300/30 rounded-xl text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu consulta o reserva..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 border border-amber-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Enviando...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center justify-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      ¡Mensaje Enviado!
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Send className="w-5 h-5" />
                      Enviar Mensaje Premium
                    </div>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Business Hours & Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {/* Hours */}
            <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-amber-300/30 shadow-2xl shadow-amber-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Horarios Premium
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { day: 'Lunes - Viernes', hours: '6:00 AM - 10:00 PM', special: 'Rush matutino: 7-9 AM' },
                  { day: 'Sábados', hours: '7:00 AM - 11:00 PM', special: 'Catas especiales: 4-6 PM' },
                  { day: 'Domingos', hours: '8:00 AM - 9:00 PM', special: 'Brunch premium disponible' }
                ].map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    className="flex justify-between items-start p-4 bg-white/5 rounded-2xl border border-amber-300/20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div>
                      <div className="text-amber-200 font-semibold">{schedule.day}</div>
                      <div className="text-amber-100/70 text-sm">{schedule.special}</div>
                    </div>
                    <div className="text-white font-bold">{schedule.hours}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-amber-300/30 shadow-2xl shadow-amber-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  ¿Por Qué Elegirnos?
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  'Respuesta garantizada en menos de 2 horas',
                  'Experiencias personalizadas únicas',
                  'Equipo de expertos en café de especialidad',
                  'Eventos y catas privadas exclusivas',
                  'Atención al cliente premium 24/7'
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-amber-100/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact