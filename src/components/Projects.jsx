import React, { useState } from "react";
import ecom from "../assets/port/ecom.jpg";
import { IoInformation } from "react-icons/io5";
import { HiArrowUturnLeft } from "react-icons/hi2";
import thread from "../assets/port/threadC.jpg";
import dashboard from "../assets/port/dashboard.jpg";
import fitclub from "../assets/port/fitclub.jpg";
import redux from "../assets/port/reduxShop.jpg";
import shoper from "../assets/port/shopperz.jpg";
import todo from "../assets/port/todo.jpg";
import gqlproj from "../assets/port/gqlproj.jpg";
import customer from "../assets/port/customer.jpg";
import calblog from "../assets/port/calblog.jpg";
import merlin from "../assets/port/merlin.jpg";
import chatapp from "../assets/port/chatapp.jpg";

const Blank = () => {
  const portfolios = [
    {
      id: 1,
      src: thread,
      projname: "Threads Clone",
      demoLink: "https://threads-app-lac-tau.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/Threads_App",
      details: [
        "• Fully functional & Responsive Threads clone with users to Login & Sign Up.",
        "• Users can create their threads and other users can comment on their threads.",
        "• Every user`s account gets created and stored in MongoDB collections",
        "• Deployed using Vercel.",
      ],
    },
    {
      id: 2,
      src: ecom,
      projname: "NEXT Ecommerce",
      demoLink: "https://next-ecommerce-shop-rho.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/NEXT-EcommerceShop",
      details: [
        "• Full Stack Ecommerce app with all the modern integrated features.",
        "• Integrated Stripe-payment checkout feature for the products.",
        "• Implemented Sanity CMS for convenient product management.",
        "• Deployed via vercel deployments.",
      ],
    },
    {
      id: 3,
      src: chatapp,
      projname: "FreakyChatt",
      demoLink: "https://freakychat.onrender.com/",
      codeLink: "https://github.com/Shubhodeep100/FreakyChat",
      details: [
        "• Developed a real-time chat application featuring user authentication with SignUp and Login functionalities",
        "• Implemented seamless messaging experience using ReactJS for frontend development, TailwindCSS for design, and MongoDB for data storage.",
        "• Employed NodeJS and ExpressJS for backend operations, including JWT token-based authorization for secure user access.",
        "• Deployed the application on the Render platform, enabling efficient hosting and management of the chat service.",
        "• Test Login :",
        "Username:  Alex",
        "Password:   123123",
      ],
    },
    {
      id: 4,
      src: fitclub,
      projname: "Fitclub",
      demoLink: "https://fit-club-orcin.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/fitClub",
      details: [
        "• Fully Responsive landing page of a Gym Membership website.",
        "• Frontend landing page to showcase various plans available for the gym-membership.",
        "• Used Cloudflare to deploy the website.",
      ],
    },
    {
      id: 5,
      src: dashboard,
      projname: "Business Dashboard",
      demoLink: "https://omoinew-dashboard.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Omoi-Dashboard",
      details: [
        "• This is completely responsive dashboard of a business company.",
        "• It shows different statistics of the revenue generated and also calculates a bar graph as per the growth.",
        "• It also has different sections to show the details about the customer.",
        "• Deployed using Cloudflare.",
      ],
    },
    {
      id: 6,
      src: merlin,
      projname: "Merlin SaaS",
      demoLink: "https://merlin-saasnote.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/Merlin_SaaS",
      details: [
        "• Developed a secure, multi-platform web application with Next.js integrating Kindie Authentication, Passwordless Authentication, and OAuth (Google and GitHub) for streamlined user access.",
        "• Utilized Supabase Database and Prisma ORM for efficient data management, enabling functionalities like adding, viewing, editing, and deleting notes.",
        "• Enhanced user experience with Tailwind CSS and Shadcn UI for intuitive styling, including customizable color schemes for personalized aesthetics.",
        "• Implemented Stripe for seamless subscription handling, along with integration of Stripe Webhooks for real-time updates, and deployment to Vercel for efficient hosting and scalability.",
      ],
    },
    {
      id: 7,
      src: customer,
      projname: "Customer Dashboard",
      demoLink: "https://customer-dashboard-971.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/CustomerDashboard",
      details: [
        "• This is completely responsive dashboard of a business company. ",
        "• It shows different statistics of the revenue generated and also calculates a bar graph as per the growth. ",
        "• It also has different sections to show the details about the customer. ",
        "• Deployed using Cloudflare.",
      ],
    },
    {
      id: 8,
      src: redux,
      projname: "REDUX Food Store",
      demoLink: "https://redux-ecommerce.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Redux_E-Commerce",
      details: [
        "• A Food ordering Frontend app which stores the data of the orders and calculate the Order-totals.",
        "• Has REDUX implementation to manage the Central-Store and the Cart of the orders.",
      ],
    },

    {
      id: 9,
      src: shoper,
      projname: "Shopperz",
      demoLink: "https://shopping-api.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Shoperz",
      details: [
        "• Use ReactJs to make the Frontend of the Shopping store.",
        "• Fetched the data from a fake api service provider",
        "• Rendered the data dynamically to the Frontend.",
      ],
    },

    {
      id: 10,
      src: todo,
      projname: "Todo Application",
      demoLink: "https://to-doapplication.pages.dev/",
      codeLink: "https://github.com/Shubhodeep100/Todo-app",
      details: [
        "• Used ReactJs to build the app.",
        "• Has CRUD operation implemented into it.",
        "• Deployed via Cloudflare pages.",
      ],
    },
    {
      id: 11,
      src: gqlproj,
      projname: "Project Management System",
      codeLink: "https://github.com/Shubhodeep100/GraphQL-MERN",
      details: [
        "• Fullstack MERN application for managing projects of different clients.",
        "• CRUD functionality implemented on both clients as well as for the projects",
        "• Implementation of GraphQL API to query the CRUD functionalities.",
        "• Tech stack used: ReactJs, NodeJs, ExpressJs, Bootstrap v4.6, Apollo Client, GraphQL.",
      ],
    },
    {
      id: 12,
      src: calblog,
      projname: "Calendar Blog App",
      demoLink: "https://calender-blog.vercel.app/",
      codeLink: "https://github.com/Shubhodeep100/CalenderBlog",
      details: [
        "• Complete static website of a Calendar Blog.",
        "• Completely responsive.",
        "• It also has different sections to show the reviews of the current customers.",
        "• Tech used- ReactJs, Tailwind CSS.",
        "• Deployed via Vercel.",
      ],
    },
  ];

  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleClick = (index) => {
    setFlippedCardIndex(index === flippedCardIndex ? null : index);
  };

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center">
        <div
          className="pb-3 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="500"
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

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-0 sm:px-12 items-center justify-center">
          {portfolios.map(
            (
              { src, projname, demoLink, codeLink, id, dataAos, details },
              index
            ) => (
              <div
                key={id}
                className={`flip-card px-1 sm:px-0 ${
                  index === flippedCardIndex ? "flipped" : ""
                }`}
              >
                <div className="flip-card-inner rounded-xl">
                  {/* Front Card */}
                  <div className="flip-card-front shadow-sm border border-gray-600 hover:shadow-slate-400  bg-gradient-to-b from-black to-slate-800 p-1.5">
                    <div className="rounded-xl overflow-hidden w-full h-fit">
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full duration-300 hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center flex-col justify-center gap-2">
                      <p className="flex justify-center pt-2 items-center">
                        <span className="border-b-2 border-gray-500 inline-block text-center text-lg">
                          {projname}
                        </span>
                      </p>

                      <div className="flex items-center justify-center gap-3">
                        <p className="text-sm font-txt text-white font-thin">
                          view more...
                        </p>

                        {/* Flipping Button */}
                        <div
                          className="group p-0.5 rounded-full border border-white cursor-pointer "
                          onClick={() => handleClick(index)}
                        >
                          <IoInformation className="flex items-center text-2xl sm:text-2xl text-white group-hover:text-cyan-500" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center text-center w-full">
                      <a
                        href={demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-1/2 a-styled mx-3 my-2 duration-200 hover:scale-105 ${
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
                        className="w-1/2 mx-3 my-2 duration-200 hover:scale-105 a-styled"
                      >
                        Code
                      </a>
                    </div>
                  </div>

                  {/* Back Card */}

                  <div className="flip-card-back bg-gradient-to-b from-slate-900 to-black border border-gray-600 shadow-sm hover:shadow-slate-400">
                    <p className="text-xl border-b-2 mb-4 font-txt text-slate-300">
                      Details
                    </p>
                    <div className="flex flex-col justify-between gap-2 sm:gap-10 rounded-lg h-40 md:h-44 lg:h-56 py-3 sm:py-2">
                      <ul className=" item-start text-base space-y-3 sm:space-y-3 text-start overflow-y-scroll">
                        {details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-start justify-center ">
                      <div
                        className="group p-0.5 rounded-full border-1 border border-white cursor-pointer"
                        onClick={handleClick}
                      >
                        <HiArrowUturnLeft className="text-2xl sm:text-3xl p-0.5 rounded-full group-hover:text-cyan-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Blank;
