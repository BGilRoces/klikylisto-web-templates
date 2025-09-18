import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Wifi,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Coffee,
  Heart,
  Star,
  CheckCircle,
  Send
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+1 (555) 123-4567", "WhatsApp disponible"],
      color: "bg-amber-900"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 7:00 AM - 9:00 PM", "Sáb - Dom: 8:00 AM - 10:00 PM"],
      color: "bg-amber-900"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", color: "hover:text-amber-900" },
    { icon: Facebook, name: "Facebook", color: "hover:text-amber-900" },
    { icon: Twitter, name: "Twitter", color: "hover:text-amber-900" }
  ];

  return (
        <section id="contacto" ref={ref} className="relative py-12 bg-transparent text-amber-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-20 h-20"
        >
          <Coffee className="w-full h-full" />
        </motion.div>
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-16 h-16"
        >
          <Heart className="w-full h-full" />
        </motion.div>
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900/10 backdrop-blur-sm rounded-full mb-4 border border-amber-900/20"
          >
            <Mail className="w-4 h-4 text-amber-900/70" />
            <span className="font-medium text-sm text-amber-900/70">Contacto</span>
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-amber-900">
            ¡Visitanos Hoy!
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Contact Info Row */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center space-x-3 p-3 bg-amber-900/10 backdrop-blur-sm rounded-xl border border-amber-900/20 hover:bg-amber-900/20 transition-all duration-300">
                    <div className={`p-2 ${info.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-amber-900 text-sm">{info.title}</p>
                      <p className="text-amber-900/70 text-xs">{info.details[0]}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-amber-900/10 backdrop-blur-sm rounded-xl border border-amber-900/20 overflow-hidden"
            >
              <div className="p-3 border-b border-amber-900/20">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-900/70" />
                  <h3 className="font-medium text-amber-900 text-sm">Ubicación</h3>
                </div>
                <p className="text-amber-900/70 text-xs mt-1">Plaza de Armas, Centro de Lima</p>
              </div>
              <div className="relative h-40">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3068471282474!2d-77.03196208570175!3d-12.046374391456748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662c7%3A0x41d2a1f206a76a9e!2sPlaza%20de%20Armas%2C%20Cercado%20de%20Lima%2015001%2C%20Per%C3%BA!5e0!3m2!1ses!2sus!4v1694618234567!5m2!1ses!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-xl"
                ></iframe>
                <div className="absolute top-2 right-2">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Coffee className="w-3 h-3 text-amber-900/70" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media & Rating Combined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-4 bg-amber-900/10 backdrop-blur-sm rounded-xl border border-amber-900/20"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-amber-900 text-sm">Seguinos</h3>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-900 text-amber-900" />
                    ))}
                  </div>
                  <span className="text-amber-900 font-medium text-xs ml-1">4.9</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 bg-amber-900/10 rounded-lg cursor-pointer transition-all duration-300 ${social.color} hover:bg-amber-900/20`}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-amber-900/70 text-xs">2,847 reseñas</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-amber-900/20 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-amber-900 font-medium text-sm mb-2">
                        Nombre completo
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Juan Pérez"
                        className="w-full p-2.5 rounded-lg bg-amber-900/5 border border-amber-900/30 focus:outline-none focus:border-amber-900 focus:bg-amber-900/10 text-amber-900 placeholder-amber-900/50 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-amber-900 font-medium text-sm mb-2">
                        Correo electrónico
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        className="w-full p-2.5 rounded-lg bg-amber-900/5 border border-amber-900/30 focus:outline-none focus:border-amber-900 focus:bg-amber-900/10 text-amber-900 placeholder-amber-900/50 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-amber-900 font-medium text-sm mb-2">
                        Tu mensaje
                      </label>
                      <textarea 
                        rows="3" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos qué tienes en mente..."
                        className="w-full p-2.5 rounded-lg bg-amber-900/5 border border-amber-900/30 focus:outline-none focus:border-amber-900 focus:bg-amber-900/10 text-amber-900 placeholder-amber-900/50 transition-all duration-300 resize-none"
                        required
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-amber-900 hover:bg-amber-900/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-amber-900 rounded-full mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-amber-900/70 text-sm">
                    Te responderemos pronto.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
