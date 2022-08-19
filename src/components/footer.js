import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoSkype,
  IoMailOutline,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#edf2fc] border-[1px] p-5 rounded-t-2xl py-5 -mt-[103px] mx-5 h-[103px] border-white sm:mx-[10%] md:mx-[5%] md:flex md:flex-row-reverse items-center justify-between md:h-[83px] md:-mt-[83px]">
        <div className="flex text-[#4F5D78] text-xl gap-5 ">
          <IoLogoFacebook className="transition-colors ease-out cursor-pointer hover:text-amber-500" />
          <IoLogoInstagram className="transition-colors ease-out cursor-pointer hover:text-amber-500" />
          <IoLogoTwitter className="transition-colors ease-out cursor-pointer hover:text-amber-500" />
          <IoLogoLinkedin className="transition-colors ease-out cursor-pointer hover:text-amber-500" />
          <IoLogoSkype className="transition-colors ease-out cursor-pointer hover:text-amber-500" />
          <IoMailOutline className="transition-colors ease-out cursor-pointer hover:text-amber-500" />
        </div>
        <p className=" text-[#4F5D78] text-sm mt-5 md:mt-0">
          © 2022
          <button className="mx-2 transition-colors ease-out cursor-pointer hover:text-amber-500">
            localrepo._
          </button>
          All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
