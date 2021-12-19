import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch((err) => console.log(err));
  }, []);

  // dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md box-shadow-black hover:box-shadow-purple

  return (
    <main className="bg-white min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center plex"></h1>
        <h2 className="plex text-lg text-black flex justify-center mb-12">
          welcome to projects.
        </h2>
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="plex lowercase relative box-shadow-black-large hover:box-shadow-black-medium bg-green-100 p-14">
                <h3 className="text-gray-800 text-2xl font-bold mb-4 hover:text-purple-400">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs">
                  <span className="text-left block">
                    <strong className="font-bold">Finished on</strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span className="text-left block">
                    <strong className="font-bold">Where</strong>:{' '}
                    {project.place}
                  </span>
                  <span className="text-left block justify-start">
                    <strong className="font-bold">Type</strong>:{' '}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <span role="img" aria-label="right pointer">
                    👉
                  </span>{' '}
                  <a
                    href={project.link}
                    rel="no opener no referrer"
                    className="plex text-purple-400 text-lg hover:underline hover:text-purple-300"
                  >
                    View the project.
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
