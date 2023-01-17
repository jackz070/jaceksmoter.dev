import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "../assets/socialLinks";

import { AiOutlineFilePdf } from "@react-icons/all-files/ai/AiOutlineFilePdf";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";

import { isMobile } from "react-device-detect";

const ContactSidebar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showSideContacts, setShowSideContacts] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });
      scrollPosition >= 340
        ? setShowSideContacts(true)
        : setShowSideContacts(false);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setShowSideContacts(true);
    }
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
          className={`flex sm:text-3xl text-2xl opacity-1 gap-2 text-myBlack  ${
            isMobile
              ? "flex-row  bg-myWhite justify-center"
              : "flex-col bottom-16 items-end ml-4 fixed w-12"
          }
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
            href="/Smoter_Jacek_CV_eng.pdf"
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
