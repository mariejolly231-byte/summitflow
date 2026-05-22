import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import TrustLogos from "@/components/TrustLogos";
import TrainingCertifications from "@/components/TrainingCertifications";
import GoogleReviews from "@/components/GoogleReviews";
import Pricing from "@/components/Pricing";
import ROICalculator from "@/components/ROICalculator";
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
      <main className="min-h-screen grain-body">
        <Navbar />
        <Hero />
        <Services />
        <Problems />
        <Process />
        <About />
        <TrustLogos />
        <GoogleReviews />
        <TrainingCertifications />
        <Pricing />
        <ROICalculator />
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