import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import { GoTriangleRight } from "@react-icons/all-files/go/GoTriangleRight";
import { GoTriangleLeft } from "@react-icons/all-files/go/GoTriangleLeft";
import { wrap } from "popmotion";
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

const ProjectCardImageGalleryModal = ({
  images,
  setIsOpen,
  isOpen,
  page,
  direction,
  setPage,
}: {
  images: string[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  page: number;
  direction: number;
  setPage: React.Dispatch<React.SetStateAction<[number, number]>>;
}) => {
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleKeyDownWhenModalOpen = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          paginate(1);
          break;
        case "ArrowLeft":
          paginate(-1);
          break;
        case "Escape":
          handleModalClose(e);
          break;
      }
    },
    [page]
  );

  const handleModalClose = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | KeyboardEvent
  ) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDownWhenModalOpen);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDownWhenModalOpen);
    };
  }, [isOpen, page]);

  return createPortal(
    <RemoveScroll className="fixed flex justify-center items-center w-[100vw] h-[100vh] top-0 z-[100]">
      <motion.div
        className=" fixed  top-0 bg-black w-[100vw] h-[100vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => handleModalClose(e)}
      />{" "}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          paginate(-1);
        }}
        className="text-xl bg-black h-16 w-16 text-white absolute z-10 top-[calc(50%-2rem)] lg:left-1/4 left-0 flex justify-center items-center  rounded-md m-1"
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, x: 50, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <GoTriangleLeft size={"2rem"} />
      </motion.button>
      {(images[imageIndex].slice(-4) === ".png" ||
        images[imageIndex].slice(-4) === ".gif") && (
        <motion.img
          layout
          className={`w-auto h-[400px] fixed object-contain z-50 ${
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
            duration: 0.3,
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
      )}
      {(images[imageIndex].slice(-4) === "webm" ||
        images[imageIndex].slice(-4) === ".mp4") && (
        <motion.video
          autoPlay
          loop
          muted
          layout
          className={`w-auto h-[450px] fixed object-contain z-50 ${
            isOpen ? "" : ""
          }`}
          key={page}
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
        >
          <source src={images[imageIndex]} />
        </motion.video>
      )}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          paginate(1);
        }}
        className="text-xl bg-black h-16 w-16 text-white absolute z-10 top-[calc(50%-2rem)] lg:right-1/4 right-0  flex justify-center items-center rounded-md m-1"
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, x: -50, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <GoTriangleRight size={"2rem"} />
      </motion.button>
    </RemoveScroll>,
    document.body
  );
};

export default ProjectCardImageGalleryModal;
