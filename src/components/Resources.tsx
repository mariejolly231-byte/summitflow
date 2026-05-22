import { ExternalLink, GraduationCap, Wallet } from "lucide-react";

const resources = [
  {
    icon: GraduationCap,
    title: "École Cube",
    description: "La formation no-code de référence pour monter en compétence sur les outils qui transforment le quotidien des entreprises.",
    cta: "Découvrir le parrainage",
    href: "https://ambassadeurs-cube.lovable.app/parrainage/5351a7b09b8fa819707c40f27a961758",
  },
  {
    icon: Wallet,
    title: "La Tréso Numérique",
    description: "Outils et accompagnement pour reprendre la main sur la trésorerie et le pilotage financier de votre activité.",
    cta: "Visiter le site",
    href: "https://www.latresonumerique.fr",
  },
];

const Resources = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-14 animate-fade-up max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Ressources et partenaires recommandés
          </h2>
          <p className="text-base text-muted-foreground px-4">
            Des partenaires que je recommande pour aller plus loin, en formation comme en pilotage financier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources.map((r, i) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-service group flex flex-col h-full animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {r.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                {r.cta}
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;