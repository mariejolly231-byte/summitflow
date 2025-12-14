import { Award, Briefcase, Heart, MapPin, Quote } from "lucide-react";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import { useIsMobileOrTablet } from "@/hooks/useMediaQuery";

const trustPoints = [
  {
    icon: Award,
    title: "Certification RNCP",
    description: "Product Builder No Code & IA niveau 6"
  },
  {
    icon: Briefcase,
    title: "Expérience terrain",
    description: "10 ans dans l'aéronautique et l'industrie"
  },
  {
    icon: Heart,
    title: "Passion & engagement",
    description: "Une vraie passion pour la montagne et l'accompagnement"
  },
  {
    icon: MapPin,
    title: "Ancrage local",
    description: "Présente dans le Sud Toulousain et les Pyrénées"
  }
];

const TrustCard = ({ point, index }: { point: typeof trustPoints[0]; index: number }) => (
  <div 
    className="bg-card rounded-xl p-5 md:p-6 text-center border border-border/50 hover:border-primary/30 transition-colors h-full flex flex-col items-center"
  >
    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
      <point.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
    </div>
    
    <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
      {point.title}
    </h3>
    
    <p className="text-xs md:text-sm text-muted-foreground">
      {point.description}
    </p>
  </div>
);

const Testimonials = () => {
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Pourquoi me faire confiance ?
          </h2>
        </div>

        {/* Mobile/Tablet: Carousel */}
        {isMobileOrTablet ? (
          <MobileCarousel className="mb-8 md:mb-12">
            {trustPoints.map((point, index) => (
              <TrustCard key={point.title} point={point} index={index} />
            ))}
          </MobileCarousel>
        ) : (
          /* Desktop: Grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trustPoints.map((point, index) => (
              <TrustCard key={point.title} point={point} index={index} />
            ))}
          </div>
        )}

        {/* Quote */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-6 md:p-8 lg:p-12 text-center relative">
            <Quote className="w-8 h-8 md:w-12 md:h-12 text-primary/30 absolute top-3 left-3 md:top-4 md:left-4" />
            <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground font-medium italic leading-relaxed">
              "Comme en montagne : je trace le bon chemin, j'allège votre sac, et on avance ensemble."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
