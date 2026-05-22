import { BadgeCheck, GraduationCap } from "lucide-react";

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
              Des actions de formation pouvant s'inscrire dans un cadre certifié, avec une approche concrète et orientée terrain.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            <div className="card-service flex items-center gap-4 animate-fade-up">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BadgeCheck className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Démarche Qualiopi</p>
                <p className="text-sm text-muted-foreground">Engagement qualité sur le processus de formation</p>
              </div>
            </div>

            <div className="card-service flex items-center gap-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Mon Compte Formation</p>
                <p className="text-sm text-muted-foreground">Mobilisation possible des droits CPF selon les sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCertifications;