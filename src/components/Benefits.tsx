import { Clock, Sparkles, Rocket, Users, Brain } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Gain de temps",
    description: "Libérez des heures chaque semaine en automatisant vos tâches répétitives"
  },
  {
    icon: Sparkles,
    title: "Simplicité",
    description: "Des outils intuitifs, sans jargon technique, adaptés à votre réalité"
  },
  {
    icon: Rocket,
    title: "Rapidité",
    description: "Déploiement en quelques semaines, pas en 6 mois"
  },
  {
    icon: Users,
    title: "Accompagnement local",
    description: "Un interlocuteur unique, disponible, qui comprend votre contexte"
  },
  {
    icon: Brain,
    title: "Charge mentale réduite",
    description: "Moins de stress, plus de sérénité au quotidien"
  }
];

const Benefits = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pacifico text-3xl md:text-4xl text-foreground mb-4">
            Pourquoi choisir Summit Flow ?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center p-6 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#roi" className="btn-secondary-hero inline-block">
            Calculez votre ROI personnalisé
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
