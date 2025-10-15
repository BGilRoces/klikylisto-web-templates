import React, { useState } from 'react'
import Navigation from './layout/Navigation'
import BrowserFrame from './ui/BrowserFrame'

const TemplateLayout = ({ children, templateInfo }) => {
  const [viewportSize, setViewportSize] = useState('desktop')
  const [isNavVisible, setIsNavVisible] = useState(true)

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation 
        templateInfo={templateInfo} 
        viewportSize={viewportSize}
        setViewportSize={setViewportSize}
        isNavVisible={isNavVisible}
        setIsNavVisible={setIsNavVisible}
      />

      <div className={`bg-gradient-to-b from-gray-100 to-white transition-all duration-300 ${
        isNavVisible ? 'pt-32' : 'pt-4'
      }`}>
        <BrowserFrame templateInfo={templateInfo} viewportSize={viewportSize}>
          {children}
        </BrowserFrame>
      </div>
    </div>
  )
}

export default TemplateLayout
