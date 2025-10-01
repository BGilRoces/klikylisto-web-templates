import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CoffeeCard from '../ui/CoffeeCard';
import { coffeeData as coffees, categories as coffeeCategories } from '../../data/coffeeData';

const CoffeeCollection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['Todos', 'Origen Único', 'Mezclas Exclusivas', 'Edición Limitada'];
  
  const filteredCoffees = selectedCategory === 'Todos' || selectedCategory === 'all'
    ? coffees 
    : coffees.filter(coffee => {
        const categoryMap = {
          'Origen Único': 'single',
          'Mezclas Exclusivas': 'blend', 
          'Edición Limitada': 'limited'
        };
        return coffee.category === categoryMap[selectedCategory];
      });

  return (
    <section id="beans" ref={ref} className="py-16 bg-gradient-to-br from-gray-900 via-black to-amber-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-3 bg-amber-600/20 rounded-full text-amber-300 font-semibold mb-6 backdrop-blur-sm border border-amber-400/30 text-sm tracking-wide"
            >
              ☕ COLECCIÓN PREMIUM
            </motion.span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Orígenes
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-400 bg-clip-text text-transparent">
                del Café
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra selección cuidadosamente curada de granos de café premium de las mejores regiones productoras del mundo.
              Cada origen cuenta una historia única de terroir, tradición y sabor excepcional.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-200 border-2 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-600 shadow-lg shadow-amber-600/25'
                    : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20 hover:text-white hover:border-white/40 backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Coffee Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredCoffees.map((coffee, index) => (
                <motion.div
                  key={coffee.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CoffeeCard 
                    coffee={coffee} 
                    index={index} 
                    inView={inView}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default CoffeeCollection;
