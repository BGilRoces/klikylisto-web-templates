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
        <div className="absolute bottom-60 left-1/6 transform rotate-45">
          <Coffee size={35} className="text-yellow-200" />
        </div>
        <div className="absolute top-24 left-1/3 transform -rotate-12">
          <Coffee size={25} className="text-amber-300" />
        </div>
        <div className="absolute top-48 right-16 transform rotate-75">
          <Coffee size={32} className="text-orange-300" />
        </div>
        <div className="absolute bottom-32 right-1/3 transform -rotate-30">
          <Coffee size={28} className="text-yellow-300" />
        </div>
        <div className="absolute top-10 right-12 transform rotate-30">
          <Coffee size={22} className="text-amber-100" />
        </div>
        <div className="absolute bottom-48 left-24 transform rotate-60">
          <Coffee size={26} className="text-orange-100" />
        </div>
        <div className="absolute top-40 left-1/2 transform -rotate-60">
          <Coffee size={20} className="text-yellow-100" />
        </div>
        <div className="absolute bottom-24 right-20 transform rotate-15">
          <Coffee size={24} className="text-amber-200" />
        </div>
      </div>
      
      <Container className="py-8 md:py-12">
        {/* Hero Section compacto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[350px]">
          
          {/* Columna Izquierda - Contenido Principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Logo y Marca más compacto */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <img 
                    src="/assets/Logo.png" 
                    alt="KlikYListo Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                  Klik<span className="text-amber-300">Y</span>Listo
                </h1>
                <p className="text-amber-300 text-sm font-medium">Desarrollo Web Premium</p>
              </div>
            </div>

            {/* Título Principal más pequeño */}
            <div className="space-y-3">
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                    Tu Cafetería
                    <span className="block text-amber-300">Necesita un Sitio Web</span>
                    <span className="block text-white/90 text-xl md:text-2xl">Extraordinario</span>
                </h2>
            </div>

            {/* CTA Buttons más compactos */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('templates-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-900 text-white rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Coffee size={20} />
                  Ver Nuestros Diseños
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300"
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
            {/* Mockup de dispositivos compacto */}
            <div className="relative max-w-sm mx-auto">
              {/* Desktop Mockup */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
                <div className="bg-gray-900 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded h-32 p-3">
                    <div className="flex items-center gap-1.5 mb-3">
                      <Coffee size={12} className="text-amber-800" />
                      <div className="h-1.5 bg-amber-800 rounded w-16"></div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-amber-600 rounded w-3/4"></div>
                      <div className="h-1.5 bg-amber-400 rounded w-1/2"></div>
                      <div className="grid grid-cols-3 gap-1.5 mt-3">
                        <div className="h-10 bg-gradient-to-br from-amber-200 to-orange-200 rounded"></div>
                        <div className="h-10 bg-gradient-to-br from-orange-200 to-red-200 rounded"></div>
                        <div className="h-10 bg-gradient-to-br from-yellow-200 to-amber-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup flotante */}
              <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20 shadow-lg">
                <div className="bg-gray-900 rounded p-1.5 w-20">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded h-24 p-1.5">
                    <div className="flex items-center gap-0.5 mb-1.5">
                      <Coffee size={6} className="text-amber-800" />
                      <div className="h-0.5 bg-amber-800 rounded flex-1"></div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="h-1.5 bg-amber-600 rounded w-full"></div>
                      <div className="h-1 bg-amber-400 rounded w-2/3"></div>
                      <div className="grid grid-cols-2 gap-0.5 mt-1.5">
                        <div className="h-6 bg-gradient-to-br from-amber-200 to-orange-200 rounded"></div>
                        <div className="h-6 bg-gradient-to-br from-orange-200 to-red-200 rounded"></div>
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

        {/* Features/Stats Section compacta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 pt-6 border-t border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3 group-hover:bg-white/20 transition-all duration-300">
                <Globe size={24} className="text-amber-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">100% Responsive</h3>
              <p className="text-amber-200 text-sm">Perfecto en todos los dispositivos</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3 group-hover:bg-white/20 transition-all duration-300">
                <Zap size={24} className="text-amber-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Carga Ultra Rápida</h3>
              <p className="text-amber-200 text-sm">Optimizado para máximo rendimiento</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3 group-hover:bg-white/20 transition-all duration-300">
                <Star size={24} className="text-amber-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Diseño Premium</h3>
              <p className="text-amber-200 text-sm">Hecho a medida para tu marca</p>
            </div>
          </div>
        </motion.div>
      </Container>
      
      {/* Onda más sutil y pequeña */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 80" 
          className="w-full h-10 fill-current text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"/>
        </svg>
      </div>
    </motion.header>
  )
}

export default Header
