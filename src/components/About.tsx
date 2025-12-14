import { MapPin, Award, Linkedin } from "lucide-react";
import photoAbout from "@/assets/photo-about.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
            À propos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Photo - visible on all screens, on top for mobile */}
          <div className="relative animate-fade-up order-1 lg:order-2" style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={photoAbout} 
                alt="Marie Jolly en montagne avec ses chiens"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-square"
              />
              {/* Lighter overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Bio card - positioned below photo on mobile, overlayed on desktop */}
            <div className="mt-4 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:p-6">
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-border/50 shadow-lg">
                <h4 className="text-lg md:text-xl font-bold mb-2 text-foreground">Marie Jolly</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Passionnée de montagne et de technologie, j'ai fait le choix de combiner ces deux univers. Après un parcours en gestion de projets et organisation, j'ai découvert le No Code et l'IA comme des outils puissants pour simplifier le quotidien des entrepreneurs. Comme en montagne, chaque ascension demande préparation, méthode et persévérance. Mon rôle : vous guider vers vos sommets numériques.
                </p>
                <a 
                  href="https://www.linkedin.com/in/mariejolly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 font-medium hover:translate-x-1 text-sm md:text-base"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  Voir mon profil LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 animate-fade-up order-2 lg:order-1" style={{ animationDelay: '100ms' }}>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Summit Flow
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                J'accompagne les TPE, PME, artisans, associations et indépendants du Sud Toulousain et des Pyrénées dans leur transformation numérique. Ma mission : rendre le No Code et l'IA accessibles à tous, sans jargon technique ni déploiements interminables.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Je conçois des outils simples, efficaces et durables : sites vitrines, applications web sur mesure, automatisations et workflows intelligents. Chaque projet est pensé pour vous faire gagner du temps et réduire votre charge mentale.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span>Sud Toulousain et Pyrénées</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span>Certifiée Make Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
