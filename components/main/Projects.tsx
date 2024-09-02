
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Threads clone react.js"
          description="Build a Threads clone using the MERN stack, featuring a sleek user interface, real-time updates, and dynamic content sharing. Implement secure authentication, user profiles"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Laundry app"
          description="A modern laundry service application built using the MERN stack, offering users seamless online booking, order tracking, and payment options.It incorporates real-time notifications."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Employee management system"
          description="An employee management system MERN app is designed to streamline HR processes, allowing administrators to manage employee data, attendance, and payroll efficiently. "
        />
      </div>
    </div>
  );
};

export default Projects;
