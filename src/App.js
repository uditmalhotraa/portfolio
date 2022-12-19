import { React, useState } from 'react';
import Home from "./Screens/Home";
import HomeNew from './Screens/HomeNew';

const App = () => {

  const [flag, setFlag] = useState(1);

  const handleToggle = () => {
    setFlag(!flag)
  };

  return (
    <div handleToggle={handleToggle} className={flag ? "cont dark bg-white dark:bg-black w-full scroll-smooth overflow-x-hidden relative" : "cont bg-white dark:bg-black w-full scroll-smooth overflow-x-hidden relative"} >
        <HomeNew handleToggle={ handleToggle }/>
    </div>
  );
}

export default App;
