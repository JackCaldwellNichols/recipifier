"use client";

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Random = () => {
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
      <div className="flex items-center justify-center p-4 h-[10vh] md:h-[20vh] text-center border-b-2 border-t-2 border-t-[#94A684] border-b-[#94A684]">
        <h1 className="text-2xl md:text-5xl  xl:text-5xl font-bold  text-[#94A684]">
          Browse our categories...
        </h1>
      </div>

      <div className="w-screen text-[#94A684] overflow-x-scroll">
        <div className="w-max flex ">
          {cats.map((cat) => (
            <div
              className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-[#E4E4D0] transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[60vh]"
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
                  className="bg-[#94A684] text-white p-2 rounded-md mt-4"
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

export default Random;
