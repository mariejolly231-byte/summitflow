import { Scale, Search, BarChart3, FileText, ArrowRight } from "lucide-react";

const examples = [
  {
    icon: Scale,
    title: "Automatisation cabinet d'avocats",
    description: "Gestion automatisée des dossiers clients, génération de documents juridiques, alertes échéances et mise en signature électronique.",
    results: "Gain de 15h/semaine sur les tâches administratives",
    tools: ["Make", "n8n", "DocuSign", "Notion"]
  },
  {
    icon: Search,
    title: "Veille appels d'offres marchés publics",
    description: "Scraping automatique BOAMP et France Marchés, scoring et classement des opportunités, envoi de rapports quotidiens ou hebdomadaires.",
    results: "Détection de 40% d'opportunités supplémentaires",
    tools: ["n8n", "Airtable", "BOAMP API", "Email"]
  },
  {
    icon: BarChart3,
    title: "Application interne de pilotage",
    description: "Dashboard centralisé pour le suivi d'activité, synchronisation comptabilité et factures, reporting automatisé.",
    results: "Vision 360° en temps réel sur l'activité",
    tools: ["Bubble", "Airtable", "QuickBooks", "Make"]
  },
  {
    icon: FileText,
    title: "Automatisation documentaire",
    description: "Génération automatique de contrats, propositions commerciales et rapports à partir de templates et données clients.",
    results: "Réduction de 80% du temps de création documentaire",
    tools: ["n8n", "Google Docs", "Notion", "Airtable"]
  }
];

const Examples = () => {
  return (
    <section id="examples" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Cas clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions déployées avec des résultats mesurables
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div 
              key={example.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group animate-fade-up"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <example.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {example.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {example.description}
                  </p>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <ArrowRight className="w-4 h-4" />
                  {example.results}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {example.tools.map((tool) => (
                  <span 
                    key={tool}
                    className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;