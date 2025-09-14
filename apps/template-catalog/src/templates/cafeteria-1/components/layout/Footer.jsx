import React from 'react';
import { Coffee, Heart, ChevronUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-amber-900 text-white py-6 overflow-hidden border-t border-amber-900/70">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 left-10">
          <Coffee className="w-4 h-4" />
        </div>
        <div className="absolute top-4 right-16">
          <Coffee className="w-3 h-3" />
        </div>
        <div className="absolute bottom-2 left-1/3">
          <Coffee className="w-3 h-3" />
        </div>
        <div className="absolute bottom-3 right-10">
          <Coffee className="w-4 h-4" />
        </div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          {/* Logo section */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-amber-900/80 rounded-full border border-white/50">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display text-lg font-bold text-white">Café Luna</span>
              <p className="text-xs text-white/80 font-light">Desde 1985</p>
            </div>
          </div>
          
          {/* Copyright section with scroll button */}
          <div className="text-center md:text-right flex flex-col md:flex-row items-center gap-4">
            <div>
              <p className="text-sm text-white/80 flex items-center gap-1 justify-center md:justify-end">
                Hecho con <Heart className="w-3 h-3 fill-white text-white" /> para los amantes del café
              </p>
              <p className="text-xs text-white/70 mt-1">
                © 2024 Café Luna. Todos los derechos reservados.
              </p>
            </div>
            
            {/* Scroll to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 bg-amber-900/80 hover:bg-amber-900/90 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              aria-label="Volver al inicio"
            >
              <ChevronUp className="w-4 h-4 text-white group-hover:animate-bounce" />
            </button>
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="w-16 h-0.5 bg-amber-900 mx-auto rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
