import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full pb-8 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I possess a robust grasp of the ever-evolving world of web
          development, navigating the intricate landscape of technologies with
          finesse. My journey has led me through the fundamental building blocks
          like HTML and CSS, where I craft the visual aesthetics, and into the
          dynamic realm of JavaScript, jQuery, and the captivating world of
          ReactJS. I've danced with TypeScript and explored the enchanting
          possibilities of Next.js in one of my fully deployed, full-stack
          projects, breathing life into every line of code.
        </p>
        <br />
        <p className="text-xl">
          But my curiosity extends beyond the front end; I've delved into the
          intricate universe of backend technologies. In the realm of Node.js,
          I've harnessed the power to create efficient, scalable server-side
          applications. I've orchestrated symphonies of data using PostgreSQL
          and MongoDB, crafting databases that sing in harmony with my code. My
          expertise extends to the art of Ajax and seamless API integration,
          culminating in a working project that brings these technologies
          together in a mesmerizing display of digital craftsmanship.
        </p>
      </div>
    </div>
  );
};

export default About;
