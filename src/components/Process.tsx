import { MessageCircle, Search, CheckCircle, Code2, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Rendez-vous découverte",
    description: "Échange gratuit pour comprendre vos besoins et défis"
  },
  {
    icon: Search,
    title: "Analyse",
    description: "Audit de vos processus et identification des opportunités"
  },
  {
    icon: CheckCircle,
    title: "Validation",
    description: "Proposition sur mesure avec planning et budget clairs"
  },
  {
    icon: Code2,
    title: "Développement",
    description: "Création de votre solution avec points d'étape réguliers"
  },
  {
    icon: GraduationCap,
    title: "Formation & accompagnement",
    description: "Prise en main et suivi pour garantir votre autonomie"
  }
];

const Process = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pacifico text-3xl md:text-4xl text-foreground mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground">
            5 étapes simples vers votre transformation digitale
          </p>
        </div>

        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <div className="w-24 h-24 rounded-full bg-card border-4 border-primary flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="w-10 h-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                
                <h3 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
