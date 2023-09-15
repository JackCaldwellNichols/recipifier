import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <>
      <div className="flex items-center justify-center p-4 h-[10vh] md:h-[20vh] border-b-2 border-t-2 border-t-[#94A684] border-b-[#004225]">
        <h1 className="text-2xl md:text-5xl  xl:text-5xl font-bold  text-[#94A684]">
          From the blog...
        </h1>
      </div>
      <div className="bg-[#004225] h-[75vh] flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 p-6">
          <h1 className="text-white text-4xl font-bold xl:text-6xl">
            Mastering the Art of Culinary Creations: A Journey into the World of
            Cooking
          </h1>
          <p className="text-white xl:text-xl">
            Cooking is an age-old art that has evolved over centuries,
            transcending cultures and boundaries. It&#39;s a skill that combines
            science, creativity, and tradition to produce delicious and
            nourishing meals. Whether you&#39;re a seasoned chef or a novice in
            the kitchen, the world of cooking is a vast and fascinating one to
            explore.
          </p>
          <Link
            href="/blog/1"
            className="bg-white text-black rounded py-3 px-6 w-30"
          >
            Read More
          </Link>
        </div>
        <div className="flex-1 w-full relative hidden md:block">
          <Image fill className="object-contain" src="/blog.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Blog;
