import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "À propos" },
    { href: "#examples", label: "Exemples" },
    { href: "#roi", label: "Calculette ROI" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Summit Flow" className="h-40 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/summitflowfr/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero text-base px-6 py-3"
            >
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://calendly.com/summitflowfr/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
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
