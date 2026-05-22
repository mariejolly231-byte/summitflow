import cciToulouse from "@/assets/partners/cci-toulouse.png";
import numericoach from "@/assets/partners/numericoach.png";
import senza from "@/assets/partners/senza.svg";
import ecoleCube from "@/assets/partners/ecole-cube.svg";
import gersDistribution from "@/assets/partners/gers-distribution.png";

type Logo = { src: string; alt: string; dark?: boolean };

const groups: { title: string; items: Logo[] }[] = [
  {
    title: "Entreprises accompagnées",
    items: [
      { src: gersDistribution, alt: "Gers Production Distribution" },
    ],
  },
  {
    title: "Partenaires formation",
    items: [
      { src: ecoleCube, alt: "École Cube" },
      { src: senza, alt: "Senza Formations" },
      { src: numericoach, alt: "Numericoach", dark: true },
    ],
  },
  {
    title: "Réseau territorial",
    items: [
      { src: cciToulouse, alt: "CCI Toulouse Haute-Garonne", dark: true },
    ],
  },
];

const LogoChip = ({ logo }: { logo: Logo }) => (
  <div
    className={`h-20 w-44 px-5 flex items-center justify-center rounded-xl border transition-colors ${
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
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-14 animate-fade-up max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Ils m'ont fait confiance ou font partie de mon écosystème
          </h2>
          <p className="text-base text-muted-foreground px-4">
            Un réseau de partenaires industriels, formation et territoriaux pour vous accompagner durablement.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10 max-w-5xl mx-auto">
          {groups.map((g, gi) => (
            <div
              key={g.title}
              className="animate-fade-up"
              style={{ animationDelay: `${gi * 100}ms` }}
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground/80 font-semibold text-center mb-4">
                {g.title}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {g.items.map((label) => (
                  <LogoChip key={label.alt} logo={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;