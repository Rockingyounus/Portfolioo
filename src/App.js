import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project/>
      <Contact />
      </Router>
      <SocialLinks />
    </div>
  );
}

export default App;




