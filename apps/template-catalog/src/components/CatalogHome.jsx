import React from 'react'
import { motion } from 'framer-motion'
import { Eye, ArrowRight, CheckCircle, Clock, Code } from 'lucide-react'

const CatalogHome = ({ templates, onSelectTemplate }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'ready':
        return <CheckCircle className="text-green-500" size={20} />
      case 'development':
        return <Clock className="text-yellow-500" size={20} />
      default:
        return <Code className="text-gray-500" size={20} />
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'ready':
        return 'Listo para usar'
      case 'development':
        return 'En desarrollo'
      default:
        return 'Planificado'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative container mx-auto px-6 py-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Klikylisto
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Templates
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Catálogo de templates profesionales para diferentes tipos de negocios. 
              Explora cada diseño y encuentra el perfecto para tu proyecto.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                <span>Animaciones Fluidas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                <span>Fácil Personalización</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Templates Grid */}
      <section className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white text-center mb-16"
        >
          Explora Nuestros Templates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => {
            const IconComponent = template.icon
            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm">
                    {getStatusIcon(template.status)}
                    <span className="text-white">{getStatusText(template.status)}</span>
                  </div>

                  {/* Template Preview */}
                  <div className={`h-48 bg-gradient-to-br ${template.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent size={64} className="text-white/80" />
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => onSelectTemplate(template.id)}
                        disabled={template.status !== 'ready'}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Eye size={20} />
                        {template.status === 'ready' ? 'Ver Template' : 'Próximamente'}
                      </button>
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{template.description}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.features.slice(0, 3).map((feature, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {template.features.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                          +{template.features.length - 3} más
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => onSelectTemplate(template.id)}
                      disabled={template.status !== 'ready'}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-purple-600 disabled:hover:to-pink-600"
                    >
                      {template.status === 'ready' ? (
                        <>
                          <Eye size={16} />
                          Explorar Template
                          <ArrowRight size={16} />
                        </>
                      ) : (
                        <>
                          <Clock size={16} />
                          En Desarrollo
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="container mx-auto px-6 py-20"
      >
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas un Template Personalizado?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Podemos crear un template completamente personalizado para tu negocio. 
            Contáctanos para discutir tu proyecto.
          </p>
          <a
            href="mailto:contacto@klikylisto.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactar Ahora
            <ArrowRight size={20} />
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Klikylisto. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default CatalogHome
