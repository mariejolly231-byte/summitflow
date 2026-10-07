// src/config/seo.ts

export const seoConfig = {
  home: {
    title: "Summit Flow | No-code, IA & automatisation pour PME industrielles - Toulouse",
    description: "Summit Flow accompagne les PME industrielles et techniques : audit IA et process terrain, simplification, automatisation et formation no-code & IA. Toulouse, Occitanie et distance.",
    keywords: "summit flow, no code pme industrielles, automatisation process industriels, audit ia terrain, formation no code ia occitanie, formation no code toulouse, conseil no code pme, simplification process, ia industrie pme",
    canonical: "https://www.summitflow.fr",
    ogImage: "/og-image.png"
  },

  ressources: {
    title: "Ressources No Code & IA gratuites | Summit Flow Toulouse",
    description: "Je partage une sélection de ressources gratuites no-code, IA et automatisation pour TPE et PME : contenus École Cube et partenaires du Sud toulousain.",
    canonical: "https://www.summitflow.fr/ressources"
  },

  mentionsLegales: {
    title: "Mentions légales | Summit Flow - No Code & IA Toulouse",
    description: "Mentions légales du site Summit Flow, expert No Code & IA à Toulouse : éditeur du site, hébergement et propriété intellectuelle.",
    canonical: "https://www.summitflow.fr/mentions-legales"
  },

  politiqueConfidentialite: {
    title: "Politique de confidentialité | Summit Flow Toulouse",
    description: "Politique de confidentialité de Summit Flow : gestion des données personnelles, cookies, mesure d'audience et conformité RGPD.",
    canonical: "https://www.summitflow.fr/politique-confidentialite"
  }
};

export const structuredData = {
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Summit Flow",
    "alternateName": "Summit Flow No Code IA",
    "url": "https://www.summitflow.fr",
    "inLanguage": "fr-FR",
    "description": "Summit Flow - Expert No Code et IA à Toulouse pour TPE et PME"
  },

  organization: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Summit Flow",
    "alternateName": "Summit Flow - No Code & IA Toulouse",
    "inLanguage": "fr-FR",
    "description": "Expert No Code et IA à Toulouse, spécialisé en automatisation et développement web sans code pour TPE et PME",
    "url": "https://www.summitflow.fr",
    "logo": "https://www.summitflow.fr/logo.png",
    "image": "https://www.summitflow.fr/og-image.png",
    "telephone": "+33687358849",
    "email": "contact@summitflow.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "376 route de Grazac",
      "addressLocality": "Caujac",
      "addressRegion": "Occitanie",
      "postalCode": "31190",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.4829",
      "longitude": "1.3889"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Toulouse"
      },
      {
        "@type": "City",
        "name": "Caujac"
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "43.4829",
          "longitude": "1.3889"
        },
        "geoRadius": "50000"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "43.6047",
        "longitude": "1.4442"
      },
      "geoRadius": "80000",
      "description": "Sud Toulousain et Pyrénées"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/in/mariejolly"
    ],
    "founder": {
      "@type": "Person",
      "name": "Marie Jolly",
      "jobTitle": "Ingénieure No Code & IA",
      "description": "Ingénieure industrielle avec 10 ans d'expérience, certifiée RNCP niveau 6 en No Code et IA",
      "url": "https://www.linkedin.com/in/mariejolly"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services No Code & IA",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Développement Site Web No Code",
            "description": "Création de sites vitrines professionnels avec Framer ou Lovable",
            "provider": {
              "@type": "Organization",
              "name": "Summit Flow"
            },
            "areaServed": {
              "@type": "City",
              "name": "Toulouse"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Développement Application Web No Code",
            "description": "Applications web sur mesure avec Bubble ou Lovable",
            "provider": {
              "@type": "Organization",
              "name": "Summit Flow"
            },
            "areaServed": {
              "@type": "City",
              "name": "Toulouse"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatisation & Intelligence Artificielle",
            "description": "Automatisation des processus métier avec Make, n8n et agents IA",
            "provider": {
              "@type": "Organization",
              "name": "Summit Flow"
            },
            "areaServed": {
              "@type": "City",
              "name": "Toulouse"
            }
          }
        }
      ]
    }
  },
  
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.summitflow.fr"
      }
    ]
  },
  
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que le No Code et comment ça fonctionne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le No Code permet de créer des sites web, applications et automatisations sans coder. Grâce à des outils visuels comme Bubble, Lovable ou Make, je conçois des solutions professionnelles et performantes, plus rapidement qu'avec du développement traditionnel."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le délai pour lancer mon projet No Code à Toulouse ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un site vitrine est livré en 1 à 3 semaines. Une web app sur-mesure demande 2 à 6 semaines selon la complexité. Pour une automatisation, comptez 1 à 2 semaines avec un suivi hebdomadaire."
        }
      },
      {
        "@type": "Question",
        "name": "Vous travaillez uniquement sur Toulouse et les Pyrénées ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Je suis basée au sud de Toulouse et j'accompagne en priorité les TPE, artisans et PME du secteur toulousain et des Pyrénées. Je peux également travailler à distance partout en France."
        }
      }
    ]
  },
  
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Summit Flow",
    "inLanguage": "fr-FR",
    "description": "Expert No Code et IA à Toulouse pour TPE et PME",
    "url": "https://www.summitflow.fr",
    "telephone": "+33687358849",
    "email": "contact@summitflow.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "376 route de Grazac",
      "addressLocality": "Caujac",
      "addressRegion": "Occitanie",
      "postalCode": "31190",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.4829",
      "longitude": "1.3889"
    },
    "priceRange": "€€",
    "paymentAccepted": "Virement, Carte bancaire"
  }
};
