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
import MenuPage from './components/pages/MenuPage'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Simple routing system
  const navigateToMenu = () => {
    setCurrentPage('menu')
    window.scrollTo(0, 0)
  }

  const navigateToHome = () => {
    setCurrentPage('home')
    window.scrollTo(0, 0)
  }

  // Make navigation functions available globally
  useEffect(() => {
    window.navigateToMenu = navigateToMenu
    window.navigateToHome = navigateToHome
  }, [])

  if (currentPage === 'menu') {
    return <MenuPage onBack={navigateToHome} />
  }

  return (
    <div className="App bg-stone-50 text-stone-900">
      <MinimalNav scrollY={scrollY} onMenuClick={navigateToMenu} />
      
      <main>
        <CleanHero onMenuClick={navigateToMenu} />
        <SimpleAbout />
        <ElegantMenu onMenuClick={navigateToMenu} />
        <ModernExperience />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
