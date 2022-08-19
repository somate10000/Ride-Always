import React from "react";
import {
  IoArrowForward,
  IoFlashOutline,
  IoHeartOutline,
  IoPeopleOutline,
  IoSpeedometerOutline,
  IoHardwareChipOutline,
} from "react-icons/io5";
import car1 from "../assets/car-1.jpg";
import car2 from "../assets/car-2.jpg";
import car3 from "../assets/car-3.jpg";
import car4 from "../assets/car-4.jpg";
import car5 from "../assets/car-5.jpg";
import car6 from "../assets/car-6.jpg";

const Garage = [
  {
    id: 1,
    img: car1,
    name: "Toyota RAV4",
    year: "2021",
    people: "4 People",
    consumption: "6.1km / 1-litre",
    state: "Hybrid",
    functionality: "Automatic",
    price: "$440",
  },
  {
    id: 2,
    img: car2,
    name: "BMW 3 Series",
    year: "2019",
    people: "4 People",
    consumption: "8.2km / 1-litre",
    state: "Gasoline",
    functionality: "Automatic",
    price: "$350",
  },
  {
    id: 3,
    img: car3,
    name: "Volkswagen T-Cross",
    year: "2020",
    people: "4 People",
    consumption: "5.3km / 1-litre",
    state: "Gasoline",
    functionality: "Automatic",
    price: "$400",
  },
  {
    id: 4,
    img: car4,
    name: "Cadillac Escalade",
    year: "2020",
    people: "4 People",
    consumption: "7.7km / 1-litre",
    state: "Gasoline",
    functionality: "Automatic",
    price: "$620",
  },
  {
    id: 5,
    img: car5,
    name: "BMW 4 Series GTI",
    year: "2021",
    people: "4 People",
    consumption: "7.6km / 1-litre",
    state: "Gasoline",
    functionality: "Automatic",
    price: "$530",
  },
  {
    id: 6,
    img: car6,
    name: "BMW 4 Series",
    year: "2019",
    people: "4 People",
    consumption: "7.2km / 1-litre",
    state: "Gasoline",
    functionality: "Automatic",
    price: "$490",
  },
];

const Cars = () => {
  return (
    <div>
      <div className="bg-[#edf2fc] pb-10  px-[15px] pt-11 sm:px-[10%]  md:px-[5%]">
        <div className="flex items-center justify-between">
          <h2 className="text-[#32324E] text-[30px] font-[OxaniumR]">
            Featured cars
          </h2>
          <div className="flex items-center justify-center gap-1 cursor-pointer group">
            <p className="text-[#4F5D78]  text-sm">View more</p>
            <IoArrowForward className="transition-colors text-[#4F5D78] ease-in group-hover:text-[#1A9DF4]" />
          </div>
        </div>
        <div className="md:gap-7 md:grid md:grid-cols-2 lg:grid-cols-3">
          {Garage.map((info, index) => {
            return (
              <div key={index}>
                <div className="bg-[#edf2fc] p-3 pb-6 shadow-md border-[1px] rounded-2xl  border-white mt-6">
                  <img
                    src={info.img}
                    alt="/"
                    className="w-full rounded-lg cursor-pointer"
                  />
                  <div className="px-3">
                    <div className="flex justify-between mt-4">
                      <h2 className="text-[22px] text-[#32324E] font-[PoppinsM] md:text-[20px]">
                        {info.name}
                      </h2>
                      <div className="border-2 border-dashed border-[#1a9df460] flex items-center justify-center rounded-full px-4 md:px-[14px]">
                        <p className="text-[#22262A]  font-[PoppinsM] text-[14px] ">
                          {info.year}
                        </p>
                      </div>
                    </div>
                    <div className="pr-20 mt-5 font-[PubSans] md:pr-0">
                      <div className="flex items-center justify-between bg">
                        <div className="flex gap-2">
                          <IoPeopleOutline color="#1A9DF4" size={20} />
                          <p className="text-[#4F5D78] text-[15px] ">
                            {info.people}
                          </p>
                        </div>
                        <div className="flex gap-2 pr-3 ">
                          <IoFlashOutline color="#1A9DF4" size={20} />
                          <p className="text-[#4F5D78] text-[15px] ">
                            {info.state}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-2">
                          <IoSpeedometerOutline color="#1A9DF4" size={20} />
                          <p className="text-[#4F5D78] text-[15px]">
                            {info.consumption}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <IoHardwareChipOutline color="#1A9DF4" size={20} />
                          <p className="text-[#4F5D78] text-[15px]">
                            {info.functionality}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-300 my-4" />
                    <div className="flex justify-between">
                      <h1 className="text-[24px] text-[#32324E]">
                        {info.price}
                        <span className="text-sm"> / month</span>
                      </h1>
                      <div className="flex items-center gap-2 group">
                        <div className="bg-[#D9ECFC] transition ease-in delay-75 group-hover:bg-red-100 cursor-pointer  flex items-center justify-center rounded-xl w-9 h-9">
                          <IoHeartOutline
                            size={18}
                            className="text-[#55B0EC] transition-colors ease-in group-hover:text-red-500"
                          />
                        </div>
                        <button className="bg-[#1A9DF4] px-[15px] py-[7px] rounded-xl  cursor-pointer hover:shadow-[#c3ccd1]  hover:shadow-inner hover:drop-shadow-xl transition ease-in delay-75">
                          <p className="text-sm text-white">Rent now</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cars;
