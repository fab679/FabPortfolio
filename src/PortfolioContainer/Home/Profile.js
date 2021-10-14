import React from "react";
import Typical from "react-typical";
import "./profile.css";
import { Link } from "react-scroll";
function Profile(props) {
  return (
    <div
      className="flex h-full bg-slate-800 flex-col items-center text-center justify-center text-white p-2"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:space-x-2">
        <div className="flex flex-col space-y-2 items-center">
          <div>
            <div className="inline-flex space-x-1">
              <a
                className="h-8 w-8"
                href="https://web.facebook.com/fabisch.kamau/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                  alt="facebook"
                />
              </a>
              <a
                className="h-8 w-8"
                href="https://twitter.com/dark_phoenix254"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                  alt="twitter"
                />
              </a>
              <a
                className="h-8 w-8"
                href="https://www.instagram.com/fabisch678/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                  alt="instagram"
                />
              </a>
              <a
                className="h-8 w-8"
                href="https://www.youtube.com/channel/UC7FBSLkLa7573tOiYHs8gZw"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/doodle/48/000000/youtube-play--v2.png"
                  alt="youtube"
                />
              </a>
            </div>
          </div>
          <div>
            <span className="text-xl">
              Hello, I'M{" "}
              <span className="text-orange-600 text-2xl">Fabisch Kamau</span>
            </span>
          </div>
          <div>
            <span>
              <h1 className="text-2xl text-yellow-400">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    1000,
                    "Fullstack Developer",
                    1000,
                    "Data Scientist",
                    1000,
                    "Cross Platform Dev",
                    1000,
                    "React/React Native Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="font-light">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="inline-flex space-x-3">
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
        <div className="profile-picture ">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
