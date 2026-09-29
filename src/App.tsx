import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import TrustSection from "./components/TrustSection";
import WhyChooseUs from "./components/WhyChooseUs";
import LearningJourney from "./components/LearningJourney";
import Faculty from "./components/Faculty";
import StudentProjects from "./components/StudentProjects";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import AdmissionCTA from "./components/AdmissionCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { initReveals, ScrollTrigger } from "./lib/animate";

export default function App() {
  useLayoutEffect(() => {
    const cleanup = initReveals();
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 1200);
    return () => {
      cleanup();
      window.removeEventListener("load", onLoad);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-slate-50 font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <TrustSection />
        <WhyChooseUs />
        <LearningJourney />
        <Faculty />
        <StudentProjects />
        <Achievements />
        <Testimonials />
        <Gallery />
        <FAQ />
        <AdmissionCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
