import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center text-center ">
        <p className="text-[#1ca75b] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl font-bold md:text-7xl sm:text-6xl md:py-3">
          Grow with data.
        </h1>
        <div className="flex justify-center py-1 ">
          <p className="text-xl font-bold md:text-5xl sm:text-4xl">
            Fast, flexible financing for
          </p>
          <Typed
            className="text-xl font-bold md:text-5xl pl-2 md:pl-4 sm:text-4xl text-[#1ca75b] .text-shadow-sm "
            strings={["BNB", "BTC", "ETH", "TEE", "SASS", "..."]}
            typeSpeed={140}
            backSpeed={100}
            loop
          />
        </div>
        <p className="text-xl font-bold text-gray-500 md:text-2xl">
          Mentor your data analytics to increase revenue for BNB, BTC, ETH ,TEE,
          & SASS platforms.
        </p>
        <button className="bg-[#1ca75b] w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
