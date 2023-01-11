import { motion } from "framer-motion";
import ScrollingMarquee from "./utils/ScrollingMarquee";

const Photographer = () => {
  return (
    <div>
      <ScrollingMarquee text="Photographer" />
      <motion.div className="max-w-4xl flex justify-center mx-auto">
        <motion.h2 className="text-2xl font-bold">
          As I've mentioned, I'm also a photographer.
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Photographer;
