import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
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

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-muted-foreground mb-8">Dernière mise à jour : 15/12/2025</p>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-foreground/80 mb-8">
              Summit Flow accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité a pour objectif de vous informer de manière claire et transparente sur la collecte, l'utilisation et la protection de vos données personnelles lorsque vous utilisez notre site internet https://www.summitflow.fr.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Responsable du traitement des données</h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground mb-1">Le responsable du traitement des données personnelles collectées sur ce site est :</p>
                <p className="font-semibold text-foreground mt-4 mb-2">Marie Jolly</p>
                <p className="text-muted-foreground mb-1">Summit Flow</p>
                <p className="text-muted-foreground mb-1">Activité portée par la couveuse d'entreprises ALTITUDE</p>
                <p className="text-muted-foreground mb-1">376 route de Grazac</p>
                <p className="text-muted-foreground mb-1">31190 Caujac</p>
                <p className="text-muted-foreground mb-1">Email : <a href="mailto:contact@summitflow.fr" className="text-primary hover:underline">contact@summitflow.fr</a></p>
                <p className="text-muted-foreground">Téléphone : 06 87 35 88 49</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Données personnelles collectées</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">2.1 Types de données collectées</h3>
              <p className="text-foreground/80 mb-4">
                Nous collectons uniquement les données personnelles que vous nous transmettez volontairement via nos formulaires de contact :
              </p>
              <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (optionnel)</li>
                <li>Entreprise/Organisation (optionnel)</li>
                <li>Message et informations relatives à votre demande</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">2.2 Données de navigation</h3>
              <p className="text-foreground/80 mb-4">
                Lors de votre visite sur notre site, certaines données techniques peuvent être collectées automatiquement :
              </p>
              <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-1">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées</li>
                <li>Date et heure de connexion</li>
                <li>Données de navigation (cookies)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Finalité du traitement</h2>
              <p className="text-foreground/80 mb-4">
                Les données personnelles que nous collectons sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-1">
                <li>Répondre à vos demandes d'information</li>
                <li>Gérer la relation client</li>
                <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                <li>Améliorer nos services et l'expérience utilisateur sur notre site</li>
                <li>Respecter nos obligations légales</li>
              </ul>
              <p className="text-foreground/80 font-medium">
                Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers à des fins commerciales.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Base légale du traitement</h2>
              <p className="text-foreground/80 mb-4">Le traitement de vos données personnelles repose sur :</p>
              <ul className="list-disc list-inside text-foreground/80 space-y-1">
                <li><strong>Votre consentement :</strong> lorsque vous remplissez un formulaire de contact</li>
                <li><strong>L'exécution d'un contrat :</strong> pour la gestion de nos services</li>
                <li><strong>L'intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité du site</li>
                <li><strong>Les obligations légales :</strong> pour respecter les exigences légales et réglementaires</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Durée de conservation des données</h2>
              <p className="text-foreground/80 mb-4">
                Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-1">
                <li>Données de contact : 3 ans à compter du dernier contact</li>
                <li>Données de navigation (cookies) : 13 mois maximum</li>
                <li>Données comptables et fiscales : durée légale de conservation (10 ans)</li>
              </ul>
              <p className="text-foreground/80">
                À l'issue de ces délais, vos données sont supprimées ou anonymisées.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Destinataires des données</h2>
              <p className="text-foreground/80 mb-4">Vos données personnelles sont destinées exclusivement à :</p>
              <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-1">
                <li>Marie Jolly (Summit Flow) pour le traitement de vos demandes</li>
                <li>Les prestataires techniques nécessaires au fonctionnement du site (hébergeur, outils de communication)</li>
              </ul>
              <p className="text-foreground/80 mb-4">
                Ces prestataires sont contractuellement tenus de respecter la confidentialité et la sécurité de vos données.
              </p>
              <p className="text-foreground/80 font-medium">
                Nous ne transmettons aucune donnée personnelle à des tiers à des fins commerciales ou publicitaires.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Sécurité des données</h2>
              <p className="text-foreground/80 mb-4">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction :
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-1">
                <li>Chiffrement des données sensibles (SSL/HTTPS)</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegarde régulière des données</li>
                <li>Mises à jour de sécurité régulières</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Vos droits</h2>
              <p className="text-foreground/80 mb-6">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
              </p>

              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Droit d'accès</p>
                  <p className="text-muted-foreground text-sm">Vous pouvez demander à accéder aux données personnelles que nous détenons sur vous.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Droit de rectification</p>
                  <p className="text-muted-foreground text-sm">Vous pouvez demander la correction de vos données si elles sont inexactes ou incomplètes.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Droit à l'effacement (droit à l'oubli)</p>
                  <p className="text-muted-foreground text-sm">Vous pouvez demander la suppression de vos données personnelles dans certaines conditions.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Droit d'opposition</p>
                  <p className="text-muted-foreground text-sm">Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Droit à la limitation du traitement</p>
                  <p className="text-muted-foreground text-sm">Vous pouvez demander la limitation du traitement de vos données dans certaines circonstances.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Droit à la portabilité</p>
                  <p className="text-muted-foreground text-sm">Vous pouvez demander à recevoir vos données dans un format structuré et couramment utilisé.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Droit de retirer votre consentement</p>
                  <p className="text-muted-foreground text-sm">Vous pouvez retirer votre consentement à tout moment lorsque le traitement est basé sur celui-ci.</p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="font-medium text-foreground mb-2">Comment exercer vos droits ?</p>
                <p className="text-muted-foreground mb-4">Pour exercer vos droits, vous pouvez nous contacter à tout moment :</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>Par email : <a href="mailto:contact@summitflow.fr" className="text-primary hover:underline">contact@summitflow.fr</a></li>
                  <li>Par courrier : Marie Jolly - Summit Flow, 376 route de Grazac, 31190 Caujac</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Nous nous engageons à répondre à votre demande dans un délai maximum d'un mois.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Droit de réclamation</h2>
              <p className="text-foreground/80 mb-4">
                Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
              </p>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground mb-2">CNIL</p>
                <p className="text-muted-foreground mb-1">3 Place de Fontenoy</p>
                <p className="text-muted-foreground mb-1">TSA 80715</p>
                <p className="text-muted-foreground mb-1">75334 Paris Cedex 07</p>
                <p className="text-muted-foreground mb-1">Téléphone : 01 53 73 22 22</p>
                <p className="text-muted-foreground">Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.cnil.fr</a></p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Cookies</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">10.1 Qu'est-ce qu'un cookie ?</h3>
              <p className="text-foreground/80 mb-6">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de votre visite sur un site internet. Il permet de mémoriser des informations relatives à votre navigation.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3">10.2 Cookies utilisés sur notre site</h3>
              <p className="text-foreground/80 mb-4">Notre site utilise les types de cookies suivants :</p>
              
              <div className="space-y-3 mb-6">
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Cookies strictement nécessaires</p>
                  <p className="text-muted-foreground text-sm">Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés. Ils ne stockent aucune information personnelle identifiable.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Cookies de performance</p>
                  <p className="text-muted-foreground text-sm">Ces cookies nous permettent d'analyser l'utilisation du site pour en améliorer les performances et l'expérience utilisateur.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Cookies fonctionnels</p>
                  <p className="text-muted-foreground text-sm">Ces cookies permettent au site de mémoriser vos choix (langue, région) pour vous offrir une expérience personnalisée.</p>
                </div>
              </div>

              <h3 className="text-xl font-medium text-foreground mb-3">10.3 Gestion des cookies</h3>
              <p className="text-foreground/80 mb-4">Vous pouvez à tout moment modifier vos préférences en matière de cookies :</p>
              <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-1">
                <li><strong>Via votre navigateur :</strong> Vous pouvez configurer votre navigateur pour accepter, refuser ou supprimer les cookies</li>
                <li><strong>Via notre bandeau cookies :</strong> Lors de votre première visite, vous pouvez accepter ou refuser les cookies non essentiels</li>
              </ul>
              
              <p className="text-foreground/80 mb-2">Pour plus d'informations sur la gestion des cookies :</p>
              <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-1">
                <li>Chrome : <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.google.com/chrome/answer/95647</a></li>
                <li>Firefox : <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.mozilla.org/fr/kb/activer-desactiver-cookies</a></li>
                <li>Safari : <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.apple.com/fr-fr/guide/safari/sfri11471/mac</a></li>
                <li>Edge : <a href="https://support.microsoft.com/fr-fr/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.microsoft.com/fr-fr/microsoft-edge</a></li>
              </ul>
              
              <p className="text-foreground/80 font-medium">
                Attention : La désactivation de certains cookies peut affecter votre expérience de navigation sur notre site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Transfert de données hors UE</h2>
              <p className="text-foreground/80">
                Vos données personnelles sont hébergées et traitées au sein de l'Union Européenne. Elles ne font l'objet d'aucun transfert vers des pays tiers, sauf si vous en êtes informé au préalable et sous réserve de garanties appropriées.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Modifications de la politique de confidentialité</h2>
              <p className="text-foreground/80 mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment pour refléter les changements dans nos pratiques ou pour des raisons légales, réglementaires ou opérationnelles.
              </p>
              <p className="text-foreground/80">
                Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact</h2>
              <p className="text-foreground/80 mb-4">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
              </p>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground mb-2">Marie Jolly - Summit Flow</p>
                <p className="text-muted-foreground mb-1">Email : <a href="mailto:contact@summitflow.fr" className="text-primary hover:underline">contact@summitflow.fr</a></p>
                <p className="text-muted-foreground mb-1">Téléphone : 06 87 35 88 49</p>
                <p className="text-muted-foreground">Adresse : 376 route de Grazac, 31190 Caujac</p>
              </div>
              <p className="text-foreground/80 mt-6 font-medium">
                Nous nous engageons à protéger votre vie privée et à traiter vos données avec le plus grand respect et la plus grande transparence.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PolitiqueConfidentialite;
