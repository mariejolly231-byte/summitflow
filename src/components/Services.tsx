import { Zap, Layers, Settings, Check } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Automatisation & IA",
    description: "Automatisez vos taches repetitives et liberez du temps pour ce qui compte vraiment.",
    features: [
      "Workflows multi-outils",
      "Extraction et scraping de donnees",
      "Traitement de datasets",
      "Automatisation cabinet d'avocats",
      "Veille appels d'offres marches publics"
    ],
    accent: "primary"
  },
  {
    icon: Layers,
    title: "Applications No Code",
    description: "Des outils internes sur mesure, sans code, adaptes a vos besoins metier.",
    features: [
      "Outils internes personnalises",
      "Dashboards de pilotage",
      "Portails clients",
      "Applications metiers sur mesure"
    ],
    accent: "secondary"
  },
  {
    icon: Settings,
    title: "Optimisation & Productivite",
    description: "Restructurez vos processus pour gagner en efficacite et en clarte.",
    features: [
      "Audit de vos processus",
      "Refonte et standardisation",
      "Organisation systeme interne",
      "Formation equipes"
    ],
    accent: "primary"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Nos expertises
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions concretes pour automatiser, construire et optimiser votre activite
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-service flex flex-col group hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                service.accent === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary text-secondary-foreground'
              }`}>
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://calendly.com/summitflowfr/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-block"
          >
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;