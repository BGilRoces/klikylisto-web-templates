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
      name: "María González",
      text: "El mejor café de la ciudad. El ambiente es perfecto para trabajar y relajarse.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      text: "Vengo aquí todas las mañanas. El personal es increíble y el café excepcional.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      text: "Mi lugar favorito para reunirme con amigos. ¡Los pasteles son deliciosos!",
      rating: 5
    }
  ];

  return (
    <section id="galeria" ref={ref} className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-amber-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-amber-900">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
