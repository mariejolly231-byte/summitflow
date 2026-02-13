import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";
import { Helmet } from "react-helmet-async";

const RentabiliteNoCodePME = () => {
  return (
    <>
      <Helmet>
        <title>Rentabilité No Code PME | Summit Flow</title>
        <meta name="description" content="Estimez le retour sur investissement de votre projet d'automatisation no code. Calculez la rentabilité, le temps économisé et la période d'amortissement pour votre PME." />
        <link rel="canonical" href="https://summitflow.fr/rentabilite-no-code-pme" />
      </Helmet>
      <main className="min-h-screen">
        <Navbar />
        <ROICalculator />
        <Footer />
      </main>
    </>
  );
};

export default RentabiliteNoCodePME;
