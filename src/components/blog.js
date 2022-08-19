import React from "react";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import blog4 from "../assets/blog-4.jpg";
import blog5 from "../assets/blog-5.jpg";
import { IoTimeOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
const info = [
  {
    id: 1,
    img: blog1,
    article_header: "Opening of new offices of the company",
    date: "August 16, 2022",
    comments: "114",
    state: "Company",
  },
  {
    id: 2,
    img: blog2,
    article_header: "What cars are most vulnerable",
    date: "July 10, 2022",
    comments: "102",
    state: "Repair",
  },
  {
    id: 3,
    img: blog3,
    article_header: "Statistics showed which average age",
    date: "May 24, 2022",
    comments: "394",
    state: "Cars",
  },
  {
    id: 4,
    img: blog4,
    article_header: "What´s required when renting a car?",
    date: "May 1, 2022",
    comments: "96",
    state: "Cars",
  },
  {
    id: 5,
    img: blog5,
    article_header: "New rules for handling our cars",
    date: "April 25, 2022",
    comments: "101",
    state: "Company",
  },
];

const Blog = () => {
  return (
    <div>
      <div className="bg-[#edf2fc] px-[15px] pb-20 sm:px-[10%] md:px-[5%]">
        <div>
          <h1 className="text-[#32324E] text-[30px] font-[OxaniumR]">
            Our Blog
          </h1>
        </div>
        <div className="mt-8 scroll-smooth">
          <div className="flex gap-5 overflow-x-scroll wrapper">
            {info.map((blog, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#edf2fc] pb-4 min-w-[323px] shadow-md border-[1px] rounded-2xl  border-white mb-4"
                >
                  <img
                    src={blog.img}
                    alt=""
                    className="duration-300 transition-all min-w-[323px] min-h-[210px] rounded-t-2xl cursor-pointer"
                  />
                  <div
                    className="flex w-0 relative -mt-12 ml-5 bg-[#1A9DF4] items-center justify-center rounded-2xl px-[15%] py-[6px] 
                   cursor-pointer hover:shadow-[#c3ccd1]  hover:shadow-inner hover:drop-shadow-xl transition ease-in delay-75"
                  >
                    <p className="text-white font-[PubSans] text-[14px]">
                      {blog.state}
                    </p>
                  </div>
                  <div className="px-5 mt-8">
                    <p className="text-[#32324E] text-[20px] font-[PubSans] hover:text-[#1A9DF4] transition ease-in delay-100 cursor-pointer">
                      {blog.article_header}
                    </p>
                    <div className="flex items-center justify-between mt-3 text-[#4F5D78] text-[15px]">
                      <div className="flex items-center gap-2">
                        <IoTimeOutline />
                        <p>{blog.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <IoChatbubbleEllipsesOutline />
                        <p>{blog.comments}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
