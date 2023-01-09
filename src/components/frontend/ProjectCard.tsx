import React, { useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/img1.png";

interface Props {
  project: { title: string; previewImage: string; description: string };
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, description, previewImage } = project;

  return (
    <div className="flex justify-center">
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        layout
        transition={{
          layout: { duration: 0.6, type: "spring" },
          backgroundImage: { duration: 1 },
        }}
        className={` p-4 rounded-lg border-2 border-[rgba(255,255,255,0.5)]  ${
          isOpen
            ? "fixed inset-x-0 mx-auto top-[30vh] z-10 h-[430px] w-[650px] bg-gradient-to-bl from-[#ef32d9] to-[#89fffd] shadow-lg"
            : "relative shadow-2xl brightness-110 w-80 h-80 "
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <motion.div>
          <motion.img
            src={previewImage}
            className={`rounded-lg -z-10 ${isOpen ? "h-96" : "max-h-64"}`}
            layout
          />
          <motion.h2
            layout
            className={`absolute text-myWhite font-bold  ${
              isOpen
                ? "bottom-0 -left-1 text-4xl w-[600px] drop-shadow-xl"
                : "bottom-4  w-64 text-2xl drop-shadow-xl"
            }`}
          >
            {title}
          </motion.h2>
        </motion.div>

        {isOpen && (
          <RemoveScroll>
            <motion.div
              className={`absolute top-8 right-4 max-w-xs text-myWhite`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {description}
            </motion.div>
          </RemoveScroll>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectCard;
