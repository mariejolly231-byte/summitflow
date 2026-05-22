import { Files, Repeat, AlertTriangle, Search, Unplug, Brain } from "lucide-react";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import { useIsMobileOrTablet } from "@/hooks/useMediaQuery";

const problems = [
  { icon: Files, title: "Fichiers qui se contredisent", description: "Plusieurs versions d'un même tableur, des données qui ne collent plus, et personne ne sait laquelle fait foi." },
  { icon: Repeat, title: "Ressaisies entre outils", description: "Les mêmes informations recopiées d'un logiciel à l'autre, jour après jour, avec leur lot d'erreurs." },
  { icon: AlertTriangle, title: "Décisions sur données incomplètes", description: "On pilote au ressenti parce que l'info fiable n'arrive jamais au bon moment." },
  { icon: Search, title: "Temps perdu à chercher l'info", description: "Mails, dossiers partagés, ERP, drive : retrouver une donnée devient un projet en soi." },
  { icon: Unplug, title: "Outils mal exploités ou pas adoptés", description: "Des licences payées, des fonctionnalités ignorées, des équipes qui contournent les outils." },
  { icon: Brain, title: "Charge mentale forte", description: "Tout repose sur quelques personnes-clés qui retiennent les process dans leur tête." },
];

const ProblemCard = ({ p, index }: { p: typeof problems[0]; index: number }) => (
  <div
    className="card-service h-full flex flex-col animate-fade-up"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-4">
      <p.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    </div>
    <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
      {p.title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
  </div>
);

const Problems = () => {
  const isMobileOrTablet = useIsMobileOrTablet();
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-14 animate-fade-up max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Quand le désordre organisé devient la norme
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Dans les PME industrielles et techniques, ce ne sont pas les outils qui manquent, c'est la cohérence entre eux.
          </p>
        </div>

        {isMobileOrTablet ? (
          <MobileCarousel>
            {problems.map((p, i) => (
              <ProblemCard key={p.title} p={p} index={i} />
            ))}
          </MobileCarousel>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <ProblemCard key={p.title} p={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Problems;