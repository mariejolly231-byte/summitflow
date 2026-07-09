import cciToulouse from "@/assets/partners/cci-toulouse.png";
import numericoach from "@/assets/partners/numericoach.png";
import senza from "@/assets/partners/senza.svg";
import ecoleCube from "@/assets/partners/ecole-cube.png";
import gersDistribution from "@/assets/partners/gers-distribution.png";
import bgeSudOuest from "@/assets/partners/bge-sud-ouest.png";
import tresoNumerique from "@/assets/partners/treso-numerique.svg";
import sudFormadia from "@/assets/partners/sud-formadia.png";
import theIntelligenceAcademy from "@/assets/partners/the-intelligence-academy.png";
import creaiIdf from "@/assets/partners/creai-idf.png";
import douarcheCo from "@/assets/partners/douarche-co.png";
import slangues from "@/assets/partners/slangues.svg";

type Logo = { src: string; alt: string; dark?: boolean };

const logos: Logo[] = [
  { src: gersDistribution, alt: "Gers Production Distribution" },
  { src: ecoleCube, alt: "École Cube" },
  { src: senza, alt: "Senza Formations" },
  { src: numericoach, alt: "Numericoach", dark: true },
  { src: cciToulouse, alt: "CCI Toulouse Haute-Garonne", dark: true },
  { src: bgeSudOuest, alt: "BGE Sud-Ouest" },
  { src: tresoNumerique, alt: "Tréso Numérique" },
  { src: sudFormadia, alt: "Sud Formadia" },
  { src: theIntelligenceAcademy, alt: "The Intelligence Academy", dark: true },
  { src: creaiIdf, alt: "CREAI Île-de-France" },
  { src: douarcheCo, alt: "Douarche & Co Architectes Associés - Biarritz" },
  { src: slangues, alt: "Slangues" },
];

const LogoChip = ({ logo }: { logo: Logo }) => (
  <div
    className={`h-28 md:h-32 w-full px-6 py-4 flex items-center justify-center rounded-xl border transition-colors ${
      logo.dark
        ? "bg-foreground border-foreground/20 hover:border-primary/40"
        : "bg-background border-border/60 hover:border-primary/40"
    }`}
  >
    <img
      src={logo.src}
      alt={logo.alt}
      loading="lazy"
      className="max-h-20 md:max-h-24 max-w-full object-contain"
    />
  </div>
);

const TrustLogos = () => {
  return (
    <section id="clients-partenaires-toulouse" className="pt-16 md:pt-20 pb-6 md:pb-8">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-10 animate-fade-up max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Ils m'ont déjà fait confiance
          </h2>
          <p className="text-base text-muted-foreground px-4">
            Des structures accompagnées, partenaires ou prescriptrices.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0">
          {logos.map((logo) => (
            <LogoChip key={logo.alt} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;