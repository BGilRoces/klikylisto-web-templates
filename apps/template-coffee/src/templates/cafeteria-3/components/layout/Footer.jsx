import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart, ChevronUp, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white py-16 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl"></div>
        
        {/* Elegant floating coffee beans */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-3 bg-amber-600/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-4">
          {/* Premium brand section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-xl shadow-amber-500/30 border border-amber-400/30"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Coffee className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <span className="font-display text-3xl font-black text-white">Aroma</span>
                <p className="text-amber-200 text-sm font-medium tracking-wide">PREMIUM COFFEE EXPERIENCE</p>
              </div>
            </div>
            
            <p className="text-amber-100/80 leading-relaxed mb-6 font-light text-md">
              Desde 2020, creamos experiencias de café excepcionales que despiertan los sentidos 
              y conectan a las personas a través del arte del café artesanal premium.
            </p>
            
            {/* Social media premium */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, color: 'from-pink-500 to-purple-600' },
                { icon: Facebook, color: 'from-blue-500 to-blue-700' },
                { icon: Twitter, color: 'from-blue-400 to-blue-600' }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  className={`p-3 bg-gradient-to-br ${social.color} rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact info premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-xl text-white mb-6">Contacto Premium</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-100 font-medium">Av. Gourmet 123</p>
                  <p className="text-amber-200/70 text-sm">Centro Premium, Madrid</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-amber-100">+34 91 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-amber-100">hola@aroma.premium</p>
              </div>
            </div>
          </motion.div>
          
          {/* Hours premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-display font-bold text-xl text-white mb-6">Horarios</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-amber-200">Lun - Vie</span>
                <span className="text-amber-100 font-medium">6:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-amber-200">Sábados</span>
                <span className="text-amber-100 font-medium">7:00 - 23:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-amber-200">Domingos</span>
                <span className="text-amber-100 font-medium">8:00 - 21:00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
