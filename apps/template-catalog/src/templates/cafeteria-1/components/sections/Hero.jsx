import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6">
          Café <span className="text-amber-200">Luna</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
          Donde cada taza cuenta una historia y cada momento se convierte en un recuerdo especial
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg rounded-lg font-medium transition-colors duration-200"
        >
          Descubrir nuestro menú
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
