import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: "María Elena González",
      role: "Sommelier de Café",
      text: "La experiencia más sublime que he tenido. Cada taza es una obra maestra que despierta los sentidos y transporta a los orígenes más exquisitos del café mundial.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      location: "Madrid, España"
    },
    {
      name: "Carlos Alberto Ruiz",
      role: "Crítico Gastronómico",
      text: "Un santuario del café artesanal. El nivel de excelencia es incomparable, desde la selección de granos hasta la presentación final. Una experiencia verdaderamente premium.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      location: "Barcelona, España"
    },
    {
      name: "Ana Isabella Martínez",
      role: "Empresaria & Coffee Lover",
      text: "Mi refugio perfecto para reuniones importantes y momentos de inspiración. La ambientación, el servicio y por supuesto, el café, están en una liga completamente diferente.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      location: "Valencia, España"
    }
  ];

  return (
    <section id="galeria" ref={ref} className="py-6 bg-gradient-to-br from-amber-50/50 via-white to-slate-50 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-amber-300/25 to-yellow-400/20 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-8 h-8 bg-amber-400/40 rounded-full"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-orange-500/30 rounded-full"
          animate={{
            x: [0, 30, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-100/90 to-orange-100/80 backdrop-blur-md rounded-full border border-amber-300/50 mb-10 shadow-xl shadow-amber-200/30"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐
            </motion.div>
            <span className="text-amber-800 font-bold tracking-widest text-sm uppercase">Testimonios Premium</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              ❤️
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-slate-800 via-amber-900 to-slate-800 bg-clip-text text-transparent">
              Voces de
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Excelencia
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Descubre por qué los conocedores más exigentes eligen nuestra experiencia premium
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Premium testimonial card */}
              <div className="relative bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-amber-200/50 shadow-2xl shadow-amber-100/30 group-hover:shadow-3xl group-hover:shadow-amber-200/40 transition-all duration-500 h-full flex flex-col">
                
                {/* Quote icon with premium styling */}
                <motion.div
                  className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/30 border border-amber-400/30"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                >
                  <span className="text-white text-xl font-bold">"</span>
                </motion.div>
                
                {/* Premium rating stars */}
                <motion.div 
                  className="flex mb-6 pt-4"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.2 + 0.8 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-amber-500 text-amber-500 mr-1" />
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Premium testimonial text */}
                <motion.p 
                  className="text-slate-700 mb-8 italic leading-relaxed text-lg font-light flex-grow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 1 }}
                >
                  "{testimonial.text}"
                </motion.p>
                
                {/* Premium customer info */}
                <motion.div 
                  className="flex items-center gap-4 pt-6 border-t border-amber-200/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + 1.2 }}
                >
                  {/* Premium avatar */}
                  <div className="relative">
                    <motion.img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover border-3 border-amber-300/50 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-slate-900 text-lg group-hover:text-amber-900 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-amber-700 font-semibold text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-slate-500 text-xs font-medium">
                      📍 {testimonial.location}
                    </p>
                  </div>
                </motion.div>
                
                {/* Premium hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </div>
              
              {/* Floating glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
