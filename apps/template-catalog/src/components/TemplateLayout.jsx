import React from 'react'
import Navigation from './layout/Navigation'
import BrowserFrame from './ui/BrowserFrame'

const TemplateLayout = ({ children, templateInfo }) => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation templateInfo={templateInfo} />

      <div className="pt-32 bg-gradient-to-b from-gray-100 to-white">
        <BrowserFrame templateInfo={templateInfo}>
          {children}
        </BrowserFrame>
      </div>
    </div>
  )
}

export default TemplateLayout
