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
  proof: {
    items: Array<{ value: string; label: string }>;
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
    moreTitle: string;
    more: Array<{ name: string; description: string }>;
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
  demo: {
    kicker: string;
    title: string;
    subtitle: string;
    name: string;
    studio: string;
    email: string;
    city: string;
    students: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  checkout: {
    redirecting: string;
    error: string;
    missingKey: string;
    successTitle: string;
    successBody: string;
    successCta: string;
    cancelTitle: string;
    cancelBody: string;
    cancelCta: string;
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
    privacy: string;
    terms: string;
    rights: string;
  };
}

const fr: Dictionary = {
  meta: {
    title: "RitmoKit — Parité Lead / Follow pour écoles de danse",
    description:
      "Inscriptions sur votre site, sièges Lead / Follow en direct, couples, Interac et Stripe, Accueil tablette. Le kit d'opérations pour écoles de danse au Québec.",
  },
  nav: {
    problem: "Le problème",
    features: "Comment",
    pricing: "Tarifs",
    bookDemo: "Réserver 20 min",
    themeToggle: "Changer de thème",
    langSwitcher: "Changer de langue",
  },
  hero: {
    badge: "Fait pour la salsa, la bachata et la kizomba — pas pour un gym",
    title: "Arrêtez de refuser des Follows",
    titleAccent: "faute de Leads.",
    subtitle:
      "Sièges Lead / Follow en direct sur votre propre site. Les couples s'inscrivent ensemble. Interac, Stripe ou PayPal tombent dans le même registre que l'Accueil. Vous gardez votre vitrine — RitmoKit est le moteur.",
    ctaPrimary: "S'abonner — 79 $ / mois",
    ctaSecondary: "Réserver une visite de 20 min",
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
      { value: "Lead / Follow", label: "quotas et waitlists par rôle" },
      { value: "Votre site", label: "API + syllabus semaine N" },
      { value: "CA", label: "Interac · Stripe · PayPal" },
    ],
  },
  proof: {
    items: [
      { value: "1 clic", label: "Présent à l'Accueil" },
      { value: "2 sièges", label: "Couple, un seul paiement" },
      { value: "FR · EN · ES", label: "Trilingue natif" },
      { value: "Québec", label: "Construit avec une école pilote" },
    ],
  },
  problem: {
    kicker: "Le problème",
    title:
      "Vous avez ouvert un studio pour enseigner. Pas pour passer vos soirées sur Excel et WhatsApp.",
    subtitle: "Les 4 tueurs qui vident la salle et la caisse :",
    killers: [
      {
        title: "La file d'Accueil à 18 h 55",
        description:
          "L'équipe cherche des noms sur une feuille pendant que les élèves s'impatientent — au lieu d'accueillir et de faire tourner la salle.",
      },
      {
        title: "Le déséquilibre Lead / Follow",
        description:
          "Refuser des Follows motivés parce qu'il manque des Leads — ou découvrir le trou seulement quand la porte s'ouvre.",
      },
      {
        title: "Double saisie site + cahier",
        description:
          "Inscriptions sur le site, puis ressaisie dans Excel ou Messenger. Deux vérités qui se contredisent chaque semaine.",
      },
      {
        title: "L'argent qui n'arrive pas",
        description:
          "Interac sans code, PayPal d'un côté, caisse de l'autre. Impossible de savoir qui a payé avant le cours.",
      },
    ],
  },
  transformation: {
    kicker: "Ce qui change lundi",
    title: "Votre site reste le vôtre. Le registre devient un seul.",
    before: "Aujourd'hui",
    after: "Avec RitmoKit",
    rows: [
      {
        before: "Double saisie site web + Excel",
        afterTitle: "Inscriptions sur votre site",
        afterDescription:
          "L'élève s'inscrit chez vous. RitmoKit reçoit le siège, le paiement et la semaine du syllabus.",
      },
      {
        before: "Déséquilibre découvert le soir",
        afterTitle: "Parité + couples",
        afterDescription:
          "Waitlist par rôle. Un couple (Lead + Follow) s'inscrit ensemble sans casser l'équilibre.",
      },
      {
        before: "Feuille papier à l'Accueil",
        afterTitle: "Tablette — présent en 1 tap",
        afterDescription:
          "Cours du soir, parité en direct, payé ou à encaisser. La porte refuse un rôle déjà plein.",
      },
      {
        before: "Interac dans le chaos du Messenger",
        afterTitle: "Interac, Stripe ou PayPal",
        afterDescription:
          "Un code de réservation, un checkout carte, ou PayPal — le billet s'active au même endroit.",
      },
    ],
  },
  features: {
    kicker: "Trois raisons de quitter FLiiP",
    title: "Ce qu'un gym OS ne fera jamais pour une école de danse.",
    subtitle:
      "Le reste (calendrier, cahier du prof, multi-salles) est là. Ceci, c'est pourquoi on existe.",
    pillars: [
      {
        name: "Parité Lead / Follow",
        tagline: "Chaque rôle a un siège.",
        description:
          "Quotas en direct, waitlists par rôle, couples qui débloquent une place, et un conseiller d'inscription qui propose le bon soir.",
      },
      {
        name: "Accueil tablette",
        tagline: "Un tap, c'est présent.",
        description:
          "Recherche 3 lettres, soirée, walk-in bloqué si le rôle est plein. Votre équipe accueille au lieu de chercher des noms.",
      },
      {
        name: "Votre site, notre moteur",
        tagline: "Pas un nouveau site à gérer.",
        description:
          "API publique, syllabus de la semaine, Interac / Stripe / PayPal. La vitrine reste la vôtre.",
      },
    ],
    moreTitle: "Aussi dans chaque forfait Studio",
    more: [
      { name: "Sessions & salles", description: "Trimestres, conflits prof/salle, locations avec buffers." },
      { name: "Cahier du prof", description: "Semaine N, figures Lead / Follow, vidéo pour ce soir." },
      { name: "Équipe", description: "Invitations, rôles, changement d'école dans une même marque." },
    ],
  },
  offer: {
    kicker: "Tarifs",
    title: "La parité n'est pas un extra. Elle est dans Studio.",
    subtitle:
      "Paiement Stripe — vous êtes débité aujourd'hui, on ouvre votre école ensuite. Annuel = 2 mois offerts.",
    billing: {
      monthly: "Mensuel",
      annual: "Annuel",
      recommended: "2 mois offerts",
    },
    trialBadge: "Paiement sécurisé par Stripe",
    footnote:
      "Prix en CAD + taxes. Studio inclut parité, couples, Accueil, Interac/Stripe/PayPal et l'API publique. On vous écrit dans les 24 h pour brancher votre saison.",
    plans: [
      {
        id: "solo",
        name: "Studio",
        tagline: "1 école · jusqu'à 150 élèves",
        badge: null,
        highlighted: false,
        monthly: {
          price: "79 $",
          suffix: "/ mois + tx",
          note: "Sans engagement",
        },
        annual: {
          price: "59 $",
          suffix: "/ mois + tx",
          note: "Facturé 708 $ / an",
          savings: "Économisez 240 $ / an",
        },
        features: [
          "Parité Lead / Follow + waitlists par rôle",
          "Inscription couple (2 sièges, 1 paiement)",
          "Accueil tablette + walk-in intelligent",
          "API publique + syllabus sur votre site",
          "Interac, Stripe ou PayPal — votre compte",
          "Cahier du prof et calendrier salles",
        ],
        cta: "S'abonner avec Stripe",
      },
      {
        id: "pro",
        name: "Multi",
        tagline: "Jusqu'à 3 écoles",
        badge: "Le plus choisi",
        highlighted: true,
        monthly: {
          price: "199 $",
          suffix: "/ mois + tx",
          note: "Sans engagement",
        },
        annual: {
          price: "149 $",
          suffix: "/ mois + tx",
          note: "Facturé 1 788 $ / an",
          savings: "Économisez 600 $ / an",
        },
        features: [
          "Tout Studio, sur 3 emplacements",
          "Changement d'école pour la direction",
          "Cockpit revenus + heatmaps",
          "Export paie équipe",
          "Relances waitlist et impayés",
        ],
        cta: "S'abonner avec Stripe",
      },
      {
        id: "entreprise",
        name: "Réseau",
        tagline: "5+ écoles",
        badge: "Multi-salles",
        highlighted: false,
        monthly: {
          price: "298 $",
          suffix: "/ mois + tx",
          note: "Licence réseau",
        },
        annual: {
          price: "224 $",
          suffix: "/ mois + tx",
          note: "Facturé 2 688 $ / an",
          savings: "Économisez 888 $ / an",
        },
        features: [
          "Tout Multi, 5+ emplacements",
          "Matrice de salles + locations",
          "Analytique réseau",
          "Support prioritaire",
        ],
        cta: "S'abonner avec Stripe",
      },
    ],
    agency: {
      tag: "Déploiement clé en main (optionnel)",
      name: "On branche votre site pour vous",
      price: "Sur devis",
      description:
        "Si vous préférez qu'on configure saison, CORS et checkout plutôt que le self-serve.",
      features: [
        "Saison ACTIVE + origines du site",
        "Stripe / PayPal / Interac branchés",
        "Site Next.js sur mesure (optionnel)",
      ],
      cta: "Écrire à l'équipe",
      poweredBy: "Accompagnement Arsitech",
    },
  },
  demo: {
    kicker: "Visite studio",
    title: "20 minutes. Votre grille, pas une démo générique.",
    subtitle:
      "Dites-nous l'école et la ville. On vous montre la parité, l'Accueil et le checkout sur vos vrais horaires.",
    name: "Votre nom",
    studio: "Nom de l'école",
    email: "Courriel",
    city: "Ville",
    students: "Élèves approx. (optionnel)",
    submit: "Demander la visite",
    sending: "Envoi…",
    success: "Reçu. On vous écrit dans les 24 h pour caler 20 minutes.",
    error: "Envoi impossible — écrivez-nous à info@ritmokit.com.",
  },
  checkout: {
    redirecting: "Ouverture de Stripe…",
    error: "Paiement indisponible pour le moment. Réservez une visite ou écrivez à info@ritmokit.com.",
    missingKey: "Stripe n'est pas encore branché sur ce site. Réservez une visite — on active votre école à la main.",
    successTitle: "Paiement reçu. On ouvre votre école.",
    successBody:
      "Stripe nous a confirmé l'abonnement. Vous recevrez un courriel dans les 24 h pour brancher saison, site et Accueil.",
    successCta: "Retour à l'accueil",
    cancelTitle: "Paiement annulé",
    cancelBody: "Aucun montant n'a été débité. Vous pouvez réessayer ou réserver une visite de 20 min.",
    cancelCta: "Revoir les tarifs",
  },
  finalCta: {
    title: "Lundi soir, la file à 18 h 55 n'a plus à exister.",
    subtitle: "Abonnez-vous, ou montrez-nous votre grille en 20 minutes.",
    cta: "Réserver une visite",
  },
  footer: {
    tagline: "Le kit d'opérations pour écoles de danse.",
    poweredBy: "Propulsé par",
    languages: "Trilingue",
    contact: "info@ritmokit.com",
    privacy: "Confidentialité",
    terms: "Conditions",
    rights: "Tous droits réservés.",
  },
};

const en: Dictionary = {
  meta: {
    title: "RitmoKit — Lead / Follow parity for dance schools",
    description:
      "Enroll on your own website. Live Lead / Follow seats, couples, Interac and Stripe, tablet door. The operations kit for dance schools in Québec.",
  },
  nav: {
    problem: "The problem",
    features: "How it works",
    pricing: "Pricing",
    bookDemo: "Book 20 min",
    themeToggle: "Toggle theme",
    langSwitcher: "Change language",
  },
  hero: {
    badge: "Built for salsa, bachata, and kizomba — not a gym",
    title: "Stop turning Follows away",
    titleAccent: "because you are short on Leads.",
    subtitle:
      "Live Lead / Follow seats on your own website. Couples enroll together. Interac, Stripe, or PayPal land in the same roster your door checks in. Keep your site — RitmoKit is the engine.",
    ctaPrimary: "Subscribe — $79 / month",
    ctaSecondary: "Book a 20-min walkthrough",
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
      { value: "Lead / Follow", label: "role quotas and waitlists" },
      { value: "Your site", label: "API + week-N syllabus" },
      { value: "CA", label: "Interac · Stripe · PayPal" },
    ],
  },
  proof: {
    items: [
      { value: "1 tap", label: "Present at the door" },
      { value: "2 seats", label: "Couple, one payment" },
      { value: "FR · EN · ES", label: "Native trilingual" },
      { value: "Québec", label: "Built with a pilot school" },
    ],
  },
  problem: {
    kicker: "The problem",
    title: "You opened a studio to teach. Not to spend nights in Excel and WhatsApp.",
    subtitle: "The 4 killers emptying the floor and the till:",
    killers: [
      {
        title: "The door line at 6:55 pm",
        description:
          "Your team scans a paper sheet while students wait — instead of welcoming them and keeping the floor moving.",
      },
      {
        title: "Lead / Follow imbalance",
        description:
          "Turning away motivated Follows because you are short on Leads — or discovering the gap only when class starts.",
      },
      {
        title: "Double entry: website + clipboard",
        description:
          "Registrations on your site, then re-keyed into Excel or Messenger. Two truths that fight every week.",
      },
      {
        title: "Money that does not land",
        description:
          "Interac with no code, PayPal on one side, cash on the other. Nobody knows who paid before class.",
      },
    ],
  },
  transformation: {
    kicker: "What changes on Monday",
    title: "Keep your website. Get one roster.",
    before: "Today",
    after: "With RitmoKit",
    rows: [
      {
        before: "Double entry: website + Excel",
        afterTitle: "Enroll on your site",
        afterDescription:
          "The student books on your storefront. RitmoKit gets the seat, the payment, and this week's syllabus.",
      },
      {
        before: "Imbalance discovered at night",
        afterTitle: "Parity + couples",
        afterDescription:
          "Role waitlists. A couple (Lead + Follow) enrolls together without breaking the floor.",
      },
      {
        before: "Paper sheet at the door",
        afterTitle: "Tablet — 1-tap present",
        afterDescription:
          "Tonight's classes, live parity, paid or collect. The door will not overfill a role.",
      },
      {
        before: "Interac lost in Messenger",
        afterTitle: "Interac, Stripe, or PayPal",
        afterDescription:
          "A booking code, a card checkout, or PayPal — the ticket activates in the same place.",
      },
    ],
  },
  features: {
    kicker: "Three reasons to leave a gym OS",
    title: "What a gym OS will never do for a dance school.",
    subtitle: "Calendar, teaching hub, and multi-room are included. This is why we exist.",
    pillars: [
      {
        name: "Lead / Follow parity",
        tagline: "Every role has a seat.",
        description:
          "Live quotas, role waitlists, couples who unlock a spot, and an inscription advisor that picks the right night.",
      },
      {
        name: "Tablet door",
        tagline: "One tap, they're present.",
        description:
          "3-letter search, soirée mode, walk-in blocked when a role is full. Your team welcomes instead of hunting names.",
      },
      {
        name: "Your site, our engine",
        tagline: "Not another website to run.",
        description:
          "Public API, this week's syllabus, Interac / Stripe / PayPal. The storefront stays yours.",
      },
    ],
    moreTitle: "Also in every Studio plan",
    more: [
      { name: "Sessions & rooms", description: "Seasons, instructor/room conflicts, rentals with buffers." },
      { name: "Teaching hub", description: "Week N, Lead / Follow focus, video for tonight." },
      { name: "Team", description: "Invites, roles, school switcher inside one brand." },
    ],
  },
  offer: {
    kicker: "Pricing",
    title: "Parity is not an add-on. It ships in Studio.",
    subtitle:
      "Stripe checkout — you pay today, we open your school next. Annual = 2 months free.",
    billing: {
      monthly: "Monthly",
      annual: "Annual",
      recommended: "2 months free",
    },
    trialBadge: "Secure checkout with Stripe",
    footnote:
      "Prices in CAD + tax. Studio includes parity, couples, door, Interac/Stripe/PayPal, and the public API. We email you within 24h to connect your season.",
    plans: [
      {
        id: "solo",
        name: "Studio",
        tagline: "1 school · up to 150 students",
        badge: null,
        highlighted: false,
        monthly: {
          price: "$79",
          suffix: "/ month + tax",
          note: "Cancel anytime",
        },
        annual: {
          price: "$59",
          suffix: "/ month + tax",
          note: "Billed $708 / year",
          savings: "Save $240 / year",
        },
        features: [
          "Lead / Follow parity + role waitlists",
          "Couple enroll (2 seats, 1 payment)",
          "Tablet door + smart walk-in",
          "Public API + syllabus on your site",
          "Interac, Stripe, or PayPal — your account",
          "Teaching hub and room calendar",
        ],
        cta: "Subscribe with Stripe",
      },
      {
        id: "pro",
        name: "Multi",
        tagline: "Up to 3 schools",
        badge: "Most chosen",
        highlighted: true,
        monthly: {
          price: "$199",
          suffix: "/ month + tax",
          note: "Cancel anytime",
        },
        annual: {
          price: "$149",
          suffix: "/ month + tax",
          note: "Billed $1,788 / year",
          savings: "Save $600 / year",
        },
        features: [
          "Everything in Studio, 3 locations",
          "School switcher for leadership",
          "Yield cockpit + heatmaps",
          "Staff payroll export",
          "Waitlist and unpaid follow-ups",
        ],
        cta: "Subscribe with Stripe",
      },
      {
        id: "entreprise",
        name: "Network",
        tagline: "5+ schools",
        badge: "Multi-room",
        highlighted: false,
        monthly: {
          price: "$298",
          suffix: "/ month + tax",
          note: "Network licence",
        },
        annual: {
          price: "$224",
          suffix: "/ month + tax",
          note: "Billed $2,688 / year",
          savings: "Save $888 / year",
        },
        features: [
          "Everything in Multi, 5+ locations",
          "Room matrix + private rentals",
          "Network analytics",
          "Priority support",
        ],
        cta: "Subscribe with Stripe",
      },
    ],
    agency: {
      tag: "Optional turnkey setup",
      name: "We wire your site for you",
      price: "Custom quote",
      description: "If you want us to set season, CORS, and checkout instead of self-serve.",
      features: [
        "ACTIVE season + site origins",
        "Stripe / PayPal / Interac connected",
        "Custom Next.js site (optional)",
      ],
      cta: "Email the team",
      poweredBy: "Arsitech onboarding",
    },
  },
  demo: {
    kicker: "Studio walkthrough",
    title: "20 minutes. Your grid, not a generic demo.",
    subtitle:
      "Tell us the school and the city. We show parity, the door, and checkout on your real timetable.",
    name: "Your name",
    studio: "School name",
    email: "Email",
    city: "City",
    students: "Approx. students (optional)",
    submit: "Request the walkthrough",
    sending: "Sending…",
    success: "Got it. We email you within 24h to book 20 minutes.",
    error: "Could not send — write us at info@ritmokit.com.",
  },
  checkout: {
    redirecting: "Opening Stripe…",
    error: "Checkout is unavailable right now. Book a walkthrough or email info@ritmokit.com.",
    missingKey: "Stripe is not connected on this site yet. Book a walkthrough — we will open your school by hand.",
    successTitle: "Payment received. We will open your school.",
    successBody:
      "Stripe confirmed the subscription. You will get an email within 24h to connect season, site, and door.",
    successCta: "Back to home",
    cancelTitle: "Payment cancelled",
    cancelBody: "Nothing was charged. Try again or book a 20-min walkthrough.",
    cancelCta: "See pricing",
  },
  finalCta: {
    title: "Monday at 6:55 pm does not have to be a line.",
    subtitle: "Subscribe, or show us your grid in 20 minutes.",
    cta: "Book a walkthrough",
  },
  footer: {
    tagline: "The operations kit for dance schools.",
    poweredBy: "Powered by",
    languages: "Trilingual",
    contact: "info@ritmokit.com",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
  },
};

const es: Dictionary = {
  meta: {
    title: "RitmoKit — Paridad Lead / Follow para escuelas de danza",
    description:
      "Inscripciones en tu web. Asientos Lead / Follow en vivo, parejas, Interac y Stripe, recepción en tablet. El kit de operaciones para escuelas de danza en Québec.",
  },
  nav: {
    problem: "El problema",
    features: "Cómo funciona",
    pricing: "Precios",
    bookDemo: "Reservar 20 min",
    themeToggle: "Cambiar tema",
    langSwitcher: "Cambiar idioma",
  },
  hero: {
    badge: "Hecho para salsa, bachata y kizomba — no para un gym",
    title: "Deja de rechazar Follows",
    titleAccent: "porque faltan Leads.",
    subtitle:
      "Asientos Lead / Follow en vivo en tu propia web. Las parejas se inscriben juntas. Interac, Stripe o PayPal llegan al mismo roster que la puerta. Tu sitio se queda — RitmoKit es el motor.",
    ctaPrimary: "Suscribirse — 79 $ / mes",
    ctaSecondary: "Reservar una visita de 20 min",
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
      { value: "Lead / Follow", label: "cupos y waitlists por rol" },
      { value: "Tu web", label: "API + temario semana N" },
      { value: "CA", label: "Interac · Stripe · PayPal" },
    ],
  },
  proof: {
    items: [
      { value: "1 toque", label: "Presente en la puerta" },
      { value: "2 asientos", label: "Pareja, un solo pago" },
      { value: "FR · EN · ES", label: "Trilingüe nativo" },
      { value: "Québec", label: "Hecho con una escuela piloto" },
    ],
  },
  problem: {
    kicker: "El problema",
    title: "Abriste una academia para enseñar. No para pasar las noches en Excel y WhatsApp.",
    subtitle: "Los 4 asesinos que vacían la pista y la caja:",
    killers: [
      {
        title: "La fila de recepción a las 18:55",
        description:
          "El equipo busca nombres en una hoja mientras los alumnos esperan — en lugar de recibirlos.",
      },
      {
        title: "Desequilibrio Lead / Follow",
        description:
          "Rechazar Follows motivados porque faltan Leads — o descubrir el hueco solo cuando empieza la clase.",
      },
      {
        title: "Doble entrada: web + libreta",
        description:
          "Inscripciones en tu sitio, luego reescritas en Excel o Messenger. Dos verdades que pelean cada semana.",
      },
      {
        title: "El dinero que no llega",
        description:
          "Interac sin código, PayPal a un lado, caja al otro. Nadie sabe quién pagó antes de la clase.",
      },
    ],
  },
  transformation: {
    kicker: "Lo que cambia el lunes",
    title: "Tu web se queda. El roster se unifica.",
    before: "Hoy",
    after: "Con RitmoKit",
    rows: [
      {
        before: "Doble entrada: web + Excel",
        afterTitle: "Inscripción en tu sitio",
        afterDescription:
          "El alumno reserva en tu vitrina. RitmoKit recibe el asiento, el pago y el temario de la semana.",
      },
      {
        before: "Desequilibrio descubierto de noche",
        afterTitle: "Paridad + parejas",
        afterDescription:
          "Waitlists por rol. Una pareja (Lead + Follow) se inscribe junta sin romper el piso.",
      },
      {
        before: "Hoja de papel en la puerta",
        afterTitle: "Tablet — presente en 1 toque",
        afterDescription:
          "Clases de esta noche, paridad en vivo, pagado o por cobrar. La puerta no llena de más un rol.",
      },
      {
        before: "Interac perdido en Messenger",
        afterTitle: "Interac, Stripe o PayPal",
        afterDescription:
          "Un código, un checkout con tarjeta o PayPal — el ticket se activa en el mismo lugar.",
      },
    ],
  },
  features: {
    kicker: "Tres razones para dejar un OS de gym",
    title: "Lo que un OS de gym nunca hará por una escuela de danza.",
    subtitle: "Calendario, guía del profe y multi-sala están. Esto es por qué existimos.",
    pillars: [
      {
        name: "Paridad Lead / Follow",
        tagline: "Cada rol tiene un asiento.",
        description:
          "Cupos en vivo, waitlists por rol, parejas que desbloquean un lugar, y un consejero que elige la noche correcta.",
      },
      {
        name: "Puerta en tablet",
        tagline: "Un toque, está presente.",
        description:
          "Búsqueda de 3 letras, modo soirée, walk-in bloqueado si el rol está lleno. El equipo recibe en lugar de buscar nombres.",
      },
      {
        name: "Tu web, nuestro motor",
        tagline: "No otro sitio que mantener.",
        description:
          "API pública, temario de la semana, Interac / Stripe / PayPal. La vitrina es tuya.",
      },
    ],
    moreTitle: "También en cada plan Studio",
    more: [
      { name: "Sesiones y salas", description: "Temporadas, conflictos profe/sala, alquileres con buffers." },
      { name: "Guía del profe", description: "Semana N, foco Lead / Follow, video para esta noche." },
      { name: "Equipo", description: "Invitaciones, roles, cambio de escuela en una misma marca." },
    ],
  },
  offer: {
    kicker: "Precios",
    title: "La paridad no es un extra. Viene en Studio.",
    subtitle:
      "Checkout Stripe — pagas hoy, abrimos tu escuela después. Anual = 2 meses gratis.",
    billing: {
      monthly: "Mensual",
      annual: "Anual",
      recommended: "2 meses gratis",
    },
    trialBadge: "Pago seguro con Stripe",
    footnote:
      "Precios en CAD + impuestos. Studio incluye paridad, parejas, puerta, Interac/Stripe/PayPal y la API. Te escribimos en 24 h para conectar la temporada.",
    plans: [
      {
        id: "solo",
        name: "Studio",
        tagline: "1 escuela · hasta 150 alumnos",
        badge: null,
        highlighted: false,
        monthly: {
          price: "79 $",
          suffix: "/ mes + imp.",
          note: "Sin compromiso",
        },
        annual: {
          price: "59 $",
          suffix: "/ mes + imp.",
          note: "Facturado 708 $ / año",
          savings: "Ahorra 240 $ / año",
        },
        features: [
          "Paridad Lead / Follow + waitlists por rol",
          "Inscripción en pareja (2 asientos, 1 pago)",
          "Puerta tablet + walk-in inteligente",
          "API pública + temario en tu web",
          "Interac, Stripe o PayPal — tu cuenta",
          "Guía del profe y calendario de salas",
        ],
        cta: "Suscribirse con Stripe",
      },
      {
        id: "pro",
        name: "Multi",
        tagline: "Hasta 3 escuelas",
        badge: "El más elegido",
        highlighted: true,
        monthly: {
          price: "199 $",
          suffix: "/ mes + imp.",
          note: "Sin compromiso",
        },
        annual: {
          price: "149 $",
          suffix: "/ mes + imp.",
          note: "Facturado 1 788 $ / año",
          savings: "Ahorra 600 $ / año",
        },
        features: [
          "Todo Studio, 3 sedes",
          "Cambio de escuela para dirección",
          "Cockpit de ingresos + mapas de calor",
          "Export de nómina",
          "Seguimiento de waitlist e impagos",
        ],
        cta: "Suscribirse con Stripe",
      },
      {
        id: "entreprise",
        name: "Red",
        tagline: "5+ escuelas",
        badge: "Multi-salas",
        highlighted: false,
        monthly: {
          price: "298 $",
          suffix: "/ mes + imp.",
          note: "Licencia de red",
        },
        annual: {
          price: "224 $",
          suffix: "/ mes + imp.",
          note: "Facturado 2 688 $ / año",
          savings: "Ahorra 888 $ / año",
        },
        features: [
          "Todo Multi, 5+ sedes",
          "Matriz de salas + alquileres",
          "Analítica de red",
          "Soporte prioritario",
        ],
        cta: "Suscribirse con Stripe",
      },
    ],
    agency: {
      tag: "Puesta en marcha (opcional)",
      name: "Conectamos tu web por ti",
      price: "Cotización",
      description: "Si prefieres que configuremos temporada, CORS y checkout.",
      features: [
        "Temporada ACTIVE + orígenes del sitio",
        "Stripe / PayPal / Interac conectados",
        "Sitio Next.js a medida (opcional)",
      ],
      cta: "Escribir al equipo",
      poweredBy: "Acompañamiento Arsitech",
    },
  },
  demo: {
    kicker: "Visita al estudio",
    title: "20 minutos. Tu grilla, no una demo genérica.",
    subtitle:
      "Dinos la escuela y la ciudad. Mostramos paridad, puerta y checkout sobre tus horarios reales.",
    name: "Tu nombre",
    studio: "Nombre de la escuela",
    email: "Correo",
    city: "Ciudad",
    students: "Alumnos aprox. (opcional)",
    submit: "Pedir la visita",
    sending: "Enviando…",
    success: "Recibido. Te escribimos en 24 h para agendar 20 minutos.",
    error: "No se pudo enviar — escríbenos a info@ritmokit.com.",
  },
  checkout: {
    redirecting: "Abriendo Stripe…",
    error: "El pago no está disponible. Reserva una visita o escribe a info@ritmokit.com.",
    missingKey: "Stripe aún no está conectado en este sitio. Reserva una visita — abrimos tu escuela a mano.",
    successTitle: "Pago recibido. Abriremos tu escuela.",
    successBody:
      "Stripe confirmó la suscripción. Recibirás un correo en 24 h para conectar temporada, web y puerta.",
    successCta: "Volver al inicio",
    cancelTitle: "Pago cancelado",
    cancelBody: "No se cobró nada. Puedes reintentar o reservar 20 minutos.",
    cancelCta: "Ver precios",
  },
  finalCta: {
    title: "El lunes a las 18:55 no tiene que ser una fila.",
    subtitle: "Suscríbete, o muéstranos tu grilla en 20 minutos.",
    cta: "Reservar una visita",
  },
  footer: {
    tagline: "El kit de operaciones para escuelas de danza.",
    poweredBy: "Impulsado por",
    languages: "Trilingüe",
    contact: "info@ritmokit.com",
    privacy: "Privacidad",
    terms: "Términos",
    rights: "Todos los derechos reservados.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { fr, en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
