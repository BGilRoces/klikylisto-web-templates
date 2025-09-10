import React from 'react'
import { motion } from 'framer-motion'
import { Eye, ArrowRight, Coffee, Star, Heart, Leaf } from 'lucide-react'
import Button from './Button'

const TemplateCard = ({ template, index }) => {
  const renderTemplatePreview = () => {
    switch (template.id) {
      case 'cafeteria-1':
        return (
          <div className="absolute inset-0 p-4">
            {/* Estilo Artesanal - Layout cálido */}
            <div className="h-full flex flex-col">
              {/* Header simulado */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Coffee size={16} className="text-white/90" />
                  <div className="w-12 h-2 bg-white/70 rounded"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-6 h-1 bg-white/60 rounded"></div>
                  <div className="w-6 h-1 bg-white/60 rounded"></div>
                  <div className="w-6 h-1 bg-white/60 rounded"></div>
                </div>
              </div>
              
              {/* Hero simulado */}
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 mx-auto mb-2 flex items-center justify-center">
                    <Coffee size={24} className="text-white" />
                  </div>
                  <div className="w-20 h-2 bg-white/80 rounded mx-auto mb-1"></div>
                  <div className="w-16 h-1 bg-white/60 rounded mx-auto"></div>
                </div>
              </div>
              
              {/* Cards simuladas */}
              <div className="flex gap-2 justify-center">
                <div className="w-8 h-6 bg-white/30 rounded"></div>
                <div className="w-8 h-6 bg-white/30 rounded"></div>
                <div className="w-8 h-6 bg-white/30 rounded"></div>
              </div>
            </div>
          </div>
        )

      case 'cafeteria-2':
        return (
          <div className="absolute inset-0 p-4">
            {/* Estilo Moderno - Layout minimalista */}
            <div className="h-full flex flex-col">
              {/* Header minimalista */}
              <div className="flex items-center justify-between mb-4">
                <Coffee size={18} className="text-white/90" />
                <div className="flex gap-3">
                  <div className="w-1 h-1 bg-white/70 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/70 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/70 rounded-full"></div>
                </div>
              </div>
              
              {/* Layout grid moderno */}
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div className="bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border border-white/60 rounded"></div>
                </div>
                <div className="bg-white/15 rounded-lg"></div>
                <div className="bg-white/15 rounded-lg"></div>
                <div className="bg-white/25 rounded-lg flex items-center justify-center">
                  <Heart size={12} className="text-white/70" />
                </div>
              </div>
              
              {/* Footer minimalista */}
              <div className="flex justify-center gap-1 mt-3">
                <div className="w-12 h-0.5 bg-white/50 rounded"></div>
              </div>
            </div>
          </div>
        )

      case 'cafeteria-3':
        return (
          <div className="absolute inset-0 p-4">
            {/* Estilo Boutique - Layout premium */}
            <div className="h-full flex flex-col">
              {/* Header elegante */}
              <div className="flex items-center justify-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 border border-white/60 rounded-full"></div>
                  <Coffee size={16} className="text-white/90" />
                  <div className="w-2 h-2 border border-white/60 rounded-full"></div>
                </div>
              </div>
              
              {/* Diseño premium centrado */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-full border border-white/40 flex items-center justify-center mb-3">
                  <Leaf size={20} className="text-white/90" />
                </div>
                <div className="w-16 h-1.5 bg-white/70 rounded mb-1"></div>
                <div className="w-12 h-0.5 bg-white/50 rounded mb-3"></div>
                
                {/* Elementos decorativos */}
                <div className="flex gap-4">
                  <div className="w-6 h-8 bg-white/20 rounded border border-white/30"></div>
                  <div className="w-6 h-8 bg-white/25 rounded border border-white/30"></div>
                  <div className="w-6 h-8 bg-white/20 rounded border border-white/30"></div>
                </div>
              </div>
              
              {/* Elementos decorativos boutique */}
              <div className="flex justify-between items-center">
                <Star size={8} className="text-white/60" />
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                </div>
                <Star size={8} className="text-white/60" />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-amber-100">
        {/* Preview con diseño representativo del template */}
        <div className={`h-48 bg-gradient-to-br ${template.color} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/5" />
          
          {renderTemplatePreview()}
          
          {/* Overlay más sutil */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button 
              to={`/templates/${template.id}`}
              variant="secondary"
              icon={Eye}
              className="shadow-lg border border-amber-200"
            >
              Ver Diseño
            </Button>
          </div>
        </div>

        {/* Info clean sin features */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-amber-900 mb-2">{template.name}</h3>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-orange-400 fill-current" />
              ))}
            </div>
          </div>
          
          <p className="text-amber-800 text-sm text-center mb-8 flex-1 leading-relaxed">
            {template.description}
          </p>
          
          {/* Button */}
          <Button
            to={`/templates/${template.id}`}
            variant="primary"
            size="md"
            className="w-full"
          >
            <Eye size={16} />
            <span>Ver Sitio Web</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default TemplateCard
