import React, { useRef } from "react";
import {
  useScroll,
  useSpring,
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { socialLinks } from "../assets/socialLinks";

const Hero = () => {
  const helloRef = useRef(null);
  const helloIsInView = useInView(helloRef, {
    margin: "-200px 0px 0px 0px",
  });

  const iAmRef = useRef(null);
  const iAmIsInView = useInView(iAmRef, {
    margin: "-300px 0px 0px 0px",
  });

  const nameRef = useRef(null);
  const nameIsInView = useInView(nameRef, {
    margin: "-230px 0px 0px 0px",
  });

  const contactRef = useRef(null);
  const contactInfoInView = useInView(contactRef, {
    margin: "-400px 0px 0px 0px",
  });

  return (
    <AnimatePresence>
      <div className={`text-myBlack`}>
        <motion.div
          className={`sm:px-[10vw] px-[4vw] py-[34vh] pb-[20vh] leading-tight $`}
        >
          <motion.div
            ref={helloRef}
            className={`text-xl font-sans font-light ml-10 tracking-wide leading-tight transition-all duration-700 ${
              helloIsInView ? "opacity-1" : "opacity-0"
            }`}
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
                  : "text-[2rem] fixed top-0 z-50 font-sans"
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
                transition={{ delay: 0.7 }}
                className="fixed -top-4 left-0 bg-myWhite w-full h-16 z-40"
              />
            )}
          </motion.div>
          <motion.div
            ref={iAmRef}
            className={`text-xl md:ml-28 leading-tight font-sans font-light sm:max-w-lg max-w-md transition-all duration-1000 ${
              iAmIsInView ? "opacity-1" : "opacity-0"
            }  `}
            style={{ transform: iAmIsInView ? "none" : "translateX(400px)" }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            I'm a <a href="#frontendDeveloper">Front-end Developer</a>,
            <a>Photographer</a>, <br />
            <a>dog dad 🐕‍🦺</a>
            &nbsp;and&nbsp;
            <a>much more</a>
          </motion.div>
          <motion.div
            className={` z-1  ${
              nameIsInView ? "opacity-0" : "opacity-1 fixed right-20 top-0 "
            }`}
          >
            <div className={``}>Nav icons</div>
          </motion.div>
          <motion.div
            ref={contactRef}
            className={`text-lg md:ml-40 leading-tight font-sans font-light sm:max-w-lg max-w-md transition-all duration-1000 ${
              contactInfoInView ? "opacity-1" : "opacity-0"
            }`}
            style={{
              transform: contactInfoInView ? "none" : "translateX(-200px)",
            }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            You can find me on
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              Github
            </a>
            ,
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            ,
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>
            and my
            <a href="https://jaceksmoter.com" target="_blank" rel="noreferrer">
              photography website
            </a>
            . My CV can be downloaded
            <a>in English</a> and <a>in Polish</a>.
            <br />
            You're welcome to email me at <a>jac.smoter@gmail.com</a>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
