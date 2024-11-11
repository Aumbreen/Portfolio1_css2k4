
import React from 'react'

import Hero from './Hero'
import Navbar from './Navbar'

import Contact from './Contact/page'
import About from './About/page'
import Footer from './Footer/page'




const Home = () => {
  return (
    <div>
      
      <Navbar />

 
       <Hero /> 
       <About />
       <Contact />
       <Footer />

      </div>
  )
}

export default Home