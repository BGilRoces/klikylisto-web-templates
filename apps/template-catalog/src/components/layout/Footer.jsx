import React from 'react'
import { Coffee, Mail, Phone, Heart, ArrowUp } from 'lucide-react'
import Container from './Container'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-amber-900 to-stone-900 text-white">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-8 fill-current text-amber-50"
          preserveAspectRatio="none"
        >
          <path d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,69.3C672,75,768,85,864,80C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
        </svg>
      </div>

      <Container className="pt-12 pb-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Brand section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl blur-lg opacity-75"></div>
                <div className="relative">
                  <img 
                    src="/assets/Logo.png" 
                    alt="KlikYListo Logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Klik<span className="text-amber-300">Y</span>Listo
                </h3>
                <p className="text-amber-200 text-sm">Desarrollo Web Premium</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transformamos cafeterías en experiencias digitales extraordinarias.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/20 rounded-lg">
                  <Mail size={16} className="text-amber-300" />
                </div>
                <a href="mailto:klikylisto@gmail.com" className="text-gray-300 hover:text-amber-300 transition-colors">
                  klikylisto@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Phone size={16} className="text-green-300" />
                </div>
                <a href="tel:+54 11 6238-7920" className="text-gray-300 hover:text-green-300 transition-colors">
                  +54 11 6238-7920
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <p>&copy; 2025 Klikylisto. Hecho con</p>
              <Heart size={14} className="text-red-400 fill-current" />
              <p>para cafeterías especiales.</p>
            </div>
            
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="group p-2 bg-amber-500/20 rounded-lg hover:bg-amber-500/30 transition-all duration-300"
              aria-label="Volver arriba"
            >
              <ArrowUp size={16} className="text-amber-300 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
