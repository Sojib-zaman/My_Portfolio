import "./Heroimg.css"

import React from 'react'
import introimg from "../images/img0.png"
import { Link } from "react-router-dom"
function Heroimg() {
  return (
    <div className="Hero">

        <div className="mask">
          <img className="intro-img" src={introimg} alt="intro image"></img>
        </div>

      <div className="myintro">
        <div className="basic-info">
              <p>CS undergraduate </p>
              <h3>Eager to learn more everyday</h3>
        </div>
          <div>
            <Link to="/project" className="btn"> Projects
            </Link>
            <Link to="/contact" className="btn2"> CONTACT ME
            </Link>
          </div>

      </div>




    </div>
  )
}

export default Heroimg