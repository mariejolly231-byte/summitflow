import { useState } from "react";
import { Calculator, TrendingUp, Clock, Euro, ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobileOrTablet } from "@/hooks/useMediaQuery";
const ROICalculator = () => {
  const [timePerOccurrence, setTimePerOccurrence] = useState(2);
  const [frequencyPerWeek, setFrequencyPerWeek] = useState(3);
  const [durationYears, setDurationYears] = useState(2);
  const [rateType, setRateType] = useState<"hourly" | "salary">("hourly");
  const [hourlyRate, setHourlyRate] = useState(50);
  const [annualSalary, setAnnualSalary] = useState(45000);
  const [projectCost, setProjectCost] = useState(3000);
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobileOrTablet = useIsMobileOrTablet();

  // Calculate effective hourly rate from salary (52 weeks * 35h/week)
  const effectiveHourlyRate = rateType === "hourly" ? hourlyRate : annualSalary / (52 * 35);

  // Weekly hours saved
  const weeklyHoursSaved = timePerOccurrence * frequencyPerWeek;

  // Total hours saved over the duration
  const totalHoursSaved = weeklyHoursSaved * 52 * durationYears;

  // Total value saved
  const totalValueSaved = totalHoursSaved * effectiveHourlyRate;

  // ROI calculation
  const roi = (totalValueSaved - projectCost) / projectCost * 100;
  const formatTime = (hours: number) => {
    if (hours < 1) return `${Math.round(hours * 60)} min`;
    return `${hours}h`;
  };

  // Mobile/Tablet collapsed view
  if (isMobileOrTablet && !isExpanded) {
    return <section id="roi" className="section-padding bg-gradient-to-br from-primary/5 via-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 animate-fade-up">
            <h2 className="text-2xl sm:text-3xl text-foreground mb-4 font-bold">
              Calculez votre rentabilité
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Estimez le retour sur investissement de votre projet d'automatisation
            </p>
          </div>

          <div className="max-w-md mx-auto animate-fade-up">
            <button onClick={() => setIsExpanded(true)} className="w-full btn-hero flex items-center justify-center gap-3 py-3 text-sm">
              <Calculator className="w-4 h-4" />
              Accès à la calculatrice
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>;
  }
  return <section id="roi" className="section-padding bg-gradient-to-br from-primary/5 via-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-fade-up">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 font-bold">
              Calculez la rentabilité du projet   
            </h2>
            {isMobileOrTablet && <button onClick={() => setIsExpanded(false)} className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors" aria-label="Réduire">
                <ChevronUp className="w-5 h-5" />
              </button>}
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Estimez le retour sur investissement de votre projet d'automatisation
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-fade-up" style={{
        animationDelay: '100ms'
      }}>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Inputs */}
            <div className="card-service space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Paramètres
              </h3>

              {/* Time per occurrence */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Temps par occurrence
                </label>
                <input type="range" min="0.5" max="6" step="0.5" value={timePerOccurrence} onChange={e => setTimePerOccurrence(Number(e.target.value))} className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mt-1">
                  <span>30 min</span>
                  <span className="text-primary font-bold">{formatTime(timePerOccurrence)}</span>
                  <span>6h</span>
                </div>
              </div>

              {/* Frequency per week */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Fréquence hebdomadaire
                </label>
                <input type="range" min="1" max="10" value={frequencyPerWeek} onChange={e => setFrequencyPerWeek(Number(e.target.value))} className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mt-1">
                  <span>1x</span>
                  <span className="text-primary font-bold">{frequencyPerWeek}x / semaine</span>
                  <span>10x</span>
                </div>
              </div>

              {/* Duration in years */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Durée de projection
                </label>
                <input type="range" min="1" max="5" value={durationYears} onChange={e => setDurationYears(Number(e.target.value))} className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mt-1">
                  <span>1 an</span>
                  <span className="text-primary font-bold">{durationYears} ans</span>
                  <span>5 ans</span>
                </div>
              </div>

              {/* Rate type toggle */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Base de calcul
                </label>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="rateType" checked={rateType === "hourly"} onChange={() => setRateType("hourly")} className="w-4 h-4 accent-primary" />
                    <span className="text-foreground text-sm">Taux horaire</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="rateType" checked={rateType === "salary"} onChange={() => setRateType("salary")} className="w-4 h-4 accent-primary" />
                    <span className="text-foreground text-sm">Salaire annuel brut</span>
                  </label>
                </div>
              </div>

              {/* Hourly rate or salary slider */}
              {rateType === "hourly" ? <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Taux horaire
                  </label>
                  <input type="range" min="15" max="200" step="5" value={hourlyRate} onChange={e => setHourlyRate(Number(e.target.value))} className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" />
                  <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mt-1">
                    <span>15 EUR</span>
                    <span className="text-primary font-bold">{hourlyRate} EUR/h</span>
                    <span>200 EUR</span>
                  </div>
                </div> : <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Salaire annuel brut
                  </label>
                  <input type="range" min="25000" max="120000" step="1000" value={annualSalary} onChange={e => setAnnualSalary(Number(e.target.value))} className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" />
                  <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mt-1">
                    <span>25k EUR</span>
                    <span className="text-primary font-bold">{(annualSalary / 1000).toFixed(0)}k EUR/an</span>
                    <span>120k EUR</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Equivalent : {effectiveHourlyRate.toFixed(0)} EUR/h
                  </p>
                </div>}

              {/* Project cost */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget projet estimé
                </label>
                <input type="range" min="300" max="15000" step="100" value={projectCost} onChange={e => setProjectCost(Number(e.target.value))} className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mt-1">
                  <span>300 EUR</span>
                  <span className="text-primary font-bold">{projectCost.toLocaleString()} EUR</span>
                  <span>15 000 EUR</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="card-service bg-gradient-to-br from-primary/10 to-accent/10 space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Résultats
              </h3>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-card rounded-xl p-3 md:p-4 text-center">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{Math.round(totalHoursSaved)}h</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Temps économisé</p>
                  <p className="text-xs text-muted-foreground">sur {durationYears} an{durationYears > 1 ? 's' : ''}</p>
                </div>

                <div className="bg-card rounded-xl p-3 md:p-4 text-center">
                  <Euro className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{Math.round(totalValueSaved).toLocaleString()} EUR</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Valeur économisée</p>
                  <p className="text-xs text-muted-foreground">sur {durationYears} an{durationYears > 1 ? 's' : ''}</p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-4 md:p-6 text-center">
                <p className="text-xs md:text-sm text-muted-foreground mb-2">Rentabilité</p>
                <p className={`text-4xl md:text-5xl font-bold ${roi > 0 ? 'text-primary' : 'text-destructive'}`}>
                  {roi > 0 ? '+' : ''}{Math.round(roi)}%
                </p>
                {/* Hide detailed weekly info on mobile/tablet */}
                <p className="text-xs md:text-sm text-muted-foreground mt-4 hidden lg:block">
                  <span className="font-semibold text-foreground">{weeklyHoursSaved}h</span> soit <span className="font-semibold text-foreground">{Math.round(weeklyHoursSaved * effectiveHourlyRate)} EUR</span> / semaine
                </p>
              </div>

              <a href="https://calendly.com/summitflowfr/30min" target="_blank" rel="noopener noreferrer" className="btn-hero w-full text-center block text-sm md:text-base py-3 md:py-4">
                Discutons de votre projet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ROICalculator;