import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce que le No Code et comment ça fonctionne ?",
    answer:
      "Le No Code permet de créer des sites web, applications et automatisations sans coder. Grâce à des outils visuels comme Bubble, Lovable ou Make, je conçois des solutions professionnelles et performantes, plus rapidement qu'avec du développement traditionnel. Parfait pour les TPE, artisans et PME qui veulent digitaliser leur activité sans investir dans une équipe technique.",
  },
  {
    question: "Quel type de solution SummitOps peut-il créer pour mon entreprise ?",
    answer:
      "Je crée des web apps sur-mesure (CRM, outils de gestion interne, plateformes de réservation), des sites vitrines optimisés SEO, et j'automatise vos tâches répétitives (relances clients, gestion des inscriptions, reporting automatique). Chaque solution est adaptée à votre secteur d'activité et vos besoins réels.",
  },
  {
    question: "Pourquoi automatiser mes process métier ?",
    answer:
      "L'automatisation vous libère des tâches chronophages : relances de factures, suivi client, notifications, traitement des données. Vous gagnez des heures chaque semaine que vous pouvez réinvestir dans votre cœur de métier. C'est un investissement rentable dès les premières semaines.",
  },
  {
    question: "Quel est le délai pour lancer mon projet ?",
    answer:
      "Un site vitrine est livré en 1 à 3 semaines. Une web app sur-mesure demande 2 à 6 semaines selon la complexité. Pour une automatisation, comptez 1 à 2 semaines. Je vous accompagne avec un suivi hebdomadaire pour garantir que le projet avance selon vos attentes.",
  },
  {
    question: "Je ne maîtrise pas la technique, est-ce un problème ?",
    answer:
      "Pas du tout ! Mon rôle est justement de traduire vos besoins métier en solutions concrètes. Vous n'avez pas besoin de comprendre la technique : décrivez-moi ce qui vous fait perdre du temps ou ce que vous voulez améliorer, et je m'occupe du reste. L'objectif est que la solution soit simple à utiliser pour vous et vos équipes.",
  },
  {
    question: "Puis-je faire évoluer ma solution après la mise en ligne ?",
    answer:
      "Absolument ! Le No Code est conçu pour être flexible. Vous pouvez demander des ajustements ou de nouvelles fonctionnalités à tout moment. La maintenance est incluse dans tous mes packs, et je reste disponible pour accompagner l'évolution de vos outils au fil de la croissance de votre activité.",
  },
  {
    question: "Que comprend la maintenance et le suivi ?",
    answer:
      "La maintenance inclut les corrections de bugs, les ajustements mineurs, les mises à jour de sécurité et un suivi régulier de vos outils. Je suis disponible pour répondre à vos questions et garantir que vos solutions restent performantes. C'est un accompagnement sur la durée, pas juste une livraison ponctuelle.",
  },
  {
    question: "Vous travaillez uniquement sur Toulouse et les Pyrénées ?",
    answer:
      "Non, je peux travailler à distance également ! Je suis basée au sud de Toulouse et j'accompagne en priorité les TPE, artisans et PME du secteur toulousain et des Pyrénées. Mon ancrage local me permet de bien comprendre les enjeux de votre territoire. Les échanges se font principalement en visio, avec possibilité de rendez-vous en présentiel si besoin.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Questions fréquentes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Tout ce que vous devez savoir avant de vous lancer
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
