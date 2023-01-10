import { motion } from "framer-motion";

const marqueeVariants = {
  initial: { opacity: 0 },
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const ScrollingMarquee = ({ text }: { text: string }) => {
  const textToDisplay = Array(28).fill(text);

  return (
    <div
      className={`h-20  w-[100vw] overflow-hidden sticky top-10 z-30 bg-myWhite mb-6`}
    >
      <motion.h2
        className="ml-12 mb-6 text-4xl uppercase whitespace-nowrap font-mono"
        variants={marqueeVariants}
        animate="animate"
      >
        {textToDisplay.map((string) => `${string} `)}
      </motion.h2>
    </div>
  );
};

export default ScrollingMarquee;
