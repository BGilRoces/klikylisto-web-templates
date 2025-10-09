import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-950 via-stone-900 to-black text-white py-10 md:py-8">
      <div className="w-full px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 md:gap-5 mb-8 md:mb-6">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 md:space-x-2 mb-4 md:mb-3"
            >
              <div className="p-3 md:p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl md:rounded-lg shadow-lg">
                <Coffee className="w-7 h-7 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-3xl md:text-2xl font-bold bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">ROASTCRAFT</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 text-base md:text-sm mb-4 md:mb-3 max-w-md leading-relaxed"
            >
              Creando el futuro del café a través del tostado de precisión, métodos innovadores de preparación y un compromiso inquebrantable con la calidad.
            </motion.p>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-white text-base md:text-sm mb-4 md:mb-3">Enlaces Rápidos</h4>
            <ul className="space-y-2 md:space-y-1.5">
              <li>
                <a href="#home" className="text-gray-300 text-base md:text-sm hover:text-amber-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 text-base md:text-sm hover:text-amber-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#collection" className="text-gray-300 text-base md:text-sm hover:text-amber-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Colección
                </a>
              </li>
              <li>
                <a href="#lab" className="text-gray-300 text-base md:text-sm hover:text-amber-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Laboratorio de Innovación
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 text-base md:text-sm hover:text-amber-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-2">
          <div className="flex flex-col md:flex-row items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm md:text-xs mb-2 md:mb-0"
            >
              © 2024 KlikYListo. Todos los derechos reservados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-2 text-gray-400 text-sm md:text-xs"
            >
              <span>klikylisto@gmail.com</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
