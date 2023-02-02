import React from 'react'
import Navbar from '../components/navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import Workcard from '../components/Workcard'
const Homepage = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Heroimg></Heroimg>
     <Workcard></Workcard>
     <Footer></Footer>
    </div>
  )
}

export default Homepage