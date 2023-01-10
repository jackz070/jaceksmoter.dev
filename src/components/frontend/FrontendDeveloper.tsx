import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { easeIn, easeOut, motion, useInView } from "framer-motion";
import { projects } from "../../ProjectData";
import ScrollingMarquee from "../utils/ScrollingMarquee";
// TODO extract projects to separate file

const FrontendDeveloper = () => {
  return (
    <div>
      <ScrollingMarquee text={"Projects"} />

      <motion.div
        className="max-w-4xl mx-auto mb-24"
        id="frontendDeveloper"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      >
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-4  items-center">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FrontendDeveloper;
