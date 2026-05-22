import { HardHat, Zap, GraduationCap, Sparkles } from "lucide-react";

const items = [
  { icon: HardHat, label: "Terrain industriel" },
  { icon: Zap, label: "Automatisation utile" },
  { icon: GraduationCap, label: "Formation sur mesure" },
  { icon: Sparkles, label: "Approche simple et concrète" },
];

const ReassuranceBar = () => {
  return (
    <section className="border-y border-border/60 bg-muted/40">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground"
            >
              <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReassuranceBar;