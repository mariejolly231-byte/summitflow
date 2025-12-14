import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Examples from "@/components/Examples";
import Pricing from "@/components/Pricing";
import ROICalculator from "@/components/ROICalculator";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Benefits />
      <Examples />
      <Process />
      <Pricing />
      <ROICalculator />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
