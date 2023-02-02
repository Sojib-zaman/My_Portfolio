import React from 'react'
import Navbar from '../components/navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
const About = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Heroimg2 heading = "About me" text="Just a CS student"></Heroimg2>
    <AboutMe></AboutMe>
   <Footer></Footer>
   
   </div>
  )
}

export default About