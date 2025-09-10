import React from 'react'
import { motion } from 'framer-motion'
import { Coffee, Globe, Zap, Star } from 'lucide-react'
import Badge from '../ui/Badge'
import Container from './Container'

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-stone-800 to-orange-900"
    >
      {/* Patrón sutil de granos de café */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 transform rotate-12">
          <Coffee size={40} className="text-amber-200" />
        </div>
        <div className="absolute top-32 right-24 transform -rotate-45">
          <Coffee size={30} className="text-orange-200" />
        </div>
        <div className="absolute bottom-24 left-1/4 transform rotate-45">
          <Coffee size={35} className="text-yellow-200" />
        </div>
      </div>
      
      <Container className="py-16 md:py-24">
        {/* Hero Section con diseño más sofisticado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          
          {/* Columna Izquierda - Contenido Principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Logo y Marca */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-4 bg-white rounded-2xl shadow-xl border border-amber-200">
                  <Coffee size={40} className="text-amber-800" />
                </div>
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-1 tracking-tight">
                  Klik<span className="text-amber-300">Y</span>Listo
                </h1>
                <p className="text-amber-200 text-lg font-medium">Desarrollo Web Premium</p>
              </div>
            </div>

            {/* Título Principal */}
            <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Tu Cafetería
                    <span className="block text-amber-300">Necesita un Sitio Web</span>
                    <span className="block text-white/90 text-3xl md:text-4xl">Extraordinario</span>
                </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('templates-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-amber-900 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Coffee size={24} />
                  Ver Nuestros Diseños
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                Contactar Ahora
              </motion.button>
            </div>
          </motion.div>

          {/* Columna Derecha - Visual/Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Mockup de dispositivos */}
            <div className="relative">
              {/* Desktop Mockup */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-md h-48 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Coffee size={16} className="text-amber-800" />
                      <div className="h-2 bg-amber-800 rounded w-20"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-amber-600 rounded w-3/4"></div>
                      <div className="h-2 bg-amber-400 rounded w-1/2"></div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-16 bg-gradient-to-br from-amber-200 to-orange-200 rounded"></div>
                        <div className="h-16 bg-gradient-to-br from-orange-200 to-red-200 rounded"></div>
                        <div className="h-16 bg-gradient-to-br from-yellow-200 to-amber-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup flotante */}
              <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-xl">
                <div className="bg-gray-900 rounded-lg p-2 w-24">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded h-32 p-2">
                    <div className="flex items-center gap-1 mb-2">
                      <Coffee size={8} className="text-amber-800" />
                      <div className="h-1 bg-amber-800 rounded flex-1"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-amber-600 rounded w-full"></div>
                      <div className="h-1 bg-amber-400 rounded w-2/3"></div>
                      <div className="grid grid-cols-2 gap-1 mt-2">
                        <div className="h-8 bg-gradient-to-br from-amber-200 to-orange-200 rounded"></div>
                        <div className="h-8 bg-gradient-to-br from-orange-200 to-red-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos flotantes */}
              <div className="absolute top-8 -left-8 w-16 h-16 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-16 left-8 w-12 h-12 bg-gradient-to-br from-yellow-400/40 to-amber-400/40 rounded-full blur-lg"></div>
            </div>
          </motion.div>
        </div>

        {/* Features/Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                <Globe size={32} className="text-amber-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100% Responsive</h3>
              <p className="text-amber-200">Perfecto en todos los dispositivos</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                <Zap size={32} className="text-amber-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Carga Ultra Rápida</h3>
              <p className="text-amber-200">Optimizado para máximo rendimiento</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                <Star size={32} className="text-amber-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Diseño Premium</h3>
              <p className="text-amber-200">Hecho a medida para tu marca</p>
            </div>
          </div>
        </motion.div>
      </Container>
      
      {/* Onda más sutil y suave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-16 fill-current text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"/>
        </svg>
      </div>
    </motion.header>
  )
}

export default Header
