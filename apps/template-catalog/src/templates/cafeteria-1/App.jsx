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

// Componente principal App
function App() {
  return (
    <div className="min-h-screen font-body">
      <Navigation />
      <Hero />
      <About />
      <FeaturedMenu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
