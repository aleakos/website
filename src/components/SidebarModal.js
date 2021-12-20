import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from '@tailwindui/react';

// let navStyle =
//   'plex inline-block py-3 px-3 my-6 text-black dark:text-white lowercase text-lg hover:text-purple-400 ';

let navStyle =
  'uppercase mr-4 ml-4 py-4 my-2 px-4 md:mt-16 bg-transparent bg-green-200 dark:text-gray-800 hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md box-shadow-black hover:box-shadow-purple';

const SidebarModal = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  // Allow to use the `esc` key
  useEffect(() => {
    function handleEscape(event) {
      if (!mobileOpen) return;

      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    }

    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [mobileOpen]);

  return (
    <>
      <div className="py-3 px-6 my-6 ">
        <button
          onClick={() => setShowModal(true)}
          class="md:hidden flex flex-col ml-8 hover:text-purple-400"
        >
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 w-3/4 h-screen z-50 outline-none focus:outline-none">
            <div className="relative">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                  <h3 className="plex text-4xl font-semibold">menu.</h3>
                  <button
                    className="plex inline-block p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-gray-300 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <nav className="flex flex-col">
                  <NavLink
                    exact
                    to="/"
                    className={navStyle}
                    onClick={() => setShowModal(false)}
                  >
                    aleakos
                  </NavLink>
                  <NavLink
                    exact
                    to="/post"
                    className={navStyle}
                    onClick={() => setShowModal(false)}
                  >
                    Blog Posts
                  </NavLink>
                  <NavLink
                    exact
                    to="/project"
                    className={navStyle}
                    onClick={() => setShowModal(false)}
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    exact
                    to="/about"
                    className={navStyle}
                    onClick={() => setShowModal(false)}
                  >
                    about
                  </NavLink>
                  <a
                    href="https://github.com/aleakos"
                    target="_blank"
                    className={navStyle}
                  >
                    github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alexander-leakos-a49081a3/"
                    target="_blank"
                    className={navStyle}
                  >
                    LinkedIn
                  </a>
                </nav>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );

  return (
    <div className="relative flex overflow-hidden h-full bg-cool-gray-100">
      {/* Off-canvas menu for mobile */}
      <Transition show={mobileOpen} className="absolute inset-0 z-40 flex">
        {/* Off-canvas menu overlay, show/hide based on off-canvas menu state. */}
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div ref={ref} className="absolute inset-0">
              <div
                onClick={() => setMobileOpen(false)}
                className="absolute inset-0 opacity-75 bg-cool-gray-600"
              />
            </div>
          )}
        </Transition.Child>

        {/* Off-canvas menu, show/hide based on off-canvas menu state. */}
        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-teal-600"
        >
          <div className="absolute top-0 right-0 p-1 -mr-14">
            <Transition.Child
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-cool-gray-600"
              aria-label="Close sidebar"
              as="button"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                className="w-6 h-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Transition.Child>
          </div>
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="w-auto h-8"
              src="https://tailwindui.com/img/logos/easywire-logo-on-brand.svg"
              alt="Easywire logo"
            />
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Transition>

      <div
        className="flex-1 flex flex-col overflow-auto focus:outline-none"
        tabIndex={0}
      >
        <div className="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:border-none">
          <button
            className="px-4 border-r border-cool-gray-200 text-cool-gray-400 focus:outline-none focus:bg-cool-gray-100 focus:text-cool-gray-600"
            aria-label="Open sidebar"
            onClick={() => setMobileOpen(true)}
          >
            <svg
              className="w-6 h-6 transition duration-150 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Search bar */}
          <div className="flex justify-between flex-1 px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="flex flex-1">
              <form className="flex w-full md:ml-0" action="#" method="GET">
                <label htmlFor="search_field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-cool-gray-400 focus-within:text-cool-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search_field"
                    className="block w-full h-full py-2 pl-8 pr-3 rounded-md text-cool-gray-900 placeholder-cool-gray-500 focus:outline-none focus:placeholder-cool-gray-400 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <main className="relative z-0 flex-1 p-8 overflow-y-auto h-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SidebarModal;
