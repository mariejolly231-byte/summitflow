import { Mail, MapPin, Linkedin, Calendar } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Slogan */}
          <div className="md:col-span-2">
            <img src={logo} alt="Summit Flow" className="h-16 w-auto mb-4" />
            <p className="text-xl font-semibold text-primary-light mb-4">
              Progressez leger
            </p>
            <p className="text-background/70 max-w-md mb-6">
              Solutions No Code et IA pour automatiser, construire et optimiser votre activite.
            </p>
            <a
              href="https://calendly.com/summitflowfr/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Prendre RDV
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/70 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#examples" className="text-background/70 hover:text-primary transition-colors">
                  Cas clients
                </a>
              </li>
              <li>
                <a href="#roi" className="text-background/70 hover:text-primary transition-colors">
                  Calculateur ROI
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  A propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4 text-primary" />
                Sud Toulousain
              </li>
              <li>
                <a 
                  href="mailto:contact@summitflow.fr" 
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  contact@summitflow.fr
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/mariejolly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            {currentYear} Summit Flow. Tous droits reserves.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Mentions legales
            </a>
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Politique de confidentialite
            </a>
          </div>
          <p className="text-sm text-background/50">
            Certifiee RNCP Niveau 6
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;