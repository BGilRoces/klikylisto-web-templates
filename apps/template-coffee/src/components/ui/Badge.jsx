import React from 'react'

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  icon: Icon,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center gap-2 rounded-xl font-medium transition-all duration-300 cursor-pointer'
  
  const variants = {
    default: 'bg-amber-800/30 backdrop-blur-sm text-amber-100 border border-amber-600/20 hover:bg-amber-700/40 hover:shadow-lg hover:shadow-amber-500/20',
    orange: 'bg-orange-800/30 backdrop-blur-sm text-orange-100 border border-orange-600/20 hover:bg-orange-700/40 hover:shadow-lg hover:shadow-orange-500/20',
    light: 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
  }
  
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <div className={classes}>
      {Icon && <Icon size={16} />}
      {children}
    </div>
  )
}

export default Badge
