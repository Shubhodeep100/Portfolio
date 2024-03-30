import React, { useState } from "react";
import { IoInformation } from "react-icons/io5";
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

const Test = () => {
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

  // Define state variable to track whether each card is flipped or not
  const [flippedCards, setFlippedCards] = useState({});

  // Function to handle flipping the card
  const handleCardFlip = (id) => {
    setFlippedCards((prevFlippedCards) => ({
      ...prevFlippedCards,
      [id]: !prevFlippedCards[id],
    }));
  };

  return (
    <div className="portfolio-container">
      {portfolios.map(({ id, src, projname, demoLink, codeLink, dataAos }) => (
        <div
          key={id}
          className={`portfolio-card ${flippedCards[id] ? "flipped" : ""}`}
          data-aos={dataAos}
        >
          <div className="portfolio-card-inner">
            <div className="portfolio-card-front">
              {/* Front side content */}
              <img src={src} alt={projname} />
              <h3>{projname}</h3>
              <button
                className="info-button"
                onClick={() => handleCardFlip(id)}
              >
                <IoInformation />
              </button>
            </div>
            <div className="portfolio-card-back">
              {/* Back side content */}
              <p>Back side of the card</p>
              <button
                className="flip-button"
                onClick={() => handleCardFlip(id)}
              >
                Flip
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
