import { MapPin, Award, Linkedin } from "lucide-react";
import photoAbout from "@/assets/photo-about.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 font-bold">
            A propos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Summit Flow
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Summit Flow accompagne les TPE, PME, artisans, associations et independants du Sud Toulousain et des Pyrenees dans leur transformation numerique. Notre mission : rendre le No Code et l'IA accessibles a tous, sans jargon technique ni deploiements interminables.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous concevons des outils simples, efficaces et durables : sites vitrines, applications web sur mesure, automatisations et workflows intelligents. Chaque projet est pense pour vous faire gagner du temps et reduire votre charge mentale.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Sud Toulousain et Pyrenees</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span>Certifie Make Expert</span>
              </div>
            </div>
          </div>

          {/* Right Column - Photo with overlay */}
          <div className="relative animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={photoAbout} 
                alt="Marie Jolly en montagne avec ses chiens"
                className="w-full h-auto object-cover aspect-square"
              />
              {/* Stronger overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
              
              {/* Text overlay with better contrast */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-5 border border-border/50">
                  <h4 className="text-xl font-bold mb-2 text-foreground">Marie Jolly</h4>
                  <p className="text-sm text-foreground/90 leading-relaxed mb-4">
                    Passionnée de montagne et de technologie, j'ai fait le choix de combiner ces deux univers. Après un parcours en gestion de projets et organisation, j'ai découvert le No Code et l'IA comme des outils puissants pour simplifier le quotidien des entrepreneurs. Comme en montagne, chaque ascension demande préparation, méthode et persévérance. Mon rôle : vous guider vers vos sommets numériques, en allant à l'essentiel.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/mariejolly" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 font-medium hover:translate-x-1"
                  >
                    <Linkedin className="w-5 h-5" />
                    Voir mon profil LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
