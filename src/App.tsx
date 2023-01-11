import BackgroundBlur from "./components/BackgroundBlur";
import Hero from "./components/Hero";
import FrontendDeveloper from "./components/frontend/FrontendDeveloper";
import Photographer from "./components/Photographer";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import ContactSidebar from "./components/ContactSidebar";

import { MotionConfig } from "framer-motion";
import DarkModeSwitch from "./components/utils/DarkModeSwitch";

//TODO think if I want photography in here or just link on top
//TODO footer is supposed to repeat contact from hero in a more friendly way
//TODO dog component
//TODO Loaders for whole page and images
//TODO pdf download, mailto: links
//TODO lazy loading of components at the bottom (first bg-blur and loader, then here, then projects, then rest)
//TODO fetch gallery images if they'll exist only on hover
function App() {
  return (
    <div className="relative scroll-smooth">
      <MotionConfig reducedMotion="user">
        <Hero />
        <DarkModeSwitch />
        <ContactSidebar />
        <FrontendDeveloper />
        <Bio />
        {/* <Photographer /> */}
        <Footer />
        <BackgroundBlur />
      </MotionConfig>
    </div>
  );
}

export default App;
