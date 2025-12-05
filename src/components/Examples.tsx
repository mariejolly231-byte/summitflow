import { Database, Bell, BarChart3, Calendar, Briefcase } from "lucide-react";

const examples = [
  {
    icon: Database,
    title: "Gestion interne",
    description: "Web app pour suivre activité, adhérents, commandes, projets",
    tools: "Notion, Airtable, Bubble, Stripe"
  },
  {
    icon: Bell,
    title: "Automatisation notifications",
    description: "Relances automatiques, confirmations, notifications SMS/WhatsApp",
    tools: "Make, n8n, Gmail, Brevo, WhatsApp"
  },
  {
    icon: BarChart3,
    title: "Suivi d'activité en temps réel",
    description: "Dashboard ventes, production, trésorerie, logistique",
    tools: "Notion, Excel, Make, n8n"
  },
  {
    icon: Calendar,
    title: "Événementiel simplifié",
    description: "Gestion inscriptions, billetterie, coordination bénévoles",
    tools: "Notion, Make, n8n, Brevo, Stripe"
  },
  {
    icon: Briefcase,
    title: "Commercial & Finance",
    description: "Automatisation prospection, devis, factures, relances",
    tools: "Excel, Make, n8n, Gmail, Brevo, Stripe"
  }
];

const Examples = () => {
  return (
    <section id="examples" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pacifico text-3xl md:text-4xl text-foreground mb-4">
            Exemples concrets
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions déjà déployées pour des entreprises comme la vôtre
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <div 
              key={example.title}
              className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <example.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {example.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {example.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {example.tools.split(", ").map((tool) => (
                  <span 
                    key={tool}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
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
