import React from 'react'
import { motion } from 'framer-motion'
import Container from '../layout/Container'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const TemplatesSection = ({ children }) => {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  return (
    <section ref={targetRef} id="templates-section" className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Nuestros Diseños Personalizados
          </h2>
          <p className="text-lg text-amber-800 max-w-xl mx-auto">
            Cada sitio web está diseñado específicamente para tu cafetería
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {children}
        </div>
      </Container>
    </section>
  )
}

export default TemplatesSection
