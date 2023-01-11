import React, { useState, useEffect } from "react";
import {
  useScroll,
  useSpring,
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { socialLinks } from "../assets/socialLinks";

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
          className={`flex flex-col items-end fixed bottom-16 opacity-1 w-12 text-3xl ml-4 gap-2 
      }`}
        >
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            <AiOutlineGithub />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <AiOutlineLinkedin />
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
            <AiOutlineTwitter />
          </a>
          <a href={socialLinks.discord} target="_blank" rel="noreferrer">
            <FaDiscord />
          </a>
          <a
            href={`mailto: ${socialLinks.mail}`}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
          <a
            href="/Smoter_Jacek_CV-pl.pdf"
            download
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineFilePdf />
          </a>
          <a
            // TODO english CV for download
            href={socialLinks.github}
            download
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineFilePdf />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactSidebar;
