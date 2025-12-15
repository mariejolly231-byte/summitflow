import { MapPin, Award, Linkedin } from "lucide-react";
import photoAbout from "@/assets/photo-about.jpg";
const About = () => {
  return <section id="no-code-ia-toulouse" className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
            À propos de Summit Flow - No Code et IA / Toulouse&Pyrénées
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Photo - visible on all screens, on top for mobile */}
          <div className="relative animate-fade-up order-1 lg:order-2" style={{
          animationDelay: '200ms'
        }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={photoAbout} alt="summit-flow/webapp/site/workflow/agentsIA" className="w-full h-auto object-cover aspect-[4/3] lg:aspect-square" />
              {/* Lighter overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Bio card - positioned below photo on mobile, overlayed on desktop */}
            <div className="mt-4 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:p-6">
              <div className="backdrop-blur-sm rounded-xl p-4 md:p-5 border border-border/50 shadow-lg bg-white/[0.73]">
                <h4 className="text-lg md:text-xl font-bold mb-2 text-secondary">Marie Jolly</h4>
                <p className="text-sm leading-relaxed mb-3 font-semibold text-secondary">Aspirante guide de montagne et ingénieure industrielle forte de 10 ans d’expérience, j’ai appris à conjuguer rigueur, méthode et sens de l’efficacité, que ce soit dans l’ascension des sommets ou la conception de solutions technologiques.</p>
                <a href="https://www.linkedin.com/in/mariejolly" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-all duration-300 font-medium hover:translate-x-1 text-sm md:text-base text-primary">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  Voir mon profil LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 animate-fade-up order-2 lg:order-1" style={{
          animationDelay: '100ms'
        }}>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
            </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">Ingénieure industrielle avec 10 ans d’expérience, j’ai créé Summit Flow à partir d’un constat vécu sur le terrain : trop d’organisations avancent freinées par des outils mal adaptés, des processus lourds et un manque de temps pour innover. Après dix années passées dans l’industrie, j’ai pris un virage important cette année en me formant intensivement pendant plusieurs mois au no-code et à l’IA, avec l’obtention d’une certification RNCP niveau 6 (Bac+3/4). 


Un véritable tournant dans ma vie professionnelle, qui a donné un cadre et une légitimité à ce qui me passionnait déjà depuis plusieurs années : comprendre les systèmes, automatiser, et construire mes propres outils pour simplifier le quotidien.</p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">Passionnée de montagne, aspirante guide et rarement sans mon fidèle compagnon samoyède, j’y ai appris la même chose que dans la tech : pour avancer loin, il faut un itinéraire clair, le bon équipement, et savoir quand simplifier plutôt que surcharger. 

C'est cette approche que j'apporte aux TPE, PME, artisans et indépendants du Sud Toulousain et des Pyrénées. Pas de jargon, pas de projets qui s'éternisent. Des sites, des applications et des automatisations pensées pour le terrain, pour que vous puissiez vous concentrer sur ce qui compte vraiment. 

 
            </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span>Sud Toulousain et Pyrénées</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span>Certifiée RNCP niv.6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;