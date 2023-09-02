import "./App.css";
import "./index.css";
import {
  About,
  Contact,
  Home,
  MyExperience,
  Navbar,
  Projects,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <MyExperience />
      <Contact />
    </div>
  );
};
export default App;
