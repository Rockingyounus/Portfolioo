import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


const App = () => {
  return (
   <div>
    <Navbar/>
     <Home/>
     <About/>
     <Project/>
     <Skills/>
     <Contact/>

     <SocialLinks/>
   </div>
  );
};

export default App;
