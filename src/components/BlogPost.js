import React from 'react';

const BlogPost = () => {
  return (
    //   subscribe
    <>
      <div class="container mx-auto flex mt-6">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src="http://i.pravatar.cc/300"
          alt="Avatar of Author"
        />
        <div class="flex-1 px-2">
          <p class="text-base font-bold text-base md:text-xl leading-none mb-2">
            Jo Bloggerson
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
    //subscribe
  );
};

export default BlogPost;
