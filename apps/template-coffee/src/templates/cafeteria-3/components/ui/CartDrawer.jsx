import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react'
import PreviewModal from '../../../../components/PreviewModal'
import { useCart } from '../../context/CartContext'

const CartDrawer = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    getCartTotal, 
    clearCart 
  } = useCart()
  
  const [showPreview, setShowPreview] = useState(false)

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-neutral-900">
                      Tu Carrito
                    </h2>
                    <p className="text-sm text-neutral-600">
                      {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'}
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-amber-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-neutral-700" />
                </motion.button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="overflow-y-auto p-6 space-y-4" style={{ height: 'calc(100vh - 400px)', minHeight: '300px' }}>
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-24 h-24 text-amber-200 mb-4" />
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">
                    Tu carrito está vacío
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Agrega algunos productos deliciosos
                  </p>
                  <motion.a
                    href="#menu"
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Productos
                  </motion.a>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-200"
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-neutral-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-neutral-600 mb-2">{item.category}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-amber-700">
                            {item.price}
                          </span>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 bg-white rounded-lg border border-amber-300 hover:bg-amber-100 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Minus className="w-4 h-4 text-amber-700" />
                            </motion.button>
                            
                            <span className="w-8 text-center font-bold text-neutral-900">
                              {item.quantity}
                            </span>
                            
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 bg-white rounded-lg border border-amber-300 hover:bg-amber-100 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Plus className="w-4 h-4 text-amber-700" />
                            </motion.button>
                            
                            <motion.button
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 bg-red-100 rounded-lg border border-red-300 hover:bg-red-200 transition-colors ml-2"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer with Total and Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 space-y-3">
                <div className="flex justify-between items-center text-lg mb-2">
                  <span className="font-semibold text-neutral-700">Subtotal:</span>
                  <span className="text-2xl font-bold text-amber-700">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
                
                <motion.button
                  onClick={() => setShowPreview(true)}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-3 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CreditCard className="w-5 h-5" />
                  Proceder al Pago
                </motion.button>
                
                {/* Botones en la misma fila */}
                <div className="grid grid-cols-2 gap-2">
                  <motion.a
                    href="#menu"
                    onClick={() => setIsCartOpen(false)}
                    className="bg-white text-amber-700 font-semibold py-2.5 px-3 rounded-xl border-2 border-amber-300 hover:bg-amber-50 transition-all duration-300 flex items-center justify-center gap-1.5 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Seguir
                  </motion.a>
                  
                  <motion.button
                    onClick={clearCart}
                    className="bg-white text-red-600 font-semibold py-2.5 px-3 rounded-xl border-2 border-red-300 hover:bg-red-50 transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Vaciar
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Preview Modal */}
          <PreviewModal show={showPreview} onClose={() => setShowPreview(false)} />
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
