import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ExternalLink, Eye, Palette, Coffee, Building2, Dumbbell, Wrench, ShoppingBag } from 'lucide-react'
import CatalogHome from './components/CatalogHome'

// Importar los templates (cuando estén listos)
// import TemplateCafeteria from '../template-cafeteria/src/App'
// import TemplateCoffeeModern from '../template-coffee-modern/src/App'

const App = () => {
  const [currentTemplate, setCurrentTemplate] = useState(null)

  const templates = [
    {
      id: 'cafeteria',
      name: 'Cafetería Elegante',
      description: 'Template moderno para cafeterías y restaurantes con navegación fluida y secciones interactivas.',
      icon: Coffee,
      color: 'from-amber-500 to-orange-600',
      image: '/previews/cafeteria.jpg', // Placeholder
      features: ['Menú interactivo', 'Reservas en línea', 'Galería de fotos', 'Contacto'],
      demoUrl: 'http://localhost:5173', // URL cuando esté corriendo
      status: 'ready'
    },
    {
      id: 'coffee-modern',
      name: 'Café Moderno',
      description: 'Diseño minimalista y elegante para tiendas de café especializado.',
      icon: Palette,
      color: 'from-emerald-500 to-teal-600',
      image: '/previews/coffee-modern.jpg',
      features: ['Catálogo de productos', 'Blog integrado', 'E-commerce', 'Newsletter'],
      demoUrl: 'http://localhost:5174',
      status: 'ready'
    },
    {
      id: 'consultorio',
      name: 'Consultorio Médico',
      description: 'Template profesional para consultorios y clínicas médicas.',
      icon: Building2,
      color: 'from-blue-500 to-indigo-600',
      image: '/previews/consultorio.jpg',
      features: ['Citas online', 'Información médica', 'Equipo profesional', 'Contacto'],
      demoUrl: '#',
      status: 'development'
    },
    {
      id: 'gym',
      name: 'Gimnasio Fitness',
      description: 'Diseño energético para gimnasios y centros de fitness.',
      icon: Dumbbell,
      color: 'from-red-500 to-pink-600',
      image: '/previews/gym.jpg',
      features: ['Clases grupales', 'Planes de entrenamiento', 'Membresías', 'Entrenadores'],
      demoUrl: '#',
      status: 'development'
    },
    {
      id: 'servicios',
      name: 'Servicios Profesionales',
      description: 'Template versátil para empresas de servicios profesionales.',
      icon: Wrench,
      color: 'from-purple-500 to-violet-600',
      image: '/previews/servicios.jpg',
      features: ['Portfolio', 'Servicios detallados', 'Testimonios', 'Contacto'],
      demoUrl: '#',
      status: 'development'
    },
    {
      id: 'tienda',
      name: 'Tienda Online',
      description: 'E-commerce completo con carrito de compras y pagos integrados.',
      icon: ShoppingBag,
      color: 'from-green-500 to-emerald-600',
      image: '/previews/tienda.jpg',
      features: ['Carrito de compras', 'Pagos seguros', 'Inventario', 'Dashboard admin'],
      demoUrl: '#',
      status: 'development'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AnimatePresence mode="wait">
        {currentTemplate ? (
          <motion.div
            key="template-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            {/* Header del template activo */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
              <div className="flex items-center justify-between p-4">
                <button
                  onClick={() => setCurrentTemplate(null)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                >
                  <ArrowLeft size={20} />
                  Volver al Catálogo
                </button>
                <h1 className="text-white font-semibold">
                  {templates.find(t => t.id === currentTemplate)?.name}
                </h1>
                <div className="flex gap-2">
                  <a
                    href={templates.find(t => t.id === currentTemplate)?.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white"
                  >
                    <ExternalLink size={16} />
                    Ver en Nueva Pestaña
                  </a>
                </div>
              </div>
            </div>

            {/* Contenido del template */}
            <div className="pt-16">
              {currentTemplate === 'cafeteria' && (
                <iframe
                  src="http://localhost:5173"
                  className="w-full h-screen border-0"
                  title="Template Cafetería"
                />
              )}
              {currentTemplate === 'coffee-modern' && (
                <iframe
                  src="http://localhost:5174"
                  className="w-full h-screen border-0"
                  title="Template Coffee Modern"
                />
              )}
              {/* Para templates en desarrollo */}
              {!['cafeteria', 'coffee-modern'].includes(currentTemplate) && (
                <div className="flex items-center justify-center h-screen">
                  <div className="text-center text-white">
                    <Building2 size={64} className="mx-auto mb-4 opacity-50" />
                    <h2 className="text-2xl font-bold mb-2">Template en Desarrollo</h2>
                    <p className="text-gray-300">Este template estará disponible pronto</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="catalog-home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CatalogHome 
              templates={templates} 
              onSelectTemplate={setCurrentTemplate}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
