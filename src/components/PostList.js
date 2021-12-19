import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';

const Post = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"]{
      title,
      slug,
    }`
      )
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="bg-white min-h-screen p-12">
      <section className="">
        <h2 className="plex text-lg text-black flex justify-center mb-12">
          welcome to my blog posts.
        </h2>

        <div className="accordion">
          <div className="flex flex-col items-center justify-center mt-4">
            {post &&
              post.map((post, index) => (
                <Link
                  to={'/post/' + post.slug.current}
                  key={post.slug.current}
                  className="uppercase py-2 px-4 md:mt-6 bg-transparent bg-green-200 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white box-shadow-black hover:box-shadow-purple"
                >
                  {post.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Post;

{
  /* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */
}

<li className="py-2 px-4 w-full rounded-t-lg">Profile</li>;
