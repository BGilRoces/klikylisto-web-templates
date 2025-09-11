import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Coffee, Monitor, Smartphone, Tablet, Star } from 'lucide-react'

const Navigation = ({ templateInfo }) => {
  const { templateId } = useParams()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY
        
        // Mostrar si está arriba o si está subiendo
        if (currentScrollY < lastScrollY || currentScrollY < 5) {
          setIsVisible(true)
        } else if (currentScrollY > lastScrollY && currentScrollY > 20) {
          setIsVisible(false)
        }
        
        setLastScrollY(currentScrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 transition-transform duration-300 ${
      isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left - Brand & Back */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 font-medium shadow-sm group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Catálogo
          </Link>
          <div className="h-6 w-px bg-gray-300"></div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 rounded-lg border border-gray-200">
              <Coffee size={20} className="text-gray-700" />
            </div>
            <div>
              <span className="font-bold text-gray-900">Klikylisto</span>
              <p className="text-xs text-gray-600">Templates para Cafeterías</p>
            </div>
          </div>
        </div>

        {/* Center - Template info clean */}
        <div className="flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-xl border border-gray-200">
          <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
            <Coffee size={20} className="text-gray-700" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 text-lg">{templateInfo?.name || 'Template'}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-600">Vista Previa</span>
            </div>
          </div>
        </div>

        {/* Right - Actions clean */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1 border border-gray-200">
            <button className="p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-all border border-gray-100" title="Vista Desktop">
              <Monitor size={16} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-white rounded-md transition-all" title="Vista Tablet">
              <Tablet size={16} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-white rounded-md transition-all" title="Vista Móvil">
              <Smartphone size={16} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
