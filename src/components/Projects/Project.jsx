import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div id="Project" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Blogging Website"
          main="this is a bloggin website created in react.js and used some component library used some component library"
        />
        <ProjectCard
          title="ci/cd pipelines setup"
          main="Ensure the pipeline is working properly and monitoring"
        />
        <ProjectCard
          title="Global Solar-power project"
          main="Create a new project and configure it using the following tools react,tailwind css with node.js then use of mysql"
        />
        <ProjectCard
          title="E-commerce website"
          main="Develop a e-commerce website using react, tailwind css and use of mysql"
        />
        <ProjectCard
          title="Personalized recommendation system"
          main="Create a recommendation system using the following tools react, tailwind css with node.js then use of mysql"
        />
        
      </div>
    </div>
  );
};

export default Project;