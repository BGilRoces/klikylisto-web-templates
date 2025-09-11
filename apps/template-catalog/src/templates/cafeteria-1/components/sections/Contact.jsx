import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Wifi,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contacto" ref={ref} className="py-20 bg-amber-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl font-bold mb-8">
              Visitanos
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-amber-200" />
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-amber-100">Av. Principal 123, Centro Histórico</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-amber-200" />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-amber-100">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-amber-200" />
                <div>
                  <p className="font-semibold">Horarios</p>
                  <p className="text-amber-100">Lunes a Viernes: 7:00 AM - 9:00 PM</p>
                  <p className="text-amber-100">Sábados y Domingos: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Wifi className="w-6 h-6 text-amber-200" />
                <div>
                  <p className="font-semibold">WiFi Gratis</p>
                  <p className="text-amber-100">Conexión de alta velocidad para todos</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Seguinos</h3>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-amber-200 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-amber-200 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-amber-200 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-amber-100 p-8 rounded-2xl"
          >
            <h3 className="font-display text-2xl font-bold text-amber-900 mb-6">
              Contactanos
            </h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Tu nombre"
                  className="w-full p-3 rounded-lg border border-amber-200 focus:outline-none focus:border-amber-600 text-amber-900"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Tu email"
                  className="w-full p-3 rounded-lg border border-amber-200 focus:outline-none focus:border-amber-600 text-amber-900"
                />
              </div>
              <div>
                <textarea 
                  rows="4" 
                  placeholder="Tu mensaje"
                  className="w-full p-3 rounded-lg border border-amber-200 focus:outline-none focus:border-amber-600 text-amber-900"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Enviar mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
