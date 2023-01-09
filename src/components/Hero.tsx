import React, { useRef } from "react";
import { useScroll, useSpring, motion, useInView } from "framer-motion";

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
    <div className={`text-myBlack`}>
      <div className="sm:px-[10vw] px-[4vw] py-[34vh] pb-[26vh] leading-tight">
        <motion.div
          ref={helloRef}
          className={`text-xl font-sans font-light ml-10 tracking-wide leading-tight transition-all duration-700 ${
            helloIsInView ? "opacity-1" : "opacity-0"
          }`}
          style={{ transform: helloIsInView ? "none" : "translateX(-200px) " }}
        >
          Hello, my name is
        </motion.div>
        <motion.div ref={nameRef}>
          <h1
            className={` z-1 font-serif uppercase font-bold italic leading-tight ${
              nameIsInView ? "text-dynamicXL" : "text-[2rem] fixed top-0"
            }`}
            style={{ transition: "font-size 0.5s" }}
          >
            Jacek Smoter
          </h1>
        </motion.div>
        <motion.div
          ref={iAmRef}
          className={`text-xl md:ml-28 leading-tight font-sans font-light sm:max-w-lg max-w-md transition-all duration-1000 ${
            iAmIsInView ? "opacity-1" : "opacity-0"
          }  `}
          style={{ transform: iAmIsInView ? "none" : "translateX(400px)" }}
        >
          I'm a <a href="#frontendDeveloper">Front-end Developer</a>,{" "}
          <a>Photographer</a>, <br />
          <a>dog dad</a>
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
        >
          You can find me on <a>Github</a>, <a>LinkedIn</a>, <a>Twitter</a> and
          my <a>photography website</a>. My CV can be downloaded <a>here</a>.
          <br />
          You're welcome to email me at <a>jac.smoter@gmail.com</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
