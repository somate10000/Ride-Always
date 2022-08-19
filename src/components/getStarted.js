import React from "react";
import {
  IoCarOutline,
  IoPersonOutline,
  IoCardOutline,
  IoPersonAddOutline,
} from "react-icons/io5";
const Data = [
  {
    id: 1,
    name: "Create a profile",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure.",
    get: "Get started",
    bgcolor: "#F6D5E6",
    iconcolor: "#D23787",
    icon: IoPersonAddOutline,
  },
  {
    id: 2,
    name: "Tell us what car you want",
    desc: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
    bgcolor: "#CEEAFD",
    iconcolor: "#1A9DF4",
    icon: IoCarOutline,
  },
  {
    id: 3,
    name: "Match with seller",
    desc: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    bgcolor: "#D5F0E4",
    iconcolor: "#29B372",
    icon: IoPersonOutline,
  },
  {
    id: 4,
    name: "Make a deal",
    desc: "There are many variations of passages of Lorem available, but the majority have suffered alteration",
    bgcolor: "#E7DEF7",
    iconcolor: "#8050D3",
    icon: IoCardOutline,
  },
];

const GetStarted = () => {
  return (
    <div>
      <div className="bg-[#edf2fc] pb-10  px-[15px] pt-11 sm:px-[10%] md:px-[5%]">
        <h1 className="text-[#32324E] text-[30px] font-[OxaniumR]">
          Get started with 4 simple steps
        </h1>
        <div className="mt-8 md:grid md:grid-cols-2 md:gap-x-4 xl:grid-cols-4">
          {Data.map((data, index) => {
            return (
              <div
                key={index}
                className="h-[235px] w-[100%] bg-white rounded-2xl p-6 mb-4 xl:h-[280px]"
              >
                <div
                  color="green"
                  style={{ background: data.bgcolor }}
                  className={
                    " flex items-center justify-center rounded-xl h-[50px] w-[50px]"
                  }
                >
                  <data.icon color={data.iconcolor} size={28} />
                </div>

                <p className="text-[#32324E] text-lg  mt-4">{data.name}</p>
                <p className="text-[#4F5D78] text-[17px] mt-4">{data.desc}</p>
                <button className="mt-1">
                  <div className="transition-colors ease-linear border-b-2 hover:border-blue-500">
                    <p className="text-[#1A9DF4] text-base">{data.get}</p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
