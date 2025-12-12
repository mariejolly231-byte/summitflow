import { MessageCircle, Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Échange découverte",
    description: "On discute de vos besoins, vos contraintes et vos objectifs lors d'un appel de 30 minutes."
  },
  {
    icon: Search,
    number: "02",
    title: "Audit & Proposition",
    description: "J'analyse votre situation et vous propose une solution adaptée avec un devis détaillé."
  },
  {
    icon: Wrench,
    number: "03",
    title: "Conception & Développement",
    description: "Je construis votre solution en vous tenant informé à chaque étape du projet."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Livraison & Formation",
    description: "Je vous livre l'outil finalisé avec une formation pour le prendre en main en autonomie."
  }
];

const Process = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Comment ça marche
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et transparent pour vous accompagner de A à Z.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-4" />
              )}
              
              <div className="card-service text-center group h-full flex flex-col">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
