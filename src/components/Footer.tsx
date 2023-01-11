import { motion } from "framer-motion";
import ScrollingMarquee from "./utils/ScrollingMarquee";

const Footer = () => {
  return (
    <div className="h-[32rem] bg-myWhite">
      <ScrollingMarquee text="Contact" />
      <motion.div className="mx-auto flex flex-col justify-center max-w-4xl  text-center">
        <motion.h3
          className="text-2xl font-bold mb-6 mt-8 uppercase font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Thank you for getting all the way down here!
        </motion.h3>
        <motion.div className="text-xl leading-tight font-light">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-6"
          >
            I'm looking for challenges, work and connections.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-6"
          >
            Chat me up if you think I would be a good fit for your open source
            project or a good addition for your team.
          </motion.p>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            {" "}
            Drop me an e-mail, follow me on Twitter, let's connect on LinkedIn!
          </motion.p>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            For more Megan the dog click here! 🐕‍🦺
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
