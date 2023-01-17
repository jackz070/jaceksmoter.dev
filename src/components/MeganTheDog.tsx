import { motion } from "framer-motion";

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

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

const getRandomTop = () => {
  let viewportHeight = window.innerHeight;
  return `top-[${Math.floor(Math.random() * window.innerHeight)}px]`;
};

const MeganTheDog = () => {
  const randomImgs = getMultipleRandom(imagePool, 8);
  return (
    <div className="w-[100vw] h-[100vh] top-0 left-0 fixed z-50">
      {randomImgs.map((image) => (
        <motion.img
          src={image}
          className={`h-56 absolute`}
          initial={{
            scale: 0,
            x: Math.floor(Math.random() * window.innerWidth),
            y: Math.floor(Math.random() * window.innerHeight),
          }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
            rotate: { ease: "linear", duration: 2, repeat: Infinity },
          }}
        />
      ))}
    </div>
  );
};

export default MeganTheDog;
