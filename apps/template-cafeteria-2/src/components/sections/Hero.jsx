import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-coffee-900"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-coffee-400/30 rounded-full"
            animate={{
              y: [Math.random() * 800, -100],
              x: [Math.random() * 50 - 25, Math.random() * 50 - 25],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 lg:px-6 w-full max-w-7xl mx-auto">{/* Reducido el padding lateral */}
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-coffee-300 font-medium border border-white/20 text-sm tracking-wide">
            ✨ EXPERIENCIA DE CAFÉ PREMIUM
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight">
            <span className="block text-white">ROAST</span>
            <span className="block bg-gradient-to-r from-coffee-300 via-coffee-400 to-amber-400 bg-clip-text text-transparent">
              CRAFT
            </span>
          </h1>
        </motion.div>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
        >
          Donde la <span className="text-coffee-300 font-medium">Ciencia</span> se encuentra con el <span className="text-coffee-300 font-medium">Arte</span>
          <br className="hidden sm:block" />
          Café de especialidad tostado con precisión para el conocedor moderno
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <button 
            className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:scale-105 hover:-translate-y-1 transition-all duration-200 flex items-center space-x-3"
          >
            <Play size={20} className="group-hover:scale-110 transition-transform duration-200" />
            <span>Ver Nuestro Proceso</span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: "12", label: "Países de Origen" },
            { number: "95+", label: "Puntuación de Calidad" },
            { number: "48h", label: "Ciclo de Tostado" },
            { number: "3K+", label: "Clientes Satisfechos" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-coffee-300 mb-1">{stat.number}</div>
              <div className="text-white/70 text-sm font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 hover:text-white/80 cursor-pointer transition-colors p-2"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
