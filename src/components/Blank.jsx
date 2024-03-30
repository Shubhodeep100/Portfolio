import React, { useState } from "react";
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
import { IoInformation } from "react-icons/io5";
import { HiArrowUturnLeft } from "react-icons/hi2";

function Blank() {
  const portfolios = [
    {
      id: 1,
      src: thread,
      projname: "Threads Clone",
      demoLink: "https://threads-app-lac-tau.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/Threads_App",
      dataAos: "zoom-in",
    },
    {
      id: 2,
      src: ecom,
      projname: "NEXT Ecommerce",
      demoLink: "https://next-ecommerce-shop-rho.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/NEXT-EcommerceShop",
      dataAos: "zoom-in",
    },
    {
      id: 3,
      src: chatapp,
      projname: "FreakyChatt",
      demoLink: "https://freakychat.onrender.com/",
      codeLink: "https://github.com/Shubhodeep100/FreakyChat",
      dataAos: "zoom-in",
    },
    {
      id: 4,
      src: fitclub,
      projname: "Fitclub",
      demoLink: "https://fitclubshubho.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/FitClub",
      dataAos: "zoom-in",
    },
    {
      id: 5,
      src: dashboard,
      projname: "Business Dashboard",
      demoLink: "https://omoinew-dashboard.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Omoi-Dashboard",
      dataAos: "zoom-in",
    },
    {
      id: 6,
      src: merlin,
      projname: "Merlin SaaS",
      demoLink: "https://merlin-saasnote.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/Merlin_SaaS",
      dataAos: "zoom-in",
    },
    {
      id: 7,
      src: customer,
      projname: "Customer Dashboard",
      demoLink: "https://customer-dashboard-971.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/CustomerDashboard",
      dataAos: "zoom-in",
    },
    {
      id: 8,
      src: redux,
      projname: "REDUX Food Store",
      demoLink: "https://redux-ecommerce.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Redux_E-Commerce",
      dataAos: "zoom-in",
    },
    {
      id: 9,
      src: shoper,
      projname: "Shopperz",
      demoLink: "https://shopping-api.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Shoperz",
      dataAos: "zoom-in",
    },

    {
      id: 10,
      src: todo,
      projname: "Todo Application",
      demoLink: "https://to-doapplication.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Todo-app",
      dataAos: "zoom-in",
    },
    {
      id: 11,
      src: gqlproj,
      projname: "Project Management System",
      codeLink: "https://github.com/Shubhodeep100/GraphQL-MERN",
      dataAos: "zoom-in",
    },
    {
      id: 12,
      src: calblog,
      projname: "Calendar Blog App",
      demoLink: "https://calender-blog.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/CalenderBlog",
      dataAos: "zoom-in",
    },
  ];

  // Define state variable to track whether the card is flipped or not
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to handle flipping the card
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-500 text-white h-screen w-full flex justify-center ">
      <div
        className={`flip-card mt-10 w-2/5 h-2/3 ${isFlipped ? "flipped" : ""}`}
        id="card"
      >
        {/* <div className="shadow-slate-500 rounded-xl shadow-sm"> */}

        <div className="flip-card-inner">
          <div className="flip-card-front bg-gradient-to-b from-black to-gray-900">
            <p className="text-white text-xs">Front</p>
            <div className="overflow-hidden mx-1 rounded-xl">
              <img
                src={chatapp}
                alt=""
                className="w-full sm:h-full h-1/3 rounded-xl duration-300 hover:scale-105"
              />
            </div>
            <div className="flex items-center flex-col justify-center gap-3">
              <p className="flex justify-center pt-2 items-center">
                <span className="border-b-2 border-gray-500 inline-block text-center text-white">
                  FreakyChatt
                </span>
              </p>

              <div className="flex items-center justify-center gap-3">
                <p className="text-sm font-txt text-white">view more...</p>

                {/* Flipping Button */}
                <div className="group p-0.5 rounded-full border border-white cursor-pointer ">
                  {/* <button className="bg-transparent  rounded-full"> */}
                  <IoInformation
                    onClick={handleClick}
                    className="flex items-center text-md text-white sm:text-2xl group-hover:text-cyan-500"
                  />
                  {/* </button> */}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center text-center text-white w-full">
              <a
                href="https://freakychat.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 a-styled m-4 duration-200 hover:scale-105"
              >
                Demo
              </a>
              <a
                href="https://github.com/Shubhodeep100/FreakyChat"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 m-4 duration-200 hover:scale-105 a-styled"
              >
                Code
              </a>
            </div>

            {/* Don't Go beyonf this line */}
          </div>

          {/* Back Side of the card */}

          <div className="flip-card-back">
            <p className="text-lg border-b-2 mb-4">Details</p>
            <div className="flex flex-col justify-between gap-8">
              <ul className="custom-bullets item-start text-sm space-y-6 text-start">
                <li className="">
                  Developed a real-time chat application featuring user
                  authentication with SignUp and Login functionalities.
                </li>

                <li>
                  Deployed the application on the Render platform, enabling
                  efficient hosting and management of the chat service
                </li>
                <li>
                  Tech Stack : ReactJs,TailwindCSS, DaisyUI, Zustand, Node,
                  Express, Socket.Io, MongoDB, JWT Auth
                </li>
              </ul>
              <div className="flex items-end justify-center">
                <div className="group p-0.5 rounded-full  border-1 border border-white cursor-pointer">
                  <HiArrowUturnLeft
                    onClick={handleClick}
                    className=" sm:text-2xl p-0.5 rounded-full group-hover:text-cyan-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Blank;
