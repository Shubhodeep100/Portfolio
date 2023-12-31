import React from "react";
import dashboard from "../assets/port/dashboard.jpg";
import fitclub from "../assets/port/fitclub.jpg";
import redux from "../assets/port/reduxShop.jpg";
import shoper from "../assets/port/shopperz.jpg";
import thread from "../assets/port/threadC.jpg";
import todo from "../assets/port/todo.jpg";
import gqlproj from '../assets/port/gqlproj.jpg';
import customer from '../assets/port/customer.jpg';
import calblog from '../assets/port/calblog.jpg';
import netflix from '../assets/port/netflix.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: dashboard,
      projname: "Business Dashboard",
      demoLink: "https://omoinew-dashboard.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Omoi-Dashboard",
    },
    {
      id: 2,
      src: fitclub,
      projname: "Fitclub",
      demoLink: "https://fitclubshubho.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/FitClub",
    },
    {
      id: 3,
      src: customer,
      projname: "Customer Dashboard",
      demoLink: "https://customer-dashboard-971.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/CustomerDashboard",
    },
    {
      id: 4,
      src: redux,
      projname: "REDUX Food Store",
      demoLink: "https://redux-ecommerce.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Redux_E-Commerce",
    },
    {
      id: 5,
      src: shoper,
      projname: "Shopperz",
      demoLink: "https://shopping-api.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Shoperz",
    },
    {
      id: 6,
      src: thread,
      projname: "Threads Clone",
      demoLink: "https://threads-app-lac-tau.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/Threads_App",
    },
    {
      id: 7,
      src: todo,
      projname: "Todo Application",
      demoLink: "https://to-doapplication.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Todo-app",
    },
    {
      id: 8,
      src: gqlproj,
      projname: "Project Management System",
      codeLink: "https://github.com/Shubhodeep100/GraphQL-MERN",
    },
    {
      id: 9,
      src: calblog,
      projname: "Calendar Blog App",
      demoLink: "https://calender-blog.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/CalenderBlog",
    },
    {
      id: 10,
      src: netflix,
      projname: "Netflix Clone",
      demoLink:
        "https://vercel.com/shubhodeep100/netflix-clone/3RAeW2RYV2HBPahGKcvPMHMKsS7J",
      codeLink: "https://github.com/Shubhodeep100/Netflix_Clone",
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:pr-0 items-center justify-center">
          {portfolios.map(({ id, src, projname, demoLink, codeLink }) => (
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
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6  m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
