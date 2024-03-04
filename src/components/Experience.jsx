import React from "react";
import boot from "../assets/bootstrap.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javas from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import next from "../assets/nextjs.png";
import node from "../assets/node.png";
import post from "../assets/postgre.png";
import react from "../assets/react.png";
import tailcss from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import graphQL from "../assets/gql.png";
import jqery from "../assets/jquery.png";
import jest from "../assets/jest.png";
import typescript from "../assets/typescript.png";
import supabase from "../assets/supabase.png";
import express from "../assets/express.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

    {
      id: 3,
      src: tailcss,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: boot,
      title: "Bootstrap",
      style: "shadow-violet-500",
    },
    {
      id: 5,
      src: javas,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: jqery,
      title: "JQuery",
      style: "shadow-blue-500 icon-bigger",
    },
    {
      id: 8,
      src: react,
      title: "ReactJS",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: redux,
      title: "REDUX",
      style: "shadow-violet-700",
    },
    {
      id: 10,
      src: jest,
      title: "Jest",
      style: "shadow-rose-700",
    },

    {
      id: 11,
      src: next,
      title: "NextJS",
      style: "shadow-white",
    },
    {
      id: 12,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-700",
    },
    {
      id: 13,
      src: post,
      title: "PostgreSQL",
      style: "shadow-blue-500",
    },
    {
      id: 14,
      src: supabase,
      title: "Supabase",
      style: "shadow-green-400",
    },
    {
      id: 15,
      src: node,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 16,
      src: express,
      title: "ExpressJS",
      style: "shadow-gray-400",
    },
    {
      id: 17,
      src: graphQL,
      title: "GraphQL",
      style: "shadow-pink-500",
    },
    {
      id: 18,
      src: github,
      title: "GitHub",
      style: "shadow-gray-200",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                className={`w-20 imgsize mx-auto ${
                  title === "JQuery"
                    ? "w-24 h-24"
                    : title === "Jest"
                    ? "w-24 h-24"
                    : ""
                }  `}
              />
              <p className="mt-4 txt">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
