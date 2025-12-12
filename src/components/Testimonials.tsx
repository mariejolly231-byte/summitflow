import { Award, Briefcase, Heart, MapPin, Quote } from "lucide-react";

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

const Testimonials = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pacifico text-3xl md:text-4xl text-foreground mb-4">
            Pourquoi me faire confiance ?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustPoints.map((point) => (
            <div 
              key={point.title}
              className="bg-card rounded-xl p-6 text-center border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-8 md:p-12 text-center relative">
            <Quote className="w-12 h-12 text-primary/30 absolute top-4 left-4" />
            <blockquote className="text-xl md:text-2xl text-foreground font-medium italic leading-relaxed">
              "Comme en montagne : je trace le bon chemin, j'allège votre sac, et on avance ensemble."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
