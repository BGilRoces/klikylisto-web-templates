import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Lab = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const innovations = [
    {
      title: "Tostado con IA",
      description: "Algoritmos de aprendizaje automático optimizan cada lote para una consistencia perfecta.",
      icon: "🤖",
      tech: "IA y ML"
    },
    {
      title: "Mapeo de Sabores",
      description: "Análisis sensorial avanzado crea perfiles de sabor únicos para cada grano.",
      icon: "🧬",
      tech: "Análisis Sensorial"
    },
    {
      title: "Control Climático",
      description: "Sistemas ambientales de precisión aseguran condiciones óptimas de almacenamiento.",
      icon: "🌡️",
      tech: "Sensores IoT"
    },
    {
      title: "Seguimiento de Calidad",
      description: "La tecnología blockchain rastrea cada grano desde la finca hasta la taza.",
      icon: "📊",
      tech: "Blockchain"
    }
  ];

  return (
    <section id="lab" ref={ref} className="py-20 bg-gradient-to-br from-white via-gray-50 to-amber-50">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-700 font-medium mb-4">
            Laboratorio de Innovación
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Futuro del
            <br />
            <span className="bg-gradient-to-r from-amber-700 to-amber-400 bg-clip-text text-transparent">
              Café
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empujando los límites de la perfección del café a través de tecnología de vanguardia y procesos innovadores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-200 border border-gray-100"
            >
              <div className="text-4xl mb-4">{innovation.icon}</div>
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                  {innovation.tech}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{innovation.title}</h3>
              <p className="text-gray-600 leading-relaxed">{innovation.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-2xl p-12 border border-amber-200/50 shadow-lg">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-200/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-amber-900">Experimenta el Futuro</h3>
              <p className="text-xl mb-8 text-amber-700/80">
                Visita nuestra ubicación principal del laboratorio para presenciar la innovación del café en acción.
              </p>
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-200">
                Reservar Tour del Laboratorio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Lab;
