import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full pb-8 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3 flex justify-center sm:justify-start">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="sm:text-xl text-base mt-6 text-center sm:text-start">
          I have a strong understanding of web development, adeptly navigating
          evolving technologies. From foundational HTML and CSS for visual
          aesthetics to dynamic JavaScript, jQuery, and ReactJS, I've also
          worked with TypeScript and Next.js in fully deployed, full-stack
          projects, infusing life into each line of code.
        </p>
        <br />
        <p className="sm:text-xl text-base  text-center sm:text-start">
          My curiosity extends to backend technologies where I explore Node.js
          to build efficient server-side applications. I've worked with
          PostgreSQL and MongoDB to create harmonious databases, integrating
          Ajax and APIs seamlessly into projects for a mesmerizing digital
          experience.
        </p>
      </div>
    </div>
  );
};

export default About;
