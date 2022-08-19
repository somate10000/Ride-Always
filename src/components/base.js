import React from "react";
import logo from "../assets/logo.svg";

const Base = () => {
  return (
    <div>
      <div className="bg-[#e2ebff] px-[15px] pb-44 pt-16 sm:px-[10%] md:px-[5%] xl:flex xl:items-center">
        <div className="xl:mt-8">
          <img src={logo} alt="/" />
          <p className="text-[#4F5D78] text-[15px] mt-5 md:w-[410px] xl:w-[300px] xl:mt-5">
            Search for cheap rental cars in New York. With a diverse fleet of
            19,000 vehicles, Waydex offers its consumers an attractive and fun
            selection.
          </p>
        </div>
        <div className="lg:flex lg:items-center xl:ml-5">
          <div className="grid grid-cols-2 justify-between mt-12 font-[PubSans] ">
            <div>
              <p className="text-[16px] text-[#32324E] font-semibold">
                Company
              </p>
              <ul className="text-[#4F5D78] text-sm ">
                <li className="mt-4 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                  About us
                </li>
                <li className="mt-3 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                  Pricing plans
                </li>
                <li className="mt-3 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                  Our blog
                </li>
                <li className="mt-3 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                  Contacts
                </li>
                hover:
              </ul>
            </div>
            <div className="lg:ml-[100px] xl:ml-[75px]">
              <p className="text-[16px] text-[#32324E] font-semibold">
                Support
              </p>
              <ul className="text-[#4F5D78] text-sm">
                <li className="mt-4 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                  Help center
                </li>
                <li className="mt-3 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                  Ask a question
                </li>
                <li className="mt-3 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                  Privacy policy
                </li>
                <li className="mt-3 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                  Terms & conditions
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-14 lg:ml-[180px] xl:mt-[32px]">
            <p className="text-[16px] text-[#32324E] font-semibold">
              Neighborhoods in New York
            </p>
            <div className="grid items-center justify-between w-full grid-cols-2">
              <div>
                <ul className="text-[#4F5D78] text-sm">
                  <li className="mt-4 hover:hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                    Manhattan
                  </li>
                  <li className="mt-3 hover:hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                    Central New York City
                  </li>
                  <li className="mt-3 hover:hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                    Upper East Side
                  </li>
                  <li className="mt-3 hover:hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                    Queens
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-[#4F5D78] text-sm lg:ml-16">
                  <li className="mt-4 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                    Theater District
                  </li>
                  <li className="mt-3 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                    Midtown
                  </li>
                  <li className="mt-3 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                    SoHo
                  </li>
                  <li className="mt-3 hover:text-[#1A9DF4] cursor-pointer  transition ease-in delay-75">
                    Chelsea
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
