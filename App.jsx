import React from "react";
import {Routes, Route,Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";

const App=()=>{ 
return (
  <>
  <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route exact path="/About" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="*" element={<Error/>}/>

    </Routes>
  </>
)
}
export default App;
