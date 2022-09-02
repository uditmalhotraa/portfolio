import { React, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from "./Screens/Home";
import About from "./Screens/About";
import Work from "./Screens/Work";
import Contact from "./Screens/Contact";
import Skills from "./Screens/Skills";

const App = () => {

  const [flag, setFlag] = useState(1);

  const handleToggle = () => {
    setFlag(!flag)
  };

  return (
    <div handleToggle={handleToggle} className={!flag ? "dark bg-slate dark:bg-black h-auto w-full scroll-smooth overflow-x-hidden relative" : "bg-slate dark:bg-black h-auto w-full scroll-smooth overflow-x-hidden relative"} >
      <Router basename=''>
        <Home handleToggle={ handleToggle }/>
        <About />
        <Work />
        <Skills />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
