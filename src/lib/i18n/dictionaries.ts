import type { Locale } from "./config";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    problem: string;
    features: string;
    pricing: string;
    bookDemo: string;
    themeToggle: string;
    langSwitcher: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    cockpit: {
      title: string;
      live: string;
      parityRadar: string;
      leads: string;
      follows: string;
      balanced: string;
      waitlistOpened: string;
      newRegistration: string;
      classes: {
        salsa: string;
        bachata: string;
        kizomba: string;
      };
    };
    stats: Array<{ value: string; label: string }>;
  };
  problem: {
    kicker: string;
    title: string;
    subtitle: string;
    killers: Array<{ title: string; description: string }>;
  };
  transformation: {
    kicker: string;
    title: string;
    before: string;
    after: string;
    rows: Array<{ before: string; afterTitle: string; afterDescription: string }>;
  };
  features: {
    kicker: string;
    title: string;
    subtitle: string;
    pillars: Array<{ name: string; tagline: string; description: string }>;
  };
  offer: {
    kicker: string;
    title: string;
    subtitle: string;
    billing: {
      monthly: string;
      annual: string;
      recommended: string;
    };
    trialBadge: string;
    footnote: string;
    plans: Array<{
      id: "solo" | "pro" | "entreprise";
      name: string;
      tagline: string;
      badge: string | null;
      highlighted: boolean;
      monthly: { price: string; suffix: string; note: string };
      annual: { price: string; suffix: string; note: string; savings: string };
      features: string[];
      cta: string;
    }>;
    agency: {
      tag: string;
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
      poweredBy: string;
    };
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    tagline: string;
    poweredBy: string;
    languages: string;
    contact: string;
    rights: string;
  };
}

const fr: Dictionary = {
  meta: {
    title: "RitmoKit — Le kit d'opérations pour écoles de danse",
    description:
      "Sessions, parité Lead / Follow, Accueil, locations de salles, Cockpit $/m², Cahier du prof, Agentics et PayPal — le kit d'opérations pour écoles de danse au Québec.",
  },
  nav: {
    problem: "Le problème",
    features: "Fonctionnalités",
    pricing: "Tarifs",
    bookDemo: "Bientôt disponible",
    themeToggle: "Changer de thème",
    langSwitcher: "Changer de langue",
  },
  hero: {
    badge: "Le kit d'opérations pour écoles de danse",
    title: "Reprenez le contrôle de votre",
    titleAccent: "studio de danse.",
    subtitle:
      "Sessions, parité Lead / Follow, Accueil, locations de salles, Cockpit $/m², Cahier du prof et PayPal sur votre site — une seule source de vérité. Phase A déployée avec un studio pilote au Québec.",
    ctaPrimary: "Bientôt disponible",
    ctaSecondary: "Voir les tarifs",
    cockpit: {
      title: "Cockpit Studio",
      live: "En direct",
      parityRadar: "Radar de parité",
      leads: "Leads",
      follows: "Follows",
      balanced: "Équilibré",
      waitlistOpened: "Liste d'attente ouverte",
      newRegistration: "Nouvelle inscription",
      classes: {
        salsa: "Salsa Niv. 2 · Lundi 19h",
        bachata: "Bachata Niv. 1 · Mardi 20h",
        kizomba: "Kizomba Fusion · Jeudi 21h",
      },
    },
    stats: [
      { value: "< 5 min", label: "pour publier une session" },
      { value: "FR · EN · ES", label: "trilingue natif" },
      { value: "CA", label: "données hébergées au Canada" },
    ],
  },
  problem: {
    kicker: "Le problème",
    title:
      "Vous avez ouvert un studio pour enseigner la passion. Pas pour passer vos soirées sur Excel et WhatsApp.",
    subtitle: "Les 4 tueurs silencieux qui dévorent les profits de votre studio :",
    killers: [
      {
        title: "La file d'Accueil à 18 h 55",
        description:
          "Votre équipe cherche des noms sur une feuille pendant que les élèves s'impatientent — au lieu d'accueillir et de faire tourner la salle.",
      },
      {
        title: "Le déséquilibre Lead / Follow",
        description:
          "Refuser des Follows motivés parce qu'il manque des Leads — ou découvrir le déséquilibre seulement quand la porte du studio s'ouvre.",
      },
      {
        title: "Double saisie site web + cahier",
        description:
          "Inscriptions sur le site, puis ressaisie dans Excel ou Messenger. Deux sources de vérité qui se contredisent chaque semaine.",
      },
      {
        title: "Des chiffres de rentabilité incohérents",
        description:
          "Revenus au feeling, Excel et caisse qui ne concordent pas — impossible de savoir quel cours ou tier (régulier, étudiant, couple) rapporte vraiment.",
      },
    ],
  },
  transformation: {
    kicker: "La transformation",
    title: "L'expérience élégante. L'automatisation totale.",
    before: "Ce que vous avez aujourd'hui",
    after: "Ce que RitmoKit vous donne",
    rows: [
      {
        before: "Double saisie site web + Excel",
        afterTitle: "API publique + PayPal sur votre site",
        afterDescription:
          "Inscriptions sur votre vitrine web, paiements confirmés dans RitmoKit — une seule source de vérité.",
      },
      {
        before: "Déséquilibre découvert le soir",
        afterTitle: "Parité Lead / Follow + waitlists par rôle",
        afterDescription:
          "Quotas en temps réel, listes d'attente par rôle et promotion auto quand un Lead se libère.",
      },
      {
        before: "Feuille papier à l'Accueil",
        afterTitle: "Accueil tablette — présence en 1 clic",
        afterDescription:
          "Cours du jour, parité Lead / Follow en direct et check-in instantané — votre équipe accueille au lieu de chercher des noms.",
      },
      {
        before: "Churn découvert trop tard",
        afterTitle: "Liste de risque + Dance Agentics",
        afterDescription:
          "Waitlist et impayés : actions automatiques. Relances churn et soft capacity : vous confirmez ou ignorez.",
      },
    ],
  },
  features: {
    kicker: "Les 8 piliers",
    title: "Tout ce qu'une école de danse moderne doit maîtriser.",
    subtitle:
      "Du Cahier du prof au Cockpit $/m² — ce que RitmoKit livre aujourd'hui dans l'app, pas un agenda générique.",
    pillars: [
      {
        name: "Parité Lead / Follow",
        tagline: "« Chaque rôle compte. »",
        description:
          "Quotas en temps réel, waitlists par rôle et promotion quand une place se libère — visible dans Accueil, Sessions et le Cockpit.",
      },
      {
        name: "Accueil",
        tagline: "« Un tap, c'est présent. »",
        description:
          "Cours du soir, parité Lead / Follow, statut payé ou à encaisser, listes d'attente — check-in en 1 clic sur tablette à l'entrée.",
      },
      {
        name: "Sessions & Calendrier studio",
        tagline: "« Une grille, zéro double réservation. »",
        description:
          "Trimestres, conflits prof/salle en rouge, calendrier multi-vues et locations privées avec buffers entre réservations.",
      },
      {
        name: "Cockpit $/m²",
        tagline: "« Des revenus recouvrables avec PayPal. »",
        description:
          "Yield par tier (régulier, étudiant, couple), profit par cours, heatmaps d'occupation et liste de risque churn — pas des chiffres au feeling.",
      },
      {
        name: "Dance Agentics",
        tagline: "« RitmoKit propose. Vous confirmez. »",
        description:
          "Waitlist et impayés se gèrent seuls. Soft capacity et relances churn : suggestions sur Accueil et Sessions — vous validez avant l'envoi.",
      },
      {
        name: "Paiement en ligne",
        tagline: "« Le PayPal de votre école, pas le nôtre. »",
        description:
          "Integration Hub dans Réglages → Intégrations : API publique headless, checkout PayPal et mode test → réel sur votre vitrine web.",
      },
      {
        name: "Cahier du prof",
        tagline: "« Salsa N1 — Semaine 3, prêt pour ce soir. »",
        description:
          "Plans de cours, figures, chorés, guides studio et vidéo — parcours Accueil nouveau prof et sécurité si besoin. Plus de fiches « recette ».",
      },
      {
        name: "Équipe & conformité",
        tagline: "« Instructeurs, Accueil, direction — un seul OS. »",
        description:
          "Quarts staff avec garde-fous CNESST, export paie Nethris/Payworks, convention de travail, Pulse culture et répertoire Élèves.",
      },
    ],
  },
  offer: {
    kicker: "Tarifs",
    title: "Des forfaits clairs. Du solo à l'entreprise multi-salles.",
    subtitle:
      "Tarifs indicatifs pour l'abonnement self-serve à venir. Aujourd'hui : déploiement Phase A pilote ou configuration clé en main avec Arsitech.",
    billing: {
      monthly: "Mensuel",
      annual: "Annuel",
      recommended: "Recommandé",
    },
    trialBadge: "Abonnement self-serve à venir",
    footnote:
      "Tarifs indicatifs — produit en pilote fondateur au Québec. L'essai gratuit et la facturation en ligne arrivent avec l'ouverture publique.",
    plans: [
      {
        id: "solo",
        name: "Solo / Studio",
        tagline: "1 studio · jusqu'à 150 élèves",
        badge: null,
        highlighted: false,
        monthly: {
          price: "79 $",
          suffix: "/ mois + tx",
          note: "Sans engagement, annulation à tout moment",
        },
        annual: {
          price: "59 $",
          suffix: "/ mois + tx",
          note: "Facturé annuellement",
          savings: "Économisez 240 $ / an",
        },
        features: [
          "1 studio / emplacement",
          "Grille Sessions, Accueil, Élèves & locations",
          "Parité Lead / Follow de base",
          "Cahier du prof (plans de cours & guides studio)",
          "Integration Hub PayPal + API publique",
        ],
        cta: "Bientôt disponible",
      },
      {
        id: "pro",
        name: "Pro / Multi-Studio",
        tagline: "Jusqu'à 3 studios · parité & équipe",
        badge: "Populaire",
        highlighted: true,
        monthly: {
          price: "199 $",
          suffix: "/ mois + tx",
          note: "Sans engagement, annulation à tout moment",
        },
        annual: {
          price: "149 $",
          suffix: "/ mois + tx",
          note: "Facturé annuellement",
          savings: "Économisez 600 $ / an",
        },
        features: [
          "Jusqu'à 3 studios / emplacements",
          "Moteur de parité Lead / Follow + waitlists par rôle",
          "Export paie équipe (Nethris / Payworks) + quarts CNESST",
          "Cockpit $/m² + heatmaps + promotion de créneaux",
          "Cahier du prof complet (figures, chorés, vidéo)",
          "Dance Agentics (waitlist & impayés auto)",
          "API publique complète",
        ],
        cta: "Bientôt disponible",
      },
      {
        id: "entreprise",
        name: "Entreprise / Multi-Salles",
        tagline: "5+ studios · opérations avancées",
        badge: "Multi-salles",
        highlighted: false,
        monthly: {
          price: "298 $",
          suffix: "/ mois + tx",
          note: "Licence réseau — valeur régulière affichée",
        },
        annual: {
          price: "224 $",
          suffix: "/ mois + tx",
          note: "Facturé annuellement",
          savings: "Économisez 888 $ / an",
        },
        features: [
          "5+ studios / multi-salles",
          "Matrice salles + locations privées",
          "Parité Lead / Follow avancée + listes d'attente",
          "Agentics + liste de risque churn",
          "Catalogue formation multi-studios",
          "Analytique financière ($/m², profit/cours)",
          "Support prioritaire + garde-fous CNESST",
        ],
        cta: "Bientôt disponible",
      },
    ],
    agency: {
      tag: "Configuration sur mesure (optionnelle)",
      name: "Accompagnement Arsitech",
      price: "Sur devis",
      description:
        "Pour les studios qui préfèrent un déploiement clé en main plutôt que l'intégration libre-service.",
      features: [
        "Configuration personnalisée et intégration RitmoKit complète",
        "Site web Next.js sur mesure (optionnel)",
        "Mise en place domaine, hébergement et paiements",
      ],
      cta: "Demander une soumission",
      poweredBy: "Propulsé par Arsitech",
    },
  },
  finalCta: {
    title: "Prêt à faire passer votre studio à l'étape supérieure ?",
    subtitle: "Rejoignez les studios qui ont remplacé le chaos par un cockpit.",
    cta: "Voir les tarifs",
  },
  footer: {
    tagline: "Le kit d'opérations pour écoles de danse.",
    poweredBy: "Propulsé par",
    languages: "Trilingue",
    contact: "Contact & support clientèle",
    rights: "Tous droits réservés.",
  },
};

const en: Dictionary = {
  meta: {
    title: "RitmoKit — The operations kit for dance schools",
    description:
      "Sessions, Lead / Follow parity, Accueil, room rentals, $/m² Cockpit, Teaching hub, Agentics, and PayPal — the operations kit for dance schools in Québec.",
  },
  nav: {
    problem: "The problem",
    features: "Features",
    pricing: "Pricing",
    bookDemo: "Coming soon",
    themeToggle: "Toggle theme",
    langSwitcher: "Change language",
  },
  hero: {
    badge: "The operations kit for dance schools",
    title: "Take back control of your",
    titleAccent: "dance studio.",
    subtitle:
      "Sessions, Lead / Follow parity, Accueil, room rentals, $/m² Cockpit, Teaching hub, and PayPal on your website — one source of truth. Phase A live with a pilot studio in Québec.",
    ctaPrimary: "Coming soon",
    ctaSecondary: "See pricing",
    cockpit: {
      title: "Studio Cockpit",
      live: "Live",
      parityRadar: "Parity Radar",
      leads: "Leads",
      follows: "Follows",
      balanced: "Balanced",
      waitlistOpened: "Waitlist opened",
      newRegistration: "New registration",
      classes: {
        salsa: "Salsa Lvl 2 · Mon 7pm",
        bachata: "Bachata Lvl 1 · Tue 8pm",
        kizomba: "Kizomba Fusion · Thu 9pm",
      },
    },
    stats: [
      { value: "< 5 min", label: "to publish a session" },
      { value: "FR · EN · ES", label: "native trilingual" },
      { value: "CA", label: "data hosted in Canada" },
    ],
  },
  problem: {
    kicker: "The problem",
    title:
      "You opened a studio to teach passion. Not to spend your evenings on Excel and WhatsApp.",
    subtitle: "The 4 silent killers eating your studio's profits:",
    killers: [
      {
        title: "The Accueil line at 6:55 pm",
        description:
          "Your team scans a paper sheet while students wait at the door — instead of welcoming them and keeping the floor moving.",
      },
      {
        title: "Lead / Follow imbalance",
        description:
          "Turning away motivated Follows because you're short on Leads — or discovering the gap only when class starts.",
      },
      {
        title: "Double entry: website + clipboard",
        description:
          "Registrations on your site, then re-keyed into Excel or Messenger. Two sources of truth that contradict each other every week.",
      },
      {
        title: "Yield numbers you can't trust",
        description:
          "Gut-feel revenue, spreadsheets and the till that don't match — no clear view of which class or tier (regular, student, couple) actually pays.",
      },
    ],
  },
  transformation: {
    kicker: "The transformation",
    title: "The elegant experience. Total automation.",
    before: "What you have today",
    after: "What you get with RitmoKit",
    rows: [
      {
        before: "Double entry: website + Excel",
        afterTitle: "Public API + PayPal on your site",
        afterDescription:
          "Registrations on your web storefront, payments confirmed in RitmoKit — one source of truth.",
      },
      {
        before: "Imbalance discovered at night",
        afterTitle: "Lead / Follow parity + role waitlists",
        afterDescription:
          "Real-time quotas, role-based waitlists, and auto-promotion when a spot opens up.",
      },
      {
        before: "Paper sheet at Accueil",
        afterTitle: "Tablet Accueil — 1-click check-in",
        afterDescription:
          "Tonight's classes, live Lead / Follow parity, paid or collect-payment status — your team welcomes instead of hunting names.",
      },
      {
        before: "Churn discovered too late",
        afterTitle: "Risk watchlist + Dance Agentics",
        afterDescription:
          "Waitlist and unpaid reminders run on their own. Churn outreach and soft capacity — you confirm or skip.",
      },
    ],
  },
  features: {
    kicker: "The 8 core pillars",
    title: "Everything a modern dance school needs to run.",
    subtitle:
      "From the Teaching hub to the $/m² Cockpit — what RitmoKit ships in the app today, not a generic calendar.",
    pillars: [
      {
        name: "Lead / Follow parity",
        tagline: "\u201cEvery role counts.\u201d",
        description:
          "Real-time quotas, role-based waitlists, and promotion when a spot opens — visible in Accueil, Sessions, and the Cockpit.",
      },
      {
        name: "Accueil",
        tagline: "\u201cOne tap, they're present.\u201d",
        description:
          "Tonight's classes, Lead / Follow parity, paid or collect-payment badges, waitlists — 1-click check-in on the front-desk tablet.",
      },
      {
        name: "Sessions & studio calendar",
        tagline: "\u201cOne grid, zero double-bookings.\u201d",
        description:
          "Quarters, red instructor/room conflicts, multi-view studio calendar, and private rentals with buffers between bookings.",
      },
      {
        name: "$/m² Cockpit",
        tagline: "\u201cRevenue you can reconcile with PayPal.\u201d",
        description:
          "Tier-aware yield (regular, student, couple), profit per class, occupancy heatmaps, and churn risk watchlist — not gut-feel numbers.",
      },
      {
        name: "Dance Agentics",
        tagline: "\u201cRitmoKit proposes. You confirm.\u201d",
        description:
          "Waitlist and unpaid reminders run on their own. Soft capacity and churn outreach — suggestions on Accueil and Sessions, you approve before send.",
      },
      {
        name: "Online payments",
        tagline: "\u201cYour school's PayPal, not ours.\u201d",
        description:
          "Integration Hub in Settings → Integrations: headless public API, PayPal checkout, and test → live mode on your web storefront.",
      },
      {
        name: "Teaching hub",
        tagline: "\u201cSalsa L1 — Week 3, ready for tonight.\u201d",
        description:
          "Class plans, moves, choreography, studio guides, and video — new-teacher onboarding and safety when needed. No more recipe cards.",
      },
      {
        name: "Team & compliance",
        tagline: "\u201cInstructors, front desk, leadership — one OS.\u201d",
        description:
          "Staff shifts with CNESST guardrails, Nethris/Payworks payroll export, workplace convention, Pulse culture, and Students directory.",
      },
    ],
  },
  offer: {
    kicker: "Pricing",
    title: "Clear tiers. From a single studio to a multi-room network.",
    subtitle:
      "Indicative pricing for upcoming self-serve billing. Today: Phase A pilot rollout or turnkey setup with Arsitech.",
    billing: {
      monthly: "Monthly",
      annual: "Annual",
      recommended: "Recommended",
    },
    trialBadge: "Self-serve billing coming soon",
    footnote:
      "Indicative pricing — product in founder pilot in Québec. Free trial and online billing arrive with public launch.",
    plans: [
      {
        id: "solo",
        name: "Solo / Studio",
        tagline: "1 studio · up to 150 students",
        badge: null,
        highlighted: false,
        monthly: {
          price: "$79",
          suffix: "/ month + tax",
          note: "No commitment, cancel anytime",
        },
        annual: {
          price: "$59",
          suffix: "/ month + tax",
          note: "Billed annually",
          savings: "Save $240 / year",
        },
        features: [
          "1 studio / location",
          "Sessions grid, Accueil, Students & rentals",
          "Basic Lead / Follow parity",
          "Teaching hub (class plans & studio guides)",
          "Integration Hub PayPal + public API",
        ],
        cta: "Coming soon",
      },
      {
        id: "pro",
        name: "Pro / Multi-Studio",
        tagline: "Up to 3 studios · parity & team",
        badge: "Popular",
        highlighted: true,
        monthly: {
          price: "$199",
          suffix: "/ month + tax",
          note: "No commitment, cancel anytime",
        },
        annual: {
          price: "$149",
          suffix: "/ month + tax",
          note: "Billed annually",
          savings: "Save $600 / year",
        },
        features: [
          "Up to 3 studios / locations",
          "Parity engine + role waitlists",
          "Staff payroll export (Nethris / Payworks) + CNESST shifts",
          "$/m² Cockpit + heatmaps + slot promotion",
          "Full Teaching hub (moves, choreography, video)",
          "Dance Agentics (auto waitlist & unpaid)",
          "Full public API",
        ],
        cta: "Coming soon",
      },
      {
        id: "entreprise",
        name: "Enterprise / Multi-Room",
        tagline: "5+ studios · advanced operations",
        badge: "Multi-room",
        highlighted: false,
        monthly: {
          price: "$298",
          suffix: "/ month + tax",
          note: "Network licence — listed regular value",
        },
        annual: {
          price: "$224",
          suffix: "/ month + tax",
          note: "Billed annually",
          savings: "Save $888 / year",
        },
        features: [
          "5+ studios / multi-room",
          "Room matrix + private rentals",
          "Advanced parity + waitlists",
          "Agentics + churn risk watchlist",
          "Multi-studio training catalog",
          "Financial analytics ($/m², profit/class)",
          "Priority support + CNESST guardrails",
        ],
        cta: "Coming soon",
      },
    ],
    agency: {
      tag: "Optional custom setup",
      name: "Arsitech onboarding",
      price: "Custom quote",
      description:
        "For studios that prefer a turnkey rollout instead of self-serve integration.",
      features: [
        "Custom RitmoKit setup and full integration",
        "Custom Next.js website (optional)",
        "Domain, hosting & payment setup",
      ],
      cta: "Request a quote",
      poweredBy: "Powered by Arsitech",
    },
  },
  finalCta: {
    title: "Ready to take your studio to the next level?",
    subtitle: "Join the studios that replaced chaos with a cockpit.",
    cta: "See pricing",
  },
  footer: {
    tagline: "The operations kit for dance schools.",
    poweredBy: "Powered by",
    languages: "Trilingual",
    contact: "Contact & customer support",
    rights: "All rights reserved.",
  },
};

const es: Dictionary = {
  meta: {
    title: "RitmoKit — El kit de operaciones para escuelas de danza",
    description:
      "Sesiones, paridad Lead / Follow, Accueil, alquiler de salas, Cockpit $/m², Guía del profe, Agentics y PayPal — el kit de operaciones para escuelas de danza en Québec.",
  },
  nav: {
    problem: "El problema",
    features: "Funciones",
    pricing: "Precios",
    bookDemo: "Próximamente",
    themeToggle: "Cambiar tema",
    langSwitcher: "Cambiar idioma",
  },
  hero: {
    badge: "El kit de operaciones para escuelas de danza",
    title: "Toma el control total de tu",
    titleAccent: "academia de baile.",
    subtitle:
      "Sesiones, paridad Lead / Follow, Accueil, alquiler de salas, Cockpit $/m², Guía del profe y PayPal en tu sitio web — una sola fuente de verdad. Fase A desplegada con un estudio piloto en Québec.",
    ctaPrimary: "Próximamente",
    ctaSecondary: "Ver precios",
    cockpit: {
      title: "Cabina del Estudio",
      live: "En vivo",
      parityRadar: "Radar de paridad",
      leads: "Leads",
      follows: "Follows",
      balanced: "Equilibrado",
      waitlistOpened: "Lista de espera abierta",
      newRegistration: "Nueva inscripción",
      classes: {
        salsa: "Salsa Niv. 2 · Lun 19h",
        bachata: "Bachata Niv. 1 · Mar 20h",
        kizomba: "Kizomba Fusión · Jue 21h",
      },
    },
    stats: [
      { value: "< 5 min", label: "para publicar una sesión" },
      { value: "FR · EN · ES", label: "trilingüe nativo" },
      { value: "CA", label: "datos alojados en Canadá" },
    ],
  },
  problem: {
    kicker: "El problema",
    title:
      "Abriste una academia para enseñar tu pasión. No para pasar las noches en Excel y WhatsApp.",
    subtitle: "Los 4 asesinos silenciosos que devoran las ganancias de tu academia:",
    killers: [
      {
        title: "La fila de Accueil a las 18 h 55",
        description:
          "Tu equipo busca nombres en una hoja mientras los alumnos esperan en la puerta — en lugar de recibirlos y mantener la pista en movimiento.",
      },
      {
        title: "Desequilibrio Lead / Follow",
        description:
          "Rechazar Follows motivados porque faltan Leads — o descubrir el desequilibrio solo cuando empieza la clase.",
      },
      {
        title: "Doble entrada: sitio web + libreta",
        description:
          "Inscripciones en tu sitio, luego reescritas en Excel o Messenger. Dos fuentes de verdad que se contradicen cada semana.",
      },
      {
        title: "Ingresos que no cuadran",
        description:
          "Cifras a ojo, Excel y caja que no coinciden — sin saber qué clase o tier (regular, estudiante, pareja) realmente rinde.",
      },
    ],
  },
  transformation: {
    kicker: "La transformación",
    title: "La experiencia elegante. La automatización total.",
    before: "Lo que tienes hoy",
    after: "Lo que obtienes con RitmoKit",
    rows: [
      {
        before: "Doble entrada: sitio web + Excel",
        afterTitle: "API pública + PayPal en tu sitio",
        afterDescription:
          "Inscripciones en tu vitrina web, pagos confirmados en RitmoKit — una sola fuente de verdad.",
      },
      {
        before: "Desequilibrio descubierto por la noche",
        afterTitle: "Paridad Lead / Follow + waitlists por rol",
        afterDescription:
          "Cuotas en tiempo real, listas de espera por rol y promoción auto cuando se libera un Lead.",
      },
      {
        before: "Hoja de papel en Accueil",
        afterTitle: "Accueil en tableta — presencia en 1 clic",
        afterDescription:
          "Clases de esta noche, paridad Lead / Follow, pagado o pendiente de cobro — tu equipo recibe en lugar de buscar nombres.",
      },
      {
        before: "Churn descubierto demasiado tarde",
        afterTitle: "Lista de riesgo + Dance Agentics",
        afterDescription:
          "Waitlist e impagos van solos. Soft capacity y seguimiento churn — tú confirmas o descartas.",
      },
    ],
  },
  features: {
    kicker: "Los 8 pilares",
    title: "Todo lo que una escuela de danza moderna necesita.",
    subtitle:
      "Desde la Guía del profe hasta el Cockpit $/m² — lo que RitmoKit entrega hoy en la app, no un calendario genérico.",
    pillars: [
      {
        name: "Paridad Lead / Follow",
        tagline: "«Cada rol cuenta.»",
        description:
          "Cuotas en tiempo real, waitlists por rol y promoción cuando se libera un lugar — visible en Accueil, Sessions y el Cockpit.",
      },
      {
        name: "Accueil",
        tagline: "«Un toque, está presente.»",
        description:
          "Clases de esta noche, paridad Lead / Follow, pagado o pendiente de cobro, waitlists — check-in en 1 clic en la tablet de recepción.",
      },
      {
        name: "Sesiones y calendario studio",
        tagline: "«Una grilla, cero reservas duplicadas.»",
        description:
          "Trimestres, conflictos prof/sala en rojo, calendario multi-vista y alquileres privados con buffers entre reservas.",
      },
      {
        name: "Cockpit $/m²",
        tagline: "«Ingresos conciliables con PayPal.»",
        description:
          "Yield por tier (regular, estudiante, pareja), beneficio por clase, mapas de calor y lista de riesgo churn — no cifras a ojo.",
      },
      {
        name: "Dance Agentics",
        tagline: "«RitmoKit propone. Tú confirmas.»",
        description:
          "Waitlist e impagos se gestionan solos. Soft capacity y seguimiento churn — sugerencias en Accueil y Sessions, tú apruebas antes del envío.",
      },
      {
        name: "Pago en línea",
        tagline: "«El PayPal de tu escuela, no el nuestro.»",
        description:
          "Integration Hub en Ajustes → Integraciones: API pública headless, checkout PayPal y modo prueba → real en tu vitrina web.",
      },
      {
        name: "Guía del profe",
        tagline: "«Salsa N1 — Semana 3, listo para esta noche.»",
        description:
          "Planes de clase, figuras, coreos, guías del estudio y video — bienvenida al profe nuevo y seguridad si hace falta. Sin fichas de «receta».",
      },
      {
        name: "Equipo y conformidad",
        tagline: "«Instructores, recepción, dirección — un solo OS.»",
        description:
          "Turnos staff con guardrails CNESST, export nómina Nethris/Payworks, convención de trabajo, Pulse cultura y directorio Alumnos.",
      },
    ],
  },
  offer: {
    kicker: "Precios",
    title: "Planes claros. Del estudio solo a la red multi-salas.",
    subtitle:
      "Precios indicativos para la facturación autoservicio próxima. Hoy: despliegue piloto Fase A o configuración llave en mano con Arsitech.",
    billing: {
      monthly: "Mensual",
      annual: "Anual",
      recommended: "Recomendado",
    },
    trialBadge: "Facturación autoservicio próximamente",
    footnote:
      "Precios indicativos — producto en piloto fundador en Québec. La prueba gratis y la facturación en línea llegan con el lanzamiento público.",
    plans: [
      {
        id: "solo",
        name: "Solo / Estudio",
        tagline: "1 estudio · hasta 150 alumnos",
        badge: null,
        highlighted: false,
        monthly: {
          price: "79 $",
          suffix: "/ mes + imp.",
          note: "Sin compromiso, cancela cuando quieras",
        },
        annual: {
          price: "59 $",
          suffix: "/ mes + imp.",
          note: "Facturación anual",
          savings: "Ahorra 240 $ / año",
        },
        features: [
          "1 estudio / sede",
          "Grilla Sesiones, Accueil, Alumnos y alquileres",
          "Paridad Lead / Follow básica",
          "Guía del profe (planes de clase y guías del estudio)",
          "Integration Hub PayPal + API pública",
        ],
        cta: "Próximamente",
      },
      {
        id: "pro",
        name: "Pro / Multi-Estudio",
        tagline: "Hasta 3 estudios · paridad y equipo",
        badge: "Popular",
        highlighted: true,
        monthly: {
          price: "199 $",
          suffix: "/ mes + imp.",
          note: "Sin compromiso, cancela cuando quieras",
        },
        annual: {
          price: "149 $",
          suffix: "/ mes + imp.",
          note: "Facturación anual",
          savings: "Ahorra 600 $ / año",
        },
        features: [
          "Hasta 3 estudios / sedes",
          "Motor de paridad + waitlists por rol",
          "Export nómina equipo (Nethris / Payworks) + turnos CNESST",
          "Cockpit $/m² + mapas de calor + promoción de horarios",
          "Guía del profe completa (figuras, coreos, video)",
          "Dance Agentics (waitlist e impagos auto)",
          "API pública completa",
        ],
        cta: "Próximamente",
      },
      {
        id: "entreprise",
        name: "Empresa / Multi-Salas",
        tagline: "5+ estudios · operaciones avanzadas",
        badge: "Multi-salas",
        highlighted: false,
        monthly: {
          price: "298 $",
          suffix: "/ mes + imp.",
          note: "Licencia de red — valor regular publicado",
        },
        annual: {
          price: "224 $",
          suffix: "/ mes + imp.",
          note: "Facturación anual",
          savings: "Ahorra 888 $ / año",
        },
        features: [
          "5+ estudios / multi-salas",
          "Matriz de salas + alquileres privados",
          "Paridad avanzada + listas de espera",
          "Agentics + lista de riesgo churn",
          "Catálogo de formación multi-estudios",
          "Analítica financiera ($/m², beneficio/clase)",
          "Soporte prioritario + guardrails CNESST",
        ],
        cta: "Próximamente",
      },
    ],
    agency: {
      tag: "Configuración personalizada (opcional)",
      name: "Acompañamiento Arsitech",
      price: "Cotización a medida",
      description:
        "Para academias que prefieren un despliegue llave en mano en lugar de la integración autoservicio.",
      features: [
        "Configuración personalizada e integración completa de RitmoKit",
        "Sitio web Next.js a medida (opcional)",
        "Configuración de dominio, alojamiento y pagos",
      ],
      cta: "Solicitar cotización",
      poweredBy: "Impulsado por Arsitech",
    },
  },
  finalCta: {
    title: "¿Listo para llevar tu academia al siguiente nivel?",
    subtitle: "Únete a las academias que reemplazaron el caos por una cabina de mando.",
    cta: "Ver precios",
  },
  footer: {
    tagline: "El kit de operaciones para escuelas de danza.",
    poweredBy: "Impulsado por",
    languages: "Trilingüe",
    contact: "Contacto y soporte al cliente",
    rights: "Todos los derechos reservados.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { fr, en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
