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
          I’ve started studying to become a front-end developer in 2022. First
          I’ve learnt HTML & CSS and then moved to JavaScript, React and
          TypeScript. I’m also paying a lot of attention to software testing,
          both in theory and practice. Big focus for me are the testing tools
          that allow me to test my code: Cypress, Jest, Vitest, React Testing
          Library. Right now I’m expanding all those skills by taking courses,
          making some open source contributions and building by own projects, a
          selection of which you can find above.{" "}
        </p>
        <p className="mb-6">
          What I love about software development is feeling the impact it can
          make, how it may respond to the needs of others and improve their
          lives. So far, the projects I’m really happy about are my two
          portfolio websites (photography and web development) that I’ve
          designed and built from scratch. They help me to reach out with my
          creations, which makes a world of difference to me!
        </p>
        <p className="mb-6">
          How did I get here? Having got my Masters in International Relations /
          Strategic Studies & History and Culture of Jews in Poland I’ve worked
          for 2,5 years in mental health area, at a self-help Clubhouse that
          follows the &nbsp;
          <a
            href="https://clubhouse-intl.org/"
            target="_blank"
            rel="noreferrer"
          >
            Clubhouse International
          </a>
          &nbsp; Standards of Quality (check it out, it’s an amazing approach to
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
      </div>
    </section>
  );
};

export default Bio;
