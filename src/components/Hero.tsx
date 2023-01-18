import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { socialLinks } from "../assets/socialLinks";
import { isMobile, useMobileOrientation } from "react-device-detect";
import { useDarkMode } from "../context/DarkModeContext";
import MeganTheDog from "./MeganTheDog";

const Hero = () => {
  const { isLandscape } = useMobileOrientation();
  const { darkMode } = useDarkMode();
  const [megan, setMegan] = useState(false);
  const helloRef = useRef(null);
  const helloIsInView = useInView(helloRef, {
    margin:
      isMobile && isLandscape
        ? "-90px 0px 0px 0px"
        : isMobile
        ? "-160px 0px 0px 0px"
        : "-200px 0px 0px 0px",
  });
  // TODO fix spaces in the hero section (inline <a> elements and text around them)

  const iAmRef = useRef(null);
  const iAmIsInView = useInView(iAmRef, {
    margin:
      isMobile && isLandscape
        ? "-180px 0px 0px 0px"
        : isMobile
        ? "-180px 0px 0px 0px"
        : "-280px 0px 0px 0px",
  });

  const nameRef = useRef(null);
  const nameIsInView = useInView(nameRef, {
    margin:
      isMobile && isLandscape
        ? "-100px 0px 0px 0px"
        : isMobile
        ? "-160px 0px 0px 0px"
        : "-230px 0px 0px 0px",
  });

  const contactRef = useRef(null);
  const contactInfoInView = useInView(contactRef, {
    margin:
      isMobile && isLandscape
        ? "-200px 0px 0px 0px"
        : isMobile
        ? "-380px 0px 0px 0px"
        : "-400px 0px 0px 0px",
  });

  return (
    <AnimatePresence>
      <div className={`text-myBlack`}>
        <motion.div
          className={`sm:px-[10vw] px-[4vw] md:py-[34vh] py-[26vh] pb-[20vh] h-[90vh] leading-tight mb-12`}
        >
          <motion.div
            ref={helloRef}
            className={`text-xl font-sans font-light ml-10 tracking-wide leading-tight transition-all duration-700 ${
              isMobile ? "mb-2" : ""
            } ${helloIsInView ? "opacity-1" : "opacity-0"}`}
            style={{
              transform: helloIsInView ? "none" : "translateX(-200px) ",
            }}
            transition={{ type: "spring" }}
          >
            Hello, my name is
          </motion.div>
          <motion.div ref={nameRef}>
            <motion.h1
              className={` z-1 font-serif uppercase font-bold italic leading-tight ${
                nameIsInView
                  ? "text-dynamicXL"
                  : "text-[1.6rem] fixed top-0 z-50 font-sans"
              }`}
              initial={{ x: -1200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
              style={{ transition: "font-size 0.5s" }}
            >
              Jacek Smoter
            </motion.h1>
            {!nameIsInView && (
              <motion.div
                key="headerBg"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ delay: 0.2 }}
                className="fixed -top-4 left-0 bg-myWhite w-full h-12 z-40 "
              />
            )}
          </motion.div>
          <motion.div
            ref={iAmRef}
            className={`text-xl md:ml-28 leading-tight font-sans font-light sm:max-w-lg max-w-md transition-all duration-1000 mb-4 ${
              isMobile ? "mt-2" : ""
            } ${iAmIsInView ? "opacity-1" : "opacity-0"}  `}
            style={{ transform: iAmIsInView ? "none" : "translateX(280px)" }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            I'm a&nbsp;
            <a
              onClick={() => {
                let about = document.getElementById("projects");
                about &&
                  about.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Front-end Developer
            </a>
            , &nbsp;
            <a href="https://jaceksmoter.com" target="_blank" rel="noreferrer">
              Photographer
            </a>
            , <br />
            <a onClick={() => setMegan(!megan)} className="relative">
              Dog Dad {darkMode ? "🦮" : "🐕‍🦺"}
            </a>
            {megan && (
              <div className="text-sm absolute">(Click again to close)</div>
            )}
            &nbsp;and&nbsp;
            <a
              onClick={() => {
                let about = document.getElementById("bio");
                about &&
                  about.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              much more
            </a>
          </motion.div>

          <motion.div
            ref={contactRef}
            className={`text-lg md:ml-40 leading-tight font-sans font-light sm:max-w-lg max-w-md ${
              isMobile ? "" : ""
            } transition-all duration-1000 ${
              contactInfoInView ? "opacity-1" : "opacity-0"
            }`}
            style={{
              transform: contactInfoInView ? "none" : "translateX(-200px)",
            }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            You can find me on&nbsp;
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              Github
            </a>
            ,&nbsp;
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            ,&nbsp;
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>
            &nbsp; and my&nbsp;
            <a href="https://jaceksmoter.com" target="_blank" rel="noreferrer">
              photography website
            </a>
            . My CV can be downloaded&nbsp;
            <a
              href="/Smoter_Jacek_CV_eng.pdf"
              download
              target="_blank"
              rel="noreferrer"
            >
              in English
            </a>
            &nbsp;and&nbsp;
            <a
              href="/Smoter_Jacek_CV-pl.pdf"
              download
              target="_blank"
              rel="noreferrer"
            >
              in Polish
            </a>
            . You're welcome to email me at&nbsp;
            <a>jac.smoter@gmail.com</a>
          </motion.div>
        </motion.div>
      </div>
      {megan && <MeganTheDog megan={megan} setMegan={setMegan} />}
    </AnimatePresence>
  );
};

export default Hero;
