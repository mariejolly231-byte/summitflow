import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-pacifico text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Progressez léger avec Summit Flow
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold mb-6 text-primary-foreground">
            Des solutions No Code & IA pour alléger votre quotidien professionnel
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Vous n'avez pas besoin d'attendre 6 mois pour automatiser vos tâches, analyser vos données ou créer l'outil qui vous manque. 
            Avec Summit Flow, transformez vos besoins terrain en solutions concrètes. <strong className="text-foreground">Rapidement. Simplement. Efficacement.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://calendly.com/summitflowfr/30min" target="_blank" rel="noopener noreferrer" className="btn-hero">
              Prendre rendez-vous
            </a>
            <a href="#roi" className="btn-secondary-hero">
              Calculer mon ROI
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#services" aria-label="Défiler vers les services">
            <ArrowDown className="w-8 h-8 text-primary" />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;