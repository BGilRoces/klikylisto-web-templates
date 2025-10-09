import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import CoffeeCollection from './components/sections/CoffeeCollection';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CartSummary from './components/ui/CartSummary';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (coffee) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === coffee.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...coffee, quantity: 1 }];
    });
  };

  const removeFromCart = (coffeeId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== coffeeId));
  };

  const updateQuantity = (coffeeId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(coffeeId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === coffeeId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Navigation 
        cart={cart} 
        setShowCheckoutModal={setShowCheckoutModal}
        setCartOpen={setCartOpen}
      />
      <Hero />
      <Experience />
      <CoffeeCollection 
        addToCart={addToCart}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        setShowCheckoutModal={setShowCheckoutModal}
      />
      <Contact />
      <Footer />

      {/* Cart Summary Panel */}
      <CartSummary
        cart={cart}
        removeFromCart={removeFromCart}
        setShowCheckoutModal={setShowCheckoutModal}
        isOpen={cartOpen}
        setIsOpen={setCartOpen}
      />

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-amber-500/50 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-amber-500/20">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-amber-500">
                  <span className="text-4xl">🛒</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  ¡Esto es solo una maqueta!
                </h3>
                <p className="text-white/70 text-lg">
                  Esta es una demostración visual de una tienda de café.
                </p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
                <p className="text-amber-300 text-sm">
                  💡 <strong>Nota:</strong> El carrito de compras no procesa pagos reales. 
                  Es una representación visual para mostrar el diseño de la interfaz.
                </p>
              </div>
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-lg shadow-amber-600/30"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
