import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import { IoCarOutline, IoPersonOutline } from "react-icons/io5";
import { useState } from "react";

const NavBar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      console.log("scroll");
    };
  }, []);

  return (
    <div>
      <div
        className={
          show
            ? "bg-[#edf2fc] fixed  z-10 w-full py-[15px] flex items-center justify-between px-[15px] shadow-xl sm:px-[15px] md:px-[5%]"
            : "bg-[#edf2fc] fixed  z-10 w-full py-[15px] flex items-center justify-between px-[15px] sm:px-[10%] md:px-[5%]"
        }
      >
        <img src={logo} alt="/" />
        <div className="hidden lg:flex">
          <ul className="text-[#4F5D78] text-sm flex font-[Poppins] gap-4 xl:gap-12">
            <li className="cursor-pointer hover:text-[#1A9DF4] transition ease-in delay-75">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#1A9DF4] transition ease-in delay-75">
              Explore cars
            </li>
            <li className="cursor-pointer hover:text-[#1A9DF4] transition ease-in delay-75">
              About us
            </li>
            <li className="cursor-pointer hover:text-[#1A9DF4] transition ease-in delay-75">
              Blog
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden mr-4 md:flex md:flex-col">
            <p className="font-[PubSans] text-[#32324E]">8 800 234 56 78</p>
            <p className="text-[10px] text-[#4F5D78]">
              Mon - Sat: 9:00 am - 6:00 pm
            </p>
          </div>
          <div
            className="bg-[#1A9DF4] w-10 h-10 text-center rounded-xl items-center flex justify-center sm:h-10 sm:w-28 
          cursor-pointer hover:shadow-[#c3ccd1]  hover:shadow-inner hover:drop-shadow-xl transition ease-in delay-75 bg- from-slate-700 to-green-600"
          >
            <IoCarOutline size={23} color="white" className="sm:hidden" />
            <p className="hidden text-sm text-white sm:flex">Explore cars</p>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-white shadow-md rounded-xl cursor-pointer hover:bg-[#c3ccd1] transition ease-in delay-75">
            <IoPersonOutline size={23} color="#4F5D78" />
          </div>

          <div className="flex flex-col items-start text-center transition-colors ease-in rotate-180 cursor-pointer group lg:hidden">
            <div className="bg-[#4F5D78] group-hover:bg-[#1A9DF4] w-[8.8px] h-[2px] my-1" />
            <div className="bg-[#4F5D78] group-hover:bg-[#1A9DF4] w-[15.4px] h-[2px] my-1" />
            <div className="bg-[#4F5D78] group-hover:bg-[#1A9DF4] w-[22px] h-[2px] my-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
