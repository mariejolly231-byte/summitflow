// src/config/seo.ts

export const seoConfig = {
  home: {
    title: "No Code & IA Toulouse | Expert Automatisation & Web Apps | Summit Flow",
    description: "Expert No Code et IA à Toulouse. 10 ans d'expérience industrielle. Automatisation, web apps sur mesure (Bubble, Make, n8n) pour TPE/PME. Certifiée RNCP. Intervention Sud Toulousain et Pyrénées.",
    keywords: "no code toulouse, ia toulouse, automatisation toulouse, bubble toulouse, make toulouse, web app toulouse, développement no code, expert no code pyrénées, consultant ia toulouse, ingénieur industriel no code",
    canonical: "https://www.summitflow.fr",
    ogImage: "/og-image.jpg" // À créer
  },
  
  services: {
    title: "Services No Code & IA Toulouse | Automatisation & Applications Web",
    description: "Solutions No Code et IA pour entreprises toulousaines : automatisation workflows, web apps Bubble, agents IA, optimisation processus. Expérience industrielle 10 ans.",
    canonical: "https://www.summitflow.fr/#solutions-no-code-ia-toulouse"
  },
  
  pricing: {
    title: "Tarifs No Code Toulouse | Site Web, Web App & Automatisation",
    description: "Tarifs transparents No Code à Toulouse : sites vitrines 500-1500€, web apps 2500-5000€, automatisations 390-2500€. Intervention rapide, maintenance incluse.",
    canonical: "https://www.summitflow.fr/#tarifs-automatisation-toulouse"
  },
  
  about: {
    title: "À Propos | Ingénieure No Code & IA Toulouse | 10 ans Industrie",
    description: "Marie Jolly, ingénieure industrielle certifiée RNCP en No Code & IA. 10 ans d'expérience aéronautique. Basée Sud Toulouse, spécialiste automatisation et web apps pour TPE/PME.",
    canonical: "https://www.summitflow.fr/#no-code-ia-toulouse"
  },
  
  contact: {
    title: "Contact No Code Toulouse | Devis Gratuit Automatisation & Web App",
    description: "Contactez votre expert No Code à Toulouse. Devis gratuit, RDV sous 48h. Intervention Sud Toulousain et Pyrénées. Automatisation, web apps, IA.",
    canonical: "https://www.summitflow.fr/#contact-no-code-toulouse"
  }
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Summit Flow",
    "alternateName": "Summit Flow - No Code & IA Toulouse",
    "description": "Expert No Code et IA à Toulouse, spécialisé en automatisation et développement web sans code pour TPE et PME",
    "url": "https://www.summitflow.fr",
    "logo": "https://www.summitflow.fr/logo.webp",
    "image": "https://www.summitflow.fr/og-image.jpg",
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services No Code",
        "item": "https://www.summitflow.fr/#solutions-no-code-ia-toulouse"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact",
        "item": "https://www.summitflow.fr/#contact-no-code-toulouse"
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
    "servesCuisine": "Services numériques",
    "paymentAccepted": "Virement, Carte bancaire"
  }
};
