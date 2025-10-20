import React, { useEffect, useRef, useState } from 'react'
import { Coffee } from 'lucide-react'
import ReactDOM from 'react-dom/client'

const BrowserFrame = ({ children, templateInfo, viewportSize = 'desktop' }) => {
  const iframeRef = useRef(null)
  const [key, setKey] = useState(0)

  // Dimensiones de viewport según dispositivo
  const viewportDimensions = {
    desktop: { width: '100%', maxWidth: 'none' },
    tablet: { width: '820px', maxWidth: '100%' }, // iPad dimensiones
    mobile: { width: '428px', maxWidth: '100%' }  // iPhone 13 Pro Max dimensiones
  }

  const currentDimensions = viewportDimensions[viewportSize] || viewportDimensions.desktop

  // Forzar re-render del iframe cuando cambia el viewport
  useEffect(() => {
    setKey(prev => prev + 1)
  }, [viewportSize])

  // Renderizar contenido en el iframe
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
    if (!iframeDoc) return

    // Crear documento HTML en el iframe
    iframeDoc.open()
    iframeDoc.write(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Template Preview</title>
        </head>
        <body style="margin: 0; padding: 0; overflow-x: hidden;">
          <div id="iframe-root"></div>
        </body>
      </html>
    `)
    iframeDoc.close()

    // Copiar todos los estilos al iframe
    setTimeout(() => {
      const stylesheets = Array.from(document.styleSheets)
      stylesheets.forEach(stylesheet => {
        try {
          if (stylesheet.href) {
            const link = iframeDoc.createElement('link')
            link.rel = 'stylesheet'
            link.href = stylesheet.href
            iframeDoc.head.appendChild(link)
          } else if (stylesheet.ownerNode) {
            const style = stylesheet.ownerNode.cloneNode(true)
            iframeDoc.head.appendChild(style)
          }
        } catch (e) {
          console.warn('Could not copy stylesheet:', e)
        }
      })

      // Renderizar React en el iframe
      const iframeRoot = iframeDoc.getElementById('iframe-root')
      if (iframeRoot && children) {
        const root = ReactDOM.createRoot(iframeRoot)
        root.render(children)
      }

      // Agregar listener de scroll en el iframe
      const iframeWindow = iframe.contentWindow
      if (iframeWindow) {
        let lastScrollTop = 0
        
        const handleIframeScroll = () => {
          const scrollTop = iframeWindow.scrollY || iframeDoc.documentElement.scrollTop
          
          // Enviar mensaje al padre con información del scroll
          window.postMessage({
            type: 'IFRAME_SCROLL',
            scrollTop: scrollTop,
            scrollDirection: scrollTop > lastScrollTop ? 'down' : 'up',
            isAtTop: scrollTop === 0
          }, '*')
          
          lastScrollTop = scrollTop
        }

        iframeWindow.addEventListener('scroll', handleIframeScroll)
        
        // Cleanup
        return () => {
          iframeWindow.removeEventListener('scroll', handleIframeScroll)
        }
      }
    }, 100)
  }, [children, key])

  return (
    <div className="flex justify-center px-4">
      <div 
        className="mt-4 mb-8 rounded-xl shadow-sm overflow-hidden border border-black/20 transition-all duration-300"
        style={{ 
          width: currentDimensions.width,
          maxWidth: currentDimensions.maxWidth
        }}
      >
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
            
            <a 
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700/15 hover:bg-gray-800/35 text-gray-700 text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden md:block">Catálogo</span>
            </a>
          </div>
        </div>
        
        {/* Template content en iframe para viewport real */}
        <iframe
          key={key}
          ref={iframeRef}
          className="w-full border-0 bg-white"
          style={{ 
            minHeight: '100vh',
            display: 'block'
          }}
          title="Template Preview"
        />
      </div>
    </div>
  )
}

export default BrowserFrame
