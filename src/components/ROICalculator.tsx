import { useState } from "react";
import { Calculator, TrendingUp, Clock, Euro } from "lucide-react";

const ROICalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(35);
  const [projectCost, setProjectCost] = useState(2000);
  const [weeksPerYear, setWeeksPerYear] = useState(46);

  const yearlyTimeSaved = hoursPerWeek * weeksPerYear;
  const yearlySavings = yearlyTimeSaved * hourlyRate;
  const roi = ((yearlySavings - projectCost) / projectCost) * 100;
  const paybackMonths = projectCost / (yearlySavings / 12);

  return (
    <section id="roi" className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pacifico text-3xl md:text-4xl text-foreground mb-4">
            Calculez votre ROI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estimez le retour sur investissement de votre projet d'automatisation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="card-service space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Vos données
              </h3>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Heures de tâches répétitives / semaine
                </label>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>1h</span>
                  <span className="text-primary font-bold">{hoursPerWeek}h</span>
                  <span>40h</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Votre taux horaire (€/h)
                </label>
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>10€</span>
                  <span className="text-primary font-bold">{hourlyRate}€</span>
                  <span>150€</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget estimé du projet (€)
                </label>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={projectCost}
                  onChange={(e) => setProjectCost(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>500€</span>
                  <span className="text-primary font-bold">{projectCost.toLocaleString()}€</span>
                  <span>10 000€</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Semaines travaillées / an
                </label>
                <input
                  type="range"
                  min="40"
                  max="52"
                  value={weeksPerYear}
                  onChange={(e) => setWeeksPerYear(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>40</span>
                  <span className="text-primary font-bold">{weeksPerYear}</span>
                  <span>52</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="card-service bg-gradient-to-br from-primary/10 to-accent/10 space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Vos résultats
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">{yearlyTimeSaved}h</p>
                  <p className="text-sm text-muted-foreground">Temps gagné / an</p>
                </div>

                <div className="bg-card rounded-xl p-4 text-center">
                  <Euro className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">{yearlySavings.toLocaleString()}€</p>
                  <p className="text-sm text-muted-foreground">Économies / an</p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Retour sur investissement</p>
                <p className={`text-5xl font-bold ${roi > 0 ? 'text-primary' : 'text-destructive'}`}>
                  {roi > 0 ? '+' : ''}{Math.round(roi)}%
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Rentabilisé en <span className="font-semibold text-foreground">{Math.ceil(paybackMonths)} mois</span>
                </p>
              </div>

              <a
                href="https://calendly.com/summitflowfr/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero w-full text-center block"
              >
                Discutons de votre projet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
