"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FeaturePage = () => {
  const [showFullText1, setShowFullText1] = useState(false);
  const [showFullText2, setShowFullText2] = useState(false);
  const [showFullText3, setShowFullText3] = useState(false);

  const router = useRouter();

  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic similique architecto atque vitae ducimus ipsum molestias tempore? Aliquam, reiciendis tempora.";
  const words = text.split(" ");
  const initialText = words.slice(0, 15).join(" ");

  const handleToggletext1 = () => {
    setShowFullText1((prevShowFullText) => !prevShowFullText);
  };
  const handleToggletext2 = () => {
    setShowFullText2((prevShowFullText) => !prevShowFullText);
  };
  const handleToggletext3 = () => {
    setShowFullText3((prevShowFullText) => !prevShowFullText);
  };

  return (
    <div>
      <button
        className="rounded-full p-2 bg-white m-4"
        onClick={() => router.push("/")}
      >
        Back
      </button>
      <div className="flex flex-col items-center mt-8">
        <h1>FEATURES</h1>
        <h1 className="text-3xl mt-4">Our Features & Services.</h1>
        <div className="flex flex-row justify-center mt-8 ml-2">
          <div className="bg-white me-4 flex flex-col items-center hover:bg-slate-100 overflow-hidden rounded-lg shadow-md duration-300 hover:scale-105 hover:shadow-xl w-1/4 ">
            <Image
              src="/architectures.webp"
              width={200}
              height={200}
              className="mt-3 rounded-lg"
              alt="picture of communication"
            />
            <h1 className="mt-3 font-bold text-green-400">Communications</h1>
            <p className="m-3 text-pretty justify-center items-center">
              {showFullText1 ? text : initialText}
            </p>
            <button
              onClick={handleToggletext1}
              className="bg-green-400 mb-3 text-white p-2 rounded"
            >
              {showFullText1 ? "Less" : "More"}
            </button>
          </div>
          <div className="bg-white me-4 flex flex-col items-center hover:bg-slate-100 overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl w-1/4">
            <Image
              src="/check-mark.png"
              width={100}
              height={100}
              className="mt-3"
              alt="picture of communication"
            />
            <h1 className="mt-3 font-bold text-green-400">Inspired Design</h1>
            <p className="m-3 text-pretty">
              {showFullText2 ? text : initialText}
            </p>
            <button
              onClick={handleToggletext2}
              className="bg-green-400 mb-3 text-white p-2 rounded"
            >
              {showFullText2 ? "Less" : "MORE"}
            </button>
          </div>
          <div className="bg-white flex flex-col items-center hover:bg-slate-100 overflow-hidden rounded-lg shadow-md duration-300 hover:scale-105 hover:shadow-xl mr-2 w-1/4">
            <Image
              src="/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
              width={200}
              height={200}
              className="mt-3 rounded-lg"
              alt="picture of communication"
            />
            <h1 className="mt-3 font-bold text-green-400">Happy Customers</h1>
            <p className="m-3 text-pretty">
              {showFullText3 ? text : initialText}
            </p>
            <button
              onClick={handleToggletext3}
              className="bg-green-400 mb-3 text-white p-2 rounded"
            >
              {showFullText3 ? "Less" : "MORE"}
            </button>
          </div>
        </div>
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900 mt-16">
          When you look
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>
      </div>
    </div>
  );
};

export default FeaturePage;
