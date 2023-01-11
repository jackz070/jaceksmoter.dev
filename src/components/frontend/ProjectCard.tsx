import React, { useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/img1.png";
import Tech from "./Tech";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProjectCardImagePlaceholder from "../utils/ProjectCardImagePlaceholder";

interface Props {
  project: {
    title: string;
    previewImage: string;
    image: string;
    tech: string[];
    liveLink: string;
    githubLink: string;
    description: string;
  };
}
//TODO optional more pictures / switchable in small view, modal gallery on click?
const ProjectCard: React.FC<Props> = ({ project }) => {
  const {
    title,
    previewImage,
    image,
    tech,
    liveLink,
    githubLink,
    description,
  } = project;

  return (
    <div className="flex justify-center h-[544px]">
      <motion.div
        layout
        className={` p-4 rounded-lg relative w-96 h-[32rem] mb-8 `}
      >
        <motion.div>
          <LazyLoadImage
            src={previewImage}
            width="352"
            height="199.75"
            className={``}
            placeholderSrc={previewImage}
          />

          <div className="w-full bg-myBlack h-[2px] mt-2" />

          <motion.h2
            layout
            className={`font-bold tracking-wide uppercase text-2xl  text-myBlack`}
          >
            {title}
          </motion.h2>
          <div className="flex w-full flex-wrap ">
            {tech.map((tech) => (
              <Tech tech={tech} />
            ))}
          </div>
          <motion.div
            className={`text-myBlack flex justify-between mb-2 w-[75%]`}
          >
            Visit:
            <motion.a href={liveLink} target="_blank" className={``}>
              Live site
            </motion.a>
            <motion.a href={githubLink} target="_blank" className={``}>
              Github repo
            </motion.a>
          </motion.div>
          <div className="text-myBlack">{description}</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
