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
import douarcheCoAsset from "@/assets/partners/douarche-co.png.asset.json";
import slangues from "@/assets/partners/slangues.svg";

type Logo = { src: string; alt: string; dark?: boolean; showLabel?: boolean; boost?: boolean };

const logos: Logo[] = [
  { src: gersDistribution, alt: "Gers Production Distribution" },
  { src: ecoleCube, alt: "École Cube" },
  { src: senza, alt: "Senza Formations" },
  { src: numericoach, alt: "Numericoach", dark: true },
  { src: cciToulouse, alt: "CCI Toulouse Haute-Garonne", dark: true },
  { src: bgeSudOuest, alt: "BGE Sud-Ouest" },
  { src: tresoNumerique, alt: "Tréso Numérique" },
  { src: sudFormadia, alt: "Sud Formadia" },
  { src: theIntelligenceAcademy, alt: "The Intelligence Academy", dark: true, showLabel: true },
  { src: creaiIdf, alt: "CREAI Île-de-France" },
  { src: douarcheCoAsset.url, alt: "Douarche & Co Architectes Associés - Biarritz", boost: true },
  { src: slangues, alt: "Slangues" },
];

const LogoChip = ({ logo }: { logo: Logo }) => (
  <div
    className={`h-32 md:h-36 w-64 md:w-72 shrink-0 px-6 py-4 flex flex-col items-center justify-center gap-1 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
      logo.dark
        ? "bg-foreground border-foreground/20 hover:border-primary/40"
        : "bg-background border-border/60 hover:border-primary/40"
    }`}
  >
    <img
      src={logo.src}
      alt={logo.alt}
      loading="lazy"
      className={`${
        logo.boost
          ? "max-h-28 md:max-h-32"
          : logo.showLabel
            ? "max-h-16 md:max-h-20"
            : "max-h-20 md:max-h-24"
      } max-w-full object-contain`}
    />
    {logo.showLabel && (
      <span
        className={`text-xs md:text-sm font-medium tracking-wide ${
          logo.dark ? "text-background" : "text-foreground"
        }`}
      >
        {logo.alt}
      </span>
    )}
  </div>
);

const TrustLogos = () => {
  const duplicated = [...logos, ...logos];
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
      </div>

      <div className="relative overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 md:gap-8 animate-[trust-scroll_90s_linear_infinite] group-hover:[animation-play-state:paused] w-max py-2">
          {duplicated.map((logo, i) => (
            <LogoChip key={`${logo.alt}-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes trust-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TrustLogos;