import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <div className='Footer'>
        <div className='Container'>
            <div className='left-part-of-footer'>
                <div className='location'>
                   <h3> <FaHome size={20} style = {{marginRight: "2rem"}}></FaHome>
                    TajMahal Road , Mohammadpur , Dhaka - 1207
                    </h3>
                </div>
                <div className='Phone'>
                   <h3> <FaPhone size={20} style = {{marginRight: "2rem"}}></FaPhone>
                    
                        01878117219
                    </h3>
                </div>
                <div className='mail'>
                    <h3>  <FaMailBulk size={20} style = {{marginRight: "2rem"}}></FaMailBulk>
                  
                        sojibxaman439@gmail.com
                    </h3>
                </div>

            </div>
            <div className='right-part-of-footer'>
                <div className='basic-about-me'>
                <h4>About Myself</h4>
                <p>My name is MD.Roqunuzzaman Sojib. Currently I am a student of BUET Undergrad in CSE. I enjoy learning and creating new projects.</p>
            </div>

            <div className='social'>
                <Link to = "https://www.facebook.com/roqunurzaman.sojib " ><FaFacebook size={30} style = {{marginRight: "2rem"}}/> </Link>
                <Link to = "https://twitter.com/SojibZaman3 " ><FaTwitter size={30} style = {{marginRight: "2rem"}}/></Link>
                <Link to = "https://www.linkedin.com/in/md-roqunuzzman-sojib-3134ba244/ " ><FaLinkedin size={30} style = {{marginRight: "2rem"}}/></Link>
                <Link to = "https://github.com/Sojib-zaman " ><FaGithub size={30} style = {{marginRight: "2rem"}}/></Link>
                <Link to = "https://www.instagram.com/sojib_67/ " ><FaInstagram size={30} style = {{marginRight: "2rem"}}/></Link>


            </div>
            </div>



        </div>



    </div>
  )
}

export default Footer