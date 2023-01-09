import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Pokemon App",
    previewImage: "../public/img1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet tempora quasi consectetur. Harum neque natus eius inventore accusantium sed.",
  },
  {
    title: "QuickTODO",
    previewImage: "../public/gif1.gif",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus maxime cumque obcaecati eum, alias delectus?",
  },
];

const FrontendDeveloper = () => {
  return (
    <div className="max-w-6xl mx-auto mb-24" id="frontendDeveloper">
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-4  items-center">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default FrontendDeveloper;
