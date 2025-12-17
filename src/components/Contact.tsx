import { useState } from "react";
import { Calendar, Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
      });

      if (error) throw error;
      
      toast({
        title: "Message envoyé",
        description: "Vous recevrez une confirmation par email.",
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-no-code-toulouse" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 font-bold">
            Parlons de votre projet
          </h2>
          <p className="text-xl text-muted-foreground">
            Choisissez le mode de contact qui vous convient
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Rendez-vous */}
          <div className="card-service flex flex-col animate-fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Rendez-vous en ligne</h3>
                <p className="text-sm text-muted-foreground">30 min - Gratuit - Sans engagement</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 flex-grow">
              Réservez un créneau pour un échange découverte. On discute de vos besoins et je vous propose des solutions adaptées.
            </p>

            <a
              href="https://calendly.com/summitflowfr/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero w-full text-center flex items-center justify-center gap-2 mt-auto"
            >
              <Calendar className="w-5 h-5" />
              Prendre RDV
            </a>
          </div>

          {/* Contact Form */}
          <div className="card-service flex flex-col animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Mail className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Formulaire de contact</h3>
                <p className="text-sm text-muted-foreground">Réponse sous 24-48h</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 flex-grow flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">Message envoyé</h4>
                <p className="text-muted-foreground">Je vous répondrai sous 24-48h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-grow">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="flex-grow">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="consent"
                      checked={consentGiven}
                      onCheckedChange={(checked) => setConsentGiven(checked === true)}
                      className="mt-0.5"
                    />
                    <label htmlFor="consent" className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
                      J'accepte que mes données soient collectées et traitées par Summit Flow conformément à sa{" "}
                      <Link to="/politique-confidentialite" className="text-primary hover:underline">
                        politique de confidentialité
                      </Link>.
                    </label>
                  </div>
                  
                  <div className="text-[10px] text-muted-foreground/70 leading-relaxed">
                    <p className="font-medium mb-1">Protection de vos données personnelles</p>
                    <p>
                      Les informations saisies dans ce formulaire sont enregistrées par Summit Flow afin de répondre à votre demande. Elles sont utilisées uniquement dans ce cadre, ne sont pas transmises à des tiers, et sont conservées pendant une durée maximale de 3 ans à des fins de suivi. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, de portabilité et d'opposition au traitement de vos données.{" "}
                      <Link to="/politique-confidentialite" className="text-primary hover:underline">
                        Consulter notre politique de confidentialité
                      </Link>.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !consentGiven}
                  className="btn-hero w-full flex items-center justify-center gap-2 disabled:opacity-50 mt-auto"
                >
                  {isSubmitting ? (
                    "Préparation..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Envoi via contact@summitflow.fr
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
