import "./navbar.css"
import React , {useState} from 'react'
import { Link } from "react-router-dom"
import {FaBars , FaTimes} from "react-icons/fa"
function Navbar() {

    const[click , setclick] = useState(false) ;
    const handleclick = () => setclick(!click);


    const[scrollcol , setcol] = useState(false) ; 
    const scrollchange = () => 
    {
        if(window.scrollY >= 100)
        {
             setcol(true) ; 
        }  
        else 
        {
            setcol(false) ; 
        } 
        
    } ; 
    window.addEventListener("scroll" , scrollchange ) ;







  return (
    <div className={scrollcol?"Header Header-bg" : "Header"}>

    <Link to={"/"}>
        <h1>Portfolio</h1>
    </Link>

    <ul className={click ? "NavMenu active" : "NavMenu"}>
    <li><Link to={"/"}>Home</Link></li>
<li><Link to={"/project"}>Projects</Link></li>
<li><Link to={"/about"}>About</Link></li>
<li><Link to={"/contact"}>Contact</Link></li>


    </ul>
<div className="hamburger" onClick={handleclick}>
    {
        click? (<FaTimes size={20} style={{color:"white"}}></FaTimes>) : (  <FaBars size={20} style={{color:"white"}}></FaBars>)
    }

  
</div>

    </div>
  )
}

export default Navbar