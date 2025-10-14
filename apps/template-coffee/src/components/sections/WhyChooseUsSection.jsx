import React from 'react'
import { motion } from 'framer-motion'
import { Smartphone, DollarSign, Zap, Wrench, Palette, Sparkles } from 'lucide-react'
import Container from '../layout/Container'
import WhatsAppButton from '../ui/WhatsAppButton'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const features = [
  {
    Icon: Smartphone,
    title: 'Diseño Responsive',
    desc: 'Tu sitio se ve perfecto en cualquier dispositivo. Mobile, tablet, desktop — todo fluye naturalmente.',
    gradient: 'from-amber-400 via-orange-400 to-red-400',
    iconBg: 'bg-gradient-to-br from-amber-400/20 to-orange-500/20'
  },
  {
    Icon: DollarSign,
    title: 'Precios Accesibles',
    desc: 'Calidad profesional sin arruinarte. Planes transparentes que se ajustan a tu presupuesto.',
    gradient: 'from-yellow-400 via-amber-400 to-orange-400',
    iconBg: 'bg-gradient-to-br from-yellow-400/20 to-amber-500/20'
  },
  {
    Icon: Zap,
    title: 'Entrega Rápida',
    desc: 'Movemos rápido sin sacrificar calidad. Tu proyecto online en tiempo récord.',
    gradient: 'from-orange-400 via-amber-400 to-yellow-400',
    iconBg: 'bg-gradient-to-br from-orange-400/20 to-amber-500/20'
  },
  {
    Icon: Wrench,
    title: 'Soporte Continuo',
    desc: 'No te dejamos solo después del launch. Mantenimiento y actualizaciones cuando lo necesites.',
    gradient: 'from-amber-400 via-orange-400 to-amber-500',
    iconBg: 'bg-gradient-to-br from-amber-400/20 to-orange-400/20'
  },
  {
    Icon: Palette,
    title: 'Totalmente Personalizable',
    desc: 'Tu marca, tu estilo. Adaptamos cada detalle a tu visión — colores, fonts, secciones, todo.',
    gradient: 'from-orange-400 via-amber-400 to-yellow-500',
    iconBg: 'bg-gradient-to-br from-orange-400/20 to-yellow-500/20'
  },
  {
    Icon: Sparkles,
    title: 'Ideas Bienvenidas',
    desc: '¿Una funcionalidad especial? ¿Un diseño distinto? Nos encanta innovar. Traé tus ideas locas.',
    gradient: 'from-amber-300 via-yellow-400 to-orange-400',
    iconBg: 'bg-gradient-to-br from-amber-300/20 to-orange-400/20'
  }
]

const WhyChooseUsSection = () => {
  const { targetRef, hasIntersected } = useIntersectionObserver({ threshold: 0.1, rootMargin: '0px 0px -60px 0px' })

  return (
    <section ref={targetRef} id="why-choose-us" className="py-24 relative overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent pointer-events-none"></div>
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          {/* Contenedor principal con efectos de profundidad */}
          <div className="relative bg-gradient-to-br from-gray-900 via-stone-900 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Efectos de fondo decorativos */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Grid pattern sutil */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-30"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 p-8 md:p-12">
              
              {/* Columna izquierda: contenido principal */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={hasIntersected ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-block mb-4">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/30 rounded-full text-amber-300 text-sm font-semibold">
                      ✨ Por qué somos diferentes
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    <span className="text-white">Tu proyecto digital</span>
                    <br />
                    <span className="text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-amber-400 bg-clip-text">
                      en las mejores manos
                    </span>
                  </h2>
                  
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
                    Creamos sitios que realmente funcionan. Diseño moderno, adaptable, 
                    y un equipo que te escucha. Sin vueltas, sin sorpresas — solo resultados.
                  </p>
                </motion.div>

                {/* Grid de features mejorado */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={hasIntersected ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.1 * idx,
                        ease: [0.21, 1.02, 0.73, 1]
                      }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="group relative"
                    >
                      <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                        {/* Glow effect on hover */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                        
                        <div className="relative flex items-start gap-4">
                          <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${feature.iconBg} backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.Icon size={24} className="text-amber-300" strokeWidth={2.5} />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-bold text-base mb-1.5 group-hover:text-amber-300 transition-colors">
                              {feature.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Columna derecha: CTA mejorado */}
              <motion.aside
                initial={{ opacity: 0, x: 30 }}
                animate={hasIntersected ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-1 flex items-center justify-center"
              >
                <div className="relative w-full max-w-sm">
                  {/* Glow decorativo */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-xl opacity-20"></div>
                  
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center shadow-2xl">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-gray-900 mb-4 shadow-lg">
                        <Zap size={32} strokeWidth={2.5} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">
                        ¡Empecemos hoy!
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Tu proyecto merece el mejor equipo. Hablemos y hacemos magia juntos.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <motion.a 
                        href="#contact-form"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="block"
                      >
                        <button className="w-full px-6 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:from-amber-300 hover:to-orange-400 transition-all duration-300">
                          📧 Contactar por Email
                        </button>
                      </motion.a>

                      <WhatsAppButton className="w-full justify-center text-base py-4">
                        Escribinos por WhatsApp
                      </WhatsAppButton>
                    </div>

                    <p className="mt-5 text-xs text-gray-400 font-medium">
                      ⚡ Respuesta en menos de 24 horas
                    </p>
                  </div>
                </div>
              </motion.aside>

            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default WhyChooseUsSection
