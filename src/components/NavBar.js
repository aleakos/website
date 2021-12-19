import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between">
        <nav className="flex ">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center underline underline-offset-2 decoration-red-200 decoration-8'
                : 'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center  hover:text-red-300 hover:rounded  underline-offset-4 decoration-red-200'
            }
          >
            aleakos
          </NavLink>
          <NavLink
            exact
            to="/post"
            className={({ isActive }) =>
              isActive
                ? 'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center underline underline-offset-2 decoration-red-200 decoration-8'
                : 'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center  hover:text-red-300 hover:rounded  underline-offset-4 decoration-red-200'
            }
          >
            Blog Posts
          </NavLink>
          <NavLink
            exact
            to="/project"
            className={({ isActive }) =>
              isActive
                ? 'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center underline underline-offset-2 decoration-red-200 decoration-8'
                : 'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center  hover:text-red-300 hover:rounded  underline-offset-4 decoration-red-200'
            }
          >
            Projects
          </NavLink>
          <NavLink
            exact
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? 'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center underline underline-offset-2 decoration-red-200 decoration-8'
                : 'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center  hover:text-red-300 hover:rounded  underline-offset-4 decoration-red-200'
            }
          >
            resume
          </NavLink>
        </nav>

        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/aleakos"
            className="mr-4"
            target="_blank"
            fgColor="black"
            bgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          {/* <SocialIcon
            url="https://www.linkedin.com/in/alexander-leakos-a49081a3/"
            className="mr-4"
            target="_blank"
            fgColor="black"
            bgColor="#fff"
            style={{ height: 35, width: 35 }}
          /> */}
          <div className="lowercase text-gray-800 dark:text-white font-black text-3xl flex items-center">
            <svg
              width="25"
              height="25"
              viewBox="0 0 1792 1792"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-red-200"
            >
              <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"></path>
            </svg>
            <span className=" plex text-xs ml-3 mt-1">aleakos@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
