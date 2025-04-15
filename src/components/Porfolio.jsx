import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaVideo,
  FaLink
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SiMongodb, SiRedux } from "react-icons/si";
import Profile from "../assets/profileimg.jpg";
import { BsDot } from "react-icons/bs";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Myntra",
      desc: "Ecommerce Website with category filter, search box, and wishlist & cart management. Product card listing based on Men's , Women's and Kid's section.",
      link: "https://myntra-puce-ten.vercel.app/",
      github: "https://github.com/pranitkarkera/Myntra",
      loom: "#",
      live: "Yes",
    },
    {
      title: "Task Manager App",
      desc: "Create your day-to-day task. Add, update, delete task & with search feature. Mark completed task and keep track of your daily task. With JWT Token Authentication.",
      link: "https://playtplus-taskmanager-frontend.vercel.app/login",
      github: "https://github.com/pranitkarkera/playtplus-taskmanager-app",
      loom: "#",
      live: "Yes",
    },
    {
      title: "Trello-Clone",
      desc: "Create your own workspace. Add, update, delete list & nested tasks. Drag and drop functionality within list & task.",
      link: "https://trello-clone--gilt.vercel.app/",
      github: "https://github.com/pranitkarkera/Trello-Clone",
      loom: "#",
      live: "Yes",
    },
    {
      title: "Temp Mail (Coming Soon..)",
      desc: "Temporary dump mail for OTP & mail verification usage",
      link: "#",
      github: "#",
      loom: "#",
      live: "No",
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
        darkMode ? "bg-white text-black" : "bg-black text-white"
      } min-h-screen flex justify-center items-center p-6`}
    >
      <div className="max-w-2xl w-full space-y-6 p-6 rounded-lg text-center relative md:text-left">
        {/* Toggle Mode Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <LuSun /> : <FaRegMoon />}
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
            Provide 24/7 support for cloud infrastructure, ensuring high
            availability and performance of services across AWS environments.
          </p>
          <p className="text-gray-500">
            Troubleshoot and resolve complex issues related to cloud services,
            networking, and server performance, achieving a 65% reduction in
            incident response time.
          </p>
          <p className="text-gray-500">
            Collaborate with development teams to design and implement CI/CD
            pipelines, enhancing deployment efficiency and reducing
            time-to-market for applications.
          </p>
        </div>

        {/* Recent Projects */}
        <div className="rounded-lg w-full overflow-hidden">
          <h2 className="text-lg font-semibold mb-2">Recent Projects</h2>
          <div className="flex items-center justify-between w-full">
            <button onClick={prevProject} className="text-2xl">
              <IoIosArrowBack />
            </button>
            <div className="w-80 mx-4">
              {projects
                .slice(currentIndex, currentIndex + projectsPerPage)
                .map((project, index) => (
                  <div
                    key={index}
                    className="relative border border-gray-300 rounded-lg p-4 text-center"
                  >
                    {project.live === "Yes" ? (
                      <span className="absolute top-2 left-2 text-green-500 border border-green-500 px-2 py-0.5 text-xs rounded-full">
                        Live
                      </span>
                    ) : (
                      <span className="absolute top-2 left-2 text-red-500 border border-red-500 px-2 py-0.5 text-xs rounded-full">
                        Building
                      </span>
                    )}
                    {/* <span className="absolute top-2 left-2 text-green-500 px-2 py-0.5 text-2xl">
                      <BsDot />
                    </span> */}
                    <div className="absolute top-2 right-2 flex gap-2">
                      {/* <a href={project.loom}>
                        <FaVideo className="text-xl cursor-pointer" />
                      </a> */}
                      <a href={project.github}>
                        <FaGithub className="text-xl cursor-pointer" />
                      </a>
                      <a href={project.link}>
                        <FaLink className="text-xl cursor-pointer" />
                      </a>
                    </div>
                    <h3 className="text-lg font-semibold mt-6">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm">{project.desc}</p>
                  </div>
                ))}
            </div>
            <button onClick={nextProject} className="text-2xl">
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
          <ul className="list-disc list-inside">
            <li>
              <a
                className="text-gray-400 hover:underline"
                href="https://dev.to/pranit_karkera/map-filter-reduce-javascript-array-method-2khj"
              >
                Map(), Filter(), Reduce() javascript array method
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 hover:underline"
                href="https://dev.to/pranit_karkera/cross-origin-resource-sharingcors-cors-middleware-setup-mp3"
              >
                Cross-Origin Resource Sharing(CORS). CORS middleware Setup.
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-semibold">My Socials</h2>
          <div className="flex gap-3 mt-2 justify-center md:justify-start">
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

        {/* Footer */}
        <div>
          <h2 className="text-lg font-semibold">Hire me</h2>
          <div className="mt-2">
            <p className="text-gray-400">
              I'm currently available for internships, full-time opportunities,
              and freelance projects. If you're looking for someone passionate,
              skilled, and ready to contribute, I'm here to help bring your
              ideas to life!
            </p>
            <a href="https://drive.google.com/file/d/1UOBdGSYZe5rhRHcoTgy3L99P2pX8rI-1/view?usp=drive_link">
              <button className="rounded-full border px-2 py-1 border-gray-200 text-gray-600 mt-2">
                Pranit_Karkera_CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
