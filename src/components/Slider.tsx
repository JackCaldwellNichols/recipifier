"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(
  //       () =>
  //         setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //       3000
  //     );
  //     return () => clearInterval(interval);
  //   }, []);
  const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/whitebg.png",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in NY",
      image: "/bg2.png",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/slide3.jpg",
    },
  ];
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-[#E4E4D0]">
      <div className="flex-1 flex items-center justify-center flex-col text-white font-bold lg:h-full">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl lg:text-7xl">
          {data[currentSlide].title}
        </h1>
      </div>
      <div className="flex-1 relative lg:h-full" w-full>
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
