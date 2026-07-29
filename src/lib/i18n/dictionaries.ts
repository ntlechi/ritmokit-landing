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
      "Sessions, parité Lead/Follow, Accueil sur tablette, locations de salles, Cockpit $/m² et paiements PayPal sur votre site — le kit d'opérations conçu pour les écoles de danse au Québec et ailleurs.",
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
      "Sessions, parité Lead/Follow, Accueil sur tablette, locations de salles, Cockpit $/m² et paiements PayPal sur votre site — une seule source de vérité pour votre école de danse.",
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
        title: "Le déséquilibre lead / follow",
        description:
          "Refuser des follows motivés parce qu'il manque des leads — ou découvrir le déséquilibre seulement quand la porte du studio s'ouvre.",
      },
      {
        title: "Double saisie site web + cahier",
        description:
          "Inscriptions sur le site, puis ressaisie dans Excel ou Messenger. Deux sources de vérité qui se contredisent chaque semaine.",
      },
      {
        title: "La paie manuelle des profs",
        description:
          "Passer des heures à calculer taux horaires, forfaits par cours et commissions de drop-in… sur papier, chaque période de paie.",
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
        afterTitle: "Parité Lead/Follow + waitlists par rôle",
        afterDescription:
          "Quotas en temps réel, listes d'attente par rôle et promotion auto quand un Lead se libère.",
      },
      {
        before: "Feuille papier à l'Accueil",
        afterTitle: "Accueil tablette — présence en 1 clic",
        afterDescription:
          "Cours du jour, parité en direct et check-in instantané — votre équipe accueille au lieu de chercher des noms.",
      },
      {
        before: "Churn découvert trop tard",
        afterTitle: "Liste de risque + Dance Agentics",
        afterDescription:
          "RitmoKit propose relances et alertes — vous confirmez avant que l'action s'exécute.",
      },
    ],
  },
  features: {
    kicker: "Les 6 piliers",
    title: "Tout ce qu'une école de danse moderne doit maîtriser.",
    subtitle:
      "De la publication de session aux locations de salles, l'Accueil sur tablette, la parité Lead/Follow et les paiements sur votre site.",
    pillars: [
      {
        name: "Parité Lead / Follow",
        tagline: "« Ne refusez plus jamais un élève. »",
        description:
          "Radar en temps réel, waitlists par rôle et promotion automatique quand un Lead se libère — fini le « on manque de Follows » à 18 h 55.",
      },
      {
        name: "Accueil sur tablette",
        tagline: "« La file du lundi soir, réglée en un tap. »",
        description:
          "Cours du jour, parité en direct et check-in 1-clic. Votre équipe accueille les élèves au lieu de chercher des noms sur une feuille.",
      },
      {
        name: "Sessions & locations de salles",
        tagline: "« Cours, privés et locations — zéro conflit. »",
        description:
          "Grille trimestrielle multi-salles : les cours bloquent les créneaux, les locations privées respectent les buffers. Conflits profs/salles visibles avant publication.",
      },
      {
        name: "Cockpit $/m²",
        tagline: "« Connaissez la valeur exacte de chaque pied carré. »",
        description:
          "Revenus par m², heatmaps d'occupation et plages mortes — promouvez un créneau libre pour un privé ou une location de salle directement depuis le cockpit.",
      },
      {
        name: "Dance Agentics",
        tagline: "« RitmoKit propose. Vous confirmez. »",
        description:
          "Relances, promotions waitlist et alertes churn proposées par l'agent — aucune action autonome sans votre validation.",
      },
      {
        name: "Integration Hub",
        tagline: "« PayPal sur votre site. Zéro double saisie. »",
        description:
          "Widgets d'inscription, API publique headless et paiements PayPal sur la vitrine de votre studio — RitmoKit reste le moteur.",
      },
    ],
  },
  offer: {
    kicker: "Tarifs",
    title: "Des forfaits clairs. Du solo à l'entreprise multi-salles.",
    subtitle:
      "Choisissez le niveau qui correspond à votre studio — ou à votre réseau. Intégration libre-service via API et widgets, ou configuration clé en main avec Arsitech.",
    billing: {
      monthly: "Mensuel",
      annual: "Annuel",
      recommended: "Recommandé",
    },
    trialBadge: "Essai gratuit de 14 jours",
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
          "Grille Sessions, Accueil & locations de salles",
          "Parité Lead/Follow de base",
          "Integration Hub PayPal + widgets",
          "API publique",
        ],
        cta: "Bientôt disponible",
      },
      {
        id: "pro",
        name: "Pro / Multi-Studio",
        tagline: "Jusqu'à 3 studios · parité & paie",
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
          "Moteur de parité + waitlists par rôle",
          "Paie instructeurs (horaire, forfait, commission)",
          "Cockpit $/m² + heatmaps + promotion de créneaux",
          "Dance Agentics (propositions confirmées)",
          "API + widgets complets",
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
          "Parité avancée + listes d'attente",
          "Agentics + liste de risque churn",
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
      "Sessions, Lead/Follow parity, tablet Accueil check-in, room rentals, $/m² Cockpit, and PayPal on your website — the operations kit built for dance schools in Québec and beyond.",
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
      "Sessions, Lead/Follow parity, tablet Accueil check-in, room rentals, $/m² Cockpit, and PayPal on your website — one source of truth for your dance school.",
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
        title: "Lead / follow imbalance",
        description:
          "Turning away motivated follows because you're short on leads — or discovering the gap only when class starts.",
      },
      {
        title: "Double entry: website + clipboard",
        description:
          "Registrations on your site, then re-keyed into Excel or Messenger. Two sources of truth that contradict each other every week.",
      },
      {
        title: "Payroll headaches",
        description:
          "Spending hours calculating hourly rates, flat fees, and drop-in commissions on paper — every pay period.",
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
        afterTitle: "Lead/Follow parity + role waitlists",
        afterDescription:
          "Real-time quotas, role-based waitlists, and auto-promotion when a Lead spot opens up.",
      },
      {
        before: "Paper sheet at Accueil",
        afterTitle: "Tablet Accueil — 1-click check-in",
        afterDescription:
          "Today's classes, live parity, and instant check-in — your team welcomes instead of hunting names.",
      },
      {
        before: "Churn discovered too late",
        afterTitle: "Risk watchlist + Dance Agentics",
        afterDescription:
          "RitmoKit proposes follow-ups and alerts — you confirm before anything runs.",
      },
    ],
  },
  features: {
    kicker: "The 6 core pillars",
    title: "Everything a modern dance school needs to run.",
    subtitle:
      "From session publishing and room rentals to tablet Accueil check-in, Lead/Follow parity, and payments on your website.",
    pillars: [
      {
        name: "Lead / Follow parity",
        tagline: "\u201cNever turn away a student again.\u201d",
        description:
          "Real-time radar, role-based waitlists, and auto-promotion when a Lead opens up — no more \u201cwe're short on Follows\u201d at 6:55 pm.",
      },
      {
        name: "Tablet Accueil check-in",
        tagline: "\u201cMonday night line, solved in one tap.\u201d",
        description:
          "Today's classes, live parity, and 1-click check-in. Your team greets students instead of scanning a paper list.",
      },
      {
        name: "Sessions & room rentals",
        tagline: "\u201cClasses, privates, and rentals — zero conflicts.\u201d",
        description:
          "Multi-room quarterly grid: classes block slots, private rentals respect buffers. Instructor and room clashes visible before you publish.",
      },
      {
        name: "$/m² Cockpit",
        tagline: "\u201cKnow the exact dollar value of every square foot.\u201d",
        description:
          "Revenue per m², occupancy heatmaps, and dead slots — promote an open slot for a private lesson or room rental right from the cockpit.",
      },
      {
        name: "Dance Agentics",
        tagline: "\u201cRitmoKit proposes. You confirm.\u201d",
        description:
          "Follow-ups, waitlist promotions, and churn alerts proposed by the agent — nothing runs without your approval.",
      },
      {
        name: "Integration Hub",
        tagline: "\u201cPayPal on your site. Zero double entry.\u201d",
        description:
          "Enrollment widgets, headless public API, and PayPal on your studio storefront — RitmoKit stays the engine.",
      },
    ],
  },
  offer: {
    kicker: "Pricing",
    title: "Clear tiers. From a single studio to a multi-room network.",
    subtitle:
      "Pick the level that matches your studio — or your network. Self-serve via API and widgets, or turnkey setup with Arsitech.",
    billing: {
      monthly: "Monthly",
      annual: "Annual",
      recommended: "Recommended",
    },
    trialBadge: "14-day free trial",
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
          "Sessions grid, Accueil & room rentals",
          "Basic Lead/Follow parity",
          "Integration Hub PayPal + widgets",
          "Public API",
        ],
        cta: "Coming soon",
      },
      {
        id: "pro",
        name: "Pro / Multi-Studio",
        tagline: "Up to 3 studios · parity & payroll",
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
          "Instructor payroll (hourly, flat, commission)",
          "$/m² Cockpit + heatmaps + slot promotion",
          "Dance Agentics (confirmed proposals)",
          "Full API + widgets",
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
      "Sesiones, paridad Lead/Follow, Accueil en tableta, alquiler de salas, Cockpit $/m² y PayPal en tu sitio web — el kit de operaciones diseñado para escuelas de danza en Québec y más allá.",
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
      "Sesiones, paridad Lead/Follow, Accueil en tableta, alquiler de salas, Cockpit $/m² y PayPal en tu sitio web — una sola fuente de verdad para tu escuela de danza.",
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
        title: "Desequilibrio lead / follow",
        description:
          "Rechazar follows motivados porque faltan leads — o descubrir el desequilibrio solo cuando empieza la clase.",
      },
      {
        title: "Doble entrada: sitio web + libreta",
        description:
          "Inscripciones en tu sitio, luego reescritas en Excel o Messenger. Dos fuentes de verdad que se contradicen cada semana.",
      },
      {
        title: "Dolores de cabeza con la nómina",
        description:
          "Pasar horas calculando tarifas por hora, montos fijos y comisiones de clases sueltas… en papel, cada período de pago.",
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
        afterTitle: "Paridad Lead/Follow + waitlists por rol",
        afterDescription:
          "Cuotas en tiempo real, listas de espera por rol y promoción auto cuando se libera un Lead.",
      },
      {
        before: "Hoja de papel en Accueil",
        afterTitle: "Accueil en tableta — presencia en 1 clic",
        afterDescription:
          "Clases del día, paridad en vivo y check-in instantáneo — tu equipo recibe en lugar de buscar nombres.",
      },
      {
        before: "Churn descubierto demasiado tarde",
        afterTitle: "Lista de riesgo + Dance Agentics",
        afterDescription:
          "RitmoKit propone seguimientos y alertas — tú confirmas antes de que se ejecute cualquier acción.",
      },
    ],
  },
  features: {
    kicker: "Los 6 pilares",
    title: "Todo lo que una escuela de danza moderna necesita.",
    subtitle:
      "Desde la publicación de sesiones y alquiler de salas hasta Accueil en tableta, paridad Lead/Follow y pagos en tu sitio web.",
    pillars: [
      {
        name: "Paridad Lead / Follow",
        tagline: "«No vuelvas a rechazar a un alumno.»",
        description:
          "Radar en tiempo real, waitlists por rol y promoción automática cuando se libera un Lead — se acabó el «faltan Follows» a las 18 h 55.",
      },
      {
        name: "Accueil en tableta",
        tagline: "«La fila del lunes por la noche, resuelta en un toque.»",
        description:
          "Clases del día, paridad en vivo y check-in en 1 clic. Tu equipo recibe a los alumnos en lugar de escanear una hoja.",
      },
      {
        name: "Sesiones y alquiler de salas",
        tagline: "«Clases, privados y alquileres — cero conflictos.»",
        description:
          "Grilla trimestral multi-salas: las clases bloquean horarios, los alquileres privados respetan buffers. Conflictos de profs/salas visibles antes de publicar.",
      },
      {
        name: "Cockpit $/m²",
        tagline: "«Conoce el valor exacto de cada metro cuadrado.»",
        description:
          "Ingresos por m², mapas de calor de ocupación y horarios muertos — promueve un hueco libre para clase privada o alquiler de sala desde el cockpit.",
      },
      {
        name: "Dance Agentics",
        tagline: "«RitmoKit propone. Tú confirmas.»",
        description:
          "Seguimientos, promociones de waitlist y alertas de churn propuestas por el agente — nada se ejecuta sin tu aprobación.",
      },
      {
        name: "Integration Hub",
        tagline: "«PayPal en tu sitio. Cero doble entrada.»",
        description:
          "Widgets de inscripción, API pública headless y PayPal en la vitrina de tu estudio — RitmoKit sigue siendo el motor.",
      },
    ],
  },
  offer: {
    kicker: "Precios",
    title: "Planes claros. Del estudio solo a la red multi-salas.",
    subtitle:
      "Elige el nivel que corresponde a tu academia — o a tu red. Integración autoservicio vía API y widgets, o despliegue llave en mano con Arsitech.",
    billing: {
      monthly: "Mensual",
      annual: "Anual",
      recommended: "Recomendado",
    },
    trialBadge: "Prueba gratis de 14 días",
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
          "Grilla Sesiones, Accueil y alquiler de salas",
          "Paridad Lead/Follow básica",
          "Integration Hub PayPal + widgets",
          "API pública",
        ],
        cta: "Próximamente",
      },
      {
        id: "pro",
        name: "Pro / Multi-Estudio",
        tagline: "Hasta 3 estudios · paridad y nómina",
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
          "Nómina de instructores (hora, fijo, comisión)",
          "Cockpit $/m² + mapas de calor + promoción de horarios",
          "Dance Agentics (propuestas confirmadas)",
          "API + widgets completos",
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
