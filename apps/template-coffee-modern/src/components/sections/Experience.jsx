import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Thermometer, Users, Globe, Star, ArrowRight } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    <section id="experience" ref={ref} className="py-24 bg-gradient-to-br from-white via-gray-50 to-coffee-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="w-full px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-coffee-100 rounded-full text-coffee-700 font-semibold mb-6 text-sm tracking-wide"
            >
              LA EXPERIENCIA ROASTCRAFT
            </motion.span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Donde la <span className="bg-gradient-to-r from-coffee-600 to-coffee-400 bg-clip-text text-transparent">Ciencia</span>
              <br />
              Se Encuentra con el <span className="bg-gradient-to-r from-coffee-600 to-coffee-400 bg-clip-text text-transparent">Arte</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada taza cuenta una historia de precisión, pasión y perfección. Desde la selección del grano hasta la preparación final, 
              creamos experiencias de café excepcionales.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Features Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group flex items-start space-x-6 p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-coffee-500/10 transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-xl text-gray-900">{feature.title}</h4>
                      <span className="text-coffee-600 font-bold text-sm bg-coffee-50 px-3 py-1 rounded-full">
                        {feature.stat}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-coffee-500 group-hover:translate-x-1 transition-all duration-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="col-span-2 relative overflow-hidden rounded-3xl shadow-2xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Laboratorio moderno de tostado de café"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="font-bold text-xl mb-2">Laboratorio de Innovación</h4>
                    <p className="text-sm opacity-90">La tecnología de precisión se encuentra con la artesanía tradicional</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Sesión de catación de café"
                    className="w-full h-32 sm:h-40 object-cover"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1521302200778-33500795e128?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Equipos especializados"
                    className="w-full h-32 sm:h-40 object-cover"
                  />
                </motion.div>
              </div>

              {/* Floating Award Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white p-6 rounded-2xl shadow-2xl transform rotate-12"
              >
                <Star className="w-8 h-8 mb-2" />
                <div className="text-sm font-bold">Premio</div>
                <div className="text-xs">Ganador</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-coffee-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
