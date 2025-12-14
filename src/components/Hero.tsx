import { Calendar, Calculator } from "lucide-react";
import { useEffect, useState } from "react";
import heroMountains from "@/assets/hero-mountains.png";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reduced parallax effect on mobile
  const parallaxMultiplier = isMobile ? 0.25 : 0.5;
  const fadeThreshold = isMobile ? 80 : 150;
  const fadeRange = isMobile ? 150 : 250;

  // Calculate opacity for text fade effect - starts fully visible
  const textOpacity = Math.max(0, 1 - Math.max(0, scrollY - fadeThreshold) / fadeRange);
  const textTranslateY = scrollY * (isMobile ? 0.1 : 0.2);

  // Mountain starts below viewport and rises up on scroll
  const mountainBasePosition = isMobile ? '-60vh' : '-70vh';
  const mountainTranslateY = Math.max(-scrollY * parallaxMultiplier, -400);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-16 md:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

      {/* Content - visible on load, z-index above initial mountain position */}
      <div 
        className="relative z-30 container mx-auto px-4 text-center"
        style={{ 
          opacity: textOpacity,
          transform: `translateY(${textTranslateY}px)`,
          transition: 'opacity 0.1s ease-out',
        }}
      >
        <div className="max-w-4xl mx-auto animate-fade-up pt-8 md:pt-0">
          <div className="bg-background/80 backdrop-blur-sm rounded-3xl border border-border/40 px-4 sm:px-8 py-6 md:py-8 shadow-lg shadow-primary/10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 font-extrabold tracking-tight">
              <span className="text-foreground drop-shadow-lg">Progressez léger avec le </span>
              <span className="text-primary drop-shadow-lg">No Code et l'IA</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
              Transformez vos processus, créez vos outils et automatisez votre activité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <a 
                href="https://calendly.com/summitflowfr/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full font-semibold text-base bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Prendre RDV
              </a>
              <a 
                href="#roi" 
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 bg-card border border-border text-foreground hover:bg-muted hover:border-primary/50 hover:scale-105"
              >
                <Calculator className="w-4 h-4" />
                Calculer votre rentabilité
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Parallax Mountain Image - starts well below, rises to cover content on scroll */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-[140%] sm:w-[130%] md:w-[120%] max-w-[1600px] z-20 pointer-events-none"
        style={{ 
          bottom: mountainBasePosition,
          transform: `translateX(-50%) translateY(${mountainTranslateY}px)`,
          transition: 'transform 0.05s linear',
        }}
      >
        <img 
          src={heroMountains} 
          alt="Montagnes enneigées" 
          className="w-full h-auto object-contain"
        />
        {/* Gradient overlay for smooth blend with content above */}
        <div className="absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-background via-background/50 to-transparent" />
      </div>
      
      {/* Bottom gradient for smooth transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-30"
      />
    </section>
  );
};

export default Hero;
