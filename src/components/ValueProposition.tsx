import { Minus, ShieldCheck, GitBranch, Users } from "lucide-react";

const benefits = [
  { icon: Minus, title: "Moins de ressaisies", description: "Les données circulent automatiquement entre vos outils, sans recopie ni double saisie." },
  { icon: ShieldCheck, title: "De l'information plus fiable", description: "Une source de vérité claire pour décider rapidement, sans douter de vos chiffres." },
  { icon: GitBranch, title: "Des flux plus lisibles", description: "Des process cartographiés, partagés et compris par toute l'équipe, pas seulement par les sachants." },
  { icon: Users, title: "Des équipes mieux outillées", description: "Des outils adoptés sur le terrain parce qu'ils simplifient vraiment le quotidien." },
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14 animate-fade-up">
          <p className="text-sm md:text-base text-primary font-semibold uppercase tracking-wider mb-3">
            Ma promesse
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-5 font-bold leading-tight">
            Je ne vends pas un outil de plus.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            J'aide à enlever ce qui alourdit, reconnecter les bons flux et remettre les outils au service du terrain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="card-service h-full flex flex-col animate-fade-up text-center sm:text-left"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;