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

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div
          className="pb-3 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-in"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>
        <p
          className="py-6 text-xl text-center"
          data-aos="zoom-in"
          data-aos-easing="ease-in"
        >
          Check out some of my work right here
        </p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-12 items-center justify-center">
          {portfolios.map(
            ({ src, projname, demoLink, codeLink, id, dataAos }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg"
                data-aos={dataAos}
                data-aos-duration="500"
                data-aos-easing="ease-in"
                data-aos-once="false"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full sm:h-2/3 h-36 rounded-md duration-200 hover:scale-105"
                />

                <p className="flex justify-center pt-2">
                  <span className="border-b-2 border-gray-500 inline-block text-center">
                    {projname}
                  </span>
                </p>

                <div className="flex items-center justify-center text-center">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-1/2 px-6 a-styled m-4 duration-200 hover:scale-105 ${
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
                    className="w-1/2 px-6 m-4 duration-200 hover:scale-105 a-styled"
                  >
                    Code
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
