import ScrollingMarquee from "./utils/ScrollingMarquee";
import { useRef } from "react";
import { useInView } from "framer-motion";
import photoOfMe from "/me.jpg";

// TODO add photo to the bio? Maybe to the start page?
// TODO links, ids and so on with scroll to id links - they're fucked atm giving things like /bio#bio
const Bio = () => {
  const bioRef = useRef(null);

  const bioIsInView = useInView(bioRef, {
    margin: "-50px 0px 0px 0px",
  });

  // const triggerBioRef = useRef(null);
  // const triggerBioIsInView = useInView(triggerBioRef, {
  //   margin: "0px 0px 0px 0px",
  // });

  // const shouldBeFixedOnTop = () => {
  //   if (triggerBioIsInView) {
  //     return bioIsInView;
  //   } else return false;
  // };

  return (
    <div ref={bioRef}>
      <ScrollingMarquee text="Bio" />
      <div id="bio" />
      <div
        className={`max-w-2xl sm:mx-auto mx-6 text-xl tracking-wide sm:leading-10 leading-8 font-sans mb-12 text-myBlack`}
      >
        <img src={photoOfMe} className="float-left max-w-[40%] mr-4 mt-2" />
        <p className="mb-6">
          Having got my Masters in International Relations / Strategic Studies &
          History and Culture of Jews in Poland I’ve worked for 2,5 years in
          mental health area, at a self-help Clubhouse following the &nbsp;
          <a>Clubhouse International Standards of Quality</a> (check it out,
          it’s an amazing approach to supporting people with mental health
          problems!). For me it was the time of learning to communicate better,
          listen to and understand needs of people more deeply and supporting
          them in finding their agency. This experience led me to realise that
          what I really need in my life is pursuing the teenage dream that I
          gave up long time ago - becoming a software developer.
        </p>
        <p>
          I’ve started learning at the beginning of 2022 with HTML & CSS and
          moved to JavaScript and React some months later. You can find my
          projects big & small down above, but one I’m most happy about so far
          is a simple photography portfolio webpage that I’ve designed & created
          to display my work. It’s so good to feel the impact coding can make,
          how important the result may be to people if it responds to their
          needs.
        </p>
      </div>
    </div>
  );
};

export default Bio;
