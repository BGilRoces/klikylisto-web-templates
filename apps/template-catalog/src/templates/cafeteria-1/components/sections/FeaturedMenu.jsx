import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const FeaturedMenu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const menuItems = [
    {
      name: "Espresso Luna",
      description: "Nuestro signature blend con notas de chocolate y caramelo",
      price: "$4.50",
      badge: "Signature",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Cappuccino Artesanal",
      description: "Espuma de leche perfecta con arte latte personalizado",
      price: "$5.25",
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Croissant de Almendra",
      description: "Horneado fresco cada mañana con almendras locales",
      price: "$3.75",
      badge: "Artesanal",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="menu" ref={ref} className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-2 bg-slate-300/10 border border-orange-400 text-amber-800 text-sm font-medium rounded-full mb-6 shadow-lg"
          >
            ☕ Menú Destacado
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent mb-4">
            Nuestros Favoritos
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl border border-amber-100 overflow-hidden hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-amber-800 text-xs font-semibold rounded-full border border-amber-200 shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-amber-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-amber-600 text-sm font-medium">4.9</span>
                    <span className="text-amber-400 text-sm">•</span>
                    <span className="text-amber-600 text-sm font-medium">Bestseller</span>
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

export default FeaturedMenu;
