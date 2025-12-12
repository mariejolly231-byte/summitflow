import { Award, MapPin, Linkedin } from "lucide-react";
import photoAbout from "@/assets/photo-about.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            A propos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Basee dans le <strong className="text-foreground">Sud toulousain</strong>, Summit Flow accompagne les entreprises dans leur transformation digitale avec des solutions No Code et IA pragmatiques.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Notre approche : des outils simples, efficaces, deployes rapidement. Pas de projets interminables ni de jargon technique. Juste des solutions qui repondent a vos vrais besoins operationnels.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Specialisation dans l'automatisation des processus metier, les applications internes sur mesure et l'optimisation de la productivite des equipes.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Sud Toulousain</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                <span className="font-medium">Certifiee RNCP Niveau 6</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card-service p-0 overflow-hidden">
              <img 
                src={photoAbout} 
                alt="Marie Jolly - Fondatrice Summit Flow"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Marie Jolly
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ingenieure de formation avec 10 ans d'experience dans l'aeronautique et l'industrie. Certifiee Product Builder No Code & IA (RNCP niveau 6). Passionnee par l'optimisation des processus et la resolution de problemes concrets.
                </p>
                <a
                  href="https://www.linkedin.com/in/mariejolly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Linkedin className="w-5 h-5" />
                  Voir le profil LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;