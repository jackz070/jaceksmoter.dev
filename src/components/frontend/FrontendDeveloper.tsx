import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../../assets/ProjectData";
import ScrollingMarquee from "../utils/ScrollingMarquee";

const FrontendDeveloper = () => {
  return (
    <section id="projects">
      <ScrollingMarquee text={"Projects"} />
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      >
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FrontendDeveloper;
