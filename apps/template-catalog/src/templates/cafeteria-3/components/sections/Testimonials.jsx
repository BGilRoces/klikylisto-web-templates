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
    <section id="galeria" ref={ref} className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full border border-amber-500/20 mb-4">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-amber-200">Testimonios</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-white mb-4">
            Lo que dicen
            <span className="block mt-2 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              nuestros clientes
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Experiencias reales de quienes han descubierto el verdadero sabor del café.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:bg-white/10 h-full flex flex-col">
                
                {/* Rating stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-neutral-300 mb-6 italic leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
                
                {/* Customer info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-500/30"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-amber-400 text-xs">
                      {testimonial.role}
                    </p>
                    <p className="text-neutral-500 text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
