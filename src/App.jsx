import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Texnology from './components/Texnology'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Services from './components/Services'
import Team from './components/Team'
import Process from './components/Process'

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
      <Process/>
    </>
  )
}

export default App