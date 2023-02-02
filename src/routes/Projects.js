import React from 'react'
import Navbar from '../components/navbar'

import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Workcard from '../components/Workcard'
export const Projects = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimg2 heading = "PROJECTS" text="Some of my recent works"></Heroimg2>

      <Workcard></Workcard>
     <Footer></Footer>
     
     </div>
  )
}

export default Projects