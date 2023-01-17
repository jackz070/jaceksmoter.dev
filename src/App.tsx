import { useEffect } from "react";
import BackgroundBlur from "./components/BackgroundBlur";
import Hero from "./components/Hero";
import FrontendDeveloper from "./components/frontend/FrontendDeveloper";
import Photographer from "./components/Photographer";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import ContactSidebar from "./components/ContactSidebar";

import { MotionConfig } from "framer-motion";
import DarkModeSwitch from "./components/utils/DarkModeSwitch";
import MeganTheDog from "./components/MeganTheDog";

//TODO think if I want photography in here or just link on top

//TODO dog component
//TODO Loaders for whole page and images
//TODO pdf download language mark on scrolling contacts icons
//TODO lazy loading of components at the bottom (first bg-blur and loader, then here, then projects, then rest)
//TODO fetch gallery images if they'll exist only on hover

function App() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="relative scroll-smooth max-w-[100vw]  overflow-hidden ">
      <MotionConfig reducedMotion="user">
        <Hero />
        <DarkModeSwitch />

        <FrontendDeveloper />

        <Bio />
        {/* <Photographer /> */}
        <Footer />
        <BackgroundBlur />
        <ContactSidebar />
      </MotionConfig>
    </div>
  );
}

export default App;
