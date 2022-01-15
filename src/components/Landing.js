import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
      <header className="h-24 sm:h-32 w-full"></header>
      <div className="flex relative z-20 items-center">
        <div className="container mx-auto  flex flex-col justify-between items-center">
          <img src="" className="rounded-full w-28 mx-auto" />
          <p className="plex text-3xl md:text-4xl my-6 text-center dark:text-white">
            hi, i&#x27;m alex.
          </p>
          <h2 className="max-w-6xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
            company founder and full stack developer. working on a master's in
            software engineering.
          </h2>
          <span
            className="animate-bounce text-5xl mt-4 hover:animate-[wiggle_1s_ease-in-out_infinite]"
            onClick="animate-[wiggle_1s_ease-in-out_infinite]"
          >
            👇
          </span>{' '}
          <div className="flex items-center justify-center">
            <Link
              to="/project"
              className="uppercase py-2 my-2 px-4 mt-8 bg-transparent bg-green-200 dark:text-gray-800 hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md box-shadow-black hover:box-shadow-purple"
              key={100}
            >
              CHECK OUT MY WORK
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
