import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
  return builder.image(source);
};

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
            body,
            publishedAt,
            "authorName": author->name,
            "authorImage": author->image,
          }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch((err) => console.log(err));
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <>
      {/* container */}

      {/* container */}
      <div className="mx-auto flex mt-6 items-center justify-center">
        {/* <!--Title--> */}
      </div>
      {/* Title */}
      <div className="flex ">
        <div className="flex-none basis-1/6 "></div>
        <div className="grow flex flex-col">
          <div className="flex mb-6 items-center">
            {/* author */}
            <img
              className="w-16 h-16 rounded-full mr-4 "
              src={urlFor(singlePost.authorImage).url()}
              alt="Avatar of Author"
            />
            <div className="plex ">
              <p className="font-bold text-base md:text-xl leading-none mb-2">
                {singlePost.authorName}
              </p>
              <p className="text-gray-600 text-xs md:text-base">big timer </p>
            </div>
            {/* author */}
          </div>
          <div className="font-sans">
            <p className="text-base md:text-sm text-green-400 font-bold hover:text-purple-400">
              &lt;{' '}
              <a
                href="/post"
                className="plex text-base md:text-sm text-green-400 hover:text-purple-400 font-bold no-underline hover:underline"
              >
                back to blog.
              </a>
            </p>
            <h1 className="plex uppercase font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              {singlePost.title}
            </h1>
            <p className="plex text-sm md:text-base font-normal text-gray-600">
              {new Date(singlePost.publishedAt).toLocaleDateString()}
            </p>
          </div>
          <div className="lowercaseflex mt-6 items-center plex">
            <BlockContent
              blocks={singlePost.body}
              projectId="upmie68t"
              dataset="production"
            />
          </div>
        </div>
        <div className="flex-none basis-1/6 "></div>
      </div>
    </>
  );
};

export default SinglePost;
