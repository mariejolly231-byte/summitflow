import { Globe, Layers, Zap, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Site Vitrine",
    tools: "Framer / Lovable",
    price: "500€ - 1 500€",
    description: "Site web professionnel, sur mesure, adapté à tous les écrans.",
    features: [
      "Design moderne et responsive",
      "SEO local optimisé",
      "Identité visuelle respectée",
      "Maintenance incluse"
    ],
    accent: "primary"
  },
  {
    icon: Layers,
    title: "Application Web/SaaS",
    tools: "Bubble / Lovable",
    price: "2 500€ - 5 000€",
    description: "Application web sur mesure pour gérer adhérents, projets, commandes, planning.",
    features: [
      "100% personnalisée",
      "Interface intuitive",
      "Suivi fidèle du projet",
      "Maintenance incluse"
    ],
    accent: "secondary"
  },
  {
    icon: Zap,
    title: "Automatisation",
    tools: "Make / n8n / Agents IA",
    price: "390€ - 2 500€",
    description: "Automatisez relances, notifications, documents, synchronisation outils et analyse données.",
    features: [
      "Automatisation tâches répétitives",
      "Connexion outils existants",
      "Gain de temps immédiat",
      "Formation incluse"
    ],
    accent: "primary"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pacifico text-3xl md:text-4xl text-foreground mb-4">
            Nos offres Summit Flow
          </h2>
          <p className="text-xl text-muted-foreground">
            Des solutions concrètes pour chaque besoin métier
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

              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-2">
                Outils : {service.tools}
              </p>
              
              <p className="text-xl font-bold text-primary mb-4">
                {service.price}
              </p>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-3">
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
