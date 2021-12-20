import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

let navStyle =
  'plex inline-block py-3 px-3 my-6 text-black dark:text-white lowercase text-lg  hover:text-purple-400 ';

const SidebarModal = () => {
  const [showModal, setShowModal] = useState(false);

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
          <div className="  fixed inset-0 w-3/4 h-screen z-50 outline-none focus:outline-none">
            <div className="relative">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                  <h3 className="plex text-3xl font-semibold">menu.</h3>
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
};

export default SidebarModal;
