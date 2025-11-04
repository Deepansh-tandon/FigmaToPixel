import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ImpactSection from "./components/ImpactSection";
import OurWorkSection from "./components/OurWorkSection";
import WhyLaunchPadSection from "./components/WhyLaunchPadSection";
import OurApproachSection from "./components/OurApproachSection";
import LaunchPadProcessSection from "./components/LaunchPadProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="fixed top-0 left-0 w-full h-[90px] flex items-center flex-shrink-0 z-50 bg-[var(--background)]">
        <Nav />
      </div>
      <div className="min-h-screen flex flex-col">
        <Hero />
      </div>
      <ImpactSection />
      <OurWorkSection />
      <WhyLaunchPadSection />
      <OurApproachSection />
      <LaunchPadProcessSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
