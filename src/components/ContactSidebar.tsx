import React, { useState, useEffect } from "react";
import {
  useScroll,
  useSpring,
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";

const ContactSidebar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showSideContacts, setShowSideContacts] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    scrollPosition >= 340
      ? setShowSideContacts(true)
      : setShowSideContacts(false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(scrollPosition);
  };

  return (
    <AnimatePresence>
      {showSideContacts && (
        <motion.div
          initial={{ x: -130 }}
          animate={{ x: 0 }}
          exit={{ x: -130 }}
          transition={{ duration: 1.3, type: "spring" }}
          layout
          className={`text-xl leading-tight font-sans font-light sm:max-w-lg max-w-md fixed bottom-10 opacity-1 ${
            showSideContacts ? "translate-x-0" : " translate-x-10"
          }
      }`}
        >
          sasa
          <br />
          dasdas
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactSidebar;
