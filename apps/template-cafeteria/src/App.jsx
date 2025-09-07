import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Clock, 
  Star,
  Instagram,
  Facebook,
  Twitter,
  Wifi,
  Heart,
  Users,
  Award
} from 'lucide-react';

// Componente Hero
const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6">
          Café <span className="text-cream-300">Luna</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
          Donde cada taza cuenta una historia y cada momento se convierte en un recuerdo especial
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary text-lg px-8 py-4"
        >
          Descubrir nuestro menú
        </motion.button>
      </motion.div>
    </div>
  );
};

// Componente About
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-coffee-800 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-coffee-600 text-lg leading-relaxed mb-6">
              Desde 2010, Café Luna ha sido el corazón de nuestra comunidad. 
              Comenzamos como un pequeño sueño de crear un espacio donde las personas 
              pudieran conectarse, relajarse y disfrutar del mejor café artesanal.
            </p>
            <p className="text-coffee-600 text-lg leading-relaxed mb-8">
              Hoy, seguimos comprometidos con la calidad, la sostenibilidad y 
              la creación de momentos especiales para cada uno de nuestros clientes.
            </p>
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-coffee-100 rounded-full mb-3">
                  <Coffee className="w-8 h-8 text-coffee-600" />
                </div>
                <span className="text-coffee-800 font-semibold">Café Premium</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-coffee-100 rounded-full mb-3">
                  <Heart className="w-8 h-8 text-coffee-600" />
                </div>
                <span className="text-coffee-800 font-semibold">Hecho con Amor</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-coffee-100 rounded-full mb-3">
                  <Users className="w-8 h-8 text-coffee-600" />
                </div>
                <span className="text-coffee-800 font-semibold">Comunidad</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Interior del café"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-cream-600" />
                <div>
                  <p className="font-semibold text-coffee-800">Mejor Café 2023</p>
                  <p className="text-coffee-600 text-sm">Ciudad Magazine</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente Menu destacado
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
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Cappuccino Artesanal",
      description: "Espuma de leche perfecta con arte latte personalizado",
      price: "$5.25",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Croissant de Almendra",
      description: "Horneado fresco cada mañana con almendras locales",
      price: "$3.75",
      image: "https://images.unsplash.com/photo-1555507036-ab794f99c504?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-coffee-800 mb-4">
            Nuestros Favoritos
          </h2>
          <p className="text-coffee-600 text-lg max-w-2xl mx-auto">
            Descubre los sabores que han conquistado el corazón de nuestra comunidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-semibold text-coffee-800">
                    {item.name}
                  </h3>
                  <span className="text-cream-600 font-bold text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-coffee-600 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cream-400 text-cream-400" />
                  ))}
                  <span className="ml-2 text-coffee-600 text-sm">(4.9)</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Testimonials
const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: "María González",
      text: "El mejor café de la ciudad. El ambiente es perfecto para trabajar y relajarse.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      text: "Vengo aquí todas las mañanas. El personal es increíble y el café excepcional.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      text: "Mi lugar favorito para reunirme con amigos. ¡Los pasteles son deliciosos!",
      rating: 5
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-coffee-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-coffee-800 mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cream-400 text-cream-400" />
                ))}
              </div>
              <p className="text-coffee-600 mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-coffee-800">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Contact
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-coffee-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl font-bold mb-8">
              Visítanos
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-cream-300" />
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-cream-200">Av. Principal 123, Centro Histórico</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-cream-300" />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-cream-200">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-cream-300" />
                <div>
                  <p className="font-semibold">Horarios</p>
                  <p className="text-cream-200">Lunes a Viernes: 7:00 AM - 9:00 PM</p>
                  <p className="text-cream-200">Sábados y Domingos: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Wifi className="w-6 h-6 text-cream-300" />
                <div>
                  <p className="font-semibold">WiFi Gratis</p>
                  <p className="text-cream-200">Conexión de alta velocidad para todos</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-cream-300 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-cream-300 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-cream-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-cream-100 p-8 rounded-2xl"
          >
            <h3 className="font-display text-2xl font-bold text-coffee-800 mb-6">
              Contáctanos
            </h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Tu nombre"
                  className="w-full p-3 rounded-lg border border-cream-300 focus:outline-none focus:border-coffee-500 text-coffee-800"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Tu email"
                  className="w-full p-3 rounded-lg border border-cream-300 focus:outline-none focus:border-coffee-500 text-coffee-800"
                />
              </div>
              <div>
                <textarea 
                  rows="4" 
                  placeholder="Tu mensaje"
                  className="w-full p-3 rounded-lg border border-cream-300 focus:outline-none focus:border-coffee-500 text-coffee-800"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary"
              >
                Enviar mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Navigation
const Navigation = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coffee className={`w-8 h-8 ${isScrolled ? 'text-coffee-600' : 'text-white'}`} />
            <span className={`font-display text-2xl font-bold ${
              isScrolled ? 'text-coffee-800' : 'text-white'
            }`}>
              Café Luna
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Inicio', 'Nosotros', 'Menú', 'Contacto'].map((item) => (
              <a 
                key={item}
                href="#" 
                className={`font-medium hover:text-cream-300 transition-colors ${
                  isScrolled ? 'text-coffee-600' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Componente principal App
function App() {
  return (
    <div className="min-h-screen font-body">
      <Navigation />
      <Hero />
      <About />
      <FeaturedMenu />
      <Testimonials />
      <Contact />
      
      <footer className="bg-coffee-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="w-6 h-6" />
            <span className="font-display text-xl font-bold">Café Luna</span>
          </div>
          <p className="text-cream-200">
             2024 Café Luna. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
