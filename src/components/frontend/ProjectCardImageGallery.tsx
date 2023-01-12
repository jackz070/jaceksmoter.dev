import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProjectCardImagePlaceholder from "../utils/ProjectCardImagePlaceholder";
import { GoTriangleRight } from "@react-icons/all-files/go/GoTriangleRight";
import { GoTriangleLeft } from "@react-icons/all-files/go/GoTriangleLeft";

const ProjectCardImageGallery = ({
  previewImage,
}: {
  previewImage: string;
}) => {
  return (
    <motion.div className="w-[352px] h-[199.75px] relative">
      <motion.button
        className="absolute right-0 h-full hover:bg-myBlack text-2xl text-myBlack hover:text-myWhite transition-all duration-300
  "
      >
        <GoTriangleRight />
      </motion.button>
      <LazyLoadImage
        src={previewImage}
        width="352"
        height="199.75"
        className={``}
        placeholderSrc={previewImage}
      />
      <motion.button
        className="absolute left-0 h-full hover:bg-myBlack text-2xl text-myBlack hover:text-myWhite transition-all duration-300
  "
      >
        <GoTriangleLeft />
      </motion.button>
    </motion.div>
  );
};

export default ProjectCardImageGallery;
