import React from "react";
import Laptop from "../assets/4565.jpg";

const Analytics = () => {
  return (
    <div className="w-full px-4 py-16 bg-white">
      <div className="max-w-[1240px]  mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 " src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            The purpose of msfvenom is to create encoded payloads or shellcode
            capable of being executed on a wide range of platforms—these are
            generally Metasploit’s own agents, although there are options to
            handle third-party code, such as Trojan existing executables and so
            forth. We’ll talk later about Metasploit’s handlers, their strengths
            and weaknesses, but for now let’s keep things generic.
          </p>
          <button className="bg-[#000300] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
