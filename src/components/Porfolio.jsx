import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SiMongodb, SiRedux } from "react-icons/si";
import Profile from "../assets/profile.jpg";
import MyntraImage from "../assets/Myntra.png";
import TaskManager from "../assets/TaskManager.png"

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Myntra",
      desc: "Ecommerce Website with category filter, search box, and wishlist & cart management. Product card listing based on Men's , Women's and Kid's section.",
      link: "https://myntra-puce-ten.vercel.app/",
      img: MyntraImage,
    },
    {
      title: "Task Manager App",
      desc: "Create your day-to-day task. Add, update, delete task & with search feature. Mark completed task and keep track of your daily task.",
      link: "https://task-manager-app-ui-psi.vercel.app/",
      img: TaskManager,
    },
    {
      title: "Temp Mail (Coming Soon..)",
      desc: "Temporary dump mail for OTP & mail verification usage",
      link: "#",
      img: "https://placehold.co/600x400?text=Temp+Mail",
    },
  ];

  const projectsPerPage = 1;
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? projects.length - projectsPerPage
        : prevIndex - projectsPerPage
    );
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + projectsPerPage >= projects.length
        ? 0
        : prevIndex + projectsPerPage
    );
  };

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen flex justify-center items-center p-6`}
    >
      <div className="max-w-2xl w-full space-y-6 p-6 rounded-lg text-center relative md:text-left">
        {/* Toggle Mode Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaRegMoon /> : <LuSun />}
        </button>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <img
            src={Profile}
            alt="Profile"
            className="w-20 h-20 rounded-full md:mr-4"
          />
          <div>
            <h1 className="text-xl font-bold">Hi, I am Pranit Karkera</h1>
            <p className="text-gray-400">
              A frontend developer specializing in UI design and creating
              engaging user experiences.
            </p>
            <p className="text-gray-500">Mumbai, India</p>
          </div>
        </div>

        {/* Current Role */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Worked as</h2>
          <p className="text-lg font-bold">Engineer @ LTIMindtree</p>
          <p className="text-gray-400">2021 - 2023</p>
          <p className="text-gray-500">
            React application development for the private sector, focused on
            accessibility, security, and digital innovation.
          </p>
        </div>

        {/* Recent Projects */}
        <div className="rounded-lg w-full overflow-hidden">
          <h2 className="text-lg font-semibold mb-2">Recent Projects</h2>
          <div className="flex items-center justify-between w-full">
            <button onClick={prevProject} className="text-2xl p-2 ml-2">
              <IoIosArrowBack />
            </button>
            <div className="grid grid-cols-1 gap-4 w-full mx-4">
              {projects
                .slice(currentIndex, currentIndex + projectsPerPage)
                .map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-gray-300 transition w-full"
                  >
                    {project.img && (
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-40 object-cover rounded-md mb-1"
                      />
                    )}
                    <h3 className="text-md font-semibold text-center">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-center">{project.desc}</p>
                  </a>
                ))}
            </div>
            <button onClick={nextProject} className="text-2xl p-2 mr-2">
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: <FaHtml5 />, label: "HTML 5" },
              { icon: <FaCss3Alt />, label: "CSS 3" },
              { icon: <FaReact />, label: "React" },
              { icon: <FaNode />, label: "Node" },
              { icon: <SiMongodb />, label: "MongoDB" },
              { icon: <SiRedux />, label: "Redux" },
            ].map((tech, index) => (
              <div
                key={index}
                className="p-2 rounded-lg border border-gray-600 flex flex-col items-center w-20"
              >
                <div className="text-2xl mb-1">{tech.icon}</div>
                <p className="text-sm text-center">{tech.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Blog */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Blog</h2>
          <ul className="list-disc px-4">
            <li>
              <a href="https://dev.to/pranit_karkera/map-filter-reduce-javascript-array-method-2khj">
                <p className="text-gray-400 hover:underline">
                  Map(), Filter(), Reduce() javascript array method
                </p>
              </a>
            </li>
            <li>
              <a href="https://dev.to/pranit_karkera/cross-origin-resource-sharingcors-cors-middleware-setup-mp3">
                <p className="text-gray-400 hover:underline">
                  Cross-Origin Resource Sharing(CORS). CORS middleware Setup.
                </p>
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-semibold">My Socials</h2>
          <div className="flex justify-center gap-3 mt-2 ">
            <a href="mailto:pranitkarkera99@gmail.com">
              <CiMail className="text-xl cursor-pointer" />
            </a>
            <a href="https://github.com/pranitkarkera">
              <FaGithub className="text-xl cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/pranit-karkera-576b5318b/">
              <FaLinkedin className="text-xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
