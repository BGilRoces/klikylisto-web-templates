import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Send, User, Mail, MessageSquare, CheckCircle, DollarSign } from 'lucide-react'
import Container from '../layout/Container'

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    template: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', template: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact-form" className="py-12 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          {/* Background con gradiente más moderno */}
          <div className="relative bg-gradient-to-br from-gray-900 via-amber-900 to-stone-900 rounded-3xl overflow-hidden">
            
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0">
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-30"></div>
              
              {/* Elementos flotantes */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-gradient-to-br from-yellow-400/15 to-amber-500/15 rounded-full blur-2xl"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative px-8 md:px-12 py-8">
              {/* Grid de 2 columnas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                
                {/* Columna Izquierda - Contenido */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                  >
                    Creemos
                    <span className="block text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text">
                      Tu Sitio Web
                    </span>
                  </motion.h3>
                  <div className='flex flex-row'>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="text-lg text-gray-300 mb-6 leading-relaxed"
                    >
                      Te ayudamos a crear la presencia digital perfecta.
                      <div className='flex flex-row'>
                        <span className="text-amber-300 font-semibold"> Respuesta garantizada en 24 horas.</span>
                      </div>
                    </motion.p>
                  </div>

                  {/* Features compactos */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle size={16} className="text-green-400" />
                      </div>
                      <p className="text-gray-300">Consulta gratuita y sin compromiso</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                        <DollarSign size={16} className="text-amber-400" />
                      </div>
                      <p className="text-gray-300">Precios súper competitivos</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle size={16} className="text-blue-400" />
                      </div>
                      <p className="text-gray-300">Entrega en tiempo récord</p>
                    </div>
                  </motion.div>
                </div>

                {/* Columna Derecha - Formulario */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label className="block text-white font-medium mb-2">
                            <User size={16} className="inline mr-2" />
                            Nombre completo
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors"
                            placeholder="Juan Pérez"
                          />
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2">
                            <Mail size={16} className="inline mr-2" />
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors"
                            placeholder="tu@email.com"
                          />
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-3">
                            <Coffee size={16} className="inline mr-2" />
                            ¿Cuál template te gusta más?
                          </label>
                          <div className="grid grid-cols-3 gap-3 mb-4">
                            {['Artesanal', 'Moderno', 'Boutique'].map((template, index) => (
                              <motion.button
                                key={template}
                                type="button"
                                onClick={() => setFormData({...formData, template})}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-4 py-3 rounded-xl border-2 transition-all duration-300 text-sm font-medium ${
                                  formData.template === template
                                    ? 'border-amber-400 bg-amber-400/20 text-amber-300'
                                    : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10'
                                }`}
                              >
                                {template}
                              </motion.button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2">
                            <MessageSquare size={16} className="inline mr-2" />
                            Comentarios adicionales (opcional)
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                            placeholder="Cuéntanos algo especial sobre tu cafetería o algún requerimiento específico..."
                          />
                        </div>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-6 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                              Enviando...
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <Send size={20} />
                              Enviar Mensaje
                            </div>
                          )}
                        </motion.button>
                      </form>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle size={32} className="text-green-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
                        <p className="text-gray-300">Te contactaremos pronto para comenzar tu proyecto.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTASection
