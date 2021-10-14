import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "react-scroll";

export default function MobileNav() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-sky-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right  divide-y  backdrop-blur-lg  bg-white bg-opacity-90 divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm justify-center`}
                  >
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
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm justify-center`}
                  >
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
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm justify-center`}
                  >
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
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm justify-center`}
                  >
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
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1"></div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
