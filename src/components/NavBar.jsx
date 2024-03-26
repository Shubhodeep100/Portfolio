import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import gmail from "../assets/navlinks/gmail.png";
import github from "../assets/navlinks/github.png";
import linkedin from "../assets/navlinks/linkedin.png";
import resume from "../assets/navlinks/resume.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
const socials = [
  {
    id: 1,
    child: (
      <>
        <img src={linkedin} alt="Linkedin" className="w-9" />
      </>
    ),
    href: "https://www.linkedin.com/in/shubhodeepbanerjee/",
  },
  {
    id: 2,
    child: (
      <>
        <img src={github} alt="Github" className="w-9" />
      </>
    ),
    href: "https://github.com/Shubhodeep100",
  },
  {
    id: 3,
    child: (
      <>
        <img src={gmail} alt="Email" className="w-7" />
      </>
    ),
    href: "mailto:banerjeeshubho98@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
       <img src={resume} alt="Resume" className="w-7" />
      </>
    ),
    href: "/Shubhodeep_Resume.pdf",
    download: true,
  },
];

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed z-30 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
      <div>
        <h1 className="text-5xl font-signature ml-2">Shubhodeep</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-300 hover:text-gray-200"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 overflow-auto">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-5 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          {/*  */}
          <div className="flex">
            <ul className="flex space-x-4">
              {socials.map(({ id, child, href,download }) => (
                <li
                  key={id}
                  className={
                    "flex items-center rounded-xl p-1 bg-slate-400"
                  }
                >
                  <a
                    href={href}
                    className="flex justify-between items-center w-full text-white"
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
