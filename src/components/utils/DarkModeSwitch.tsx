import React from "react";

import iconLight from "../assets/icon-light.png";
import iconDark from "../assets/icon-dark.png";
import { useDarkMode, DarkModeContext } from "../../context/DarkModeContext";
// BsCircleFill BsMoonFill
import { HiMoon } from "@react-icons/all-files/hi/HiMoon";
import { GiPlainCircle } from "@react-icons/all-files/gi/GiPlainCircle";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  easeIn,
} from "framer-motion";

const DarkModeSwitch = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const controls = useAnimationControls();
  const handleChange = () => {
    if (darkMode) {
      setDarkMode(false);
      localStorage.theme = "light";
      setTimeout(() => {
        document.body.classList.remove("dark");
      }, 170);
    } else {
      setDarkMode(true);
      localStorage.theme = "dark";
      setTimeout(() => {
        document.body.classList.add("dark");
      }, 170);
    }
  };

  const switchVariants = {
    hidden: {
      x: 100,
    },
    visible: {
      x: 0,
      transition: { type: "spring", delay: 0.1 },
    },
    exit: {
      x: 100,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <div className="w-16 h-fit z-[20000] fixed top-2 right-4 ">
      <label className=" flex items-center text-xs relative ">
        <input
          type="checkbox"
          className="w-fit h-fit peer appearance-none rounded-md"
          checked={darkMode}
          onChange={handleChange}
        />
        {/* <div
          className={`left-6 top-1 absolute -translate-y-12 peer-checked:translate-y-0 transition-all duration-1000 text-sm uppercase text-myBlack`}
        >
          Dark
        </div> */}

        {/* <div
          className={`left-6 top-1 absolute peer-checked:translate-y-12 transition-all duration-1000 text-sm uppercase`}
        >
          Light
        </div> */}

        {/* <span
          className={`w-fit h-fit text-[1.25rem] flex items-center left-0  absolute right-6 top-0 rounded-full duration-300 ease-in-out  ${
            darkMode ? "text-yellow-500" : "text-yellow-500"
          } `}
        >
          {darkMode ? <HiMoon /> : <GiPlainCircle />}
        </span> */}

        <motion.div className="overflow-hidden">
          <motion.div
            key="wow"
            className="text-[1.25rem] absolute left-0 top-0 text-myBlack"
          >
            {darkMode ? (
              <AnimatePresence>
                <motion.div
                  key="moon"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 60, opacity: 0 }}
                  transition={{
                    duration: 1.4,
                    type: "spring",
                  }}
                  className="absolute"
                >
                  <HiMoon />
                  <span className="left-6 top-1 absolute text-sm uppercase">
                    dark
                  </span>
                </motion.div>
              </AnimatePresence>
            ) : (
              <AnimatePresence>
                <motion.div
                  key="sun"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 60, opacity: 0 }}
                  transition={{ duration: 1.4, type: "spring" }}
                  className="absolute"
                >
                  <GiPlainCircle />
                  <span className="left-6 top-1 absolute text-sm uppercase">
                    light
                  </span>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </motion.div>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
