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
      name: "Espresso Luna Premium",
      description: "Nuestra exclusiva mezcla signature con complejas notas de chocolate belga, caramelo artesanal y un toque de vainilla bourbon",
      price: "$6.50",
      badge: "Signature",
      category: "Espresso",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Cappuccino Artesanal Gold",
      description: "Espuma de leche de cabra perfectamente texturizada con arte latte personalizado y un toque de polvo de oro comestible",
      price: "$8.25",
      badge: "Premium",
      category: "Cappuccino",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Croissant de Almendra & Miel",
      description: "Hojaldre artesanal horneado cada amanecer con almendras de Sicilia, miel de lavanda y mantequilla francesa",
      price: "$5.75",
      badge: "Artesanal",
      category: "Pastelería",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="menu" ref={ref} className="py-6 bg-gradient-to-br from-slate-50 via-white to-amber-50/20 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-16 w-80 h-80 bg-gradient-to-tl from-amber-300/25 to-yellow-400/15 rounded-full blur-3xl"></div>
        
        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-6 h-6 bg-amber-400/60 rounded-full"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-orange-500/50 rounded-full"
          animate={{
            x: [0, 20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-100/90 to-orange-100/80 backdrop-blur-md rounded-full border border-amber-300/50 mb-10 shadow-xl shadow-amber-200/30"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ☕
            </motion.div>
            <span className="text-amber-800 font-bold tracking-widest text-sm uppercase">Menú Premium</span>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-slate-800 via-amber-900 to-slate-800 bg-clip-text text-transparent">
              Nuestras
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Creaciones
            </span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 mx-auto rounded-full shadow-lg shadow-amber-400/50"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        <div           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Premium card with glassmorphism */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl border border-amber-200/50 overflow-hidden shadow-2xl shadow-amber-100/30 group-hover:shadow-3xl group-hover:shadow-amber-200/40 transition-all duration-500 h-full flex flex-col">
                
                {/* Premium image container */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Premium gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating badge with premium styling */}
                  <motion.div 
                    className="absolute top-6 left-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-amber-500/95 to-orange-600/95 backdrop-blur-xl text-white text-xs font-bold rounded-full border border-amber-400/30 shadow-xl shadow-amber-500/25">
                      {item.badge}
                    </div>
                  </motion.div>
                  
                  {/* Category tag */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-white/95 backdrop-blur-md text-amber-800 text-xs font-semibold rounded-full border border-amber-300/50 shadow-lg">
                    {item.category}
                  </div>
                </div>
                
                {/* Premium content area */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-6 flex-grow">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-amber-900 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light text-base">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Premium rating and stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-amber-200/30">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.1 + 0.8 }}
                          >
                            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-slate-700 text-sm font-semibold">{item.rating}</span>
                    </div>
                    
                    <motion.button
                      className="group/btn relative px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 text-sm">Ordenar</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      />
                    </motion.button>
                  </div>
                </div>
                
                {/* Premium hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </div>
              
              {/* Floating glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
