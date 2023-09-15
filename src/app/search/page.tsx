"use client";

import React, { useState } from "react";
import axios from "axios";
import Card from "@/components/Card";
import { ImSpinner2 } from "react-icons/im";
import Footer from "@/components/Footer";

const Search = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    if (text === "") {
      return alert("Please enter a name");
    }
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
      );
      console.log(res.data.meals);
      setResult(res.data.meals);
      setLoading(false);
      setText("");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center py-6 my-16 text-[#94A684]">
        Search for your recipe
      </h1>
      <div className="flex flex-col items-center justify-center w-screen mb-60">
        <div className="flex flex-col md:flex-row w-104 items-center justify-center mb-12">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Find a recipe"
            className="border-2 w-80 h-16 py-2 px-2"
          />
          {loading ? (
            <button
              onClick={handleSearch}
              className="bg-[#94A684] h-16 w-40 md:w-24 text-white flex items-center justify-center mt-4 md:mt-0 hover:bg-[#004225]"
            >
              <ImSpinner2 />
            </button>
          ) : (
            <button
              onClick={handleSearch}
              className="bg-[#94A684] h-16 w-40 md:w-24 text-white  hover:bg-[#004225] mt-4 md:mt-0 text-xl rounded-lg md:rounded"
            >
              Search
            </button>
          )}
        </div>
        {!result && <p className="text-red-500">Whoops! No results found!</p>}
        <div className="flex flex-wrap items-center justify-center lg:w-[80vw] md:w-[100vw]">
          {result?.map((ele) => (
            <Card meal={ele} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
