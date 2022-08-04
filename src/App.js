import Home from "./Screens/Home";
import About from "./Screens/About";

const App = () => {
  return (
    <div className="bg-slate dark:bg-black h-auto w-full scroll-smooth">
      <Home />
      <About />
    </div>
  );
}

export default App;
