import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-tr from-white via-gray-50 to-amber-50">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 font-medium mb-4 shadow-sm border border-amber-200/50">
            Contáctanos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Comienza Tu 
            <span className="bg-gradient-to-r from-amber-700 to-amber-400 bg-clip-text ml-2 text-transparent">
              Viaje
            </span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden p-4 md:p-8 lg:p-12 md:bg-white/80 md:backdrop-blur-md md:rounded-3xl md:border md:border-amber-200/60 md:shadow-xl md:shadow-amber-100/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-amber-300/15 to-orange-200/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-300/15 to-amber-200/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:col-span-1"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl shadow-sm border border-amber-200/30">
                  <MapPin className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Ubicación Principal</h4>
                  <p className="text-gray-700">123 Innovation Drive, Tech District</p>
                  <p className="text-gray-700">San Francisco, CA 94105</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl shadow-sm border border-amber-200/30">
                  <Phone className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Contacto</h4>
                  <p className="text-gray-700">+1 (555) 123-ROAST</p>
                  <p className="text-gray-700">hello@roastcraft.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl shadow-sm border border-amber-200/30">
                  <Clock className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Horarios</h4>
                  <p className="text-gray-700">Lunes - Viernes: 6:00 AM - 8:00 PM</p>
                  <p className="text-gray-700">Fin de Semana: 7:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Sigue Nuestro Viaje</h4>
              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-white/60 rounded-xl hover:bg-gradient-to-br hover:from-amber-100 hover:to-orange-100 transition-all duration-200 cursor-pointer shadow-sm border border-gray-200/50 hover:border-amber-300/50"
                >
                  <Instagram className="w-6 h-6 text-gray-700 hover:text-amber-800 transition-colors" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-white/60 rounded-xl hover:bg-gradient-to-br hover:from-amber-100 hover:to-orange-100 transition-all duration-200 cursor-pointer shadow-sm border border-gray-200/50 hover:border-amber-300/50"
                >
                  <Facebook className="w-6 h-6 text-gray-700 hover:text-amber-800 transition-colors" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-white/60 rounded-xl hover:bg-gradient-to-br hover:from-amber-100 hover:to-orange-100 transition-all duration-200 cursor-pointer shadow-sm border border-gray-200/50 hover:border-amber-300/50"
                >
                  <Twitter className="w-6 h-6 text-gray-700 hover:text-amber-800 transition-colors" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-amber-200/40 shadow-lg sm:col-span-2"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-3 bg-white/90 border border-gray-300/60 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200 shadow-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="w-full p-3 bg-white/90 border border-gray-300/60 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200 shadow-sm"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="w-full p-3 bg-white/90 border border-gray-300/60 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200 shadow-sm"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Tu Mensaje"
                  className="w-full p-3 bg-white/90 border border-gray-300/60 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200 shadow-sm resize-none"
                ></textarea>
              </div>
              <button
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-amber-600/30 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 border border-amber-500/20"
              >
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
