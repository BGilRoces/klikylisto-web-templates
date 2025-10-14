import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = ({ 
  phoneNumber = "541162387920", 
  message = "Hola! Me interesa crear un sitio web para mi cafetería. ¿Podrían darme más información?",
  variant = "default",
  size = "default",
  className = "",
  children,
  showIcon = true
}) => {
  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  // Variantes de estilo
  const variants = {
    default: "bg-green-500/20 text-green-300 hover:bg-green-500/30 border border-green-500/30",
    solid: "bg-green-500 text-white hover:bg-green-600",
    outline: "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    ghost: "text-green-500 hover:bg-green-500/10",
    footer: "p-2 bg-green-500/20 rounded-lg hover:bg-green-500/30 transition-all duration-300",
    "footer-clean": "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-slate-400/50 text-white font-medium"
  }

  // Tamaños
  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-4 py-3",
    lg: "px-6 py-4 text-lg",
    icon: "p-2"
  }

  const baseClasses = "inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-300 cursor-pointer"
  const variantClass = variants[variant] || variants.default
  const sizeClass = sizes[size] || sizes.default

  return (
    <button
      onClick={openWhatsApp}
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`}
      title="Contactar por WhatsApp"
    >
      {showIcon && (
        variant === "footer-clean" ? (
          <div className="p-1.5 bg-green-500/20 rounded-lg">
            <MessageCircle size={14} className="text-green-300" />
          </div>
        ) : (
          <MessageCircle size={size === 'sm' ? 16 : size === 'lg' ? 20 : 16} />
        )
      )}
      {children}
    </button>
  )
}

export default WhatsAppButton
