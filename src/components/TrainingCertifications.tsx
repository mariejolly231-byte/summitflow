import qualiopi from "@/assets/partners/qualiopi.jpg";
import monCompteFormation from "@/assets/partners/mon-compte-formation.png";
import franceNumAsset from "@/assets/partners/activateur-france-num.png.asset.json";
import { BadgeCheck } from "lucide-react";

const TrainingCertifications = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-10 animate-fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
              Formation reconnue et finançable
            </h2>
            <p className="text-base text-muted-foreground px-4 max-w-2xl mx-auto">
              Des actions de formation ancrées dans le quotidien de vos équipes, dont certaines peuvent s'inscrire dans un cadre Qualiopi, avec une mobilisation CPF possible selon les sessions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            <div className="card-service flex items-center gap-5 animate-fade-up">
              <a
                href="/certificat-qualiopi-altitude.pdf"
                target="_blank"
                rel="noopener"
                download
                aria-label="Télécharger le certificat Qualiopi d'ALTITUDE"
                className="w-28 h-20 rounded-lg bg-background border border-border/60 flex items-center justify-center flex-shrink-0 overflow-hidden"
              >
                <img src={qualiopi} alt="Certification Qualiopi d'ALTITUDE - processus certifié" className="max-h-full max-w-full object-contain p-1" />
              </a>
              <div>
                <p className="font-semibold text-foreground">Certification Qualiopi d'ALTITUDE</p>
                <p className="text-sm text-muted-foreground">
                  Formations réalisées sous la certification Qualiopi de la couveuse ALTITUDE (certificat CertUp n° FRCM24436).{" "}
                  <a
                    href="/certificat-qualiopi-altitude.pdf"
                    target="_blank"
                    rel="noopener"
                    download
                    className="text-primary hover:underline"
                  >
                    Télécharger le certificat
                  </a>
                </p>
              </div>
            </div>

            <div className="card-service flex items-center gap-5 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="w-28 h-20 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src={monCompteFormation} alt="Mon Compte Formation - CPF" className="max-h-12 max-w-full object-contain px-2" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Mon Compte Formation</p>
                <p className="text-sm text-muted-foreground">Mobilisation possible des droits CPF selon les sessions</p>
              </div>
            </div>

            <div className="card-service flex items-center gap-5 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="w-28 h-20 rounded-lg bg-background border border-border/60 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <BadgeCheck className="w-12 h-12 text-primary" aria-label="Agrément Crédit Impôt Innovation" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Agrément CII</p>
                <p className="text-sm text-muted-foreground">Crédit Impôt Innovation - réduction fiscale sur la R&D</p>
              </div>
            </div>

            <div className="card-service flex items-center gap-5 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div className="w-28 h-20 rounded-lg bg-background border border-border/60 flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
                <img src={franceNumAsset.url} alt="Activateur France Num - accompagnement digital des TPE/PME" className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Activateur France Num</p>
                <p className="text-sm text-muted-foreground">Accompagnement digital labellisé pour les TPE/PME</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCertifications;