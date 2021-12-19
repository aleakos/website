import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
  return builder.image(source);
};
const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch((err) => console.log(err));
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <div className="p-10 container mx-auto relative">
        <div className="text-lg flex flex-col justify-center">
          <h1 className="plex text-6xl text-gray-800 mb-4">
            hey there. i'm{' '}
            <span className="text-purple-400">{author.name}</span>
          </h1>
          <div className=" lowercase plex prose lg:prose-xl text-white">
            <BlockContent
              blocks={author.bio}
              projectId="upmie68t"
              dataset="production"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
