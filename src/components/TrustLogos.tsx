const groups = [
  {
    title: "Entreprises accompagnées",
    items: ["Gers Distribution", "PME industrielles", "Bureaux d'études", "Cabinets techniques"],
  },
  {
    title: "Partenaires formation",
    items: ["École Cube", "Senza Formations", "Numericoach"],
  },
  {
    title: "Réseau territorial",
    items: ["La Tréso Numérique", "BGE Sud-Ouest", "CCI Toulouse", "Mission Locale"],
  },
];

const LogoChip = ({ label }: { label: string }) => (
  <div className="px-5 py-3 rounded-xl border border-border/60 bg-background/70 backdrop-blur-sm text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
    {label}
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
              <div className="flex flex-wrap justify-center gap-3">
                {g.items.map((label) => (
                  <LogoChip key={label} label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground/70 text-center mt-8 max-w-2xl mx-auto px-4">
          Logos à venir. Les références sont citées avec l'accord des partenaires concernés.
        </p>
      </div>
    </section>
  );
};

export default TrustLogos;