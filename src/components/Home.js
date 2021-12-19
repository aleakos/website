import React from 'react';
import image from '../space.jpg';

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="space"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold plex leading-none lg:leading-snug home-name">
          YO dude
        </h1>
      </section>
    </main>
  );
};

export default Home;
