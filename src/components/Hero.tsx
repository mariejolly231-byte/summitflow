import { Calendar, Calculator } from "lucide-react";
import { useEffect, useState } from "react";
import parallaxBg from "@/assets/parallax-bg.png";
import parallaxMid from "@/assets/parallax-mid.png";
import parallaxFg from "@/assets/parallax-fg.png";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Mountain Background - Layer 1 (furthest) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${parallaxBg})`,
          transform: `translateY(${scrollY * 0.1}px) scale(1.1)`,
        }}
      />
      
      {/* Parallax Mountain Midground - Layer 2 */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{ 
          backgroundImage: `url(${parallaxMid})`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      
      {/* Parallax Mountain Foreground - Layer 3 (closest) */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{ 
          backgroundImage: `url(${parallaxFg})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Mist overlay for depth */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-background via-background/60 to-transparent"
        style={{ transform: `translateY(${scrollY * 0.6}px)` }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-24 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 font-extrabold tracking-tight">
            <span className="text-foreground drop-shadow-lg">Progressez leger avec le </span>
            <span className="text-primary drop-shadow-lg">No Code et l'IA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Transformez vos processus, creez des outils internes et automatisez votre activite durablement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/summitflowfr/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-hero inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Prendre RDV
            </a>
            <a 
              href="#roi" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-card border border-border text-foreground hover:bg-muted hover:border-primary/50"
            >
              <Calculator className="w-5 h-5" />
              Calculer votre ROI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
