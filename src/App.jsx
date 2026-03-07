import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Texnology from './components/Texnology'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Services from './components/Services'
import Team from './components/Team'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
  }, [])

  return (
    <>
      <Navbar/>
      <Hero/>
      <Texnology/>
      <Services/>
      <Team/>
    </>
  )
}

export default App