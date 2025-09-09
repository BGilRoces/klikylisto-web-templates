/* eslint-disable no-unused-vars */
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
  Award,
  Menu,
  X
} from 'lucide-react';

// Componente Hero
const Hero = () => {
  return (
    <div id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
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

// Componente Nosotros
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: "15+", label: "Años de Experiencia", icon: Clock },
    { number: "10K+", label: "Clientes Felices", icon: Heart },
    { number: "50+", label: "Variedades de Café", icon: Coffee },
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
    <section id="nosotros" ref={ref} className="py-20 bg-gradient-to-br from-cream-50 via-white to-coffee-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-elegant text-cream-600 text-lg tracking-wider uppercase mb-4 block">
            Conoce Nuestra Historia
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-coffee-800 mb-6">
            Nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coffee-600 to-cream-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-3xl font-bold text-coffee-800 mb-6">
              Una Historia de Pasión y Tradición
            </h3>
            <p className="text-coffee-600 text-lg leading-relaxed">
              Café Luna nació en 1985 del sueño de María y Carlos Hernández, una pareja apasionada 
              por el café y la hospitalidad. Lo que comenzó como un pequeño local en el corazón 
              de la ciudad, se ha convertido en el punto de encuentro favorito de tres generaciones.
            </p>
            <p className="text-coffee-600 text-lg leading-relaxed">
              Nuestra filosofía siempre ha sido simple: servir el mejor café posible en un ambiente 
              acogedor donde cada persona se sienta como en casa. Trabajamos directamente con 
              productores locales, apoyando el comercio justo y la sustentabilidad.
            </p>
            <p className="text-coffee-600 text-lg leading-relaxed">
              Hoy, dirigidos por la segunda generación de la familia Hernández, seguimos 
              innovando mientras honramos nuestras tradiciones, creando experiencias únicas 
              que van más allá de una simple taza de café.
            </p>
            
            {/* Call to Action */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-coffee-600 to-coffee-700 text-white font-heading font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Visítanos Hoy
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
              className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-2xl border border-cream-200"
            >
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-cream-400 to-cream-600 rounded-full">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-coffee-800">Mejor Café 2024</p>
                  <p className="text-coffee-600 text-sm">Guía Gastronómica</p>
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
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-coffee-600 to-coffee-700 rounded-full group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="font-heading text-3xl font-bold text-coffee-800 mb-2">
                {stat.number}
              </div>
              <div className="text-coffee-600 font-medium">
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
          <h3 className="font-heading text-3xl font-bold text-coffee-800 mb-4">
            Nuestros Valores
          </h3>
          <p className="text-coffee-600 text-lg max-w-2xl mx-auto">
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
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-coffee-100 to-cream-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-coffee-600" />
              </div>
              <h4 className="font-heading text-xl font-bold text-coffee-800 mb-4">
                {value.title}
              </h4>
              <p className="text-coffee-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
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
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="menu" ref={ref} className="py-20 bg-white">
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
    <section id="galeria" ref={ref} className="py-20 bg-coffee-50">
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
    <section id="contacto" ref={ref} className="py-20 bg-coffee-800 text-white">
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Menú', href: '#menu' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-coffee-100' 
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${
              isScrolled ? 'bg-coffee-100' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Coffee className={`w-7 h-7 ${isScrolled ? 'text-coffee-600' : 'text-white'}`} />
            </div>
            <div>
              <span className={`font-display text-3xl font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-coffee-800' : 'text-white'
              }`}>
                Café Luna
              </span>
              <p className={`text-xs font-elegant font-medium tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-coffee-500' : 'text-cream-200'
              }`}>
                Desde 1985
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a 
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full font-heading font-medium tracking-wide transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-coffee-700 hover:bg-coffee-100 hover:text-coffee-800' 
                    : 'text-white hover:bg-white/20 hover:text-cream-100'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-4 px-6 py-2 rounded-full font-heading font-semibold tracking-wide transition-all duration-300 ${
                isScrolled
                  ? 'bg-coffee-600 text-white hover:bg-coffee-700 shadow-lg'
                  : 'bg-white text-coffee-800 hover:bg-cream-100 shadow-xl'
              }`}
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ordenar Ahora
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-coffee-600 hover:bg-coffee-100' : 'text-white hover:bg-white/20'
            }`}
          >
            <motion.div
              animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className={`py-4 space-y-2 ${
            isScrolled ? 'border-t border-coffee-100' : 'border-t border-white/20'
          }`}>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
                className={`block px-4 py-3 rounded-lg font-heading font-medium tracking-wide transition-colors ${
                  isScrolled
                    ? 'text-coffee-700 hover:bg-coffee-50'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: navItems.length * 0.1 }}
              className={`w-full mt-4 px-4 py-3 rounded-lg font-heading font-semibold tracking-wide transition-colors ${
                isScrolled
                  ? 'bg-coffee-600 text-white hover:bg-coffee-700'
                  : 'bg-white text-coffee-800 hover:bg-cream-100'
              }`}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setTimeout(() => {
                  document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
            >
              Ordenar Ahora
            </motion.button>
          </div>
        </motion.div>
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
