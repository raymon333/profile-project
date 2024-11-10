import React from "react";
import AboutImg from "../../assets/image4.png";

import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap 
      md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
        <img
  className="md:h-80" src={AboutImg} alt="About img" 
/>

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Web Designer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a web designer, master design principles, color theory, 
                and tools like Adobe XD or Figma. Build a portfolio showcasing responsive, 
                user-centered designs with a focus on aesthetics and usability.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  DevOps 
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a qualified DevOps developer, I bring expertise in optimizing development 
                workflows, automating deployment processes, and enhancing collaboration between development 
                and operations teams. Skilled in tools like Docker, Kubernetes, Jenkins, and Terraform, 
                I focus on creating CI/CD pipelines that ensure rapid, reliable software releases. 
                My experience includes cloud platforms such as AWS and Azure, as well as monitoring and 
                performance optimization to ensure high availability and scalability. I’m passionate about 
                fostering a culture of continuous improvement, aiming to streamline 
                operations and accelerate product delivery while maintaining quality and security standards.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full-stack 
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a full-stack developer, master both front-end (HTML, CSS,Taiwilnd JavaScript frameworks) 
                and back-end (server, database, APIs) technologies. Build skills in databases, version control, and deployment.
                 Practice problem-solving and create end-to-end applications to showcase versatility.
                    </p>
             
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;