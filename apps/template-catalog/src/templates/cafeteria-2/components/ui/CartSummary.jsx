import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Trash2 } from 'lucide-react';

const CartSummary = ({ cart, removeFromCart, setShowCheckoutModal, isOpen, setIsOpen }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 md:sm:w-80 bg-gradient-to-br from-gray-900 via-black to-amber-950 shadow-2xl z-[999] flex flex-col border-l border-amber-400/30"
          >
            {/* Header */}
            <div className="p-6 md:p-4 border-b border-amber-400/30 flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-2">
                <div className="p-2 md:p-1.5 bg-amber-400/20 rounded-lg">
                  <ShoppingCart className="text-amber-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-lg font-bold text-white">Tu Carrito</h3>
                  <p className="text-sm md:text-xs text-white/60">{cart.length} {cart.length === 1 ? 'producto' : 'productos'}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 md:p-1.5 hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <X className="text-white" size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 md:p-4 space-y-4 md:space-y-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 md:w-16 md:h-16 bg-amber-400/10 rounded-full flex items-center justify-center mb-4 md:mb-3">
                    <ShoppingCart className="text-amber-400" size={32} />
                  </div>
                  <p className="text-white/60 text-lg md:text-base">Tu carrito está vacío</p>
                  <p className="text-white/40 text-sm md:text-xs mt-2">Agrega algunos productos para comenzar</p>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-lg p-4 md:p-3 border border-white/10 hover:border-amber-400/30 transition-all duration-200"
                  >
                    <div className="flex gap-4 md:gap-3">
                      <div className="w-20 h-20 md:w-16 md:h-16 bg-white/10 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm md:text-xs mb-1 truncate">
                          {item.name}
                        </h4>
                        <p className="text-white/60 text-xs md:text-[10px] mb-2 md:mb-1.5">{item.origin}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-amber-400 font-bold text-base md:text-sm">
                              ${item.price}.00
                            </p>
                            <p className="text-white/50 text-xs md:text-[10px]">
                              Cantidad: {item.quantity}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 md:p-1.5 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-all duration-200"
                          >
                            <Trash2 className="text-red-400" size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer - Total & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 md:p-4 border-t border-amber-400/30 bg-black/40 space-y-4 md:space-y-3">
                <div className="flex items-center justify-between text-lg md:text-base">
                  <span className="text-white/80 font-medium">Subtotal</span>
                  <span className="text-white font-bold">${total}.00</span>
                </div>
                <div className="flex items-center justify-between text-sm md:text-xs text-white/60">
                  <span>Envío</span>
                  <span>Calculado al pagar</span>
                </div>
                <div className="h-px bg-amber-400/20"></div>
                <div className="flex items-center justify-between text-xl md:text-lg">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-amber-400 font-bold">${total}.00</span>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowCheckoutModal(true);
                  }}
                  className="w-full px-6 py-4 md:px-4 md:py-3 text-base md:text-sm bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl md:rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50 hover:scale-105"
                >
                  Proceder al Pago
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSummary;
