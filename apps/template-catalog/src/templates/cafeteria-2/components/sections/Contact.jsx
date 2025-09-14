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
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-black to-amber-950">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-600/20 rounded-full text-amber-300 font-medium mb-4 backdrop-blur-sm border border-amber-400/30">
            Contáctanos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Comienza Tu 
            <span className="bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text ml-2 text-transparent">
              Viaje
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-600/20 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Ubicación Principal</h4>
                  <p className="text-white/70">123 Innovation Drive, Tech District</p>
                  <p className="text-white/70">San Francisco, CA 94105</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-600/20 rounded-xl">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Contacto</h4>
                  <p className="text-white/70">+1 (555) 123-ROAST</p>
                  <p className="text-white/70">hello@roastcraft.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-600/20 rounded-xl">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Horarios</h4>
                  <p className="text-white/70">Lunes - Viernes: 6:00 AM - 8:00 PM</p>
                  <p className="text-white/70">Fin de Semana: 7:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Sigue Nuestro Viaje</h4>
              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-white/10 rounded-xl hover:bg-amber-600/20 transition-colors cursor-pointer"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-white/10 rounded-xl hover:bg-amber-600/20 transition-colors cursor-pointer"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-white/10 rounded-xl hover:bg-amber-600/20 transition-colors cursor-pointer"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Tu Mensaje"
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-600/25 hover:scale-105 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
