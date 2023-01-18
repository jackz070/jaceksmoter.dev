import ScrollingMarquee from "./utils/ScrollingMarquee";
import { useRef } from "react";
import photoOfMe from "/me.jpg";

// TODO section separation not readable on mobile ?
const Bio = () => {
  const bioRef = useRef(null);

  return (
    <section ref={bioRef} id="bio">
      <ScrollingMarquee text="Bio" />
      <div id="bio" />
      <div
        className={`max-w-2xl sm:mx-auto mx-6 text-xl tracking-wide sm:leading-9 leading-8 font-sans mb-12 text-myBlack font-light`}
      >
        <p className="mb-6">
          Having got my Masters in International Relations / Strategic Studies &
          History and Culture of Jews in Poland I’ve worked for 2,5 years in
          mental health area, at a self-help Clubhouse following the &nbsp;
          <a
            href="https://clubhouse-intl.org/"
            target="_blank"
            rel="noreferrer"
          >
            Clubhouse International
          </a>
          Standards of Quality (check it out, it’s an amazing approach to
          supporting people with mental health problems!). For me it was the
          time of learning to communicate better, listen to and understand needs
          of people more deeply and supporting them in finding their agency.
        </p>
        <div className="flex sm:flex-row flex-col items-center justify-center m-12">
          <img
            src={photoOfMe}
            className="sm:max-w-[30%] max-w-[60%] sm:mb-0 mb-6  font-serif"
          />
          <p className="ml-8 font-serif max-w-sm">
            This experience led me to realise that what I really need in my life
            is pursuing the teenage dream that I gave up long time ago -
            becoming a software developer.
          </p>
        </div>
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
    </section>
  );
};

export default Bio;
