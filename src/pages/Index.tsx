import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReassuranceBar from "@/components/ReassuranceBar";
import Problems from "@/components/Problems";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import TrustLogos from "@/components/TrustLogos";
import TrainingCertifications from "@/components/TrainingCertifications";
import Resources from "@/components/Resources";
import GoogleReviews from "@/components/GoogleReviews";
import Pricing from "@/components/Pricing";
import ROICalculator from "@/components/ROICalculator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead page="home" />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <ReassuranceBar />
        <Problems />
        <ValueProposition />
        <Services />
        <Process />
        <About />
        <TrustLogos />
        <TrainingCertifications />
        <Resources />
        <GoogleReviews />
        <Pricing />
        <ROICalculator />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </main>
    </>
  );
};

export default Index;