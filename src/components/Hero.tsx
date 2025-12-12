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
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

      {/* Content - behind the mountain, fades as user scrolls */}
      <div 
        className="relative z-10 container mx-auto px-4 text-center mt-8"
        style={{ 
          opacity: textOpacity,
          transform: `translateY(${textTranslateY}px)`,
        }}
      >
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 font-extrabold tracking-tight">
            <span className="text-foreground drop-shadow-lg">Progressez léger avec le </span>
            <span className="text-primary drop-shadow-lg">No Code et l'IA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Transformez vos processus, créez vos outils et automatisez votre activité.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://calendly.com/summitflowfr/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-base bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Prendre RDV
            </a>
            <a 
              href="#roi" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 bg-card border border-border text-foreground hover:bg-muted hover:border-primary/50 hover:scale-105"
            >
              <Calculator className="w-4 h-4" />
              Calculer votre ROI
            </a>
          </div>
        </div>
      </div>
      
      {/* Parallax Mountain Image - passes OVER the text on scroll */}
      <div 
        className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none overflow-hidden"
        style={{ 
          transform: `translateY(${-scrollY * 0.5}px)`,
          height: '50vh',
        }}
      >
        <img 
          src={heroMountains} 
          alt="Montagnes enneigées" 
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Mist overlay for smooth transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-t from-background via-background/90 to-transparent z-30"
      />
    </section>
  );
};

export default Hero;
