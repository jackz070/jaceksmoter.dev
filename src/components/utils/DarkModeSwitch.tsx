import { useDarkMode } from "../../context/DarkModeContext";
import { HiMoon } from "@react-icons/all-files/hi/HiMoon";
import { GiPlainCircle } from "@react-icons/all-files/gi/GiPlainCircle";
import { motion, AnimatePresence } from "framer-motion";

const DarkModeSwitch = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const handleChange = () => {
    if (darkMode) {
      setDarkMode(false);
      localStorage.theme = "light";
      setTimeout(() => {
        document.body.classList.remove("dark");
      }, 40);
    } else {
      setDarkMode(true);
      localStorage.theme = "dark";
      setTimeout(() => {
        document.body.classList.add("dark");
      }, 40);
    }
  };

  return (
    <div className="w-16 h-fit z-[20000] fixed top-1 right-4 ">
      <label className=" flex items-center relative cursor-pointer ">
        <input
          type="checkbox"
          className="w-fit h-fit peer appearance-none rounded-md"
          checked={darkMode}
          onChange={handleChange}
        />

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
      </label>
    </div>
  );
};

export default DarkModeSwitch;
