import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "./ProjectCardImageGalleryArrowBG.css";
import { GoTriangleRight } from "@react-icons/all-files/go/GoTriangleRight";
import { GoTriangleLeft } from "@react-icons/all-files/go/GoTriangleLeft";
import { RemoveScroll } from "react-remove-scroll";
import { isMobile } from "react-device-detect";

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
        onClick={() => {
          // if (!isMobile) {
          setIsOpen(!isOpen);
          // }
        }}
        className={`w-[352px] h-[199.75px] relative ${isOpen ? "" : ""}`}
      >
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            paginate(-1);
          }}
          className="text-xl bg-black h-8 w-8 text-white absolute z-10 top-[80px] flex justify-center items-center  rounded-md m-1"
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
          className="text-xl bg-black h-8 w-8 text-white absolute z-10 top-[80px] flex justify-center items-center right-0 rounded-md m-1"
          whileTap={{ scale: 0.9 }}
        >
          <GoTriangleRight />
        </motion.button>

        {isOpen &&
          createPortal(
            <RemoveScroll className="fixed flex justify-center items-center w-[100vw] h-[100vh] top-0 z-[100]">
              <motion.div
                className=" fixed  top-0 bg-black w-[100vw] h-[100vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
              />{" "}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(-1);
                }}
                className="text-xl bg-black h-16 w-16 text-white absolute z-10 top-1/2 lg:left-1/4 left-0 flex justify-center items-center  rounded-md m-1"
                whileTap={{ scale: 0.9 }}
              >
                <GoTriangleLeft size={"2rem"} />
              </motion.button>
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
              />{" "}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
                className="text-xl bg-black h-16 w-16 text-white absolute z-10 top-1/2 lg:right-1/4 right-0  flex justify-center items-center rounded-md m-1"
                whileTap={{ scale: 0.9 }}
              >
                <GoTriangleRight size={"2rem"} />
              </motion.button>
            </RemoveScroll>,
            document.body
          )}
      </motion.div>
      {/* {isOpen && (
        <ReactRemoveScroll>
          <motion.div
            className="w-[100vw] h-[100vh] fixed top-0 left-0 right-0  bg-black z-40 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />
        </ReactRemoveScroll>
      )} */}
      {/* <motion.div
        className={` relative  ${isOpen ? " z-50 " : "z-2 "}`}
        animate={{
          scale: isOpen ? 2.2 : 1,
          originX: "50%",
        }}
      >
        <motion.div
          onClick={() => {
            if (!isMobile) {
              setIsOpen(!isOpen);
            }
          }}
          className={`w-[352px] h-[199.75px] absolute -top-[12.5rem] ${
            isOpen ? "" : ""
          }`}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              layout
              className={`w-[352px] h-[199.75px] absolute object-contain ${
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
                duration: 0.5,
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
          </AnimatePresence>
        </motion.div>
        <div
          className={`next text-2xl top-[-12.5rem] absolute w-[40px] h-[199.75px] flex justify-center items-center select-none cursor-pointer z-[2] right-0 active:scale-90`}
          onClick={() => paginate(1)}
        >
          <GoTriangleRight />
        </div>
        <div
          className="prev text-2xl top-[-12.5rem] absolute w-[40px] h-[199.75px] flex justify-center items-center select-none cursor-pointer z-[2] left-0 active:scale-90"
          onClick={() => paginate(-1)}
        >
          <GoTriangleLeft />
        </div>
      </motion.div> */}
    </div>
  );
};
