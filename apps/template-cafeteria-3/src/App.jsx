/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MinimalNav from './components/layout/MinimalNav'
import CleanHero from './components/sections/CleanHero'
import SimpleAbout from './components/sections/SimpleAbout'
import ElegantMenu from './components/sections/ElegantMenu'
import ModernExperience from './components/sections/ModernExperience'
import ContactForm from './components/sections/ContactForm'
import Footer from './components/layout/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App bg-stone-50 text-stone-900">
      <MinimalNav scrollY={scrollY} />
      
      <main>
        <CleanHero />
        <SimpleAbout />
        <ElegantMenu />
        <ModernExperience />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
