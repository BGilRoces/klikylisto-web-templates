import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, CreditCard, Mail } from 'lucide-react';

const PreviewModal = forwardRef(function PreviewModal({ show, onClose }, ref) {
  if (typeof window === 'undefined') return null;
  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 flex items-center justify-center z-[60] p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            ref={ref}
            tabIndex={-1}
            className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-sm sm:max-w-lg w-full shadow-2xl"
          >
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 text-gray-500" />
            </motion.button>
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold text-neutral-900 mb-3">
                ¡Contactanos!
              </h3>
              <p className="text-md text-neutral-700 mb-5 leading-relaxed">
                Esta es una <strong className="text-amber-600">demostración interactiva</strong> de un sistema completo para cafeterías: <strong className="text-orange-600">e-commerce</strong> y <strong className="text-orange-600">sitio web informativo responsive</strong>.
              </p>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-3 mb-6 text-left">
                <h4 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-amber-600" />
                  Funcionalidades Destacadas:
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Diseño web moderno, visual y <strong>100% responsive</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Secciones informativas personalizables (menú, contacto, horarios, galería, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Carrito de compras y gestión de pedidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Integración con MercadoPago (opcional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Notificaciones por email y WhatsApp</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-2.5 mb-6">
                <p className="text-sm text-green-900 font-semibold">
                  💼 ¿Te interesa este sistema para tu negocio?
                  <br />
                  <span className="font-normal">Contáctanos para implementarlo con todas las funcionalidades.</span>
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <motion.button
                  onClick={onClose}
                  className="bg-white text-neutral-700 font-bold py-2 rounded-xl border-2 border-neutral-300 hover:bg-neutral-50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cerrar
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => {
                    onClose && onClose();
                    setTimeout(() => {
                      const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';
                      if (isHome) {
                        const el = document.getElementById('contact-form');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else {
                          const headerBtn = Array.from(document.querySelectorAll('button, a')).find(
                            b => b.textContent && b.textContent.replace(/\s+/g, '').toLowerCase().includes('contactarahora')
                          );
                          if (headerBtn) headerBtn.click();
                        }
                      } else {
                        try {
                          localStorage.setItem('scrollToContactForm', '1');
                        } catch {}
                        window.location.href = '/';
                      }
                    }, 200);
                  }}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-2 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5" />
                  Contactar
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
});

export default PreviewModal;
