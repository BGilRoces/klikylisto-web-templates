import React from 'react'
import Navigation from './layout/Navigation'
import BrowserFrame from './ui/BrowserFrame'

const TemplateLayout = ({ children, templateInfo }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation templateInfo={templateInfo} />

      <div className="pt-32 bg-gradient-to-b from-gray-300 to-gray-200">
        <BrowserFrame templateInfo={templateInfo}>
          {children}
        </BrowserFrame>
      </div>
    </div>
  )
}

export default TemplateLayout
