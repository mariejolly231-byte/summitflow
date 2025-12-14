import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileCarouselProps {
  children: React.ReactNode[];
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
}

export const MobileCarousel = ({ 
  children, 
  className, 
  showDots = true,
  showArrows = true 
}: MobileCarouselProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const updateScrollState = React.useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    
    // Calculate active index based on scroll position
    const itemWidth = scrollRef.current.children[0]?.clientWidth || 0;
    const gap = 16; // gap-4 = 16px
    const newIndex = Math.round(scrollLeft / (itemWidth + gap));
    setActiveIndex(Math.min(newIndex, children.length - 1));
  }, [children.length]);

  React.useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    
    element.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    
    return () => element.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const itemWidth = scrollRef.current.children[0]?.clientWidth || 0;
    const gap = 16;
    scrollRef.current.scrollTo({
      left: index * (itemWidth + gap),
      behavior: "smooth"
    });
  };

  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollNext = () => {
    if (activeIndex < children.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  return (
    <div className={cn("relative", className)}>
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ 
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch"
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 snap-center first:ml-4 last:mr-4"
            style={{ width: "calc(85vw - 32px)", maxWidth: "320px" }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Arrows - always visible */}
      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollLeft}
            aria-label="Précédent"
            className={cn(
              "absolute left-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background shadow-lg border border-border flex items-center justify-center transition-all duration-200",
              canScrollLeft 
                ? "opacity-100 hover:bg-primary hover:text-primary-foreground hover:border-primary" 
                : "opacity-40 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollRight}
            aria-label="Suivant"
            className={cn(
              "absolute right-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background shadow-lg border border-border flex items-center justify-center transition-all duration-200",
              canScrollRight 
                ? "opacity-100 hover:bg-primary hover:text-primary-foreground hover:border-primary" 
                : "opacity-40 cursor-not-allowed"
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {showDots && children.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {React.Children.map(children, (_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeIndex 
                  ? "bg-primary w-6" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Aller à l'élément ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileCarousel;
