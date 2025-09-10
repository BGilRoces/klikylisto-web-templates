import React from 'react'
import { Coffee } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-amber-100 rounded-lg">
            <Coffee size={20} className="text-amber-900" />
          </div>
          <span className="text-xl font-bold text-amber-50">Klikylisto</span>
        </div>
        
        <p className="text-amber-200 mb-4">
          Sitios web únicos para cafeterías especiales
        </p>
        
        <p className="text-amber-300 text-sm">
          &copy; 2025 Klikylisto. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
