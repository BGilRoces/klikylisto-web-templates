import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, AlertCircle } from 'lucide-react'

const ErrorPage = ({ 
  title = "Template no encontrado", 
  message = "El template solicitado no existe",
  showBackButton = true 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <div className="mb-6">
          <AlertCircle size={64} className="text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600">{message}</p>
        </div>
        
        {showBackButton && (
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white rounded-lg font-medium transition-colors"
          >
            <ArrowLeft size={18} />
            Volver al Catálogo
          </Link>
        )}
      </div>
    </div>
  )
}

export default ErrorPage
