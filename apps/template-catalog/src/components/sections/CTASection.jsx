import React from 'react'
import { motion } from 'framer-motion'
import { Coffee, Smartphone } from 'lucide-react'
import Button from '../ui/Button'

const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="container mx-auto px-6 py-16"
    >
      <div className="relative bg-amber-900 rounded-2xl p-12 text-center overflow-hidden">
        <div className="relative">
          <h3 className="text-3xl font-bold text-amber-50 mb-4">
            ¿Listo para tu Sitio Web Personalizado?
          </h3>
          <p className="text-amber-200 mb-8 max-w-2xl mx-auto">
            Diseñamos y desarrollamos la presencia digital perfecta para tu cafetería. 
            Único, profesional y hecho completamente a medida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              href="mailto:contacto@klikylisto.com"
              icon={Coffee}
            >
              Comenzar mi Sitio Web
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              href="tel:+5255512345678"
              icon={Smartphone}
              className="bg-amber-800/30 backdrop-blur-sm text-amber-100 border-amber-600/20 hover:bg-amber-800/50"
            >
              Llamar
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default CTASection
