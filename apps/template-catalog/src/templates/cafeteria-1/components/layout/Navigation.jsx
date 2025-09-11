import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Menu, X } from 'lucide-react';

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
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-amber-100' 
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
              isScrolled ? 'bg-amber-100' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Coffee className={`w-7 h-7 ${isScrolled ? 'text-amber-700' : 'text-white'}`} />
            </div>
            <div>
              <span className={`font-display text-3xl font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-amber-900' : 'text-white'
              }`}>
                Café Luna
              </span>
              <p className={`text-xs font-elegant font-medium tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-amber-600' : 'text-amber-100'
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
                    ? 'text-amber-800 hover:bg-amber-100 hover:text-amber-900' 
                    : 'text-white hover:bg-white/20 hover:text-amber-100'
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
                  ? 'bg-amber-700 text-white hover:bg-amber-800 shadow-lg'
                  : 'bg-white text-amber-900 hover:bg-amber-100 shadow-xl'
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
              isScrolled ? 'text-amber-700 hover:bg-amber-100' : 'text-white hover:bg-white/20'
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
            isScrolled ? 'border-t border-amber-100' : 'border-t border-white/20'
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
                    ? 'text-amber-800 hover:bg-amber-50'
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
                  ? 'bg-amber-700 text-white hover:bg-amber-800'
                  : 'bg-white text-amber-900 hover:bg-amber-100'
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

export default Navigation;
