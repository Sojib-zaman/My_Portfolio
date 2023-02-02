import React from 'react'
import Navbar from '../components/navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer'
import Form from '../components/form'
const Contact = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Heroimg2 heading = "Contact Me" text="Let's get connected"></Heroimg2>
    <Form></Form>
   <Footer></Footer>
   
   </div>
  )
}

export default Contact