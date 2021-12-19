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
      mainImage{
        asset->{
        _id,
        url,
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="bg-white min-h-screen p-12">
      <section className="">
        <h1 className="plex lowercase text-5xl flex justify-center plex mb-4">
          Blog Post Page
        </h1>
        <h2 className="lowercase plex text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my page of blog posts.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {post &&
            post.map((post, index) => (
              <article>
                <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 box-shadow-black-large leading-snug bg-white"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-auto h-64 object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="  plex px-7 py-4 bg-gray-800 text-white bg-opacity-70 ">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Post;
