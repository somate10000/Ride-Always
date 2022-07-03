import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full px-4 py-16 text-cyan-50">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 ">
          <h1 className="text-2xl font-bold md:text-4xl sm:text-3xl ">
            Want tips & tricks to optimize your{" "}
          </h1>
          <p>Sign up to our newsletter and stay up yo date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col items-center justify-between w-full sm:flex-row">
            <input
              className="flex w-full p-3 text-black rounded-md"
              type={"email"}
              placeholder="Enter"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p className="text-center">
            We care about the protection of your data. Read our
            <span className="text-[#00df9a]"> Privacy Policy.</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
