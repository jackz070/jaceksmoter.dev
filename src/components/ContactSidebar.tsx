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
          className={`flex sm:text-3xl text-2xl opacity-1 gap-2 text-myBlack z-50 ${
            isMobile
              ? "flex-row  bg-myWhite justify-center pb-4"
              : "flex-col bottom-16 items-end ml-4 fixed w-12"
          }
      }`}
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className={`relative hover:scale-110 ${
              !isMobile && "group"
            } flex items-center  `}
          >
            <div className="absolute ml-8 invisible opacity-0 transition-all duration-100 group-hover:ml-12  group-hover:visible group-hover:opacity-100 text-sm w-48">
              GitHub
            </div>
            <AiOutlineGithub />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`relative hover:scale-110 ${
              !isMobile && "group"
            } flex items-center  `}
          >
            <div className="absolute ml-8 invisible opacity-0 transition-all duration-100 group-hover:ml-12  group-hover:visible group-hover:opacity-100 text-sm w-48">
              LinkedIn
            </div>
            <AiOutlineLinkedin />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
            className={`relative hover:scale-110 ${
              !isMobile && "group"
            } flex items-center  `}
          >
            <div className="absolute ml-8 invisible opacity-0 transition-all duration-100 group-hover:ml-12  group-hover:visible group-hover:opacity-100 text-sm w-48">
              Twitter
            </div>
            <AiOutlineTwitter />
          </a>
          <a
            href={socialLinks.discord}
            target="_blank"
            rel="noreferrer"
            className={`relative hover:scale-110 ${
              !isMobile && "group"
            } flex items-center  `}
          >
            <div className="absolute ml-8 invisible opacity-0 transition-all duration-100 group-hover:ml-12  group-hover:visible group-hover:opacity-100 text-sm w-48">
              Discord
            </div>
            <FaDiscord />
          </a>
          <a
            href={`mailto: ${socialLinks.mail}`}
            target="_blank"
            rel="noreferrer"
            className={`relative hover:scale-110 ${
              !isMobile && "group"
            } flex items-center  `}
          >
            <div className="absolute ml-8 invisible opacity-0 transition-all duration-100 group-hover:ml-12  group-hover:visible group-hover:opacity-100 text-sm w-48">
              E-mail
            </div>
            <AiOutlineMail />
          </a>
          <a
            href="/Smoter_Jacek_CV-pl.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className={`relative hover:scale-110 ${
              !isMobile && "group"
            } flex items-center  `}
          >
            <AiOutlineFilePdf />
            <div className="absolute ml-8 invisible opacity-0 transition-all duration-100 group-hover:ml-12  group-hover:visible group-hover:opacity-100 text-sm w-48">
              CV in Polish
            </div>
            <div className="absolute bottom-0 right-0 text-xs p-1 rounded-full bg-myBlack text-myWhite">
              PL
            </div>
          </a>
          <a
            href="/Smoter_Jacek_CV_eng.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className={`relative hover:scale-110 ${
              !isMobile && "group"
            } flex items-center  `}
          >
            <AiOutlineFilePdf />
            <div className="absolute ml-8 invisible opacity-0 transition-all duration-100 group-hover:ml-12  group-hover:visible group-hover:opacity-100 text-sm w-48">
              CV in English
            </div>
            <div className="absolute bottom-0 -right-1 text-xs p-1 rounded-full bg-myBlack text-myWhite">
              ENG
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactSidebar;
