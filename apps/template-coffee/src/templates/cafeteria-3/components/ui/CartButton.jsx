import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const CartButton = () => {
  const { getCartCount, setIsCartOpen } = useCart()
  const count = getCartCount()

  return (
    <motion.button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-full shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 transition-all duration-300"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <ShoppingCart className="w-6 h-6" />
      
      <AnimatePresence>
        {count > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg"
          >
            {count}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default CartButton
