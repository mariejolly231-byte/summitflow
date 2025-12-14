import { Building2, Truck, Calendar, Target, FileText, FolderKanban, Users, Smartphone, Gamepad2, Waves, ArrowRight } from "lucide-react";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import { useIsMobileOrTablet } from "@/hooks/useMediaQuery";

const examples = [
  {
    icon: Waves,
    title: "Association environnementale",
    description: "Site web, web app et automatisation des inscriptions avec suivi de campagnes en temps réel. Gestion interne commandes et web app pour adhérents avec notifications automatiques.",
    results: "+50% d'inscriptions traitées automatiquement, suivi en temps réel pour 200+ membres",
    tools: ["Bubble", "Make", "Notion", "Airtable"]
  },
  {
    icon: Building2,
    title: "Industrie",
    description: "Tableau de bord production pour suivre la performance en direct et optimiser les processus de fabrication.",
    results: "Réduction de 15% des temps d'arrêt, visibilité en temps réel pour 3 lignes de production",
    tools: ["Airtable", "Make", "Agents IA"]
  },
  {
    icon: Truck,
    title: "Logistique",
    description: "Gestion de flotte véhicules simplifiée et centralisée avec suivi des maintenances et trajets.",
    results: "Gain de 20% sur les coûts opérationnels, suivi des 50+ véhicules en temps réel",
    tools: ["Notion", "n8n", "Airtable"]
  },
  {
    icon: Calendar,
    title: "Événementiel",
    description: "Organisation d'événements et billetterie automatisée avec gestion des participants et communications.",
    results: "+30% de billets vendus en ligne, suivi automatisé des inscriptions",
    tools: ["Bubble", "Stripe", "n8n", "Réseaux sociaux"]
  },
  {
    icon: Target,
    title: "Prospection sectorielle",
    description: "Automatisation de votre prospection avec ciblage et suivi des leads qualifiés.",
    results: "+40% de leads qualifiés traités automatiquement",
    tools: ["n8n", "BOAMP API", "Airtable", "Agents IA"]
  },
  {
    icon: FileText,
    title: "Relances facturations et devis",
    description: "Automatisation des relances clients pour vos factures et devis en attente.",
    results: "Réduction de 25% des factures en retard, gain de temps pour 10+ commerciaux",
    tools: ["Make", "Docusign", "Airtable", "n8n"]
  },
  {
    icon: FolderKanban,
    title: "Gestion de projet",
    description: "Automatisation de la gestion des tâches des équipes et du planning avec notifications.",
    results: "Suivi centralisé pour 5 équipes, réduction de 20% des réunions de coordination",
    tools: ["Notion", "n8n", "Airtable"]
  },
  {
    icon: Users,
    title: "Optimisation CRM",
    description: "Mini CRM sur Notion pour centraliser informations membres, partenaires et contacts.",
    results: "Centralisation de +500 contacts, suivi simplifié et rapide",
    tools: ["Notion", "Make", "Airtable"]
  },
  {
    icon: Smartphone,
    title: "Application Web – Association",
    description: "Développement d'une web app sur mesure pour offrir de nouveaux services et structurer les processus internes.",
    results: "3 services automatisés, 150+ utilisateurs actifs",
    tools: ["Bubble", "n8n", "Stripe"]
  },
  {
    icon: Gamepad2,
    title: "Webapp Équipe de Gamers",
    description: "Application web pour équipe de gamers (type Geoguessers) intégrée avec automatisations adaptées.",
    results: "Suivi de 50+ parties et automatisation de notifications pour 200+ joueurs",
    tools: ["Bubble", "n8n", "Agents IA"]
  }
];

const ExampleCard = ({ example, index }: { example: typeof examples[0]; index: number }) => (
  <div 
    style={{ animationDelay: `${index * 100}ms` }}
    className="bg-card rounded-2xl p-5 md:p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group animate-fade-up h-full flex flex-col"
  >
    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <example.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
      </div>
      <div className="min-w-0">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
          {example.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground">
          {example.description}
        </p>
      </div>
    </div>
    
    <div className="bg-primary/5 rounded-xl p-3 md:p-4 mb-4 md:mb-6">
      <div className="flex items-start gap-2 text-primary font-semibold text-sm md:text-base">
        <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <span>{example.results}</span>
      </div>
    </div>
    
    <div className="flex flex-wrap gap-2 mt-auto">
      {example.tools.map((tool) => (
        <span 
          key={tool}
          className="text-xs md:text-sm bg-secondary text-secondary-foreground px-2.5 md:px-3 py-1 rounded-full"
        >
          {tool}
        </span>
      ))}
    </div>
  </div>
);

const Examples = () => {
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <section id="examples" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Cas clients
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Des solutions déployées avec des résultats mesurables
          </p>
        </div>

        {isMobileOrTablet ? (
          <MobileCarousel showArrows={true}>
            {examples.map((example, index) => (
              <ExampleCard key={example.title} example={example} index={index} />
            ))}
          </MobileCarousel>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <ExampleCard key={example.title} example={example} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Examples;
