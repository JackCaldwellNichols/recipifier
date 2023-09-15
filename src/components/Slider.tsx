"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);
  const data = [
    {
      id: 1,
      title: "Bringing you the best recipes...",
      image:
        "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "From the exotic to the comfort...",
      image: "/bg2.png",
    },
    {
      id: 3,
      title: "Explore the world's cuisines...",
      image:
        "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-[#E4E4D0]">
      <div className="flex-1 flex items-center justify-center flex-col text-white font-bold lg:h-full">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl lg:text-7xl">
          {data[currentSlide].title}
        </h1>
      </div>
      <div className="flex-1 relative lg:h-full order-first" w-full>
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
