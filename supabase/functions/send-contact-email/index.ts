import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message } = await req.json();

    // Email vers Summit Flow
    await resend.emails.send({
      from: "Summit Flow <hello@summitflow.fr>",
      reply_to: [email],
      to: ["contact@summitflow.fr"],
      subject: `Nouveau message de contact de ${name}`,
      html: `
        <div>
          <h2>Nouveau message de contact</h2>
          <div>
            <p>Nom: ${name}</p>
            <p>Email: ${email}</p>
            <p>Entreprise: ${company || 'Non renseignée'}</p>
          </div>
          <hr />
          <p>Message:</p>
          <div>
            <p>${message}</p>
          </div>
          <hr />
          <p>Cet email a été envoyé depuis le formulaire de contact de summitflow.fr</p>
        </div>
      `,
      text: `
NOUVEAU MESSAGE DE CONTACT

De: ${name}
Email: ${email}
Entreprise: ${company || 'Non renseignée'}

----------------------------------------

MESSAGE:

${message}

----------------------------------------

Cet email a été envoyé depuis le formulaire de contact de summitflow.fr
      `,
    });

    // Email de confirmation au visiteur
    await resend.emails.send({
      from: "Summit Flow <hello@summitflow.fr>",
      to: [email],
      subject: "Votre message a bien été reçu - Summit Flow",
      html: `
        <div>
          <h2>Merci ${name} !</h2>
          <p>Nous avons bien reçu votre message et nous vous remercions pour votre intérêt.</p>
          <p>Notre équipe reviendra vers vous dans les plus brefs délais, généralement sous 24-48 heures.</p>
          <div>
            <p>Récapitulatif de votre message:</p>
            <p>Entreprise: ${company || 'Non renseignée'}</p>
            <p>"${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"</p>
          </div>
          <p>À très bientôt,<br/>L'équipe Summit Flow</p>
          <hr />
          <p>Summit Flow - Votre partenaire digital<br/>summitflow.fr</p>
        </div>
      `,
      text: `
Merci ${name} !

Nous avons bien reçu votre message et nous vous remercions pour votre intérêt.

Notre équipe reviendra vers vous dans les plus brefs délais, généralement sous 24-48 heures.

RÉCAPITULATIF DE VOTRE MESSAGE:
Entreprise: ${company || 'Non renseignée'}
Message: "${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"

À très bientôt,
L'équipe Summit Flow

---
Summit Flow - Votre partenaire digital
summitflow.fr
      `,
    });

    return new Response(
      JSON.stringify({ success: true }), 
      { 
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        } 
      }
    );
  } catch (error: any) {
    console.error("Erreur d'envoi email:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Une erreur est survenue lors de l'envoi" 
      }), 
      { 
        status: 500, 
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        } 
      }
    );
  }
};

serve(handler);
