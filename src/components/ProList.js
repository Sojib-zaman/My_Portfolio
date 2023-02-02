import React from 'react'
import { NavLink } from "react-router-dom"

const Prolist =(props)=> {
  return (
    
    <div className="project-card">
        {console.log(props)}
    <img className='proj-image' src={props.imgsrc} alt="image"></img>
    <h2 className="project-title">{props.title}</h2>
    <div className="Project-details">

        <p>{props.text}</p>
        <div   className="pro-btn">
            <NavLink to={props.view} className="btn">view</NavLink>

            <NavLink to={props.source}  className="btn">Source</NavLink>
        </div>
    </div>
</div>

  );
};

export default Prolist