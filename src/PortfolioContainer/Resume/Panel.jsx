import React from "react";

function Panel({ getBtnId, active }) {
  return (
    <div
      onClick={getBtnId}
      className="flex justify-between items-center md:flex-col md:min-w-[20rem] md:h-full md:justify-center"
    >
      <button
        id="0"
        className={
          active === 0
            ? "px-8 py-2 text-white border-r border-white md:w-full md:flex space-x-2 md:border-b md:py-4 bg-orange-500"
            : "px-8 py-2 bg-slate-800 text-white border-r border-white md:w-full md:flex space-x-2 md:border-b md:py-4"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
        <span className="hidden md:flex">Education</span>
      </button>
      <button
        id="1"
        className={
          active === 1
            ? "px-8 py-2 text-white border-r border-white md:w-full md:flex space-x-2 md:border-b md:py-4 bg-orange-500"
            : "px-8 py-2 bg-slate-800 text-white border-r border-white md:w-full md:flex space-x-2 md:border-b md:py-4"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="hidden md:flex"> Work History</span>
      </button>
      <button
        id="2"
        className={
          active === 2
            ? "px-8 py-2 text-white border-r border-white md:w-full md:flex space-x-2 md:border-b md:py-4 bg-orange-500"
            : "px-8 py-2 bg-slate-800 text-white border-r border-white md:w-full md:flex space-x-2 md:border-b md:py-4"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        <span className="hidden md:flex"> Programming Skills</span>
      </button>
      <button
        id="3"
        className={
          active === 3
            ? "px-8 py-2 text-white border-r border-white md:w-full md:flex space-x-2 md:border-b md:py-4 bg-orange-500"
            : "px-8 py-2 bg-slate-800 text-white border-r border-white md:w-full md:flex space-x-2 md:border-b md:py-4"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="hidden md:flex"> Projects</span>
      </button>
      <button
        id="4"
        className={
          active === 4
            ? "px-8 py-2 text-white border-r border-white md:w-full md:flex space-x-2 md:border-b md:py-4 bg-orange-500"
            : "px-8 py-2 bg-slate-800 text-white border-r border-white md:w-full md:flex space-x-2 md:border-b md:py-4"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="hidden md:flex"> Interests</span>
      </button>
    </div>
  );
}

export default Panel;
