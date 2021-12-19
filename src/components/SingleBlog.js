import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import BlogPost from './BlogPost.js';

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
      <div class="container mx-auto flex mt-6">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src={urlFor(singlePost.authorImage).url()}
          alt="Avatar of Author"
        />
        <div class="flex-1 px-2">
          <p class="text-base font-bold text-base md:text-xl leading-none mb-2">
            {singlePost.authorName}
          </p>
          <p class="text-gray-600 text-xs md:text-base">
            Minimal Blog Tailwind CSS template by{' '}
            <a
              class="text-green-500 no-underline hover:underline"
              href="https://www.tailwindtoolbox.com"
            >
              TailwindToolbox.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
