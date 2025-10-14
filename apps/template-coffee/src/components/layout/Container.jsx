import React from 'react'

const Container = ({ 
  children, 
  size = 'default', 
  className = '',
  padding = true 
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-7xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  }

  const paddingClass = padding ? 'px-6' : ''

  return (
    <div className={`container mx-auto ${sizes[size]} ${paddingClass} ${className}`}>
      {children}
    </div>
  )
}

export default Container
