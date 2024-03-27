import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {

  const text = "I'm a Full Stack Developer".split(" ");
  return (
    <div
      name="Home"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white md:h-screen"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-20 md:mt-0">
          <h2 className="text-4xl sm:text-7xl text-center lg:text-left font-bold text-white ">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 4,
                  delay: i / 6,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h2>
          <p className="text-gray-500 py-4 pr-2 text-lg text-center lg:text-left">
            I have experience with building and designing web applications.
            Currently, I love to work on web applications using technologies
            like ReactJs, TailwindCSS, NextJS & MongoDB.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Link
              to="Projects"
              smooth
              duration={700}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-lg bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRight size={20} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="Myprofile"
            className="rounded-3xl mx-auto w-2/3 md:w-full shadow-white "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
