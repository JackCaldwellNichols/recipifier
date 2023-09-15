"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Link from "next/link";

interface Props {
  params?: any;
}

const Recipe = ({ params }: Props) => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
        );

        setRecipe(res.data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  let ingredients: string[] = [];
  let measures: string[] = [];
  let empty: string[] = [];

  if (recipe && recipe?.length > 0) {
    for (let x in recipe[0]) {
      if (x.includes("strIngredient")) {
        if (recipe[0][x]) ingredients.push(recipe[0][x]);
      }
    }
  }

  if (recipe && recipe?.length > 0) {
    for (let x in recipe[0]) {
      if (x.includes("strMeasure")) {
        if (recipe[0][x]) measures.push(recipe[0][x]);
      }
    }
  }

  const getMeasures = () => {
    measures?.filter((item) => {
      if (item !== " ") {
        empty.push(item);
      }
    });
  };
  getMeasures();

  return (
    <div className="w-full m-auto">
      {recipe?.map((item) => (
        <div
          key={item["idMeal"]}
          className="flex flex-col items-center gap-8  py-8 w-full"
        >
          <div className="flex flex-col lg:flex-row gap-8 md:gap-20 w-[70vw] justify-between">
            <div className="lg:flex-1  h-60 lg:h-80 relative border-2 border-[#94A684]">
              <Image
                src={item["strMealThumb"]}
                fill
                className="object-cover"
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="text-center lg:text-left text-3xl md:text-4xl md:text-5xl lg:text-6xl font-bold capitalize text-[#94A684]">
                {item["strMeal"]}
              </h1>
              <h2 className="text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                error aliquid ipsum quae? Fugit maiores maxime provident
                reiciendis ullam in earum quae harum esse accusantium, molestias
                voluptatem eum obcaecati architecto enim quis corporis labore
                aperiam? Corporis laborum voluptatum quis voluptatem!
              </h2>
              <p className="hidden md:block">
                <strong>Source: </strong>
                <Link href={item["strSource"]} target="_blank">
                  {item["strSource"]}
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:mt-8 w-[70vw] gap-8 lg:justify-between items-center lg:items-start">
            <div className="flex flex-col gap-4">
              <div className="lg:w-[50vw]">
                <h2 className="text-2xl font-bold">How to Make</h2>
                <p className="text-justify">{item["strInstructions"]}</p>
              </div>
              {/* <div className="flex">
                {item["strTags"]?.split(",").map((ele, i) => (
                  <div key={i} className="mx-2">
                    <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{ele}
                    </p>
                  </div>
                ))}
              </div> */}
              {item["strYoutube"] ? (
                <div className="flex flex-col  py-4 gap-4 hidden md:block">
                  <h2 className="text-2xl font-bold">Watch Video</h2>
                  <div className="">
                    <ReactPlayer
                      controls
                      url={item["strYoutube"]}
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              ) : null}
            </div>
            <div className="border-2 border-[#94A684] w-full lg:w-[15vw] p-4 bg-[#E4E4D0] flex flex-col items-center lg:items-start order-first lg:order-last text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <div className="flex lg:w-full gap-6 items-center justify-center lg:justify-start lg:items-start">
                <div className="flex-col">
                  {ingredients.map((item, index) => (
                    <div key={index}>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex-col">
                  {empty.map((item, index) => (
                    <div key={index}>
                      <span>#{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
