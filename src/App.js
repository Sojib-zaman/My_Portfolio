 import React from "react";
 import "./index.css"

 import Projects from "./routes/Projects";
 import Contact from "./routes/Contact";
 import About from "./routes/About";
import { Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Homepage></Homepage>}/>
    <Route path="/project" element={<Projects></Projects>}/>
    <Route path="/about" element={<About></About>}/>
    <Route path="/contact" element={<Contact></Contact>}/>

    
    


   </Routes>
   
   
   
   
   </>
  );
}

export default App;
