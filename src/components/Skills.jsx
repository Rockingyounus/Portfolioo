import React from "react";

import Html from "../Asset/Html.png";
import Css from "../Asset/Css.png";
import Javascript from "../Asset/Javascript.png";
import Reacts from "../Asset/Reacts.png";
import Github from "../Asset/Github.png";
import Nextjs from "../Asset/Nextjs.png";
import MongoDB from "../Asset/MongoDB.png";
import Nodejs from "../Asset/Nodejs.png";
import Tailwind from "../Asset/Tailwind.jpg";
import Express from "../Asset/Express.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Reacts,
      title: "REACT",
      style: "shadow-skyblue-500",
    },
    {
      id: 5,
      src: Github,
      title: "GITHUB",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: Nextjs,
      title: "NEXTJS",
      style: "shadow-gray-500",
    },
    {
      id: 7,
      src: MongoDB,
      title: "MONGODB",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: Nodejs,
      title: "NODEJS",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: Tailwind,
      title: "TAILWIND",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: Express,
      title: "EXPRESS",
      style: "shadow-green-500",
    },
  ];
  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-4 mt-0" // Added min-h-screen to ensure the div stretches to at least the height of the screen
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white py-14">
        <div className="py-2">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-1 inline">
            Skills
          </p>
          <p className="py-8">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg " + style}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
