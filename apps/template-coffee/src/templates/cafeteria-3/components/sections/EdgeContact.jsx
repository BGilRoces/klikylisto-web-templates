import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react'

const EdgeContact = () => {
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
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Av. Artesanal 123, Distrito Cafetero',
      color: '#8B4513'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+1 (555) 123-CAFÉ',
      color: '#A0522D'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hola@cafeartesanal.com',
      color: '#D2B48C'
    },
    {
      icon: Clock,
      title: 'Horarios',
      value: 'Lun - Dom: 6:00 AM - 11:00 PM',
      color: '#C19A6B'
    }
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', color: '#E4405F' },
    { icon: Facebook, href: '#', color: '#1877F2' },
    { icon: Twitter, href: '#', color: '#1DA1F2' }
  ]

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-900 to-stone-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-cyan-500 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 2 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left side - Contact info sliding from left */}
        <motion.div
          className="w-1/2 p-16 flex flex-col justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl font-black text-white mb-8"
            style={{
              textShadow: '3px 3px 0px #8B4513',
              transform: 'rotate(-2deg)',
              lineHeight: '0.8'
            }}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: -2 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            CONECTA
            <br />
            <span className="text-amber-600">CON NOSOTROS</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 mb-12 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Únete a nuestra comunidad cafetera artesanal y descubre 
            sabores que despiertan todos tus sentidos.
          </motion.p>

          {/* Contact info cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02, 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: `0 10px 30px ${info.color}30`
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: info.color }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <div>
                  <h4 className="text-lg font-bold text-white">{info.title}</h4>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20"
                style={{ backgroundColor: `${social.color}20` }}
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: social.color,
                  boxShadow: `0 10px 20px ${social.color}50`
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 2 + index * 0.1, type: "spring" }}
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Contact form sliding from right */}
        <motion.div
          className="w-1/2 p-16 flex items-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            initial={{ scale: 0.8, rotate: 5 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              Envíanos un mensaje
            </motion.h3>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                viewport={{ once: true }}
              >
                <textarea
                  placeholder="Tu mensaje"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-2xl disabled:opacity-50"
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.02,
                  boxShadow: isSubmitting ? undefined : '0 20px 40px rgba(255, 107, 53, 0.4)'
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>

      {/* Floating elements coming from edges */}
      <motion.div
        className="absolute top-10 left-10 w-4 h-4 bg-orange-400 rounded-full"
        initial={{ x: -50, y: -50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          x: { duration: 2, delay: 2.5 },
          y: { duration: 3, repeat: Infinity },
          scale: { duration: 3, repeat: Infinity }
        }}
        viewport={{ once: true }}
      />

      <motion.div
        className="absolute top-20 right-10 w-3 h-3 bg-cyan-400 rounded-full"
        initial={{ x: 50, y: -50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        animate={{
          x: [0, 15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          initial: { duration: 2, delay: 3 },
          x: { duration: 4, repeat: Infinity },
          scale: { duration: 4, repeat: Infinity }
        }}
        viewport={{ once: true }}
      />

      <motion.div
        className="absolute bottom-10 left-20 w-5 h-5 bg-purple-400 rounded-full"
        initial={{ x: -50, y: 50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{
          initial: { duration: 2, delay: 3.5 },
          rotate: { duration: 5, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity }
        }}
        viewport={{ once: true }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 bg-yellow-400 rounded-full"
        initial={{ x: 50, y: 50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{
          initial: { duration: 2, delay: 4 },
          animate: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
        }}
        viewport={{ once: true }}
      />
    </section>
  )
}

export default EdgeContact
