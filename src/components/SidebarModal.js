import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

let navStyle =
  'uppercase mb-0 py-5 px-4 bg-transparent hover:bg-green-200 dark:text-gray-800 hover:dark:bg-gray-100 border-t border-white hover:text-gray-800 dark:text-white bg-gray-800 text-white text-md';

const SidebarModal = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    // setting ref inside modal because the component with ref was not being rendered when ref was called
    const ref = useRef(null);
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
        <div
          div
          className="fixed inset-0 h-screen w-full lg:w-1/2 z-50 outline-none focus:outline-none"
        >
          <div className="relative">
            {/*content*/}
            <div
              ref={ref}
              onClick={() => console.log('clicked')}
              className=" relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none"
            >
              {/*header*/}
              <div className="flex items-start justify-between p-5">
                <h3 className="text-green-200 plex text-4xl">menu.</h3>
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
                  <span className="ml-2">home</span>
                </NavLink>
                <NavLink
                  exact
                  to="/post"
                  className={navStyle}
                  onClick={() => setShowModal(false)}
                  key={'sidebar-post'}
                >
                  <span className="ml-2">blog posts</span>
                </NavLink>
                <NavLink
                  exact
                  to="/project"
                  className={navStyle}
                  onClick={() => setShowModal(false)}
                  key={'sidebar-project'}
                >
                  <span className="ml-2">projects</span>
                </NavLink>
                <NavLink
                  exact
                  to="/about"
                  className={navStyle}
                  onClick={() => setShowModal(false)}
                  key={'sidebar-about'}
                >
                  <span className="ml-2">about</span>
                </NavLink>
                <a
                  href="https://github.com/aleakos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navStyle}
                  onClick={() => setShowModal(false)}
                  key={'sidebar-github'}
                >
                  <span className="ml-2">github</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/alexander-leakos-a49081a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navStyle}
                  onClick={() => setShowModal(false)}
                  key={'sidebar-linkedin'}
                >
                  <span className="ml-2">linkedin</span>
                </a>
              </nav>
              <div
                className="px-5 py-4 text-green-200 plex text-2xl border-t-2 border-white hover:bg-purple-400 hover:text-white hover:cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                exit.
              </div>
              {/*footer*/}
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  };

  return (
    <>
      <div className="py-3 px-6 my-6 ">
        {/* hamburger menu */}
        <button
          onClick={() => setShowModal(true)}
          className="md:hidden flex flex-col hover:text-purple-400"
        >
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
        </button>
      </div>
      {showModal ? <Modal /> : null}
    </>
  );
};

export default SidebarModal;
