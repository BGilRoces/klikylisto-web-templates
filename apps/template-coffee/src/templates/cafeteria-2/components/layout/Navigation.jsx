import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Coffee, ShoppingCart } from 'lucide-react';

const Navigation = ({ cart = [], setCartOpen }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
      // Intentar detectar scroll directo primero
      const handleScroll = () => {
        const currentScrollY = window.scrollY || window.pageYOffset || 0
        
        setScrolled(currentScrollY > 50)
        
        if (currentScrollY < 50) {
          setIsVisible(true)
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
          setIsOpen(false)
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true)
        }
        
        setLastScrollY(currentScrollY)
      }
      
      // Escuchar mensajes de scroll del padre/BrowserFrame
      const handleMessage = (event) => {
        if (event.data && event.data.type === 'IFRAME_SCROLL') {
          const { scrollTop, scrollDirection, isAtTop } = event.data
          
          setScrolled(scrollTop > 50)
          
          if (isAtTop || scrollTop < 50) {
            setIsVisible(true)
          } else if (scrollDirection === 'down' && scrollTop > 100) {
            setIsVisible(false)
            setIsOpen(false)
          } else if (scrollDirection === 'up') {
            console.log('⬆️ Mostrando navbar (scroll up)')
            setIsVisible(true)
          }
          
          setLastScrollY(scrollTop)
        }
      }
  
      window.addEventListener('scroll', handleScroll, { passive: true })
      window.addEventListener('message', handleMessage)
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('message', handleMessage)
      }
    }, [lastScrollY])
  
    const navItems = [
      { name: 'Inicio', href: '#home' },
      { name: 'Experiencia', href: '#experience' },
      { name: 'Tienda', href: '#tienda' },
      { name: 'Contacto', href: '#contact' },
    ]

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 transition-all duration-500 bg-black/90 backdrop-blur-lg border-b border-amber-400/30 py-3 shadow-xl shadow-black/40"
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => scrollToSection('#home')}
            >
              <div className="p-2 bg-amber-400/10 border border-amber-400 rounded-xl">
                <Coffee className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                ROAST<span className="text-amber-400">CRAFT</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={e => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      e.preventDefault();
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                    setIsOpen(false);
                  }}
                  className="text-white/90 hover:text-white hover:-translate-y-1 transition-all duration-300 font-medium text-sm tracking-wide py-2 border-b-2 border-transparent hover:border-amber-400"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Cart Icon */}
              <button
                onClick={() => setCartOpen && setCartOpen(true)}
                className="relative p-2 bg-amber-400/10 border border-amber-400/50 rounded-xl hover:bg-amber-400/20 transition-all duration-200 hover:scale-110"
              >
                <ShoppingCart className="w-5 h-5 text-amber-400" />
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg"
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button & Cart */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setCartOpen && setCartOpen(true)}
                className="relative p-2 bg-amber-400/10 border border-amber-400/50 rounded-xl hover:bg-amber-400/20 transition-all duration-200"
              >
                <ShoppingCart className="w-5 h-5 text-amber-400" />
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg"
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 md:p-1.5 hover:scale-110 transition-transform duration-200"
              >
                {isOpen ? <X size={24} className="md:w-5 md:h-5" /> : <Menu size={24} className="md:w-5 md:h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-amber-950 py-6 min-h-screen px-6 mt-12 rounded-b-xl shadow-2xl">
              <div className="max-w-sm mx-auto">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={e => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        e.preventDefault();
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                      setIsOpen(false);
                    }}
                    className="block w-full text-left text-white/80 hover:text-white py-4 text-lg font-medium border-b border-amber-400/20 last:border-b-0 hover:pl-4 transition-all duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
    </>
  );
};

export default Navigation;
