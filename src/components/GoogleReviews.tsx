import { Star } from "lucide-react";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import { useIsMobileOrTablet } from "@/hooks/useMediaQuery";

const reviews = [
  {
    name: "Sonia Rivera Garcia",
    role: "Kinésithérapeute en secteur de montagne",
    text: "Je suis très satisfaite. On a fait un rdv où elle a posé beaucoup de questions pour cibler mes besoins et les solutions à mettre en place. Elle est très à l'écoute et fait un bon suivi. Je recommande !",
  },
  {
    name: "Guillaume Bertrand",
    role: "Gérant de société, secteur énergie",
    text: "Excellente entreprise d'accompagnement. L'équipe est très réactive, à l'écoute et surtout très compétente dans son domaine. Les solutions proposées sont concrètes, adaptées aux besoins réels de notre entreprise et faciles à mettre en place. Un vrai partenaire de confiance pour intégrer l'IA de manière efficace et stratégique. Je recommande vivement.",
  },
  {
    name: "Alice Mi",
    role: "Collaboratrice dans l'industrie aéronautique",
    text: "Une nécessité de se faire accompagner par une personne compétente comme Marie pour maîtriser l'IA. Ravie des services de Summit Flow, vous pouvez y aller les yeux fermés !",
  },
  {
    name: "Alexis Ahlsell de Toulza",
    role: "Avocat en droit des affaires",
    text: "Professionnelle et à l'écoute pour mener au mieux les projets confiés. Recommandée à 100%.",
  },
  {
    name: "Alban Gallois",
    role: "Concepteur de solutions pour cabinets médicaux",
    text: "Excellente expérience avec Summit Flow. Nous avons automatisé tout mon parcours client, le gain de temps est incroyable. Merci.",
  },
];

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-40">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
  <div className="bg-card rounded-xl p-5 md:p-6 border border-border/50 hover:border-primary/30 transition-colors h-full flex flex-col">
    <div className="flex items-center justify-between mb-3">
      <Stars />
      <GoogleIcon />
    </div>

    <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
      "{review.text}"
    </blockquote>

    <div className="border-t border-border/50 pt-3 mt-auto">
      <p className="font-semibold text-foreground text-sm">{review.name}</p>
      <p className="text-xs text-muted-foreground">{review.role}</p>
    </div>
  </div>
);

const GoogleReviews = () => {
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-2 font-bold">
            Ils nous font confiance
          </h2>
          <p className="text-sm text-muted-foreground">
            Avis Google vérifiés
          </p>
        </div>

        {isMobileOrTablet ? (
          <MobileCarousel>
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </MobileCarousel>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {reviews.slice(0, 4).map((review) => (
                <ReviewCard key={review.name} review={review} />
              ))}
            </div>
            <div className="flex">
              <ReviewCard review={reviews[4]} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GoogleReviews;
