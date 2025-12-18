import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Edge function appelée");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    console.log("Données reçues:", JSON.stringify(body));
    
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      console.error("Données manquantes:", { name, email, message });
      return new Response(
        JSON.stringify({ error: "Données manquantes (nom, email ou message)" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Envoi email vers contact@summitflow.fr...");
    
    // Email vers Summit Flow
    const notificationResult = await resend.emails.send({
      from: "Summit Flow <hello@summitflow.fr>",
      reply_to: email,
      to: ["contact@summitflow.fr"],
      subject: `Nouveau message de contact de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message de contact</h2>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Entreprise:</strong> ${company || 'Non renseignée'}</p>
          </div>
          <h3 style="color: #333;">Message:</h3>
          <div style="background: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">
            <p>${message}</p>
          </div>
          <hr style="margin: 20px 0;" />
          <p style="color: #888; font-size: 12px;">Cet email a été envoyé depuis le formulaire de contact de summitflow.fr</p>
        </div>
      `,
      text: `NOUVEAU MESSAGE DE CONTACT\n\nDe: ${name}\nEmail: ${email}\nEntreprise: ${company || 'Non renseignée'}\n\n----------------------------------------\n\nMESSAGE:\n\n${message}\n\n----------------------------------------\n\nCet email a été envoyé depuis le formulaire de contact de summitflow.fr`,
    });
    
    console.log("Résultat notification:", JSON.stringify(notificationResult));

    console.log("Envoi email de confirmation à", email);
    
    // Email de confirmation au visiteur
    const confirmationResult = await resend.emails.send({
      from: "Summit Flow <hello@summitflow.fr>",
      to: [email],
      subject: "Votre message a bien été reçu - Summit Flow",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Merci ${name} !</h2>
          <p>Nous avons bien reçu votre message et nous vous remercions pour votre intérêt.</p>
          <p>Je reviendrai vers vous dans les plus brefs délais, généralement sous 24-48 heures.</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p><strong>Récapitulatif de votre message:</strong></p>
            <p>Entreprise: ${company || 'Non renseignée'}</p>
            <p><em>"${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"</em></p>
          </div>
          <p>À très bientôt,<br/>Marie - Summit Flow</p>
          <hr style="margin: 20px 0;" />
          <p style="color: #888; font-size: 12px;">Summit Flow - Votre partenaire digital<br/>summitflow.fr</p>
        </div>
      `,
      text: `Merci ${name} !\n\nNous avons bien reçu votre message et nous vous remercions pour votre intérêt.\n\nJe reviendrai vers vous dans les plus brefs délais, généralement sous 24-48 heures.\n\nRÉCAPITULATIF DE VOTRE MESSAGE:\nEntreprise: ${company || 'Non renseignée'}\nMessage: "${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"\n\nÀ très bientôt,\nMarie - Summit Flow\n\n---\nSummit Flow - Votre partenaire digital\nsummitflow.fr`,
    });
    
    console.log("Résultat confirmation:", JSON.stringify(confirmationResult));

    return new Response(
      JSON.stringify({ success: true, notification: notificationResult, confirmation: confirmationResult }), 
      { headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Erreur d'envoi email:", error);
    console.error("Détails erreur:", JSON.stringify(error));
    return new Response(
      JSON.stringify({ error: error.message || "Une erreur est survenue lors de l'envoi" }), 
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
