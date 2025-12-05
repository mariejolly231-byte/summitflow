import { Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-24 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-pacifico text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            <span className="text-foreground">Progressez léger avec Summit Flow, </span>
            <span className="text-primary">pour vous concentrer sur ce qui compte vraiment.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Je suis Marie, ingénieure passionnée par le No Code et l'IA. Summit Flow accompagne les TPE, artisans et PME du secteur toulousain et des Pyrénées pour créer des web apps sur mesure, automatiser vos workflows et concevoir des sites vitrines performants. Mon objectif est de rendre le No Code et l'IA accessibles et pertinents pour votre cœur de métier et vos besoins réels.
          </p>

          <a 
            href="https://calendly.com/summitflowfr/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-hero inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Découvrez comment Summit Flow peut transformer vos process dès aujourd'hui
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;