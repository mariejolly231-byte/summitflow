import { Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Beatrice Laugraud",
    role: "Formatrice / Coach",
    text: "Une vraie formation, exigeante et très bien accompagnée par les coachs et tuteurs. Un merci tout spécial à ma coach Marie, tu as été au top",
  },
  {
    name: "Sonia",
    role: "Kinésithérapeute en secteur de montagne",
    text: "Je suis très satisfaite. On a fait un rdv où elle a posé beaucoup de questions pour cibler mes besoins et les solutions à mettre en place. Elle est très à l'écoute et fait un bon suivi. Je recommande !",
  },
  {
    name: "Guillaume",
    role: "Gérant de société, secteur énergie",
    text: "Excellente entreprise d'accompagnement. L'équipe est très réactive, à l'écoute et surtout très compétente dans son domaine. Les solutions proposées sont concrètes, adaptées aux besoins réels de notre entreprise et faciles à mettre en place. Un vrai partenaire de confiance pour intégrer l'IA de manière efficace et stratégique. Je recommande vivement.",
  },
  {
    name: "Alice",
    role: "Collaboratrice dans l'industrie aéronautique",
    text: "Une nécessité de se faire accompagner par une personne compétente comme Marie pour maîtriser l'IA. Ravie des services de Summit Flow, vous pouvez y aller les yeux fermés !",
  },
  {
    name: "Alexis",
    role: "Avocat en droit des affaires",
    text: "Professionnelle et à l'écoute pour mener au mieux les projets confiés. Recommandée à 100%.",
  },
  {
    name: "Alban",
    role: "Concepteur de solutions pour cabinets médicaux",
    text: "Excellente expérience avec Summit Flow. Nous avons automatisé tout mon parcours client, le gain de temps est incroyable. Merci.",
  },
];

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-40 shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group/card relative bg-gradient-to-br from-card via-primary/5 to-secondary/10 rounded-xl p-4 md:p-5 border border-primary/20 w-[280px] md:w-[320px] shrink-0 flex flex-col ${expanded ? 'h-auto' : 'h-[200px] md:h-[220px]'} shadow-sm hover:shadow-lg hover:shadow-primary/15 hover:border-primary/40 md:hover:scale-[1.03] transition-all duration-300 cursor-default`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between mb-3">
        <Stars />
        <GoogleIcon />
      </div>

      <blockquote className={`text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4 flex-1 overflow-hidden ${expanded ? '' : 'line-clamp-4'} italic`}>
        "{review.text}"
      </blockquote>

      <div className="border-t border-primary/20 pt-3 mt-auto">
        <p className="font-semibold text-primary text-sm">{review.name}</p>
        <p className="text-xs text-muted-foreground truncate">{review.role}</p>
      </div>

      {/* Expanded tooltip on hover - desktop only */}
      <div className="hidden md:block absolute inset-x-0 top-0 z-20 opacity-0 group-hover/card:opacity-100 pointer-events-none group-hover/card:pointer-events-auto transition-opacity duration-200">
        <div className="bg-card border border-border rounded-xl p-5 shadow-2xl w-[320px] min-h-[220px]">
          <div className="flex items-center justify-between mb-3">
            <Stars />
            <GoogleIcon />
          </div>
          <blockquote className="text-sm text-foreground leading-relaxed mb-4">
            "{review.text}"
          </blockquote>
          <div className="border-t border-border pt-3">
            <p className="font-semibold text-foreground text-sm">{review.name}</p>
            <p className="text-xs text-muted-foreground">{review.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const GoogleReviews = () => {
  const duplicated = [...reviews, ...reviews];

  return (
    <section className="pt-6 md:pt-8 pb-20 md:pb-28 overflow-x-clip relative z-10">

      <div className="relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 md:gap-6 animate-[scroll_50s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
          {duplicated.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default GoogleReviews;
