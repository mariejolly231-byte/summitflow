import { Calendar, Calculator } from "lucide-react";
import { useEffect, useState } from "react";
import heroMountains from "@/assets/hero-mountains.png";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity for text fade effect
  const textOpacity = Math.max(0, 1 - scrollY / 400);
  const textTranslateY = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

      {/* Content - scrolls up and fades out */}
      <div 
        className="relative z-10 container mx-auto px-4 pt-32 pb-48 text-center transition-opacity duration-100"
        style={{ 
          opacity: textOpacity,
          transform: `translateY(${textTranslateY}px)`,
        }}
      >
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 font-extrabold tracking-tight">
            <span className="text-foreground drop-shadow-lg">Progressez léger avec le </span>
            <span className="text-primary drop-shadow-lg">No Code et l'IA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Transformez vos processus, créez des outils internes et automatisez votre activité durablement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/summitflowfr/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-hero inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <Calendar className="w-5 h-5" />
              Prendre RDV
            </a>
            <a 
              href="#roi" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-card border border-border text-foreground hover:bg-muted hover:border-primary/50 hover:scale-105"
            >
              <Calculator className="w-5 h-5" />
              Calculer votre ROI
            </a>
          </div>
        </div>
      </div>
      
      {/* Parallax Mountain Image - stays fixed, content scrolls behind */}
      <div 
        className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none"
        style={{ 
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <img 
          src={heroMountains} 
          alt="Montagnes enneigées" 
          className="w-full h-auto object-cover object-bottom"
        />
      </div>
      
      {/* Mist overlay for depth */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-background via-background/80 to-transparent z-30"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
    </section>
  );
};

export default Hero;
