import React, { useState } from 'react'
import Navigation from './layout/Navigation'
import BrowserFrame from './ui/BrowserFrame'

const TemplateLayout = ({ children, templateInfo }) => {
  const [viewportSize, setViewportSize] = useState('desktop')

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation 
        templateInfo={templateInfo} 
        viewportSize={viewportSize}
        setViewportSize={setViewportSize}
      />

      <div className="pt-32 bg-gradient-to-b from-gray-100 to-white">
        <BrowserFrame templateInfo={templateInfo} viewportSize={viewportSize}>
          {children}
        </BrowserFrame>
      </div>
    </div>
  )
}

export default TemplateLayout
