import React from 'react'
import { motion } from 'framer-motion'
import { Eye, ArrowRight, Coffee, Star, Heart, Leaf } from 'lucide-react'
import Button from './Button'

const TemplateCard = ({ template, index }) => {
  const renderTemplatePreview = () => {
    switch (template.id) {
      case 'cafeteria-1':
        return (

            <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-orange-900">
              {/* Estilo ARTESANAL - Cálido y rústico */}
              <div className="h-full flex flex-col p-4">
                {/* Header rústico con textura */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-amber-200/30 rounded-full flex items-center justify-center border border-amber-300/50">
                      <Coffee size={12} className="text-amber-100" />
                    </div>
                    <div className="w-8 h-1.5 bg-amber-200/60 rounded-full"></div>
                  </div>
                  <div className="text-amber-100/70 text-xs font-serif">☕</div>
                </div>
                
                {/* Diseño tipo blog cálido */}
                <div className="flex-1 space-y-3">
                  <div className="bg-amber-100/20 rounded p-3 border border-amber-300/30">
                    <div className="w-full h-1.5 bg-amber-200/60 rounded mb-2"></div>
                    <div className="w-3/4 h-1 bg-amber-200/40 rounded"></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 bg-orange-100/20 rounded p-2 border border-orange-300/30">
                      <div className="w-6 h-6 bg-orange-200/50 rounded mb-2"></div>
                      <div className="w-full h-1 bg-orange-200/40 rounded"></div>
                    </div>
                    <div className="flex-1 bg-yellow-100/20 rounded p-2 border border-yellow-300/30">
                      <div className="w-6 h-6 bg-yellow-200/50 rounded mb-2"></div>
                      <div className="w-full h-1 bg-yellow-200/40 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Footer artesanal */}
                <div className="flex gap-2 justify-center mt-3">
                  <div className="w-2 h-2 bg-amber-300/60 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-300/60 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-300/60 rounded-full"></div>
                </div>
              </div>
            </div>
        )

      case 'cafeteria-2':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-gray-900">
            {/* Estilo MODERNO - Minimalista y clean */}
            <div className="h-full flex flex-col p-4">
              {/* Header ultra minimalista */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-4 h-4 border border-white/40 rounded-sm"></div>
                <div className="flex gap-2">
                  <div className="w-6 h-0.5 bg-white/30 rounded-full"></div>
                  <div className="w-6 h-0.5 bg-white/30 rounded-full"></div>
                </div>
              </div>
              
              {/* Grid layout moderno */}
              <div className="flex-1 grid grid-cols-12 grid-rows-8 gap-2">
                {/* Hero grande */}
                <div className="col-span-8 row-span-5 bg-white/10 rounded border border-white/20 flex items-center justify-center">
                  <Coffee size={20} className="text-white/60" />
                </div>
                {/* Sidebar */}
                <div className="col-span-4 row-span-8 space-y-2">
                  <div className="h-4 bg-white/8 rounded border border-white/15"></div>
                  <div className="h-4 bg-white/8 rounded border border-white/15"></div>
                  <div className="h-8 bg-white/12 rounded border border-white/20"></div>
                </div>
                {/* Footer cards */}
                <div className="col-span-4 row-span-3 bg-white/8 rounded border border-white/15"></div>
                <div className="col-span-4 row-span-3 bg-white/8 rounded border border-white/15"></div>
              </div>
              
              {/* Línea minimalista */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-3"></div>
            </div>
          </div>
        )

      case 'cafeteria-3':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-rose-900 to-pink-900">
            {/* Estilo BOUTIQUE - Elegante y premium */}
            <div className="h-full flex flex-col p-4">
              {/* Header elegante con ornamentos */}
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-rose-300/60 to-pink-400/60 rounded-full"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full border border-rose-300/50 flex items-center justify-center">
                    <Leaf size={16} className="text-rose-100" />
                  </div>
                  <div className="w-1 h-6 bg-gradient-to-b from-rose-300/60 to-pink-400/60 rounded-full"></div>
                </div>
              </div>
              
              {/* Layout boutique centrado */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                <div className="w-full h-4 bg-gradient-to-r from-transparent via-rose-200/40 to-transparent rounded"></div>
                <div className="flex gap-3 w-full justify-center">
                  <div className="w-8 h-8 bg-rose-200/30 rounded-full border border-rose-300/50 flex items-center justify-center">
                    <Star size={12} className="text-rose-100" />
                  </div>
                  <div className="w-8 h-8 bg-pink-200/30 rounded-full border border-pink-300/50 flex items-center justify-center">
                    <Heart size={12} className="text-pink-100" />
                  </div>
                  <div className="w-8 h-8 bg-purple-200/30 rounded-full border border-purple-300/50 flex items-center justify-center">
                    <Coffee size={12} className="text-purple-100" />
                  </div>
                </div>
                <div className="w-2/3 h-3 bg-gradient-to-r from-transparent via-pink-200/40 to-transparent rounded"></div>
              </div>
              
              {/* Footer ornamental */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-3 h-px bg-rose-300/60"></div>
                <div className="w-2 h-2 bg-rose-300/60 rounded-full"></div>
                <div className="w-3 h-px bg-rose-300/60"></div>
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
        <div className="h-48 relative overflow-hidden">
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
