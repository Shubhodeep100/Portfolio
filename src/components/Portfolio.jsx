import React from "react";
import dashboard from "../assets/port/dashboard.jpg";
import fitclub from "../assets/port/fitclub.jpg";
import redux from "../assets/port/reduxShop.jpg";
import shoper from "../assets/port/shopperz.jpg";
import thread from "../assets/port/threadC.jpg";
import todo from "../assets/port/todo.jpg";
import gqlproj from "../assets/port/gqlproj.jpg";
import customer from "../assets/port/customer.jpg";
import calblog from "../assets/port/calblog.jpg";
import ecom from "../assets/port/ecom.jpg";
import merlin from "../assets/port/merlin.jpg";
import chatapp from "../assets/port/chatapp.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: thread,
      projname: "Threads Clone",
      demoLink: "https://threads-app-lac-tau.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/Threads_App",
    },
    {
      id: 2,
      src: ecom,
      projname: "NEXT Ecommerce",
      demoLink: "https://next-ecommerce-shop-rho.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/NEXT-EcommerceShop",
    },
    {
      id: 3,
      src: chatapp,
      projname: "FreakyChatt",
      demoLink: "https://freakychat.onrender.com/",
      codeLink: "https://github.com/Shubhodeep100/FreakyChat",
    },
    {
      id: 5,
      src: fitclub,
      projname: "Fitclub",
      demoLink: "https://fitclubshubho.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/FitClub",
    },
    {
      id: 6,
      src: dashboard,
      projname: "Business Dashboard",
      demoLink: "https://omoinew-dashboard.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Omoi-Dashboard",
    },
    {
      id: 7,
      src: merlin,
      projname: "Merlin SaaS",
      demoLink: "https://merlin-saasnote.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/Merlin_SaaS",
    },
    {
      id: 8,
      src: customer,
      projname: "Customer Dashboard",
      demoLink: "https://customer-dashboard-971.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/CustomerDashboard",
    },

    {
      id: 9,
      src: redux,
      projname: "REDUX Food Store",
      demoLink: "https://redux-ecommerce.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Redux_E-Commerce",
    },
    {
      id: 10,
      src: shoper,
      projname: "Shopperz",
      demoLink: "https://shopping-api.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Shoperz",
    },

    {
      id: 11,
      src: todo,
      projname: "Todo Application",
      demoLink: "https://to-doapplication.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Todo-app",
    },
    {
      id: 12,
      src: gqlproj,
      projname: "Project Management System",
      codeLink: "https://github.com/Shubhodeep100/GraphQL-MERN",
    },
    {
      id: 13,
      src: calblog,
      projname: "Calendar Blog App",
      demoLink: "https://calender-blog.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/CalenderBlog",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3 flex justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>
        <p className="py-6 text-xl text-center">
          Check out some of my work right here
        </p>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 px-12 items-center justify-center">
          {portfolios.map(({ src, projname, demoLink, codeLink, id }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-full sm:h-44 h-36 rounded-md duration-200 hover:scale-105"
              />

              <p className="flex justify-center pt-2">
                <span className="border-b-2 border-gray-500 inline-block text-center">
                  {projname}
                </span>
              </p>

              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-1/2 px-6 m-4 duration-200 hover:scale-105 ${
                    projname === "Project Management System"
                      ? "cursor-not-allowed"
                      : ""
                  }`}
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 m-4 duration-200 hover:scale-105"
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
