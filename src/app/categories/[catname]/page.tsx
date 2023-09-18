"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card";

interface Props {
  params?: any;
  item: any;
}

const MealList = ({ params }: Props) => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const getMeals = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.catname}`
        );
        setMeals(res.data.meals);
      } catch (error) {
        setError(true);
      }
    };
    getMeals();
  }, [meals]);

  useEffect(() => {
    const getMeals = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.catname}`
        );
        setMeals(res.data.meals);
      } catch (error) {
        setError(true);
      }
    };
    getMeals();
  }, [meals]);

  return (
    <div className="flex flex-col items-center justify-center w-screen mb-60">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center py-6 my-16 text-[#94A684]">
        {params.catname}
      </h1>
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Filter recipes"
        className="border-2 w-80 h-16 py-2 px-2 mb-12"
      /> */}

      <div className="flex flex-wrap items-center justify-center lg:w-[80vw] md:w-[100vw]">
        {meals
          // .filter((item) => {
          // if (text === null) {
          //   return meals;
          // }
          // if (item["strMeal"].toLowerCase().includes(text.toLowerCase())) {
          //   return item;
          // }
          // })
          .map((ele, index) => (
            <Card meal={ele} key={index} />
          ))}
      </div>
    </div>
  );
};

export default MealList;
