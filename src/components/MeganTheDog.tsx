import { motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";

const imagePool = [
  "/MeganTheDog/M-1.png",
  "/MeganTheDog/M-6.png",
  "/MeganTheDog/M-7.jpg",
  "/MeganTheDog/M-8.png",
  "/MeganTheDog/M-9.png",
  "/MeganTheDog/M-10.png",
  "/MeganTheDog/M-11.png",
  "/MeganTheDog/M-12.png",
  "/MeganTheDog/M-13.png",
  "/MeganTheDog/M-14.png",
  "/MeganTheDog/M-15.png",
  "/MeganTheDog/M-16.png",
  "/MeganTheDog/M-17.png",
  "/MeganTheDog/M-18.png",
];

function getMultipleRandom(arr: string[], num: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

// TODO even distibution of Megans
// TODO resize images to max 600px? 800px? and optimize them
// TODO add random delay up to 1s?

const MeganTheDog = ({
  megan,
  setMegan,
}: {
  megan: boolean;
  setMegan: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const randomImgs = getMultipleRandom(imagePool, 12);
  const randomWidth = (index: number) => {
    if (index < 6) {
      return Math.floor(Math.random() * (window.innerWidth / 2));
    } else
      return Math.floor(
        Math.random() * (window.innerWidth / 2) + window.innerWidth / 2 - 100
      );
  };
  const randomHeight = (index: number) => {
    if (index > 3 && index < 9) {
      return Math.floor(Math.random() * (window.innerHeight / 2));
    } else
      return Math.floor(
        Math.random() * (window.innerHeight / 2) + window.innerHeight / 2 - 100
      );
  };

  return (
    <div
      className="w-[100vw] h-[96vh] bottom-0 left-0 fixed z-50"
      onClick={() => setMegan(!megan)}
    >
      <RemoveScroll>
        {randomImgs.map((image, index) => (
          <motion.img
            src={image}
            className={`sm:h-64 h-32 absolute`}
            initial={{
              scale: 0,
              x: randomWidth(index),
              y: randomHeight(index),
            }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              delay: index * 0.3,
              ease: "linear",
              duration: 1,
              rotate: { ease: "linear", duration: 16, repeat: Infinity },
            }}
          />
        ))}
      </RemoveScroll>
    </div>
  );
};

export default MeganTheDog;
