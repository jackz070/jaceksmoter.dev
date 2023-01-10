import BackgroundBlur from "./components/BackgroundBlur";
import Hero from "./components/Hero";
import FrontendDeveloper from "./components/frontend/FrontendDeveloper";
import Photographer from "./components/Photographer";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import ContactSidebar from "./components/ContactSidebar";
import { MotionConfig } from "framer-motion";

//TODO think if I want photography in here or just link on top
//TODO footer is supposed to repeat contact from hero in a more friendly way

function App() {
  return (
    <div className="relative scroll-smooth">
      <MotionConfig reducedMotion="user">
        <Hero />
        <ContactSidebar />
        <FrontendDeveloper />
        <Photographer />
        <Bio />
        <Footer />
        <BackgroundBlur />
      </MotionConfig>
    </div>
  );
}

export default App;
