import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Wifi, Music, Camera, Book, Palette, Users, Clock, Shield } from 'lucide-react'

const FluidExperience = () => {
  const [activeService, setActiveService] = useState(0)
  const { scrollY } = useScroll()
  const x1 = useTransform(scrollY, [0, 3000], [0, -400])
  const x2 = useTransform(scrollY, [0, 3000], [0, 300])

  const services = [
    {
      icon: Wifi,
      title: 'Conexión Cuántica',
      subtitle: 'WiFi Ultra-rápido',
      description: 'Internet de fibra óptica para trabajar sin límites desde cualquier dimensión digital.',
      color: '#00D4AA',
      features: ['500Mbps', 'Sin restricciones', '24/7 disponible'],
      details: 'Nuestra conexión de fibra óptica simétrica garantiza velocidades constantes tanto para subida como para descarga. Ideal para videoconferencias, streaming y trabajo remoto sin interrupciones.'
    },
    {
      icon: Music,
      title: 'Ambiente Sonic',
      subtitle: 'Playlist Inteligente',
      description: 'Música que se adapta al momento del día y al estado de ánimo colectivo.',
      color: '#FF6B6B',
      features: ['Jazz matutino', 'Lo-fi vespertino', 'Clásica nocturna'],
      details: 'Sistema de audio inmersivo con playlists curadas por DJs locales que cambian según la hora del día y la energía del espacio. También ofrecemos sesiones de música en vivo los fines de semana.'
    },
    {
      icon: Camera,
      title: 'Spots Instagrameables',
      subtitle: 'Espacios Fotogénicos',
      description: 'Rincones diseñados especialmente para capturar momentos únicos e irrepetibles.',
      color: '#4ECDC4',
      features: ['Iluminación natural', 'Fondos únicos', 'Props temáticos'],
      details: 'Cada rincón ha sido diseñado pensando en la fotografía. Contamos con iluminación natural estratégicamente ubicada, murales de artistas locales y props temáticos que cambian mensualmente.'
    },
    {
      icon: Book,
      title: 'Biblioteca Cafetera',
      subtitle: 'Cultura del Café',
      description: 'Colección curada de libros sobre café, cultura y creativity para explorar.',
      color: '#FFE66D',
      features: ['200+ libros', 'Revistas especializadas', 'Cómics y novelas'],
      details: 'Una biblioteca cuidadosamente seleccionada que incluye desde manuales de barismo hasta novelas contemporáneas. Puedes leer en el lugar o participar en nuestro club de lectura mensual.'
    }
  ]

  const amenities = [
    { icon: Clock, text: 'Abierto 24/7' },
    { icon: Shield, text: 'Espacio seguro' },
    { icon: Wifi, text: 'Enchufes en cada mesa' },
    { icon: Book, text: 'Zona de silencio' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [services.length])

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 relative overflow-hidden">
      {/* Flowing background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ x: x1 }}
      >
        <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ x: x2 }}
      >
        <div className="absolute top-40 right-0 w-72 h-72 bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16 px-16">
          <motion.h2
            className="text-6xl font-black text-white mb-8"
            style={{
              textShadow: '4px 4px 0px #8B5CF6',
              lineHeight: '0.9'
            }}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            EXPERIENCIA
            <br />
            <span className="text-cyan-400">FLUIDA</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Cada detalle está pensado para que tu experiencia fluya 
            naturalmente desde el momento en que entras.
          </motion.p>
        </div>

        {/* Service Cards in Row */}
        <div className="px-16 mb-12">
          <div className="flex justify-center gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border cursor-pointer transition-all duration-500 w-64 h-48 ${
                  index === activeService 
                    ? 'border-white/50 bg-white/10 scale-105' 
                    : 'border-white/20 hover:border-white/40'
                }`}
                onClick={() => setActiveService(index)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 20px 40px ${service.color}30`
                }}
                viewport={{ once: true }}
              >
                {/* Active indicator */}
                {index === activeService && (
                  <motion.div
                    className="absolute -inset-1 rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, ${service.color}, transparent, ${service.color})`,
                      opacity: 0.3
                    }}
                    layoutId="activeService"
                    transition={{ duration: 0.3 }}
                  />
                )}

                <motion.div
                  className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                  style={{ 
                    backgroundColor: index === activeService ? service.color : `${service.color}40`
                  }}
                  animate={{ 
                    rotate: index === activeService ? [0, 360] : 0 
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: index === activeService ? Infinity : 0,
                    ease: "linear"
                  }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h4 className="text-lg font-bold text-white mb-2 text-center">{service.title}</h4>
                <p className="text-sm text-gray-300 text-center">{service.subtitle}</p>

                {/* Floating particles */}
                {index === activeService && (
                  <>
                    {Array.from({ length: 3 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{ 
                          backgroundColor: service.color,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Details Panel */}
        <motion.div
          key={activeService}
          className="px-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {services[activeService].title}
                </h3>
                
                <p className="text-lg font-medium mb-4" style={{ color: services[activeService].color }}>
                  {services[activeService].subtitle}
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {services[activeService].description}
                </p>

                <p className="text-gray-200 leading-relaxed">
                  {services[activeService].details}
                </p>
              </div>

              <div>
                <motion.div
                  className="w-32 h-32 rounded-3xl flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: services[activeService].color }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {(() => {
                    const ActiveIcon = services[activeService].icon
                    return <ActiveIcon className="w-16 h-16 text-white" />
                  })()}
                </motion.div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {services[activeService].features.map((feature, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-white/20 rounded-full text-sm text-white border border-white/30"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom amenities bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-lg border-t border-white/20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-around items-center">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
              >
                <amenity.icon className="w-6 h-6 text-cyan-400" />
                <span className="font-medium">{amenity.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default FluidExperience
