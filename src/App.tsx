import About from "./components/About";
import Benefit from "./components/Benefit";
import Breakthrough from "./components/Breakthrough";
import EventSection from "./components/EventSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
// import SocialMediaSection from "./components/SocialMediaSection";
import TransformationSection from "./components/TransformationSection";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <About />
        <Benefit />
        <Breakthrough />
        <TransformationSection />
        <IntroSection />
        <EventSection />
        {/* <VisionarySection />
        <Testimonials />
        <AdmissionSection />
        <ScheduleSection />
        <PriceSection />
        <FAQSection />
        <SocialMediaSection />
        <Footer />
        <Analytics />
        <SpeedInsights /> */}
      </div>
    </>
  );
}

export default App;
