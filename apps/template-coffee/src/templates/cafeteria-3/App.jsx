/* eslint-disable no-unused-vars */
import React from 'react';
import { 
  Navigation,
  Footer,
  Hero,
  About,
  FeaturedMenu,
  Testimonials,
  Contact
} from './components';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/ui/CartDrawer';
import CartButton from './components/ui/CartButton';

// Componente principal App
function App() {
  return (
    <CartProvider>
      <div className="min-h-screen font-body bg-amber-900/5">
        <Navigation />
        <Hero />
        <About />
        <FeaturedMenu />
        <Testimonials />
        <Contact />
        <Footer />
        
        {/* Cart Components */}
        <CartButton />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
