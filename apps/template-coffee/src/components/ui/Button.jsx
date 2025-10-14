import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  to, 
  onClick, 
  disabled = false,
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-xl border focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-amber-800 hover:bg-amber-900 text-white border-amber-800 focus:ring-amber-500',
    secondary: 'bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-200 focus:ring-amber-300',
    outline: 'bg-transparent hover:bg-amber-50 text-amber-800 border-amber-300 focus:ring-amber-300',
    ghost: 'bg-transparent hover:bg-amber-50 text-amber-800 border-transparent focus:ring-amber-300'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-6 py-4 text-base'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`
  
  const content = (
    <>
      {Icon && <Icon size={16} />}
      {children}
    </>
  )
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }
  
  return (
    <button 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button
