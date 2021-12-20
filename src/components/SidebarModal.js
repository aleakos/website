import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from '@tailwindui/react';

// let navStyle =
//   'plex inline-block py-3 px-3 my-6 text-black dark:text-white lowercase text-lg hover:text-purple-400 ';

let navStyle =
  'uppercase mb-6 mr-4 ml-4 py-4 my-2 px-4 md:mb-16 bg-transparent bg-green-200 dark:text-gray-800 hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md box-shadow-black hover:box-shadow-purple';

const SidebarModal = () => {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);

  // // Allow to use the `esc` key
  // useEffect(() => {
  //   function handleEscape(event) {
  //     if (!showModal) return;

  //     if (event.key === 'Escape') {
  //       setShowModal(false);
  //     }
  //   }

  //   document.addEventListener('keyup', handleEscape);
  //   return () => document.removeEventListener('keyup', handleEscape);
  // }, [showModal]);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setShowModal(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    // cleanup function to remove the event listener
    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <>
      <div className="py-3 px-6 my-6 ">
        <button
          onClick={() => setShowModal(true)}
          className="md:hidden flex flex-col ml-8 hover:text-purple-400"
        >
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
        </button>
      </div>
      {showModal ? (
        <>
          <div
            div
            className="fixed inset-0 w-3/4 h-screen z-50 outline-none focus:outline-none"
          >
            <div className="relative">
              {/*content*/}
              <div
                ref={ref}
                onClick={() => console.log('clicked')}
                className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
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
                    key={'sidebar-home'}
                  >
                    home
                  </NavLink>
                  <NavLink
                    exact
                    to="/post"
                    className={navStyle}
                    onClick={() => setShowModal(false)}
                    key={'sidebar-post'}
                  >
                    Blog Posts
                  </NavLink>
                  <NavLink
                    exact
                    to="/project"
                    className={navStyle}
                    onClick={() => setShowModal(false)}
                    key={'sidebar-project'}
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    exact
                    to="/about"
                    className={navStyle}
                    onClick={() => setShowModal(false)}
                    key={'sidebar-about'}
                  >
                    about
                  </NavLink>
                  <a
                    href="https://github.com/aleakos"
                    target="_blank"
                    className={navStyle}
                    onClick={() => setShowModal(false)}
                    key={'sidebar-github'}
                  >
                    github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alexander-leakos-a49081a3/"
                    target="_blank"
                    className={navStyle}
                    onClick={() => setShowModal(false)}
                    key={'sidebar-linkedin'}
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
