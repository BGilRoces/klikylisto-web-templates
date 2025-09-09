import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="w-full px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="p-2 bg-gradient-to-r from-coffee-500 to-coffee-600 rounded-lg">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ROASTCRAFT</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/70 mb-6 max-w-md"
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
            <h4 className="font-bold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-coffee-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#experience" className="text-white/70 hover:text-coffee-400 transition-colors">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#collection" className="text-white/70 hover:text-coffee-400 transition-colors">
                  Colección
                </a>
              </li>
              <li>
                <a href="#lab" className="text-white/70 hover:text-coffee-400 transition-colors">
                  Laboratorio de Innovación
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-coffee-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Coffee Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-white mb-4">Arte del Café</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-white/70">Origen Único</span>
              </li>
              <li>
                <span className="text-white/70">Mezclas Exclusivas</span>
              </li>
              <li>
                <span className="text-white/70">Ediciones Limitadas</span>
              </li>
              <li>
                <span className="text-white/70">Guías de Preparación</span>
              </li>
              <li>
                <span className="text-white/70">Proceso de Tostado</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-white/50 text-sm mb-4 md:mb-0"
            >
              © 2024 RoastCraft. Todos los derechos reservados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-2 text-white/50 text-sm"
            >
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>para los amantes del café</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
