import "./aboutc.css"
import myphoto from "../images/me.jpg" 
import myphoto2 from "../images/me2.JPG" 
import React from 'react'
import { Link } from "react-router-dom"
const AboutMe = () => {
  return (
    <div className="about">
        <div className="left-ab">
            <h1>Who am I</h1>
            <p>I am currently studying Computer Science in BUET.  </p>
            <Link to="/contact">
                <button className="btn">Contact Me</button>
            </Link>

        </div>
        <div className="right-div">
        <div className="img-container">
            <div className="img-stack top">
                    <img src={myphoto} alt="my own photo" className="img_0"></img>

            </div>
            <div className="img-stack bottom">
                    <img src={myphoto2} alt="my own photo" className="img_0"></img>

            </div>

        </div>

        </div>


    </div>
  )
}

export default AboutMe