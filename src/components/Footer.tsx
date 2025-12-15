import { Mail, MapPin, Linkedin, Calendar } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Slogan */}
          <div className="md:col-span-2">
            <img src={logo} alt="Summit Flow" className="h-16 md:h-20 w-auto mb-4" />
            <p className="text-xl font-semibold text-primary-light mb-4">
              Progressez léger
            </p>
            <p className="text-background/70 max-w-md mb-6 text-xs">
              ​Ingénieure industrielle avec 10 ans d’expérience, j’ai créé Summit Flow à partir d’un constat simple : beaucoup de structures sont freinées par des outils inadaptés, des processus lourds et un manque de temps pour innover. En parallèle de mon parcours d’aspirante guide de montagne, j’ai appris à conjuguer rigueur, méthode et sens de l’efficacité, aussi bien sur le terrain que dans la conception de solutions technologiques. Avec Summit Flow, mon objectif est de rendre l’automatisation accessible et concrète, en concevant des outils légers, rapides à déployer et réellement alignés avec les besoins du quotidien.
            </p>
            <a href="https://calendly.com/summitflowfr/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              <Calendar className="w-4 h-4" />
              Prendre RDV
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#solutions-no-code-ia-toulouse" className="text-background/70 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#applications-web-sur-mesure-toulouse" className="text-background/70 hover:text-primary transition-colors">
                  Cas clients
                </a>
              </li>
              <li>
                <a href="#rentabilite-no-code-pme" className="text-background/70 hover:text-primary transition-colors">
                  Calculateur rentabilité
                </a>
              </li>
              <li>
                <a href="#no-code-ia-toulouse" className="text-background/70 hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact-no-code-toulouse" className="text-background/70 hover:text-primary transition-colors">
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
                <a href="mailto:contact@summitflow.fr" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  contact@summitflow.fr
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mariejolly" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
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
            {currentYear} Summit Flow. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/mentions-legales" className="text-background/50 hover:text-background transition-colors">
              Mentions légales
            </a>
            <a href="/politique-confidentialite" className="text-background/50 hover:text-background transition-colors">
              Politique de confidentialité
            </a>
          </div>
          <p className="text-sm text-background/50">
            Certifiée RNCP Niveau 6
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;