import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GoMarkGithub } from 'react-icons/go';
import EmailModal from './Modal';

let iconStylesInactive = {
  color: 'black',
  fontSize: '2.0em',
};

let iconStylesActive = {
  color: '#BF62CF',
  fontSize: '2.0em',
};

let activeNav =
  'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center underline underline-offset-2 decoration-green-200 decoration-8 hover:text-purple-400';

let inactiveNav =
  'plex inline-flex py-3 px-3 my-6 text-black dark:text-white lowercase text-lg lg:flex items-center  hover:text-purple-400 hover:rounded  underline-offset-4 decoration-green-200';

const NavBar = () => {
  const [iconStyle, setIconStyle] = useState(iconStylesInactive);

  return (
    <header className="bg-white">
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
            className="py-3 px-6 my-6"
            href="https://github.com/aleakos"
            onMouseEnter={() => setIconStyle(iconStylesActive)}
            onMouseLeave={() => setIconStyle(iconStylesInactive)}
            target="_blank"
          >
            <GoMarkGithub style={iconStyle} />
          </a>

          <EmailModal />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
