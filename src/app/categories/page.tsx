"use client";

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getRandom = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCats(res.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    getRandom();
  }, []);

  return (
    <>
      <div className="">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center py-6 my-16 text-[#94A684]">
          Browse our categories...
        </h1>
      </div>

      <div className="flex text-[#94A684]">
        <div className=" flex flex-wrap items-center justify-center">
          {cats.map((cat) => (
            <div
              className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-[#E4E4D0] transition-all duration-300 md:w-[45vw] xl:w-[32.5vw] xl:h-[60vh]"
              key={cat["idCategory"]}
            >
              <div className="relative flex-1 w-full flex items-center justify-center p-4">
                <Image
                  src={
                    cat["strCategory"] === "Goat"
                      ? "/goat.png"
                      : cat["strCategoryThumb"]
                  }
                  alt=""
                  width={300}
                  height={300}
                  className="object-contain h-17 md:h-full"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4 items-center justify-start">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                  {cat["strCategory"]}
                </h1>
                <Link
                  href={`/categories/${cat["strCategory"]}`}
                  className="bg-[#94A684] text-white p-4 rounded-md mt-4"
                >
                  See Recipes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
