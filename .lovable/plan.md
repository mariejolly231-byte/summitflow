## Refonte Summit Flow — page d'accueil

Objectif : recentrer le site sur les **PME industrielles et techniques**, clarifier l'offre, renforcer la crédibilité. **Aucun changement de direction artistique** : on garde les couleurs (verts profonds, bleu canard, tons naturels), la typographie, le hero parallax montagne, les cartes douces et les animations actuelles.

### Nouvelle structure de `src/pages/Index.tsx`

```text
Navbar
Hero (réécrit)
ReassuranceBar (nouveau, ligne sobre sous le hero)
Problems (nouveau — "Quand le bordel organisé devient la norme")
ValueProposition (nouveau — différence Summit Flow + 4 bénéfices)
Services / Offres (refonte : 3 offres recentrées)
Method (refonte de Process — "Comment j'allège le sac")
About (recentré terrain industriel, Marie Jolly)
TrustLogos (nouveau — 3 sous-catégories de logos)
TrainingCertifications (nouveau — Qualiopi + Mon Compte Formation)
Resources (nouveau — 2 cartes École Cube + Tréso Numérique)
GoogleReviews (conservé)
ROICalculator (conservé)
FAQ (conservé, à relire pour ton)
Contact (réécrit — "Parlons de ton bordel organisé")
Footer
ScrollToTop
```

### Détail des sections

**1. Hero (`Hero.tsx`)** — conserve parallax montagne et boutons existants
- Titre : *"Moins de bordel organisé. Plus de flux simples pour que l'industrie respire."*
- Sous-titre : *"J'aide les PME industrielles et techniques à clarifier leurs process, fiabiliser leurs données et déployer le no-code, l'automatisation et l'IA sans rajouter une usine à gaz."*
- CTA principal : "Prendre rendez-vous" → Calendly (inchangé)
- CTA secondaire : "Découvrir l'offre" → `#services`

**2. ReassuranceBar (nouveau)** — bande fine sous le hero
- 4 items en ligne : "Terrain industriel • Automatisation utile • Formation sur mesure • Approche simple et concrète"
- Style : muted, séparateurs discrets

**3. Problems (nouveau)** — "Quand le bordel organisé devient la norme"
- 6 cartes/items avec icônes Lucide (Files, Repeat, AlertTriangle, Search, Unplug, Brain) :
  - Fichiers qui se contredisent
  - Ressaisies entre outils
  - Décisions sur données incomplètes
  - Temps perdu à chercher l'info
  - Outils mal exploités ou pas adoptés
  - Charge mentale forte
- Layout : grille 3 colonnes desktop / carousel mobile (réutilise `MobileCarousel`)

**4. ValueProposition (nouveau)** — bloc fort, fond légèrement teinté
- Message central : *"Je ne vends pas un outil de plus. J'aide à enlever ce qui alourdit, reconnecter les bons flux et remettre les outils au service du terrain."*
- 4 bénéfices avec icônes : moins de ressaisies, info plus fiable, flux plus lisibles, équipes mieux outillées

**5. Services (`Services.tsx`) — recentré sur 3 offres** :
- **Audit IA & process terrain** (icône Search) — diagnostic, priorités, plan d'action
- **Simplification & automatisation ciblée** (icône Zap) — fiabiliser flux, connecter outils, supprimer ressaisies
- **Formation & acculturation** (icône GraduationCap) — autonomie no-code/IA équipes
- Chaque carte : "Pour qui", "Problèmes résolus", "Ce que vous obtenez"

**6. Process (`Process.tsx`) — "Comment j'allège le sac"** : 4 étapes
- Observer le terrain → Clarifier les flux → Simplifier et automatiser → Former pour rendre autonome

**7. About (`About.tsx`)** — recentré
- Marie Jolly, ingénieure industrielle, expérience production/qualité/projets
- Vécu terrain → reconversion no-code & IA
- Phrase clé : *"Je comprends les contraintes réelles de délais, de marges, de coordination et d'adoption terrain."*
- Ancrage Occitanie + distance

**8. TrustLogos (nouveau)** — "Ils m'ont fait confiance ou font partie de mon écosystème"
- 3 sous-catégories (titres discrets) : Entreprises accompagnées / Partenaires formation / Réseau territorial
- Logos en placeholders SVG/texte sobres (Gers Distribution, École Cube, La Tréso Numérique, Senza Formations, Numericoach, Mission Locale, BGE Sud-Ouest, CCI Toulouse) — l'utilisateur pourra fournir les vrais fichiers ensuite
- Mention discrète sous la grille

**9. TrainingCertifications (nouveau)** — bloc sobre
- Badges Qualiopi + Mon Compte Formation (placeholders)
- Texte : *"Des actions de formation pouvant s'inscrire dans un cadre certifié, avec une approche concrète et orientée terrain."*

**10. Resources (nouveau)** — 2 cartes
- **École Cube** → https://ambassadeurs-cube.lovable.app/parrainage/5351a7b09b8fa819707c40f27a961758
- **La Tréso Numérique** → https://www.latresonumerique.fr

**11. Contact (`Contact.tsx`)** — réécrit
- Titre : "Parlons de ton bordel organisé"
- Texte : *"Si tu veux clarifier tes priorités, alléger le sac et remettre les outils à leur juste place, échangeons."*
- CTA : "Prendre rendez-vous"

### Sections conservées telles quelles
- Navbar, Footer, ScrollToTop
- GoogleReviews (avis Google)
- ROICalculator
- FAQ (à relire pour aligner ton, sans réécriture massive)
- Testimonials (carte Certifications, expérience terrain, etc.) — déjà bien alignée

### Sections supprimées de la home
- `Benefits.tsx` (remplacé par ValueProposition + ReassuranceBar)
- `Examples.tsx` (le contenu sera repris dans la nouvelle section Services / cas concrets — à confirmer)

### SEO (`src/config/seo.ts`)
- Mise à jour titre/description home avec mots-clés : "no-code PME industrielles", "automatisation process", "audit IA terrain", "formation no-code IA Occitanie Toulouse"
- Conservation de la structure Schema.org existante (ProfessionalService, LocalBusiness)

### Détails techniques

- **Aucun changement** à `tailwind.config.ts`, `index.css`, design tokens, fonts, palette HSL
- Réutilisation des composants existants : `MobileCarousel`, `Card`, `card-service`, `btn-primary-hero`, `btn-secondary-hero`
- Tous les nouveaux composants suivent les patterns existants (animation `animate-fade-up`, hover states, responsive `md:` breakpoints)
- Les logos partenaires seront créés en placeholders texte stylés tant que les fichiers ne sont pas fournis
- Pas de nouvelle dépendance npm
- Conservation des liens Calendly et des Edge Functions email

### Questions ouvertes (à valider avant ou pendant la build)

1. **Logos** : tu n'as pas joint les fichiers SVG/PNG des 8 logos partenaires ni Qualiopi/Mon Compte Formation. Je pars sur des placeholders texte sobres dans la même esthétique (cadre arrondi, gris-vert) que tu pourras remplacer ensuite. OK ?
2. **`Examples.tsx`** : tu veux que je retire complètement cette section (cas concrets actuels) ou que je la garde / réécrive ?
3. **Tarifs (`Pricing.tsx`)** : ta nouvelle structure parle d'offres (Audit / Simplification / Formation) mais pas de prix. Je garde la section Tarifs actuelle (4 cartes avec prix) en complément des nouvelles offres, ou je la fusionne / supprime ?
4. **Tutoiement vs vouvoiement** : tes textes Contact tutoient ("ton bordel", "échangeons"), alors que le reste du site vouvoie. Je passe **toute la home en tutoiement** pour rester cohérent, ou je garde le vouvoiement et adapte les textes Contact ?

Une fois ces 4 points validés, je lance la refonte d'un coup.