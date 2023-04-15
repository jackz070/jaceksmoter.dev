import { motion } from "framer-motion";

const marqueeVariants = {
  initial: { opacity: 0 },
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

const ScrollingMarquee = ({ text }: { text: string }) => {
  const textToDisplay = Array(56).fill(text);

  return (
    <div
      className={`h-14  w-[100vw] overflow-hidden sticky top-10  bg-myWhite mb-6 flex items-center`}
    >
      <motion.h2
        className="ml-12 text-2xl uppercase whitespace-nowrap font-mono text-myBlack "
        variants={marqueeVariants}
        animate="animate"
      >
        {textToDisplay.map((string) => `${string} `)}
      </motion.h2>
    </div>
  );
};

export default ScrollingMarquee;
