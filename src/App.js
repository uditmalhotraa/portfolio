import { React, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from "./Screens/Home";

const App = () => {

  const [flag, setFlag] = useState(1);

  const handleToggle = () => {
    setFlag(!flag)
  };

  return (
    <div handleToggle={handleToggle} className={!flag ? "dark bg-slate dark:bg-black h-auto w-full scroll-smooth overflow-x-hidden relative" : "bg-slate dark:bg-black h-auto w-full scroll-smooth overflow-x-hidden relative"} >
      <Router basename=''>
        <Home handleToggle={ handleToggle }/>
      </Router>
    </div>
  );
}

export default App;
