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
  // TODO i am paragraph doesnt show up on my iphone 8 plus (height / offset makes it so?) it appears on a swipe left
  // TODO width is fucked on mobile - those two are related - it's place the i am element takes before it comes in but it never does
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
                transition={{ delay: 0.4 }}
                className="fixed -top-4 left-0 bg-myWhite w-full h-16 z-40"
              />
            )}
          </motion.div>
          <motion.div
            ref={iAmRef}
            className={`text-xl md:ml-28 leading-tight font-sans font-light sm:max-w-lg max-w-md transition-all duration-1000 ${
              iAmIsInView ? "opacity-1" : "opacity-0"
            }  `}
            style={{ transform: iAmIsInView ? "none" : "translateX(380px)" }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            I'm a <a href="#frontendDeveloper">Front-end Developer</a>, &nbsp;
            <a>Photographer</a>, <br />
            <a>Dog Dad 🐕‍🦺</a>
            &nbsp;and&nbsp;
            <a href="#bio">much more</a>
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
            . My CV can be downloaded&nbsp;<a>in English</a> and&nbsp;
            <a>in Polish</a>. You're welcome to email me at&nbsp;
            <a>jac.smoter@gmail.com</a>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
