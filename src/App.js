import { React, useState } from 'react';
import Home from "./Screens/Home";

const App = () => {

  const [flag, setFlag] = useState(1);

  const handleToggle = () => {
    setFlag(!flag)
  };

  return (
    <div handleToggle={handleToggle} className={flag ? "cont dark bg-slate dark:bg-black w-full scroll-smooth overflow-x-hidden relative" : "cont bg-slate dark:bg-black w-full scroll-smooth overflow-x-hidden relative"} >
        <Home handleToggle={ handleToggle }/>
    </div>
  );
}

export default App;
