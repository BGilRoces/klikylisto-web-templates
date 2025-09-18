import React from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import CoffeeCollection from './components/sections/CoffeeCollection';
import Lab from './components/sections/Lab';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Experience />
      <CoffeeCollection />
      <Lab />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
