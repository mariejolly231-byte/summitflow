import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import logo from "@/assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#examples", label: "Cas clients" },
    { href: "#roi", label: "Rentabilité" },
    { href: "#about", label: "À propos" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Summit Flow" 
              className="h-20 md:h-28 lg:h-36 w-auto object-contain" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a 
              href="https://calendly.com/summitflowfr/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-hero text-sm xl:text-base px-4 xl:px-6 py-2.5 xl:py-3 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Prendre RDV
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-3 px-2 text-base" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="https://calendly.com/summitflowfr/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-hero text-center mt-2 flex items-center justify-center gap-2 py-3" 
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                Prendre RDV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
