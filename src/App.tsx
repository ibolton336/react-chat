import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto flex1 font-sans">
      <div className="flex-1 h-80 m-10 border-solid  border-0 text-center  border-neutral-600 rounded-sm shadow-xl drop ">
        <div className="text-3xl font-light"> REACT CHAT</div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Profile
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Dashboard
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Settings
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Contacts
              </a>
            </li>
            <li>
              <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
      containter here
    </div>
  );
}

export default App;
