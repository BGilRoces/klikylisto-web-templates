import React from 'react';
import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Coffee className="w-6 h-6" />
          <span className="font-display text-xl font-bold">Café Luna</span>
        </div>
        <p className="text-amber-100">
          © 2024 Café Luna. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
