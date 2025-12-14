import { Clock, Sparkles, Rocket, Users, Brain } from "lucide-react";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import { useIsMobileOrTablet } from "@/hooks/useMediaQuery";

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
    description: "Une interlocutrice unique, disponible, qui comprend votre contexte"
  },
  {
    icon: Brain,
    title: "Charge mentale réduite",
    description: "Moins de stress, plus de sérénité au quotidien"
  }
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => (
  <div 
    className="text-center p-6 group animate-fade-up bg-card rounded-2xl shadow-md h-full flex flex-col items-center justify-start"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
      <benefit.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
    </div>
    
    <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
      {benefit.title}
    </h3>
    
    <p className="text-sm text-muted-foreground">
      {benefit.description}
    </p>
  </div>
);

const Benefits = () => {
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Pourquoi choisir Summit Flow ?
          </h2>
        </div>

        {/* Mobile/Tablet: Carousel */}
        {isMobileOrTablet ? (
          <MobileCarousel className="mb-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={index} />
            ))}
          </MobileCarousel>
        ) : (
          /* Desktop: Grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={index} />
            ))}
          </div>
        )}

        <div className="text-center mt-8 md:mt-12 animate-fade-up" style={{ animationDelay: '500ms' }}>
          <a href="#roi" className="btn-secondary-hero inline-block text-sm md:text-base px-6 py-3">
            Calculez votre ROI personnalisé
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
