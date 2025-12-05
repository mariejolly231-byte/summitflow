import { Award, MapPin, Heart } from "lucide-react";
import photoAbout from "@/assets/photo-about.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pacifico text-3xl md:text-4xl text-foreground mb-4">
            Summit Flow : votre partenaire No Code & IA local
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Basée dans le <strong className="text-foreground">Sud toulousain et les Pyrénées</strong>, Summit Flow accompagne les TPE, PME, artisans, associations et indépendants dans leur transformation digitale.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Notre mission ? <span className="text-primary font-semibold">Rendre l'IA et le No Code accessibles localement.</span> Vous faire gagner du temps. Enlever les cailloux de vos sacs trop lourds.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comme en montagne, la philosophie est simple : <em className="text-foreground">on avance mieux léger</em>. Pas de solutions complexes qui demandent 6 mois de déploiement. Pas de jargon technique incompréhensible. Juste des outils simples, efficaces, qui répondent à vos vrais besoins terrain.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Sud Toulousain & Pyrénées</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                <span className="font-medium">Certifiée RNCP Niveau 6</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card-service p-0 overflow-hidden">
              <img 
                src={photoAbout} 
                alt="Fondatrice de Summit Flow avec son Samoyède en montagne"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Qui suis-je ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ingénieure de formation avec <strong>10 ans d'expérience</strong> dans l'aéronautique et l'industrie, passionnée par le No Code et l'IA. Certifiée <em>Product Builder No Code & IA</em> (RNCP niveau 6). En formation guide moyenne montagne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
