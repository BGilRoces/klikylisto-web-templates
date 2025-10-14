import React from 'react'
import { Coffee } from 'lucide-react'

const LoadingSpinner = ({ size = 'md', text = 'Cargando...', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className={`${sizes[size]} animate-spin text-amber-600`}>
        <Coffee />
      </div>
      {text && (
        <p className="text-gray-600 text-sm font-medium">{text}</p>
      )}
    </div>
  )
}

export default LoadingSpinner
