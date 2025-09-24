import React from 'react'
import { Coffee } from 'lucide-react'

const BrowserFrame = ({ children, templateInfo, viewportSize = 'desktop' }) => {
  const getViewportClasses = () => {
    switch (viewportSize) {
      case 'mobile':
        return 'w-[375px] mx-auto'
      case 'tablet':
        return 'w-[768px] mx-auto'
      case 'desktop':
      default:
        return 'mx-6'
    }
  }

  const getViewportLabel = () => {
    switch (viewportSize) {
      case 'mobile':
        return '375px'
      case 'tablet':
        return '768px'
      case 'desktop':
      default:
        return '1200px+'
    }
  }

  return (
    <>
      {/* CSS dinámico para simular breakpoints reales */}
      <style>{`
        ${viewportSize === 'mobile' ? `
          .template-container * {
            /* Forzar comportamiento móvil */
          }
          .template-container .lg\\:grid-cols-2 { 
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important; 
          }
          .template-container .lg\\:text-left { 
            text-align: center !important; 
          }
          .template-container .lg\\:order-1 { 
            order: 2 !important; 
          }
          .template-container .lg\\:order-2 { 
            order: 1 !important; 
          }
          .template-container .lg\\:grid { 
            display: flex !important; 
            flex-direction: column !important; 
          }
          .template-container .lg\\:flex { 
            display: block !important; 
          }
          .template-container .lg\\:px-8 { 
            padding-left: 1rem !important; 
            padding-right: 1rem !important; 
          }
          .template-container .lg\\:py-16 { 
            padding-top: 2rem !important; 
            padding-bottom: 2rem !important; 
          }
          .template-container .lg\\:gap-12 { 
            gap: 2rem !important; 
          }
          .template-container .lg\\:text-7xl { 
            font-size: 2.25rem !important; 
            line-height: 2.5rem !important; 
          }
        ` : ''}
        
        ${viewportSize === 'tablet' ? `
          .template-container .lg\\:grid-cols-4 { 
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important; 
          }
          .template-container .lg\\:grid-cols-3 { 
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important; 
          }
          .template-container .lg\\:text-7xl { 
            font-size: 3.75rem !important; 
            line-height: 1 !important; 
          }
        ` : ''}
      `}</style>

      <div className={`mt-4 mb-8 rounded-xl shadow-sm overflow-hidden border border-black/20 transition-all duration-300 ${getViewportClasses()}`}>
        {/* Browser header */}
        <div className="px-6 py-3 border-b border-black/20 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="px-4 py-2 rounded-md border border-black/20 text-sm text-black/60 font-mono bg-white">
                <div className="flex items-center gap-2">
                  <Coffee size={12} className="text-black/60"/>
                  klikylisto.com
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              {getViewportLabel()}
            </div>
          </div>
        </div>
        
        {/* Template content con simulación específica */}
        <div className="template-container relative bg-white overflow-hidden">
          {children}
        </div>
      </div>
    </>
  )
}

export default BrowserFrame
