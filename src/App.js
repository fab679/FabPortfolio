import React from "react";
import About from "./PortfolioContainer/AboutMe/About";
import Contact from "./PortfolioContainer/ContactMe/Contact";
import Profile from "./PortfolioContainer/Home/Profile";
import Navbar from "./PortfolioContainer/NavBar/Navbar";
import Resume from "./PortfolioContainer/Resume/Resume";
import "./Main.css";
function App(props) {
  return (
    <div className="h-screen w-screen font-comfortaa">
      <div className="fixed w-full top-0">
        <Navbar />
      </div>
      <Profile />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
