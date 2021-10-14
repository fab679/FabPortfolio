import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import MobileNav from "./MobileNav";

function Navbar(props) {
  return (
    <nav className=" flex items-center w-full justify-between p-6  backdrop-blur-lg  bg-white bg-opacity-25  border-b shadow">
      <h1 className="text-3xl text-sky-600 font-georgia font-bold">
        FABISCH KAMAU
      </h1>
      <div className="relative md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:flex justify-evenly text-xl font-semibold space-x-4 text-sky-500">
        <Link
          activeClass="text-orange-700"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          Home
        </Link>
        <Link
          activeClass="text-orange-700"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          About
        </Link>
        <Link
          activeClass="text-orange-700"
          to="resume"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          Resume
        </Link>
        <Link
          activeClass="text-orange-700"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          ContactMe
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
