import { Bot, AppWindow, Settings, Calendar, Check } from "lucide-react";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import { useIsMobileOrTablet } from "@/hooks/useMediaQuery";
const services = [{
  icon: Bot,
  title: "Automatisation & IA",
  description: "Libérez-vous des tâches répétitives grâce à des workflows intelligents et des agents IA.",
  features: ["Workflows multi-outils", "Extraction / scraping", "Traitement dataset", "Automatisation cabinet d'avocats", "Veille appels d'offres marchés publics"],
  accent: "from-primary/20 to-accent/20"
}, {
  icon: AppWindow,
  title: "Applications No Code",
  description: "Créez des outils sur mesure pour gérer votre activité sans écrire une ligne de code.",
  features: ["Outils internes personnalisés", "Dashboard pilotage", "Portail client", "Apps métiers sur mesure"],
  accent: "from-secondary/30 to-primary/20"
}, {
  icon: Settings,
  title: "Optimisation & Productivité",
  description: "Analysez et améliorez vos processus pour gagner en efficacité au quotidien.",
  features: ["Audit", "Refonte processus", "Standardisation", "Organisation système interne"],
  accent: "from-accent/20 to-secondary/30"
}];
const ServiceCard = ({
  service,
  index
}: {
  service: typeof services[0];
  index: number;
}) => <div className="card-service group h-full flex flex-col animate-fade-up" style={{
  animationDelay: `${index * 100}ms`
}}>
    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
    </div>
    
    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
      {service.title}
    </h3>
    
    <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
      {service.description}
    </p>

    <ul className="space-y-2 flex-grow">
      {service.features.map(feature => <li key={feature} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
          <Check className="w-4 h-4 text-primary flex-shrink-0" />
          {feature}
        </li>)}
    </ul>
  </div>;
const Services = () => {
  const isMobileOrTablet = useIsMobileOrTablet();
  return <section id="solutions-no-code-ia-toulouse" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">Mes expertises No code & IA</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">Des solutions adaptées aux besoins des TPE, PME et indépendants.</p>
        </div>

        {/* Mobile/Tablet: Carousel */}
        {isMobileOrTablet ? <MobileCarousel className="mb-8 md:mb-12">
            {services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
          </MobileCarousel> : (/* Desktop: Grid */
      <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
          </div>)}

        <div className="text-center animate-fade-up" style={{
        animationDelay: '300ms'
      }}>
          <a href="https://calendly.com/summitflowfr/30min" target="_blank" rel="noopener noreferrer" className="btn-hero inline-flex items-center gap-2 text-sm md:text-base px-6 py-3">
            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>;
};
export default Services;