"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const page = () => {

    const[showFullText1, setShowFullText1] = useState(false)
    const[showFullText2, setShowFullText2] = useState(false)
    const[showFullText3, setShowFullText3] = useState(false)

    const router = useRouter();

    const handleToogleText1 = () => {
 setShowFullText1(prevShowFullText => !prevShowFullText)
    }
    const handleToogleText2 = () => {
      setShowFullText2(prevShowFullText => !prevShowFullText)

    }
    const handleToogleText3 = () => {
      setShowFullText3(prevShowFullText => !prevShowFullText)

    }

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic similique architecto atque vitae ducimus ipsum molestias tempore? Aliquam, reiciendis tempora."
    const words = text.split(" ");
    const initialTexts = words.slice(0,15).join(" ");
  return (
    <div>
      <button onClick={()=>router.push("/")} className='rounded-full p-2 bg-white m-2'>Back</button>
      <h1 className="text-4xl text-white flex justify-center mb-8">
        Our Services
      </h1>
      <div className="flex justify-center">
        <div className="relative w-full max-w-5xl h-96">
          {" "}
          {/* Example: w-full and max-w-4xl sets the max width and h-96 sets the height */}
          <Image
            src="/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
            layout="fill" // This makes the image cover the dimensions of the parent div
            objectFit="cover" // This makes sure the image covers the entire div
            alt="girl image"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center mt-8 relative bottom-16">
        <div className="bg-white me-4 flex flex-col items-center hover:bg-slate-100 overflow-hidden rounded-lg shadow-md duration-300 hover:scale-105 hover:shadow-xl w-1/4 ml-2">
          <div className="w-32 h-32 relative rounded-full overflow-hidden mt-3">
            <Image
              src="/architectures.webp"
              layout="fill" // Fill the parent div
              objectFit="cover" // Cover the div without distortion
              alt="picture of communication"
            />
          </div>
          <h1 className="mt-3 font-bold text-green-400">Communications</h1>
          <p className="m-3 text-pretty">
            {showFullText1 ? text : initialTexts}
          </p>
          <button onClick={handleToogleText1} className="bg-green-400 mb-3 text-white p-2 rounded">
            {showFullText1 ? 'Less' : 'MORE'}
          </button>
        </div>
        <div className="bg-white me-4 flex flex-col items-center hover:bg-slate-100 overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl w-1/4">
          <Image
            src="/check-mark.png"
            width={50}
            height={50}
            className="mt-3 "
            alt="picture of communication"
          />
          <h1 className="mt-3 font-bold text-green-400">Inspired Design</h1>
          <p className="m-3 text-pretty">
          {showFullText2 ? text : initialTexts}
          </p>
          <button onClick={handleToogleText2} className="bg-green-400 mb-3 text-white p-2 rounded">
            {showFullText2 ? 'Less' : 'MORE'}
          </button>
        </div>
        <div className="bg-white flex flex-col items-center hover:bg-slate-100 overflow-hidden rounded-lg shadow-md duration-300 hover:scale-105 hover:shadow-xl w-1/4 mr-2">
          <div className="w-32 h-32 relative rounded-full overflow-hidden ">
            <Image
              src="/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
              layout="fill" // Fill the parent div
              objectFit="cover" // Cover the div without distortion
              className="mt-3"
              alt="picture of communication"
            />
          </div>
          <h1 className="mt-3 font-bold text-green-400">Happy Customers</h1>
          <p className="m-3 text-pretty">
          {showFullText3 ? text : initialTexts}
          </p>
          <button onClick={handleToogleText3} className="bg-green-400 mb-3 text-white p-2 rounded">
           {showFullText3 ? 'Less' : 'MORE'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
