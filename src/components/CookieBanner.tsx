import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "sf_cookie_consent_v1";

type Consent = "granted" | "denied";

const applyConsent = (analytics: Consent) => {
  // Google Consent Mode v2 update
  // @ts-expect-error gtag is loaded from index.html
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    // @ts-expect-error gtag is loaded from index.html
    window.gtag("consent", "update", {
      analytics_storage: analytics,
    });
  }
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setVisible(true);
      } else {
        const parsed = JSON.parse(stored) as { analytics: Consent };
        applyConsent(parsed.analytics);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (analytics: Consent) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ analytics, date: new Date().toISOString() })
      );
    } catch {
      // ignore storage errors
    }
    applyConsent(analytics);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[60] animate-fade-up"
    >
      <div className="bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-xl p-5 md:p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Cookie className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground text-sm md:text-base">
              Cookies & mesure d'audience
            </p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-1">
              J'utilise Google Analytics pour comprendre comment le site est consulté.
              Aucun cookie de mesure n'est déposé sans votre accord.{" "}
              <Link to="/politique-confidentialite" className="text-primary hover:underline">
                En savoir plus
              </Link>
              .
            </p>
          </div>
          <button
            onClick={() => save("denied")}
            aria-label="Refuser et fermer"
            className="p-1 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button
            onClick={() => save("denied")}
            className="flex-1 px-4 py-2.5 rounded-full text-sm font-medium border border-border hover:border-primary/50 hover:bg-muted/50 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={() => save("granted")}
            className="flex-1 px-4 py-2.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;