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
        </div>
      </div>
    </header>
  );
};

export default NavBar;
