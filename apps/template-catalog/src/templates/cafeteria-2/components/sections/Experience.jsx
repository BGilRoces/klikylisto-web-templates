import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Thermometer, Users, Globe, Star, ArrowRight } from 'lucide-react';

const Experience = () => {
  const [inView, setInView] = useState(true);

  const features = [
    {
      icon: Globe,
      title: "Abastecimiento Global",
      description: "Alianzas directas con cultivadores de café de más de 12 países asegurando prácticas éticas y sostenibles.",
      color: "from-blue-500 to-cyan-500",
      stat: "12+ Países"
    },
    {
      icon: Thermometer,
      title: "Tostado de Precisión",
      description: "Tecnología de tostado de vanguardia con control de temperatura hasta el grado.",
      color: "from-orange-500 to-red-500",
      stat: "Precisión ±1°C"
    },
    {
      icon: Award,
      title: "Excelencia en Calidad",
      description: "Puntuaciones consistentes de 90+ puntos con institutos internacionales de calidad de café.",
      color: "from-purple-500 to-pink-500",
      stat: "Puntuación 95+"
    },
    {
      icon: Users,
      title: "Curaduría Experta",
      description: "Maestros tostadores con décadas de experiencia creando perfiles de sabor perfectos.",
      color: "from-green-500 to-emerald-500",
      stat: "20+ Años"
    }
  ];

  const stats = [
    { number: "50K+", label: "Tazas Servidas", icon: "☕" },
    { number: "15", label: "Maestros Tostadores", icon: "👨‍🍳" },
    { number: "48h", label: "Ciclo de Tostado", icon: "⏱️" },
    { number: "98%", label: "Satisfacción del Cliente", icon: "⭐" }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-16 bg-gradient-to-br from-white via-gray-50 to-amber-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-20 md:mb-12"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-3 md:py-1.5 bg-amber-100 rounded-full text-amber-700 font-semibold mb-4 sm:mb-6 md:mb-4 text-xs sm:text-sm md:text-xs tracking-wide"
            >
              LA EXPERIENCIA ROASTCRAFT
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-4 leading-tight px-4">
              Donde la <span className="bg-gradient-to-r from-amber-700 to-amber-400 bg-clip-text text-transparent">Ciencia</span>
              <br />
              Se Encuentra con el <span className="bg-gradient-to-r from-amber-700 to-amber-400 bg-clip-text text-transparent">Arte</span>
            </h2>
            <p className="text-base sm:text-lg md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Cada taza cuenta una historia de precisión, pasión y perfección. Desde la selección del grano hasta la preparación final, 
              creamos experiencias de café excepcionales.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 md:gap-10 items-center mb-16 sm:mb-24 md:mb-14">
            {/* Features Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 sm:space-y-6 md:space-y-4"
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="rounded-2xl md:rounded-xl bg-gradient-to-r from-amber-700 to-amber-400 shadow-lg group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.01 }}
                    className="group flex items-start space-x-3 sm:space-x-6 md:space-x-4 p-4 sm:p-6 md:p-4 rounded-xl sm:rounded-2xl md:rounded-xl bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-amber-600/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`p-3 sm:p-4 md:p-3 rounded-xl sm:rounded-2xl md:rounded-xl bg-gradient-to-r ${feature.color} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 md:mb-2 gap-2">
                        <h4 className="font-bold text-base sm:text-xl md:text-base text-gray-900">{feature.title}</h4>
                        <span className="text-amber-700 font-bold text-xs sm:text-sm md:text-xs bg-amber-50 px-2.5 py-1 md:px-2 md:py-0.5 rounded-full w-fit">
                          {feature.stat}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base md:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 hidden sm:block" />
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 0.5 }}
                  className="col-span-2 relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Laboratorio moderno de tostado de café"
                    className="w-full h-48 sm:h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 md:bottom-4 md:left-4 text-white">
                    <h4 className="font-bold text-sm sm:text-xl md:text-base mb-1 sm:mb-2 md:mb-1">Laboratorio de Innovación</h4>
                    <p className="text-xs sm:text-sm md:text-xs opacity-90 hidden sm:block">La tecnología de precisión se encuentra con la artesanía tradicional</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -0.5 }}
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-xl shadow-lg sm:shadow-xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Sesión de catación de café"
                    className="w-full h-28 sm:h-32 md:h-28 lg:h-32 object-cover"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0.5 }}
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-xl shadow-lg sm:shadow-xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1521302200778-33500795e128?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Equipos especializados"
                    className="w-full h-28 sm:h-32 md:h-28 lg:h-32 object-cover"
                  />
                </motion.div>
              </div>

              {/* Floating Award Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-3 md:-right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white p-4 sm:p-6 md:p-4 rounded-xl sm:rounded-2xl md:rounded-xl shadow-xl sm:shadow-2xl transform rotate-12"
              >
                <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-6 md:h-6 mb-1 sm:mb-2 md:mb-1" />
                <div className="text-xs sm:text-sm md:text-xs font-bold">Premio</div>
                <div className="text-[10px] sm:text-xs md:text-[10px]">Ganador</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 md:gap-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="text-center p-4 sm:p-6 md:p-4 bg-white rounded-xl sm:rounded-2xl md:rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-3xl sm:text-4xl md:text-3xl mb-2 sm:mb-3 md:mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-amber-700 mb-1 sm:mb-2 md:mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-xs tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;