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
    <section id="nosotros" ref={ref} className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-elegant text-amber-600 text-lg tracking-wider uppercase mb-4 block">
            Conoce Nuestra Historia
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-amber-900 mb-6">
            Nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-700 to-amber-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-3xl font-bold text-amber-900 mb-6">
              Una Historia de Pasión y Tradición
            </h3>
            <p className="text-amber-700 text-lg leading-relaxed">
              Café Luna nació en 1985 del sueño de María y Carlos Hernández, una pareja apasionada
              por el café y la hospitalidad. Lo que comenzó como un pequeño local en el corazón
              de la ciudad, se ha convertido en el punto de encuentro favorito de tres generaciones.
            </p>
            <p className="text-amber-700 text-lg leading-relaxed">
              Nuestra filosofía siempre ha sido simple: servir el mejor café posible en un ambiente
              acogedor donde cada persona se sienta como en casa. Trabajamos directamente con
              productores locales, apoyando el comercio justo y la sustentabilidad.
            </p>
            <p className="text-amber-700 text-lg leading-relaxed">
              Hoy, dirigidos por la segunda generación de la familia Hernández, seguimos
              innovando mientras honramos nuestras tradiciones, creando experiencias únicas
              que van más allá de una simple taza de café.
            </p>
            
            {/* Call to Action */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white font-heading font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Visitanos Hoy
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Interior del café"
                className="rounded-2xl shadow-xl col-span-2 h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Barista preparando café"
                className="rounded-2xl shadow-xl h-32 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Granos de café"
                className="rounded-2xl shadow-xl h-32 object-cover"
              />
            </div>
            
            {/* Floating Award Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-2xl border border-amber-100"
            >
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-amber-900">Mejor café 2024</p>
                  <p className="text-amber-700 text-sm">Guía Gastronómica</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-700 to-amber-800 rounded-full group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="font-heading text-3xl font-bold text-amber-900 mb-2">
                {stat.number}
              </div>
              <div className="text-amber-700 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-3xl font-bold text-amber-900 mb-4">
            Nuestros Valores
          </h3>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto">
            Los principios que guían cada decisión y cada taza que servimos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-amber-100 to-amber-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="font-heading text-xl font-bold text-amber-900 mb-4">
                {value.title}
              </h4>
              <p className="text-amber-700 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
