import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import About from "./components/About";
import AdmissionSection from "./components/AdmissionSection";
import Benefit from "./components/Benefit";
import Breakthrough from "./components/Breakthrough";
import EventSection from "./components/EventSection";
import FAQSection from "./components/FaqSection";
import Footer from "./components/FooterSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import PriceSection from "./components/PriceSection";
import ScheduleSection from "./components/ScheduleSection";
// import SocialMediaSection from "./components/SocialMediaSection";
import Testimonials from "./components/TestimonialsSection";
import TransformationSection from "./components/TransformationSection";
import VisionarySection from "./components/VisionarySection";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <About />
        {/* <Benefit />
        <Breakthrough />
        <TransformationSection />
        <IntroSection />
        <EventSection />
        <VisionarySection />
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
