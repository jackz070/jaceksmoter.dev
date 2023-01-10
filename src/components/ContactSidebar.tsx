import React, { useState, useEffect } from "react";
import {
  useScroll,
  useSpring,
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";

import { AiOutlineFilePdf } from "@react-icons/all-files/ai/AiOutlineFilePdf";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";

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
          className={`flex flex-col fixed bottom-20 opacity-1 w-48 text-2xl ml-4 gap-2 
      }`}
        >
          <AiOutlineGithub />
          <AiOutlineLinkedin />
          <AiOutlineTwitter />
          <FaDiscord />
          <AiOutlineMail />
          <AiOutlineFilePdf />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactSidebar;
