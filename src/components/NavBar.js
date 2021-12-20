import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import EmailModal from './EmailModal';

let iconInactive = {
  color: 'black',
  fontSize: '2.0em',
};

let iconActive = {
  color: '#BF62CF',
  fontSize: '2.0em',
};

let activeNav =
  'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center underline underline-offset-8 decoration-green-200 decoration-8 hover:text-purple-400';

let inactiveNav =
  'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center  hover:text-purple-400 hover:rounded  underline-offset-8 decoration-green-200';

const NavBar = () => {
  const [githubIcon, setGitHubIcon] = useState(iconInactive);
  const [linkedinIcon, setLinkedInIcon] = useState(iconInactive);

  return (
    <header className="bg-white dark:bg-gray-800">
      <div className="container mx-auto flex justify-between">
        <nav className="flex ">
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? activeNav : inactiveNav)}
          >
            aleakos
          </NavLink>
          <NavLink
            exact
            to="/post"
            className={({ isActive }) => (isActive ? activeNav : inactiveNav)}
          >
            Blog Posts
          </NavLink>
          <NavLink
            exact
            to="/project"
            className={({ isActive }) => (isActive ? activeNav : inactiveNav)}
          >
            Projects
          </NavLink>
          <NavLink
            exact
            to="/about"
            className={({ isActive }) => (isActive ? activeNav : inactiveNav)}
          >
            about
          </NavLink>
        </nav>

        <div className="flex items-center">
          <a
            className="py-3 my-6"
            href="https://www.linkedin.com/in/alexander-leakos-a49081a3/"
            onMouseEnter={() => setLinkedInIcon(iconActive)}
            onMouseLeave={() => setLinkedInIcon(iconInactive)}
            target="_blank"
          >
            <AiFillLinkedin style={linkedinIcon} />
          </a>
          <a
            className="py-3 px-6 my-6"
            href="https://github.com/aleakos"
            onMouseEnter={() => setGitHubIcon(iconActive)}
            onMouseLeave={() => setGitHubIcon(iconInactive)}
            target="_blank"
          >
            <AiOutlineGithub style={githubIcon} />
          </a>
          <EmailModal />
          <button
            id="theme-toggle"
            type="button"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <svg
              id="theme-toggle-dark-icon"
              class="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              class="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
