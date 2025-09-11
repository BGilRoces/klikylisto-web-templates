import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CatalogHome from './components/CatalogHome'
import TemplateViewer from './components/TemplateViewer'
import ScrollToTop from './components/ScrollToTop'
import { TEMPLATE_DATA } from './data/templates'

const App = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CatalogHome templates={TEMPLATE_DATA} />} />
        <Route path="/templates/:templateId" element={<TemplateViewer templates={TEMPLATE_DATA} />} />
      </Routes>
    </div>
  )
}

export default App
