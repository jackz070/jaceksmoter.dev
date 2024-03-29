import { useEffect, useLayoutEffect } from "react";
import BackgroundBlur from "./components/BackgroundBlur";
import Hero from "./components/Hero";
import FrontendDeveloper from "./components/frontend/FrontendDeveloper";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import ContactSidebar from "./components/ContactSidebar";
import { MotionConfig } from "framer-motion";
import DarkModeSwitch from "./components/utils/DarkModeSwitch";

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
        <Footer />
        <BackgroundBlur />
        <ContactSidebar />
      </MotionConfig>
    </div>
  );
}

export default App;
