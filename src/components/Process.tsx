import { Eye, GitBranch, Wrench, GraduationCap } from "lucide-react";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import { useIsMobileOrTablet } from "@/hooks/useMediaQuery";
const steps = [{
  icon: Eye,
  number: "01",
  title: "Observer le terrain",
  description: "Je vais à la rencontre de vos équipes pour comprendre comment l'information circule vraiment, au-delà des process officiels.",
}, {
  icon: GitBranch,
  number: "02",
  title: "Clarifier les flux",
  description: "On cartographie ensemble vos données, vos outils et vos points de friction pour identifier ce qui mérite d'être simplifié en priorité.",
}, {
  icon: Wrench,
  number: "03",
  title: "Simplifier et automatiser",
  description: "Je déploie des solutions no-code, des automatisations et des briques IA ciblées, pas une usine à gaz. On ajuste au fil du terrain.",
}, {
  icon: GraduationCap,
  number: "04",
  title: "Former pour rendre autonome",
  description: "Formation, documentation et support : vos équipes gardent la main sur leurs outils et continuent à les faire évoluer sans dépendance.",
}];
const ProcessCard = ({
  step,
  index,
  isLast
}: {
  step: typeof steps[0];
  index: number;
  isLast: boolean;
}) => <div className="relative animate-fade-up h-full" style={{
  animationDelay: `${index * 100}ms`
}}>
    {/* Connector line - only on desktop */}
    {!isLast && <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-4" />}
    
    <div className="card-service text-center group h-full flex flex-col">
      <div className="relative mb-4 md:mb-6">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
          <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
        </div>
        <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-bold flex items-center justify-center">
          {step.number}
        </span>
      </div>

      <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
        {step.title}
      </h3>
      
      <p className="text-muted-foreground text-sm flex-grow">
        {step.description}
      </p>
    </div>
  </div>;
const Process = () => {
  const isMobileOrTablet = useIsMobileOrTablet();
  return <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Comment j'allège le sac
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Une méthode simple, observée sur le terrain et pensée pour des résultats concrets.
          </p>
        </div>

        {/* Mobile/Tablet: Carousel */}
        {isMobileOrTablet ? <MobileCarousel>
            {steps.map((step, index) => <ProcessCard key={step.title} step={step} index={index} isLast={index === steps.length - 1} />)}
          </MobileCarousel> : (/* Desktop: Grid */
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => <ProcessCard key={step.title} step={step} index={index} isLast={index === steps.length - 1} />)}
          </div>)}
      </div>
    </section>;
};
export default Process;