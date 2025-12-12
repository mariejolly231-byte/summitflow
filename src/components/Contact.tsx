import { useState } from "react";
import { Calendar, Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`Contact Summit Flow - ${formData.name}`);
      const body = encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\nEntreprise: ${formData.company || 'Non renseigne'}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:contact@summitflow.fr?subject=${subject}&body=${body}`;
      
      toast({
        title: "Redirection vers votre client mail",
        description: "Votre message sera envoye via votre application de messagerie.",
      });
      
      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez reessayer.",
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
    <section id="contact" className="section-padding">
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
              Reservez un creneau pour un echange decouverte. On discute de vos besoins et je vous propose des solutions adaptees.
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
                <p className="text-sm text-muted-foreground">Reponse sous 24-48h</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 flex-grow flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">Message pret a envoyer</h4>
                <p className="text-muted-foreground">Finalisez l'envoi dans votre client mail.</p>
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
                    placeholder="Decrivez votre projet ou votre besoin..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full flex items-center justify-center gap-2 disabled:opacity-50 mt-auto"
                >
                  {isSubmitting ? (
                    "Preparation..."
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
