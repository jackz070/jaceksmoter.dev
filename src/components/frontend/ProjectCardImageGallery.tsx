import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { GoTriangleRight } from "@react-icons/all-files/go/GoTriangleRight";
import { GoTriangleLeft } from "@react-icons/all-files/go/GoTriangleLeft";
import ProjectCardImageGalleryModal from "./ProjectCardImageGalleryModal";

const variants = {
  enter: (direction: number) => {
    return {
      opacity: 0,
      scale: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      scale: 0,

      opacity: 0.5,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ProjectCardImageGallery: React.FC<{
  images: string[];
}> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isOpen, setIsOpen] = useState(false);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div>
      <motion.div
        onClick={(e) => {
          setIsOpen(true);
        }}
        className={`w-[352px] h-[199.75px] relative ${isOpen ? "" : ""}`}
      >
        <motion.button
          onClick={(e) => {
            e.stopPropagation();

            paginate(-1);
          }}
          className="text-xl bg-black h-8 w-8 text-white absolute z-10 top-[calc(50%-1rem)] flex justify-center items-center  rounded-md m-1"
          whileTap={{ scale: 0.9 }}
        >
          <GoTriangleLeft />
        </motion.button>

        <motion.img
          layout
          className={`w-[352px] h-[199.75px]  object-contain -z-10 ${
            isOpen ? "" : ""
          }`}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            duration: 0.4,
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />

        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            paginate(1);
          }}
          className="text-xl bg-black h-8 w-8 text-white absolute z-10 top-[calc(50%-1rem)] flex justify-center items-center right-0 rounded-md m-1"
          whileTap={{ scale: 0.9 }}
        >
          <GoTriangleRight />
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <ProjectCardImageGalleryModal
              images={images}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              page={page}
              direction={direction}
              setPage={setPage}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
