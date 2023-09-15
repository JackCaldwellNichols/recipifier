import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({ meal }) => {
  return (
    <div className="w-72 md:w-80 h-96 rounded overflow-hidden shadow-lg flex flex-col m-4">
      <Link href={`/recipes/${meal.idMeal}`} className="relative h-40">
        <Image className="object-cover" fill src={meal.strMealThumb} alt="" />
      </Link>
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {meal.strTags
          ?.split(",")
          .splice(0, 2)
          .map((ele, i) => (
            <span
              key={ele.i}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{ele}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Card;
