import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle2, ShoppingCart, Database, Instagram, Mail, Search, Smartphone } from 'lucide-react'

const ShowcaseSection = () => {
  const features = [
    { icon: ShoppingCart, text: 'Tienda online (Con carrito de compras)' },
    { icon: Smartphone, text: 'Diseño responsive (Adaptable a todos los dispositivos)' },
    { icon: Search, text: 'SEO optimizado (Mejor posicionamiento en buscadores)' },
    { icon: Database, text: 'Base de datos integrada (Gestión de productos y pedidos)' },
    { icon: Instagram, text: 'Integración con redes sociales (Comparte fácilmente)' },
    { icon: Mail, text: 'Sistema de contacto directo (Atención al cliente)' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 via-neutral-900 to-stone-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Último Proyecto
            </span>
          </h2>
          
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Sitio web completo para Bertha Café - Una experiencia digital que combina elegancia, funcionalidad y rendimiento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8 lg:gap-12 items-start">
          {/* Left: Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <a
              href="https://berthacafe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative"
            >
              <div className="relative rounded-2xl transition-all duration-500 group-hover:scale-[1.02]">
                {/* Desktop mockup */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                  <div className="px-4 py-2.5 bg-gray-800 border-b border-gray-700 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="flex-1 text-xs text-gray-200 text-center">www.berthacafe.com</div>
                  </div>

                  <div className="relative bg-gray-900">
                    <img
                      src="/assets/BerthaTemplatePC.png" 
                      alt="Bertha Café - Vista de escritorio"
                      className="w-full h-auto block"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Mobile mockup - positioned at bottom left, doesn't cover desktop view */}
                <div className="absolute -left-8 -bottom-24 w-40 sm:w-44 md:w-48 lg:w-52 transform -rotate-6 transition-transform duration-500 group-hover:-rotate-3">
                  {/* Phone frame with realistic bezel */}
                  <div className="relative bg-gradient-to-br from-gray-600 to-gray-700 rounded-[1.5rem] p-2 shadow-2xl">
                    {/* Phone screen area */}
                    <div className="relative bg-black rounded-[1.3rem] overflow-hidden aspect-[9/19.5]">
                      {/* Top notch/speaker */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black/80 rounded-b-2xl z-10"></div>
                      
                      {/* Screenshot */}
                      <img
                        src="/assets/BerthaTemplateMobile.png"
                        alt="Bertha Café - Vista móvil"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                      />
                      
                      {/* Bottom home indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* glow/backdrop - now permanently visible */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-2xl opacity-100 transition-opacity duration-500"></div>
              </div>
            </a>

            {/* CTA Button - positioned below mockups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-20 sm:mt-8 flex justify-center relative z-20"
            >
              <motion.a
                href="https://berthacafe.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-30 inline-flex items-center gap-2 bg-[#8b9374] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Visitar Bertha Café</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <p className="text-gray-200 text-md leading-relaxed mb-4">
                Un sitio web moderno y funcional diseñado para destacar la identidad única de la cafetería, 
                facilitando la experiencia del cliente desde la navegación hasta la compra.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{feature.text}</p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
