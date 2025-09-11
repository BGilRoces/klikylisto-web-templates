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
    <div className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-50/95 to-orange-50/95 backdrop-blur-md shadow-lg border-b border-amber-200 transition-transform duration-300 ${
      isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left - Brand & Back */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg transition-all duration-300 font-medium shadow-lg group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Catálogo
          </Link>
          <div className="h-6 w-px bg-amber-300"></div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg border border-amber-200 shadow-sm">
              <Coffee size={20} className="text-amber-700" />
            </div>
            <div>
              <span className="font-bold bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">Klikylisto</span>
              <p className="text-xs text-amber-700">Templates para Cafeterías</p>
            </div>
          </div>
        </div>

        {/* Center - Template info clean */}
        <div className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 rounded-xl border border-amber-200 shadow-sm">
          <div className="p-2 bg-gradient-to-br from-white to-amber-50 rounded-lg shadow-sm border border-amber-200">
            <Coffee size={20} className="text-amber-700" />
          </div>
          <div>
            <h1 className="font-bold bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent text-lg">{templateInfo?.name || 'Template'}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-xs text-amber-500">•</span>
              <span className="text-xs text-amber-700">Vista Previa</span>
            </div>
          </div>
        </div>

        {/* Right - Actions clean */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-1 border border-amber-200">
            <button className="p-2 bg-gradient-to-br from-white to-amber-50 rounded-md shadow-sm hover:shadow-md transition-all border border-amber-200" title="Vista Desktop">
              <Monitor size={16} className="text-amber-700" />
            </button>
            <button className="p-2 hover:bg-gradient-to-br hover:from-white hover:to-amber-50 rounded-md transition-all" title="Vista Tablet">
              <Tablet size={16} className="text-amber-600" />
            </button>
            <button className="p-2 hover:bg-gradient-to-br hover:from-white hover:to-amber-50 rounded-md transition-all" title="Vista Móvil">
              <Smartphone size={16} className="text-amber-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
