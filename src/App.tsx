import BackgroundBlur from "./components/BackgroundBlur";
import Hero from "./components/Hero";
import FrontendDeveloper from "./components/frontend/FrontendDeveloper";
import Photographer from "./components/Photographer";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import ContactSidebar from "./components/ContactSidebar";

function App() {
  return (
    <div className="relative scroll-smooth">
      <Hero />
      <ContactSidebar />
      <FrontendDeveloper />
      <Photographer />
      <Bio />
      <Footer />
      <BackgroundBlur />
    </div>
  );
}

export default App;
