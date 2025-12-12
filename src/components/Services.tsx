import { Bot, AppWindow, Settings, Calendar, Check } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automatisation & IA",
    description: "Libérez-vous des tâches répétitives grâce à des workflows intelligents et des agents IA.",
    features: [
      "Workflows multi-outils",
      "Extraction / scraping",
      "Traitement dataset",
      "Automatisation cabinet d'avocats",
      "Veille appels d'offres marchés publics"
    ],
    accent: "from-primary/20 to-accent/20"
  },
  {
    icon: AppWindow,
    title: "Applications No Code",
    description: "Créez des outils sur mesure pour gérer votre activité sans écrire une ligne de code.",
    features: [
      "Outils internes personnalisés",
      "Dashboard pilotage",
      "Portail client",
      "Apps métiers sur mesure"
    ],
    accent: "from-secondary/30 to-primary/20"
  },
  {
    icon: Settings,
    title: "Optimisation & Productivité",
    description: "Analysez et améliorez vos processus pour gagner en efficacité au quotidien.",
    features: [
      "Audit",
      "Refonte processus",
      "Standardisation",
      "Organisation système interne"
    ],
    accent: "from-accent/20 to-secondary/30"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Mes expertises
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions No Code et IA adaptées aux besoins des TPE, PME et indépendants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="card-service group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-up" style={{ animationDelay: '300ms' }}>
          <a 
            href="https://calendly.com/summitflowfr/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
