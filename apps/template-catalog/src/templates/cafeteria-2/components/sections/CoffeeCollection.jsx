import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CoffeeCard from '../ui/CoffeeCard';
import { coffeeData as coffees, categories as coffeeCategories } from '../../data/coffeeData';

const CoffeeCollection = ({ addToCart, cart, updateQuantity, removeFromCart, setShowCheckoutModal }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const containerRef = useRef(null);
  
  // Detectar cuántos items mostrar según el ancho del contenedor
  useEffect(() => {
    const updateItemsPerView = () => {
      // Intentar obtener el ancho del contenedor real
      const container = containerRef.current;
      const width = container ? container.offsetWidth : window.innerWidth;
      
      if (width >= 900) setItemsPerView(3); // md: 3 cards (desktop pequeño)
      else if (width >= 600) setItemsPerView(2); // sm: 2 cards (tablet)
      else setItemsPerView(1); // xs: 1 card (mobile)
    };
    
    updateItemsPerView();
    
    // Usar ResizeObserver para detectar cambios en el contenedor
    const container = containerRef.current;
    if (container) {
      const resizeObserver = new ResizeObserver(updateItemsPerView);
      resizeObserver.observe(container);
      return () => resizeObserver.disconnect();
    }
    
    // Fallback a window resize
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);
  
  // Reset index cuando cambia la categoría
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);
  
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

  const maxIndex = Math.max(0, filteredCoffees.length - itemsPerView);
  
  const handlePrev = () => {
    setCurrentIndex(prev => {
      // Si estoy en el primero, voy al último posible
      if (prev === 0) {
        return maxIndex;
      }
      // Retroceder por itemsPerView, pero no menos de 0
      const newIndex = prev - itemsPerView;
      return Math.max(0, newIndex);
    });
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => {
      // Si estoy en el último o cerca, voy al primero
      if (prev >= maxIndex) {
        return 0;
      }
      // Avanzar por itemsPerView, pero no más del máximo
      const newIndex = prev + itemsPerView;
      return Math.min(maxIndex, newIndex);
    });
  };
  
  // Siempre se puede navegar en modo infinito si hay más items que los visibles
  const canGoPrev = filteredCoffees.length > itemsPerView;
  const canGoNext = filteredCoffees.length > itemsPerView;

  return (
    <section id="tienda" ref={ref} className="py-16 bg-gradient-to-br from-gray-900 via-black to-amber-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={containerRef} className="w-full px-6 lg:px-8 relative z-10">
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
              🛒 TIENDA PREMIUM
            </motion.span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Nuestra
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-400 bg-clip-text text-transparent">
                Selección
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explora nuestra colección de cafés premium cuidadosamente seleccionados. 
              Agrega tus favoritos al carrito y descubre sabores excepcionales de todo el mundo.
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

          {/* Coffee Carousel */}
          <div className="relative px-4 sm:px-8">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-50 rounded-full shadow-xl transition-all duration-300 ${
                canGoPrev 
                  ? 'hover:border text-white hover:scale-110 cursor-pointer border-amber-400/50 hover:shadow-2xl hover:shadow-amber-600/30' 
                  : 'text-gray-500 cursor-not-allowed opacity-40 border-gray-600/20'
              }`}
            >
              <ChevronLeft size={30} strokeWidth={2.5} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-50 rounded-full shadow-xl transition-all duration-300 ${
                canGoNext 
                  ? 'hover:border text-white hover:scale-110 cursor-pointer border-amber-400/50 hover:shadow-2xl hover:shadow-amber-600/30' 
                  : 'text-gray-500 cursor-not-allowed opacity-40 border-gray-600/20'
              }`}
            >
              <ChevronRight size={30} strokeWidth={2.5} />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedCategory}-${currentIndex}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10"
                >
                  {filteredCoffees.slice(currentIndex, currentIndex + itemsPerView).map((coffee, index) => {
                    const cartItem = cart.find(item => item.id === coffee.id);
                    return (
                      <motion.div
                        key={coffee.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex justify-center"
                      >
                        <div className="w-full">
                          <CoffeeCard 
                            coffee={coffee} 
                            index={index} 
                            inView={inView}
                            addToCart={addToCart}
                            cartItem={cartItem}
                            updateQuantity={updateQuantity}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            {filteredCoffees.length > itemsPerView && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex 
                        ? 'w-8 bg-amber-500' 
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoffeeCollection;
