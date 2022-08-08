import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from "./Screens/Home";
import About from "./Screens/About";
import Work from "./Screens/Work";
import Contact from "./Screens/Contact";
import Skills from "./Screens/Skills";

const App = () => {
  return (
    <div className="bg-slate dark:bg-black h-auto w-full scroll-smooth">
      <Router basename=''>
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
