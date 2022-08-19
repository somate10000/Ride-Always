import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#edf2fc] overflow-hidden  px-[15px] pt-[98px] pb-14 sm:px-[10%] md:px-0  md:pl-[5%] xl:pl-0">
        <div className="md:flex md:w-[150%] ">
          <div className="md:w-[42%] md:pt-14 lg:pl-[4%] lg:pr-[2.5%] xl:pt-28 xl:pl-[105px]">
            <h2 className="text-[#32324E] text-[32px] pr-[25px] font-[Oxanium] md:text-[44px] xl:text-[46px]">
              THE EASY WAY TO TAKEOVER A LEASE
            </h2>
            <p className="font-[PubSans]  text-[#4F5D78] text-base mt-4 ml-1 xl:text-[16px]">
              Live in New York, New Jersey and Costa Rica!
            </p>
          </div>
          <div className="h-[396px] w-[500px]  hidden md:flex md:mr-[160px] lg:mr-[500px] lg:w-[750px] lg:h-[450px] xl:mr-[600px] xl:h-[480px]  xl:w-[1000px] hero-banner"></div>
        </div>
        <div className="bg-[#edf1fa]   h-[355px] shadow-md border-[1px] rounded-2xl  border-white mt-8 md:absolute md:-mt-[140px]  md:grid md:grid-cols-4 md:h-[92px] md:w-[690px]  lg:ml-[6%] xl:ml-[7.8%] xl:-mt-40">
          <div className="pl-5 pt-4 h-[86px] border-b border-gray-300 md:border-b-0 md:border-r md:p-5 md:w-[180px]">
            <p className="text-sm font-[PubSans] text-[#8B95A7]">
              Car, model, or brand
            </p>
            <input
              className="w-full mt-2 bg-transparent outline-none focus:outline placeholder:text-gray-500 "
              placeholder="What car are you looking at?"
            />
          </div>
          <div className="pl-5 pt-4 h-[86px] border-b border-gray-300 md:border-b-0 md:border-r md:m-1 md:w-[180px] ">
            <p className="text-sm font-[PubSans] text-[#8B95A7]">
              Max. monthly payment
            </p>
            <input
              className="w-full mt-2 bg-transparent outline-none focus:outline placeholder:text-gray-500 md:pr-5 "
              placeholder="Add an amount in $"
            />
          </div>
          <div className="pl-5 pt-4 h-[86px] md:m-1 md:w-[180px]">
            <p className="text-sm font-[PubSans] text-[#8B95A7]">Make Year</p>
            <input
              className="w-full mt-2 bg-transparent outline-none focus:outline placeholder:text-gray-500 md:pr-5"
              placeholder="Add a minimal make year"
            />
          </div>

          <div className="flex items-center justify-center p-5 ">
            <button
              className="h-[50px] px-[40%] items-center justify-center flex rounded-xl bg-[#1A9DF4] text-white md:px-[20%] 
             cursor-pointer hover:shadow-[#c3ccd1]  hover:shadow-inner hover:drop-shadow-xl transition ease-in delay-75"
            >
              <p className="font-[PubSans] text-sm">SEARCH</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

/*<div className="bg-[#e7ecf5]  h-[355px] shadow-md border-[1px] rounded-2xl  border-white -mt-20 z-0   md:grid md:grid-cols-4 md:h-[92px]">
          <div className="pl-5 pt-4 h-[86px] border-b border-gray-300 md:border-b-0 md:border-r md:pr-5">
            <p className="text-sm font-[PubSans] text-[#8B95A7]">
              Car, model, or brand
            </p>
            <input
              className="w-full mt-2 bg-transparent outline-none focus:outline placeholder:text-gray-500 "
              placeholder="What car are you looking at?"
            />
          </div>
          <div className="pl-5 pt-4 h-[86px] border-b border-gray-300 md:border-b-0 md:border-r md:pl-3">
            <p className="text-sm font-[PubSans] text-[#8B95A7]">
              Max. monthly payment
            </p>
            <input
              className="w-full mt-2 bg-transparent outline-none focus:outline placeholder:text-gray-500 md:pr-5"
              placeholder="Add an amount in $"
            />
          </div>
          <div className="pl-5 pt-4 h-[86px] md:border-r md:pl-3">
            <p className="text-sm font-[PubSans] text-[#8B95A7]">Make Year</p>
            <input
              className="w-full mt-2 bg-transparent outline-none focus:outline placeholder:text-gray-500 md:pr-5"
              placeholder="Add a minimal make year"
            />
          </div>

          <div className="flex items-center justify-center p-5 ">
            <button className="h-[50px] px-[40%] items-center justify-center flex rounded-xl bg-[#1A9DF4] text-white md:px-[20%]">
              <p className="font-[PubSans] text-sm">SEARCH</p>
            </button>
          </div>
        </div> */
