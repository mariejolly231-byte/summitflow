import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Mentions légales
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-foreground/80 mb-6">
              Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après "l'Utilisateur", du site https://www.summitflow.fr, ci-après le "Site", les présentes mentions légales.
            </p>
            <p className="text-foreground/80 mb-6">
              La connexion et la navigation sur le Site par l'Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
            </p>
            <p className="text-foreground/80 mb-8">
              Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Éditeur du site</h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground mb-2">Summit Flow</p>
                <p className="text-muted-foreground mb-4">Activité portée par la couveuse d'entreprises ALTITUDE</p>
                
                <p className="text-muted-foreground mb-1"><strong className="text-foreground">Responsable de la publication :</strong></p>
                <p className="text-muted-foreground mb-1">Marie Jolly</p>
                <p className="text-muted-foreground mb-1">376 route de Grazac</p>
                <p className="text-muted-foreground mb-1">31190 Caujac</p>
                <p className="text-muted-foreground mb-1">Téléphone : 06 87 35 88 49</p>
                <p className="text-muted-foreground mb-4">Email : <a href="mailto:contact@summitflow.fr" className="text-primary hover:underline">contact@summitflow.fr</a></p>
                
                <p className="text-muted-foreground mb-1"><strong className="text-foreground">Couveuse d'entreprises :</strong></p>
                <p className="text-muted-foreground mb-1">ALTITUDE</p>
                <p className="text-muted-foreground mb-1">Association loi 1901</p>
                <p className="text-muted-foreground mb-1">SIREN : 424 845 949</p>
                <p className="text-muted-foreground mb-1">SIRET du siège social : 424 845 949 00116</p>
                <p className="text-muted-foreground mb-1">Numéro de TVA : FR54424845949</p>
                <p className="text-muted-foreground mb-1">Adresse du siège social : 3 Chemin du Pigeonnier de la Cépière, Bât C, 1er étage, 31100 Toulouse</p>
                <p className="text-muted-foreground">Dirigeant : Paul Serres</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hébergement du site</h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground mb-1"><strong className="text-foreground">Nom de domaine :</strong></p>
                <p className="text-muted-foreground mb-1">Enregistré auprès de LWS</p>
                <p className="text-muted-foreground mb-1">Site web : <a href="https://www.lws.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.lws.fr</a></p>
                <p className="text-muted-foreground mb-4">Adresse : LWS, 10 rue de Penthièvre, 75008 Paris, France</p>
                
                <p className="text-muted-foreground mb-1"><strong className="text-foreground">Hébergement :</strong></p>
                <p className="text-muted-foreground mb-1">Vercel Inc.</p>
                <p className="text-muted-foreground mb-1">Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p className="text-muted-foreground">Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a></p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Accès au site</h2>
              <p className="text-foreground/80 mb-4">
                Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découler d'une nécessité de maintenance.
              </p>
              <p className="text-foreground/80">
                En cas de modification, interruption ou suspension du Site, l'Éditeur ne saurait être tenu responsable.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Protection des données personnelles</h2>
              <p className="text-foreground/80 mb-4">
                Le site Summit Flow assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
              </p>
              <p className="text-foreground/80 mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et en vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles.
              </p>
              <p className="text-foreground/80 mb-6">
                L'Utilisateur exerce ce droit par email à l'adresse <a href="mailto:contact@summitflow.fr" className="text-primary hover:underline">contact@summitflow.fr</a>.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <p className="text-muted-foreground mb-1"><strong className="text-foreground">Responsable du traitement des données :</strong></p>
                <p className="text-muted-foreground mb-1">Marie Jolly</p>
                <p className="text-muted-foreground mb-4">Email : <a href="mailto:contact@summitflow.fr" className="text-primary hover:underline">contact@summitflow.fr</a></p>
                
                <p className="text-muted-foreground mb-1"><strong className="text-foreground">Finalité du traitement :</strong></p>
                <p className="text-muted-foreground">
                  Les données personnelles collectées via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes et gérer la relation client. Elles ne sont jamais transmises à des tiers sans votre consentement.
                </p>
              </div>

              <p className="text-foreground/80 mb-4"><strong>Droits des utilisateurs :</strong></p>
              <p className="text-foreground/80 mb-2">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-1">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit de suppression de vos données</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit de limitation du traitement</li>
              </ul>

              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <p className="text-muted-foreground mb-1"><strong className="text-foreground">Droit de réclamation :</strong></p>
                <p className="text-muted-foreground mb-4">
                  Vous avez le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés :
                </p>
                <p className="text-muted-foreground mb-1">CNIL - 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</p>
                <p className="text-muted-foreground mb-1">Téléphone : 01 53 73 22 22</p>
                <p className="text-muted-foreground">Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.cnil.fr</a></p>
              </div>

              <p className="text-foreground/80">
                <strong>Cookies :</strong> Ce site peut utiliser des cookies pour améliorer votre expérience de navigation. Vous pouvez paramétrer votre navigateur pour refuser les cookies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
              <p className="text-foreground/80 mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, structure) est la propriété exclusive de Marie Jolly / Summit Flow, sauf mention contraire.
              </p>
              <p className="text-foreground/80">
                Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation écrite préalable de l'Éditeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation de responsabilité</h2>
              <p className="text-foreground/80 mb-4">
                Marie Jolly s'efforce d'assurer l'exactitude des informations diffusées sur ce site, mais ne peut garantir l'absence d'erreurs ou d'omissions.
              </p>
              <p className="text-foreground/80">
                L'utilisation des informations de ce site se fait sous votre seule responsabilité. Summit Flow ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation de ce site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Liens externes</h2>
              <p className="text-foreground/80">
                Ce site peut contenir des liens vers des sites externes. Summit Flow n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-12 pt-6 border-t border-border">
              Dernière mise à jour : 15/12/2025
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MentionsLegales;
