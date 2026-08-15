import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Menu  from './sections/Menu'
import Whychoose  from './sections/Whychoose'
import Events from './sections/Events'
import Chefs from "./sections/Chefs";
import Reservations from './sections/Reservations'
import SpecialEvents from './sections/SpecialEvents'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {

  return (
   <>
       <Navbar />
       <Hero />
       <About />
       <Menu />
       <Whychoose />
       <Events />
       <Chefs />
       <Reservations />
       <SpecialEvents />
       <Gallery />
       <Testimonials />
       <Contact />  
       <Footer />

    </>

   
  )
}

export default App
