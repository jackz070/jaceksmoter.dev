import { useState } from "react";
import { motion } from "framer-motion";
import ScrollingMarquee from "./utils/ScrollingMarquee";
import MeganTheDog from "./MeganTheDog";
import { useDarkMode } from "../context/DarkModeContext";

const Footer = () => {
  const [megan, setMegan] = useState(false);
  const { darkMode } = useDarkMode();
  return (
    <div className="h-[32rem] bg-myWhite w-full">
      <ScrollingMarquee text="Contact" />
      <motion.div className="mx-auto flex flex-col justify-center max-w-4xl  text-center text-myBlack">
        <motion.h3 className="text-2xl font-bold mb-6 mt-8 uppercase font-mono">
          Thank you for getting all the way down here!
        </motion.h3>
        <motion.div className="text-xl leading-tight font-light">
          <motion.p className="mb-6">
            I'm looking for challenges, work and connections.
          </motion.p>
          <motion.p className="mb-6">
            Hit me up if you think I would be a good fit for your open source
            project or a good addition for your team.
          </motion.p>
          <motion.p className="mb-6">
            Drop me an e-mail, follow me on Twitter, let's connect on LinkedIn!
          </motion.p>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            For more Megan the dog
            <a onClick={() => setMegan(!megan)}>
              click here! {darkMode ? "🦮" : "🐕‍🦺"}
            </a>
          </motion.p>
        </motion.div>
      </motion.div>
      {megan && <MeganTheDog megan={megan} setMegan={setMegan} />}
    </div>
  );
};

export default Footer;
