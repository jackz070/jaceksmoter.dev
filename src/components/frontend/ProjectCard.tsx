import React from "react";
import { motion } from "framer-motion";
import Tech from "./Tech";
import { ProjectCardImageGallery } from "./ProjectCardImageGallery";

interface Props {
  project: {
    title: string;
    images: string[];
    tech: string[];
    liveLink: string;
    githubLink: string;
    description: string;
  };
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { title, images, tech, liveLink, githubLink, description } = project;

  return (
    <motion.div
      className="flex justify-center mb-4 "
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      onHoverStart={() => {
        images.forEach((image) => (new Image().src = image));
      }}
    >
      <motion.div layout className={`p-4 rounded-lg w-96 mb-8 `}>
        <div className="">
          <ProjectCardImageGallery images={images} />
        </div>
        <div className="w-full bg-myBlack h-[2px] mt-2" />

        <motion.h2
          layout
          className={`font-bold tracking-wide uppercase text-2xl text-myBlack`}
        >
          {title}
        </motion.h2>
        <div className="flex w-full flex-wrap ">
          {tech.map((tech) => (
            <Tech tech={tech} key={tech} />
          ))}
        </div>
        <motion.div
          className={`text-myBlack flex justify-between my-1 w-fit gap-2 `}
        >
          <motion.a
            href={liveLink}
            target="_blank"
            className={`font-sans font-bold`}
          >
            Live site
          </motion.a>
          |
          <motion.a
            href={githubLink}
            target="_blank"
            className={`font-sans font-bold`}
          >
            Github repo
          </motion.a>
        </motion.div>
        <div className="text-myBlack">{description}</div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
