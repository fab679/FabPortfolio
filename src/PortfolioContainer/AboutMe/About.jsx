import React from "react";
import "./about.css";
import pp from "../Images/pp.jpg";
import { Link } from "react-scroll";

function About(props) {
  return (
    <div className="h-full flex flex-col p-6 justify-center items-center bg-zinc-50">
      <div className="text-3xl font-bold text-slate-700 px-5 py-2 bg-white">
        About Me
      </div>
      <div
        className="h-full md:py-6 flex  justify-center items-center "
        id="about"
      >
        <div className="shadow-md flex flex-col md:flex-row bg-white">
          <div>
            <img
              src={pp}
              alt="fabisch"
              className="md:max-h-[500px] max-h-[400px] "
            />
          </div>
          <div className="max-w-md w-full space-y-4">
            <p className="text-slate-700 p-4">
              Full stack web and mobile developer with background knowledge of
              MERN stacks with redux, along with a knack of building
              applications with utmost efficiency. Strong professional with a
              BSC willing to be an asset for an organization
            </p>
            <ul className="flex flex-col p-4">
              <h2 className="text-slate-800 text-lg">
                Here Are A few Highlights;
              </h2>
              <li className="inline-flex space-x-2 items-center text-slate-700">
                <div className="w-4 h-4  rounded-full bg-orange-600"></div>
                <div>FullStack Web and Mobile Development</div>
              </li>
              <li className="inline-flex space-x-2 items-center text-slate-700">
                <div className="w-4 h-4  rounded-full bg-orange-600"></div>
                <div>Interactive Frontend as per Design</div>
              </li>
              <li className="inline-flex space-x-2 items-center text-slate-700">
                <div className="w-4 h-4  rounded-full bg-orange-600"></div>
                <div>React & React Native</div>
              </li>
              <li className="inline-flex space-x-2 items-center text-slate-700">
                <div className="w-4 h-4  rounded-full bg-orange-600"></div>
                <div>Redux for State Management</div>
              </li>
              <li className="inline-flex space-x-2 items-center text-slate-700">
                <div className="w-4 h-4  rounded-full bg-orange-600"></div>
                <div>Building Rest Api's</div>
              </li>
              <li className="inline-flex space-x-2 items-center text-slate-700">
                <div className="w-4 h-4  rounded-full bg-orange-600"></div>
                <div>Database Managment</div>
              </li>
            </ul>
            <div className="inline-flex justify-between w-full p-4">
              <Link to="contact">
                {" "}
                <button className="px-6 py-2 rounded-3xl bg-slate-700 text-white hover:border hover:border-orange-600">
                  Hire Me
                </button>
              </Link>

              <a href="resume.pdf" download="resume.pdf">
                <button className="px-5 py-2 rounded-3xl bg-orange-600 text-white hover:border hover:border-slate-900">
                  Get Resume{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
