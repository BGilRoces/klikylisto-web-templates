import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div id="inicio" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background más oscuro para mejor legibilidad */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(139,69,19,0.6) 50%, rgba(0,0,0,0.8) 100%), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-300/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-200/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-2000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-4 max-w-4xl"
      >
        {/* Badge superior 
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-amber-100 mb-4"
        >
          ✨ Desde 1985 • Tradición y Calidad
        </motion.div>*/}

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        >
          Café <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-yellow-200 bg-clip-text text-transparent">Luna</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light mb-6 max-w-2xl mx-auto text-gray-100 leading-relaxed"
        >
          Donde cada taza cuenta una historia y cada momento se convierte en un recuerdo especial
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-600 via-amber-700 to-orange-600 hover:from-amber-500 hover:via-amber-600 hover:to-orange-500 text-white px-4 py-2 text-lg font-bold rounded-lg transition-all duration-500 shadow-xl hover:shadow-amber-500/40 border-2 border-amber-400/30"
            onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative flex items-center gap-2">
              ✨ Menú
            </span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/15 hover:bg-white/25 text-white px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-300 backdrop-blur-md border-2 border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl"
            onClick={() => document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-2">
               🤎 Nosotros
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
