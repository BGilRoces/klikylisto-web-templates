import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Coffee, Monitor, Smartphone, Tablet, Star, Menu } from 'lucide-react'

const Navigation = ({ templateInfo, viewportSize, setViewportSize }) => {
  const { templateId } = useParams()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false)
  const mobilePanelRef = useRef(null)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY
        
        // Solo mostrar cuando esté cerca del top (primeros 100px)
        if (currentScrollY < 100) {
          setIsVisible(true)
        } else {
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

  // Close mobile panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobilePanelRef.current && !mobilePanelRef.current.contains(e.target)) {
        setMobilePanelOpen(false)
      }
    }

    if (mobilePanelOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [mobilePanelOpen])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-amber-900/10 backdrop-blur-md shadow-lg border-b border-amber-900/40 transition-transform duration-300 ${
      isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left - Brand & Back */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-amber-900 hover:from-amber-900 hover:to-orange-800 text-white rounded-lg transition-all duration-300 font-medium shadow-lg group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Catálogo
          </Link>
          <div className="h-6 w-px bg-amber-900/20"></div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg border border-amber-900/40 shadow-sm">
                <Coffee size={20} className="text-amber-900" />
              </div>
              <div>
                <span className="font-bold text-amber-900">Klikylisto</span>
                <p className="text-xs text-amber-800">Templates para Cafeterías</p>
              </div>
            </div>
        </div>

        {/* Center - Template info clean (hidden on small screens to save space) */}
        <div className="hidden lg:flex items-center gap-4 bg-white/20 px-6 py-3 rounded-xl border border-amber-900/40 shadow-sm">
          <div className="p-2 bg-white/40 rounded-lg shadow-sm border border-amber-900/40">
            <Coffee size={20} className="text-amber-800" />
          </div>
          <div>
            <h1 className="font-bold text-amber-900 text-lg">{templateInfo?.name || 'Template'}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-amber-500 fill-current" />
                ))}
              </div>
              <span className="text-xs text-amber-900">Vista Previa</span>
            </div>
          </div>
        </div>

        {/* Right - Actions clean */}
        <div className="flex items-center gap-1">
          {/* Desktop + tablet: show inline buttons */}
          <div className="hidden sm:flex items-center gap-1 bg-white/20 rounded-lg p-1 border border-amber-900/40">
            <button 
              onClick={() => setViewportSize('desktop')}
              className={`p-2 rounded-md shadow-sm hover:shadow-md transition-all border border-amber-900/40 ${
                viewportSize === 'desktop' 
                  ? 'bg-white/50 text-amber-900' 
                  : 'bg-white/30 text-amber-700 hover:bg-white/40 hover:text-amber-900'
              }`} 
              title="Vista Desktop"
            >
              <Monitor size={16} />
            </button>
            <button 
              onClick={() => setViewportSize('tablet')}
              className={`p-2 rounded-md transition-all ${
                viewportSize === 'tablet'
                  ? 'bg-white/50 text-amber-900 shadow-sm'
                  : 'hover:bg-white/30 text-amber-700 hover:text-amber-900'
              }`} 
              title="Vista Tablet"
            >
              <Tablet size={16} />
            </button>
            <button 
              onClick={() => setViewportSize('mobile')}
              className={`p-2 rounded-md transition-all ${
                viewportSize === 'mobile'
                  ? 'bg-white/50 text-amber-900 shadow-sm'
                  : 'hover:bg-white/30 text-amber-700 hover:text-amber-900'
              }`} 
              title="Vista Móvil"
            >
              <Smartphone size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
