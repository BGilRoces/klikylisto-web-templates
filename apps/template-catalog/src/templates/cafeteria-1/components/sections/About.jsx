import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Clock, 
  Heart,
  Users,
  Award,
  Coffee
} from 'lucide-react';
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: "15+", label: "Años de Experiencia", icon: Clock },
    { number: "10K+", label: "Clientes Felices", icon: Heart },
    { number: "50+", label: "Variedades de café", icon: Coffee },
    { number: "5", label: "Premios Ganados", icon: Award }
  ];

  const values = [
    {
      icon: Coffee,
      title: "Calidad Premium",
      description: "Seleccionamos granos de café de las mejores fincas del mundo, tostados artesanalmente para garantizar el sabor perfecto en cada taza."
    },
    {
      icon: Heart,
      title: "Pasión por el Servicio",
      description: "Cada miembro de nuestro equipo está apasionado por crear experiencias memorables y brindar el mejor servicio a nuestros clientes."
    },
    {
      icon: Users,
      title: "Comunidad Local",
      description: "Somos más que una cafetería; somos un punto de encuentro donde la comunidad se reúne, trabaja y crea conexiones significativas."
    }
  ];

  return (
    <section id="nosotros" ref={ref} className="py-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section - Más minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-6 py-2 bg-amber-900/5 border border-amber-900/20 text-amber-900 text-md font-semibold rounded-full mb-6 shadow-lg"
          >
            ☕ Conoce Nuestra Historia
          </motion.span>
        </motion.div>

        {/* Main Story Section - Diseño más limpio */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 leading-tight">
                Una Historia de Pasión y Tradición
              </h3>
              <div className="w-16 h-1 bg-amber-900/60 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-amber-900/80 leading-relaxed">
              <p className="text-lg">
                Café Luna nació en 1985 del sueño de María y Carlos Hernández, una pareja apasionada
                por el café y la hospitalidad. Lo que comenzó como un pequeño local en el corazón
                de la ciudad, se ha convertido en el punto de encuentro favorito de tres generaciones.
              </p>
              <p className="text-lg">
                Nuestra filosofía siempre ha sido simple: servir el mejor café posible en un ambiente
                acogedor donde cada persona se sienta como en casa.
              </p>
            </div>
            
            {/* Features list */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-900/40 rounded-full shadow-sm"></div>
                <span className="text-amber-900/80 font-medium">Granos seleccionados de origen</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-900/60 rounded-full shadow-sm"></div>
                <span className="text-amber-900/80 font-medium">Tostado artesanal diario</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-900/80 rounded-full shadow-sm"></div>
                <span className="text-amber-900/80 font-medium">Comercio justo y sustentable</span>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-16 pt-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="text-lg px-6 py-2.5 bg-amber-900 hover:bg-amber-900/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Visitanos
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Grid de imágenes más limpio */}
            <div className="relative">
              <div className="grid grid-cols-12 grid-rows-8 gap-4 h-96">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Interior del café"
                  className="col-span-8 row-span-5 rounded-3xl object-cover w-full h-full shadow-2xl"
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Barista preparando café"
                  className="col-span-4 row-span-3 rounded-2xl object-cover w-full h-full shadow-xl"
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Granos de café"
                  className="col-span-4 row-span-2 rounded-2xl object-cover w-full h-full shadow-xl"
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Taza de café artesanal"
                  className="col-span-8 row-span-3 rounded-2xl object-cover w-full h-full shadow-xl"
                />
              </div>
              
              {/* Badge flotante más moderno */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-amber-900/10"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-900/10 rounded-xl">
                    <Award className="w-5 h-5 text-amber-900/70" />
                  </div>
                  <div>
                    <p className="font-bold text-amber-900 text-sm">Mejor café 2024</p>
                    <p className="text-amber-900/70 text-xs">Guía Gastronómica</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Diseño más clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-amber-900/5 rounded-3xl shadow-lg border border-amber-900/10 p-8 md:p-12 mb-40"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-amber-900/10 hover:bg-amber-900/20 rounded-2xl transition-all duration-300 shadow-sm">
                  <stat.icon className="w-6 h-6 text-amber-900/70 hover:text-amber-900 transition-colors" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-amber-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-amber-900/70 text-sm font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section - Más minimalista */}
      </div>
      
      <div className="bg-amber-900/5 py-16 border-y border-amber-900/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Nuestros Valores
            </h3>
            <div className="w-16 h-1 bg-amber-900 rounded-full mx-auto mb-4"></div>
            <p className="text-amber-900/70 max-w-2xl mx-auto font-medium">
              Los principios que guían cada decisión y cada taza que servimos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-amber-900/5 p-8 rounded-3xl border border-amber-900/20 hover:border-amber-900/30 transition-all duration-300 hover:shadow-lg h-full">
                <div className="flex items-center justify-center w-14 h-14 mb-6 bg-amber-900/10 rounded-2xl group-hover:bg-amber-900/20 transition-all duration-300 shadow-sm">
                  <value.icon className="w-7 h-7 text-amber-900/70 group-hover:text-amber-900 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-amber-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-amber-900/70 leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
