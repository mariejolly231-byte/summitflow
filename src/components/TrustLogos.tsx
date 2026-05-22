import cciToulouse from "@/assets/partners/cci-toulouse.png";
import numericoach from "@/assets/partners/numericoach.png";
import senza from "@/assets/partners/senza.svg";
import ecoleCube from "@/assets/partners/ecole-cube.png";
import gersDistribution from "@/assets/partners/gers-distribution.png";

type Logo = { src: string; alt: string; dark?: boolean };

const logos: Logo[] = [
  { src: gersDistribution, alt: "Gers Production Distribution" },
  { src: ecoleCube, alt: "École Cube" },
  { src: senza, alt: "Senza Formations" },
  { src: numericoach, alt: "Numericoach", dark: true },
  { src: cciToulouse, alt: "CCI Toulouse Haute-Garonne", dark: true },
];

const LogoChip = ({ logo }: { logo: Logo }) => (
  <div
    className={`h-20 w-44 px-5 flex items-center justify-center rounded-xl border shrink-0 transition-colors ${
      logo.dark
        ? "bg-foreground border-foreground/20 hover:border-primary/40"
        : "bg-background border-border/60 hover:border-primary/40"
    }`}
  >
    <img
      src={logo.src}
      alt={logo.alt}
      loading="lazy"
      className="max-h-12 max-w-full object-contain"
    />
  </div>
);

const TrustLogos = () => {
  const duplicated = [...logos, ...logos, ...logos, ...logos];
  return (
    <section className="pt-16 md:pt-20 pb-6 md:pb-8">
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
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 md:gap-6 animate-[trust-scroll_45s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
          {duplicated.map((logo, i) => (
            <LogoChip key={`${logo.alt}-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes trust-scroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default TrustLogos;