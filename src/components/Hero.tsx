import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

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
      {/* Parallax Mountain Background */}
      <div className="absolute inset-0">
        {/* Sky gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#1a365d] via-[#2d5a87] to-[#4a8db7] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155]"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        
        {/* Far mountains - Layer 1 */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-[#4a6280] to-transparent dark:from-[#1e293b] dark:to-transparent"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
            clipPath: "polygon(0 70%, 15% 45%, 30% 65%, 45% 35%, 60% 55%, 75% 30%, 90% 50%, 100% 40%, 100% 100%, 0 100%)"
          }}
        />
        
        {/* Middle mountains - Layer 2 */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[55vh] bg-gradient-to-t from-[#5a7290] to-[#6b8299] dark:from-[#334155] dark:to-[#475569]"
          style={{ 
            transform: `translateY(${scrollY * 0.35}px)`,
            clipPath: "polygon(0 60%, 10% 50%, 25% 70%, 40% 40%, 55% 60%, 70% 35%, 85% 55%, 100% 45%, 100% 100%, 0 100%)"
          }}
        />
        
        {/* Near mountains with snow - Layer 3 */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-[#6b8299] to-[#8ba3b8] dark:from-[#475569] dark:to-[#64748b]"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
            clipPath: "polygon(0 55%, 12% 35%, 25% 55%, 38% 25%, 50% 45%, 62% 20%, 75% 40%, 88% 30%, 100% 50%, 100% 100%, 0 100%)"
          }}
        />
        
        {/* Snow caps */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[50vh] opacity-60"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 30%, transparent 50%)",
            clipPath: "polygon(38% 25%, 42% 30%, 46% 25%, 50% 30%, 54% 25%, 62% 20%, 66% 28%, 70% 22%, 75% 28%, 78% 25%, 100% 50%, 100% 0%, 0% 0%, 0% 55%, 12% 35%, 18% 42%, 25% 35%)"
          }}
        />
        
        {/* Foreground hills - Layer 4 */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[35vh] bg-gradient-to-t from-background to-[#9bb3c7] dark:to-[#64748b]"
          style={{ 
            transform: `translateY(${scrollY * 0.7}px)`,
            clipPath: "polygon(0 70%, 20% 50%, 40% 65%, 60% 45%, 80% 60%, 100% 40%, 100% 100%, 0 100%)"
          }}
        />
        
        {/* Mist overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-background via-background/80 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.8}px)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-24 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 font-extrabold tracking-tight">
            <span className="text-primary-foreground dark:text-foreground drop-shadow-lg">Progressez leger avec le </span>
            <span className="text-primary drop-shadow-lg">No Code et l'IA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 dark:text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            Transformez vos processus, creez des outils internes et automatisez votre activite durablement.
          </p>

          <a 
            href="https://calendly.com/summitflowfr/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-hero inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Prendre RDV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;