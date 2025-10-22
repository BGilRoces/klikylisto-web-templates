import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Av. Ficticia 123, Centro Histórico',
      subtitle: 'Bs As, 06000'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+54 11 6238-7920',
      subtitle: 'Lun - Dom: 7:00 AM - 10:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'klikylisto@gmail.com',
      subtitle: 'Respuesta en 24 horas'
    },
    {
      icon: Clock,
      title: 'Horarios',
      value: 'Lun - Vie: 7:00 AM - 10:00 PM',
      subtitle: 'Sáb - Dom: 8:00 AM - 11:00 PM'
    }
  ]

  return (
    <section id="contact" className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-stone-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contacto
          </motion.h2>
          <motion.p
            className="text-lg text-stone-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ¿Tienes alguna pregunta? Nos encantaría escucharte
          </motion.p>
        </motion.div>

        {/* Main Content - Two equal columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <motion.div 
            className="space-y-5 h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white rounded-xl p-5 shadow-md border border-stone-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 10 }}
                  >
                    <info.icon className="w-6 h-6 text-amber-600" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-1">{info.title}</h3>
                    <p className="text-amber-700 font-medium text-sm">{info.value}</p>
                    <p className="text-stone-500 text-xs">{info.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form - Same height as left column */}
          <motion.div
            className="h-full flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-stone-200 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-stone-900 mb-5">Envíanos un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-stone-700 font-medium mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="Tu nombre"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-stone-700 font-medium mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="tu@email.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="flex-1 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-stone-700 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full flex-1 min-h-[100px] px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar mensaje
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section - Full width below */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-6 shadow-md border border-stone-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Encuéntranos</h3>
              <p className="text-stone-600">Visítanos en el corazón de la ciudad</p>
            </div>
            
            <div className="bg-stone-100 rounded-xl overflow-hidden h-80 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6845876831583!2d-99.13677632527373!3d19.433701981887896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92f5a4c8c7d%3A0x6f2d8a6e8a8a8a8a!2sZócalo%2C%20Centro%2C%20Cuauhtémoc%2C%2006000%20Ciudad%20de%20México%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1634567890123!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Aroma Café"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm
