"use client";

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuVegan } from "react-icons/lu";
import Link from "next/link";

const Random = () => {
  const [meal, setMeal] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getRandom = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        setMeal(res.data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    getRandom();
  }, []);
  console.log(meal);
  return (
    <>
      <div className="flex items-center justify-center p-4 h-[10vh] md:h-[20vh] border-b-2 border-t-2 border-t-[#94A684] border-b-[#94A684]">
        <h1 className="text-2xl md:text-5xl  xl:text-5xl font-bold  text-[#94A684]">
          To spark your imagination...
        </h1>
      </div>
      <div className="w-screen text-[#94A684] flex items-center justify-center h-[60vh] md:h-[80vh] bg-[#E4E4D0] md:bg-white">
        {meal.map((cat) => (
          <div
            className="h-[60vh] flex flex-col md:flex-row items-center justify-center w-full  md:w-[70vw] xl:w-[80vw] xl:h-[60vh] gap-8 p-8 bg-[#E4E4D0]  rounded-lg"
            key={cat.idMeal}
          >
            {cat.strMealThumb && (
              <div className="relative flex-1  w-full h-10vh md:h-full flex">
                <Image
                  src={cat.strMealThumb}
                  alt=""
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            )}
            <div className="flex-1 flex flex-col gap-4 h-full items-center md:items-start justify-start">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl ">
                {cat.strMeal}
              </h1>
              <span>Cuisine: {cat.strArea}</span>
              <span>Meal Type: {cat.strCategory}</span>
              <span className="flex items-center gap-2">
                <LuVegan /> Vegetarian:
                {cat.strCategory === "Vegetarian" ? "Yes" : "No"}
              </span>
              <Link
                href={cat.idMeal === null ? `/` : `/recipes/${cat.idMeal}`}
                className="bg-[#94A684] text-white p-2 rounded-md  hover:bg-[#004225]"
              >
                See Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Random;
