import React from "react";
import dashboard from "../assets/port/dashboard.jpg";
import fitclub from "../assets/port/fitclub.jpg";
import redux from "../assets/port/reduxShop.jpg";
import shoper from "../assets/port/shopperz.jpg";
import thread from "../assets/port/threadC.jpg";
import todo from "../assets/port/todo.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: dashboard,
      projname: "Business dashboard",
    },
    {
      id: 2,
      src: fitclub,
      projname: "Fitclub",
    },
    {
      id: 3,
      src: redux,
      projname: "REDUX Food Store",
    },
    {
      id: 4,
      src: shoper,
      projname: "Shopperz",
    },
    {
      id: 5,
      src: thread,
      projname: "Threads Clone",
    },
    {
      id: 6,
      src: todo,
      projname: "Todo Application",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-xl">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, projname }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-60 h-28 rounded-md duration-200 hover:scale-105"
              />
              <p className="flex justify-center pt-2">
                <span className="border-b-2 border-gray-500 inline-block">
                  {projname}
                </span>
              </p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6  m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
