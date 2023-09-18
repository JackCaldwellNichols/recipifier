"use client";

import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  meal?: any;
}

const Card = ({ meal }: Props) => {
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
    </div>
  );
};

export default Card;
