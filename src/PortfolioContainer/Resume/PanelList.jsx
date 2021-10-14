import React from "react";

function PanelList({ panelIndex }) {
  const panels = [
    <Education />,
    <WorkHistory />,
    <ProgrammingSkills />,
    <Projects />,
    <Interests />,
  ];
  const correctPanel = panels[panelIndex?.panel];
  return <div>{correctPanel}</div>;
}

function Education() {
  return (
    <div className="w-full p-4 space-y-3">
      <div className="w-full flex items-center text-lg text-slate-800 font-semibold justify-center">
        Education
      </div>
      <div className="space-y-3">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-around space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">
                Dedan Kimathi Universty of Technology
              </h3>
            </div>
            <p className="px-5 py-2 text-white bg-orange-700 rounded-lg flex-none">
              2015-2021
            </p>
          </div>
          <div className="px-7 py-1 text-slate-600">
            <h4>Bachelor's Degree in Computer Science</h4>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-around space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">Matunda S.A Secondary</h3>
            </div>
            <p className="px-5 py-2 text-white bg-orange-700 rounded-lg flex-none">
              2011-2014
            </p>
          </div>
          <div className="px-7 py-1 text-slate-600">
            <h4>Highschool Degree (A-)</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
function WorkHistory() {
  return (
    <div className="w-full p-4 space-y-3">
      <div className="w-full flex items-center text-lg text-slate-800 font-semibold justify-center">
        Education
      </div>
      <div className="space-y-3">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-around space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">
                Intern In a Networking Company.
              </h3>
            </div>
            <p className="px-5 py-2 text-white bg-orange-700 rounded-lg flex-none">
              2017
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function ProgrammingSkills() {
  return (
    <div>
      <div className="w-full flex items-center text-lg text-slate-800 font-semibold justify-center">
        Programming Skills
      </div>
      <div className="space-y-3">
        <div className="flex">
          <div className="flex-1">
            <div className="flex space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">JavaScript</h3>
            </div>
            <div className="px-6 py-1">
              <div className="w-full h-5 bg-slate-300">
                <div className="h-full w-4/5 bg-slate-800"></div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">ReactJs</h3>
            </div>
            <div className="px-6 py-1">
              <div className="w-full h-5 bg-slate-300">
                <div className="h-full w-4/5 bg-slate-800"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <div className="flex space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">React Native</h3>
            </div>
            <div className="px-6 py-1">
              <div className="w-full h-5 bg-slate-300">
                <div className="h-full w-2/3 bg-slate-800"></div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">ExpressJs</h3>
            </div>
            <div className="px-6 py-1">
              <div className="w-full h-5 bg-slate-300">
                <div className="h-full w-4/5 bg-slate-800"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <div className="flex space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">Nodejs</h3>
            </div>
            <div className="px-6 py-1">
              <div className="w-full h-5 bg-slate-300">
                <div className="h-full w-4/5 bg-slate-800"></div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">MongoDb</h3>
            </div>
            <div className="px-6 py-1">
              <div className="w-full h-5 bg-slate-300">
                <div className="h-full w-3/5 bg-slate-800"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <div className="flex space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">Neo4j</h3>
            </div>
            <div className="px-6 py-1">
              <div className="w-full h-5 bg-slate-300">
                <div className="h-full w-4/5 bg-slate-800"></div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">Socket.Io</h3>
            </div>
            <div className="px-6 py-1">
              <div className="w-full h-5 bg-slate-300">
                <div className="h-full w-2/5 bg-slate-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Projects() {
  return (
    <div className="w-full p-4 space-y-3">
      <div className="w-full flex items-center text-lg text-slate-800 font-semibold justify-center">
        Projects
      </div>
      <div className="space-y-3">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-around space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">Personal Portfolio Website</h3>
            </div>
            <p className="px-5 py-2 text-white bg-orange-700 rounded-lg flex-none">
              2021
            </p>
          </div>
          <div className="px-4 py-1">
            <h4 className="text-slate-700">
              Technologies used:React,Tailwindcss,Emailjs
            </h4>
            <p className="text-xs text-slate-600">
              - A Personal Portfolio website to showcase all my details and
              projects at one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Interests() {
  return (
    <div className="w-full p-4 space-y-3">
      <div className="w-full flex items-center text-lg text-slate-800 font-semibold justify-center">
        Interests
      </div>
      <div className="space-y-3">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-around space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">FootBall</h3>
            </div>
          </div>
          <div className="px-7 py-1 text-slate-600">
            <h4 className="text-xs text-slate-600">
              I enjoy football very much pretty much playing and watching games.
            </h4>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-around space-x-2">
              <div className="h-5 w-5 rounded-full bg-orange-600"></div>
              <h3 className="text-slate-700">Technology</h3>
            </div>
          </div>
          <div className="px-7 py-1 text-slate-600">
            <h4 className="text-xs text-slate-600">
              I'm highly Enthusiatic with Technologies and upcoming trends.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PanelList;
