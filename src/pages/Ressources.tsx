import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const competences = [
  "Accompagnement stratégique des projets numériques",
  "Maintenance, support et services numériques pour TPE/PME",
  "Structuration des outils et des usages digitaux",
  "Accompagnement à la présence en ligne et à la communication numérique",
  "Appui au développement d'activités et à l'innovation locale",
  "Mobilisation de compétences complémentaires selon les besoins des entreprises",
];

const Ressources = () => {
  return (
    <main className="min-h-screen">
      <SEOHead page="ressources" />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <header className="mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ressources
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Summit Flow partage ici une sélection de ressources et de points d'appui utiles pour découvrir des outils, monter en compétence, mieux cadrer un projet numérique et identifier des compétences disponibles sur le territoire. L'objectif est simple : aider les entreprises à avancer plus sereinement sur leurs sujets no-code, automatisation et IA.
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ressources CUBE
            </h2>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Cette ressource donne accès à une sélection de contenus gratuits proposés par l'École Cube autour du no-code, de l'IA et de l'automatisation.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Plus de 20 ressources IA et No-Code y sont rassemblées pour découvrir des outils, apprendre à les utiliser, structurer ses premiers projets et mieux comprendre les usages concrets de ces technologies dans un contexte professionnel.
              </p>
              <a
                href="https://ambassadeurs-cube.lovable.app/parrainage/5351a7b09b8fa819707c40f27a961758"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero inline-flex items-center gap-2"
              >
                Accéder aux ressources gratuites CUBE
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              La Tréso Numérique
            </h2>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <p className="text-foreground/80 leading-relaxed mb-4">
                La Tréso Numérique est un pôle de compétences qui rassemble des indépendants et des entreprises du numérique à Auterive, au sud de Toulouse, afin de proposer un accompagnement sur mesure pour les projets numériques.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-8">
                Pour une entreprise du territoire, c'est un point d'appui local : un moyen plus simple d'identifier les bons interlocuteurs, de bénéficier d'un accompagnement de proximité et de mobiliser des compétences complémentaires selon les besoins de chaque projet.
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Compétences disponibles sur le territoire
              </h3>
              <ul className="space-y-2 mb-8">
                {competences.map((c) => (
                  <li key={c} className="flex gap-3 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a
                  href="https://latresonumerique.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
                >
                  Site de La Tréso Numérique
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://latresonumerique.fr/leCollectif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                >
                  Découvrir le collectif
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>

          <p className="text-base text-muted-foreground leading-relaxed border-t border-border pt-8">
            Mon rôle avec Summit Flow est aussi celui d'un facilitateur : vous aider à choisir des solutions utiles, simples et activables, et à identifier les bons appuis pour avancer concrètement sur vos sujets numériques.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Ressources;