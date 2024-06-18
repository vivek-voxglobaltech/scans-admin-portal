/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const showMobileNavigation = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <nav className="bg-slate-900 border-gray-200 lg:px-48 sm:px-4 py-2.5 shadow-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-manrope">
          Scans Admin Portal
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={showMobileNavigation}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {/*Mobile Nav*/}
        {showMobileNav ? (
          <div className="w-full md:hidden" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lgmd:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <>
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:p-0 font-manrope transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:p-0 font-manrope transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:p-0 font-manrope transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold"
                  >
                    Login
                  </Link>
                </li>
              </>
            </ul>
          </div>
        ) : (
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-neutral-700">
              <li>
                <Link
                  to="/"
                  className="flex items-center leading-7 py-2 pl-3 pr-4 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 font-manrope transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center leading-7 py-2 pl-3 pr-4 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 font-manrope transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="flex items-center leading-7 py-2 pl-3 pr-4 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 font-manrope transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
