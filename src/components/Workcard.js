import "./Workcard.css"
import React from 'react'


import ProList from "./ProList"
import projcarddata from "./ProlistData"

const Workcard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                    {
                    projcarddata.map((val) => 

                          {
                           
                            return  <ProList imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} source={val.source}/>
                           
                          }
                          )
                    }
            </div>
    </div>
  );
};

export default Workcard