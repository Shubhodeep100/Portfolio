
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import "./App.css";
// import Blank from "./components/Blank";
// import Test from "./components/Test";

function App() {
  return (
    <div>
     
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      {/* <Blank/> */}
      {/* <Test/> */}
      <SocialLinks />
     
    </div>
  );
}

export default App;
