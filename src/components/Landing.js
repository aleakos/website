import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
      <header class="h-24 sm:h-32 flex items-center z-30 w-full"></header>
      <div class="flex relative z-20 items-center">
        <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
          <div class="flex flex-col">
            <img src="" class="rounded-full w-28 mx-auto" />
            <p class="plex text-3xl my-6 text-center dark:text-white">
              hi, i&#x27;m alex.
            </p>
            <h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
              not doing a whole lot at the moment.
            </h2>
            <div class="flex items-center justify-center mt-4">
              <Link
                to="/project"
                className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent bg-green-200 dark:text-gray-800 hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-md box-shadow-black hover:box-shadow-purple"
              >
                CHECK OUT MY WORK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
