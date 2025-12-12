import { Globe, Layers, Zap, Check, Calendar } from "lucide-react";

const offers = [
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
    ]
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
    ]
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
    ]
  }
];

const Pricing = () => {
  return (
    <section id="tarifs" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Mes offres Summit Flow
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions concrètes pour chaque besoin métier
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {offers.map((offer, index) => (
            <div 
              key={offer.title}
              className="card-service relative flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <offer.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground">{offer.tools}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-2xl font-bold text-primary">{offer.price}</span>
              </div>

              <p className="text-muted-foreground mb-6">
                {offer.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/summitflowfr/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-muted text-foreground hover:bg-primary hover:text-primary-foreground border border-border"
              >
                <Calendar className="w-4 h-4" />
                Prendre RDV
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
