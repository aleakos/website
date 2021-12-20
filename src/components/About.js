const About = () => {
  return (
    <main className="relative">
      <div className="p-10 container mx-auto relative">
        <div className="text-lg flex flex-col justify-center">
          <h1 className="plex text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-800 mb-6">
            hey there. i'm <span className="text-purple-400 ">alex leakos</span>
          </h1>
          <h1 className="plex text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-800 mb-6">
            i've worked in finance, founded a startup, and i'm currently working
            on a master's degree in software engineering.
          </h1>
          <h1 className="plex text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-800 mb-6">
            looking for{' '}
            <span className="text-purple-400 ">a job after graduating.</span>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default About;
