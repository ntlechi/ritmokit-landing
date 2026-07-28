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
    saas: {
      name: string;
      billing: {
        monthly: string;
        annual: string;
        recommended: string;
      };
      monthly: {
        price: string;
        suffix: string;
        note: string;
      };
      annual: {
        price: string;
        suffix: string;
        note: string;
        savings: string;
      };
      setupNote: string;
      trialBadge: string;
      features: string[];
      cta: string;
    };
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
    title: "RitmoKit — Le système d'exploitation pour studios de danse et fitness",
    description:
      "Éliminez le chaos administratif, équilibrez les ratios lead/follow et maximisez vos revenus par m². Le kit d'opérations complet pour studios de danse et fitness.",
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
      "Le système d'exploitation conçu pour éliminer le chaos administratif, équilibrer les ratios lead/follow et maximiser vos revenus par m².",
    ctaPrimary: "Bientôt disponible",
    ctaSecondary: "Voir les tarifs",
    cockpit: {
      title: "Cockpit Studio",
      live: "En direct",
      parityRadar: "Radar de parité",
      leads: "Leads",
      follows: "Follows",
      balanced: "Équilibré",
      waitlistOpened: "Liste d'attente ciblée ouverte",
      newRegistration: "Nouvelle inscription",
      classes: {
        salsa: "Salsa Niv. 2 · Lundi 19h",
        bachata: "Bachata Niv. 1 · Mardi 20h",
        kizomba: "Kizomba Fusion · Jeudi 21h",
      },
    },
    stats: [
      { value: "0", label: "double réservation" },
      { value: "+38 %", label: "de rétention L1 → L2" },
      { value: "6 h", label: "d'admin économisées / semaine" },
    ],
  },
  problem: {
    kicker: "Le problème",
    title:
      "Vous avez ouvert un studio pour enseigner la passion. Pas pour passer vos soirées sur Excel et WhatsApp.",
    subtitle: "Les 4 tueurs silencieux qui dévorent les profits de votre studio :",
    killers: [
      {
        title: "Le chaos du pass illimité",
        description:
          "Courir après vos élèves sur Messenger ou sur des feuilles volantes juste pour savoir à quels 4 cours ils se présentent cette semaine.",
      },
      {
        title: "Le déséquilibre lead / follow",
        description:
          "Refuser 15 follows motivés parce qu'il vous manque des leads — et perdre des milliers de dollars d'inscriptions potentielles.",
      },
      {
        title: "Les salles à moitié vides",
        description:
          "Payer un loyer 24 h/24 sur un espace de choix pendant que 40 % de vos plages horaires hebdomadaires ne génèrent aucun profit.",
      },
      {
        title: "La paie manuelle des profs",
        description:
          "Passer des heures à minuit à calculer taux horaires, forfaits fixes et commissions de drop-in… sur papier.",
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
        before: "Courir après les choix de cours par DM WhatsApp",
        afterTitle: "Sélection libre-service",
        afterDescription:
          "Les détenteurs de pass illimité choisissent leurs places hebdomadaires en ligne, dès le paiement.",
      },
      {
        before: "Cours surchargés et déséquilibres de rôles",
        afterTitle: "Moteur de verrouillage de parité",
        afterDescription:
          "Des quotas en temps réel qui plafonnent l'écart de rôles avant qu'il ne brise la dynamique de vos cours.",
      },
      {
        before: "Deviner quels cours rapportent de l'argent",
        afterTitle: "Analytique de rendement ($/m²)",
        afterDescription:
          "Vue instantanée du profit net exact par cours et de l'utilisation de votre plancher.",
      },
      {
        before: "Perdre 40 % des élèves Niveau 1 la saison suivante",
        afterTitle: "Liste de veille IA de progression",
        afterDescription:
          "Détection automatique des élèves à risque avant qu'ils ne décrochent officiellement.",
      },
    ],
  },
  features: {
    kicker: "Les 4 piliers",
    title: "Tout ce qu'il faut pour piloter votre studio.",
    subtitle: "Quatre moteurs conçus pour les réalités du plancher de danse — pas pour des bureaux génériques.",
    pillars: [
      {
        name: "Radar de parité Lead / Follow",
        tagline: "« Ne refusez plus jamais un élève. »",
        description:
          "Surveillance en temps réel des ratios lead/follow. Ouvre automatiquement des listes d'attente ciblées ou invite les danseurs solos à recruter un partenaire au moment du paiement.",
      },
      {
        name: "Matrice de rentabilité $/m²",
        tagline: "« Connaissez la valeur exacte de chaque pied carré. »",
        description:
          "Calcule automatiquement le profit net par session après la paie des instructeurs. Révèle vos 10 % de cours les plus payants et signale instantanément les plages sous-performantes.",
      },
      {
        name: "Gestion multi-studios & grille horaire",
        tagline: "« 5 studios. Des centaines de danseurs. 0 double réservation. »",
        description:
          "Planification visuelle sans effort pour les installations multi-salles. Locations de salle, remplacements d'instructeurs et drop-ins dans une seule vue unifiée.",
      },
      {
        name: "Tunnel de rétention L1 → L2",
        tagline: "« Colmatez le seau qui fuit. »",
        description:
          "Suivez la progression des cohortes de débutant à avancé. Recevez une alerte automatique quand un élève manque 2 semaines de suite — et intervenez avant qu'il ne décroche.",
      },
    ],
  },
  offer: {
    kicker: "Tarifs",
    title: "Un abonnement simple. Votre studio sous contrôle.",
    subtitle:
      "RitmoKit, c'est le logiciel. Intégrez-le vous-même via API et widgets — ou faites appel à Arsitech pour une configuration sur mesure.",
    saas: {
      name: "Abonnement RitmoKit",
      billing: {
        monthly: "Mensuel",
        annual: "Annuel",
        recommended: "Recommandé",
      },
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
      setupNote:
        "Intégration libre-service via API et widgets — configuration sur mesure optionnelle avec Arsitech.",
      trialBadge: "Essai gratuit de 14 jours",
      features: [
        "Cockpit Studio complet : Radar de parité, matrice de rendement $/m², heatmaps",
        "Widgets de réservation et de location de salle intégrables à votre site actuel",
        "Accès complet à l'API publique (/api/public/*)",
        "Élèves et cours illimités",
      ],
      cta: "Bientôt disponible",
    },
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
    tagline: "Le système d'exploitation des studios de danse et fitness.",
    poweredBy: "Propulsé par",
    languages: "Trilingue",
    contact: "Contact & support clientèle",
    rights: "Tous droits réservés.",
  },
};

const en: Dictionary = {
  meta: {
    title: "RitmoKit — The operating system for dance & fitness studios",
    description:
      "Eliminate admin chaos, balance lead/follow ratios, and maximize floor revenue per m². The complete operating toolkit for dance and fitness studios.",
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
    badge: "The complete operating toolkit for dance studios",
    title: "Take back control of your",
    titleAccent: "dance studio.",
    subtitle:
      "The operating system engineered to eliminate admin chaos, balance lead/follow ratios, and maximize floor revenue per m².",
    ctaPrimary: "Coming soon",
    ctaSecondary: "See pricing",
    cockpit: {
      title: "Studio Cockpit",
      live: "Live",
      parityRadar: "Parity Radar",
      leads: "Leads",
      follows: "Follows",
      balanced: "Balanced",
      waitlistOpened: "Targeted waitlist opened",
      newRegistration: "New registration",
      classes: {
        salsa: "Salsa Lvl 2 · Mon 7pm",
        bachata: "Bachata Lvl 1 · Tue 8pm",
        kizomba: "Kizomba Fusion · Thu 9pm",
      },
    },
    stats: [
      { value: "0", label: "double bookings" },
      { value: "+38%", label: "L1 → L2 retention" },
      { value: "6 hrs", label: "of admin saved / week" },
    ],
  },
  problem: {
    kicker: "The problem",
    title:
      "You opened a studio to teach passion. Not to spend your evenings on Excel and WhatsApp.",
    subtitle: "The 4 silent killers eating your studio's profits:",
    killers: [
      {
        title: "The unlimited pass nightmare",
        description:
          "Chasing students on Messenger or clipboards just to ask which 4 classes they're showing up for this week.",
      },
      {
        title: "Lead / follow imbalance",
        description:
          "Turning away 15 eager follows because you don't have enough leads — losing thousands in potential registrations.",
      },
      {
        title: "Empty floor hours",
        description:
          "Paying rent 24/7 on prime studio space while 40% of your weekly time slots generate zero profit.",
      },
      {
        title: "Payroll headaches",
        description:
          "Spending hours at midnight calculating hourly rates, flat fees, and drop-in commissions on paper.",
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
        before: "Chasing class choices via WhatsApp DMs",
        afterTitle: "Self-serve class selection",
        afterDescription:
          "Unlimited pass holders select their weekly spots online, right at checkout.",
      },
      {
        before: "Overcrowded classes & role imbalances",
        afterTitle: "Parity Lock Engine",
        afterDescription:
          "Real-time quota enforcement that caps role gaps before they break your class dynamics.",
      },
      {
        before: "Guessing which classes make money",
        afterTitle: "Yield analytics ($/m²)",
        afterDescription:
          "Instant view of exact net profit per class and floor space utilization.",
      },
      {
        before: "Losing 40% of Level 1 students next season",
        afterTitle: "AI progression watchlist",
        afterDescription:
          "Automated detection of at-risk students before they officially drop out.",
      },
    ],
  },
  features: {
    kicker: "The 4 core pillars",
    title: "Everything you need to run the floor.",
    subtitle: "Four engines built for the realities of the dance floor — not for generic offices.",
    pillars: [
      {
        name: "Lead / Follow Parity Radar",
        tagline: "\u201cNever turn away a student again.\u201d",
        description:
          "Real-time monitoring of lead/follow ratios. Automatically opens targeted waitlists or prompts solo dancers to invite partners at checkout.",
      },
      {
        name: "$/m² Profit Matrix",
        tagline: "\u201cKnow the exact dollar value of every square foot.\u201d",
        description:
          "Automatically calculates net profit per session after instructor payroll. Surfaces your top 10% cash cows and flags underperforming slots instantly.",
      },
      {
        name: "Multi-studio scheduling grid",
        tagline: "\u201c5 studios. 100s of dancers. 0 double-bookings.\u201d",
        description:
          "Effortless visual scheduling for multi-room facilities. Handle room rentals, instructor replacements, and drop-ins in one unified view.",
      },
      {
        name: "L1 → L2 retention funnel",
        tagline: "\u201cStop the leaky bucket.\u201d",
        description:
          "Track cohort progression from beginner to advanced. Get automatic alerts when a student skips 2 weeks in a row — so you can check in before they churn.",
      },
    ],
  },
  offer: {
    kicker: "Pricing",
    title: "One simple subscription. Your studio under control.",
    subtitle:
      "RitmoKit is the software. Self-serve embed via API and widgets — or optional custom setup through Arsitech.",
    saas: {
      name: "RitmoKit subscription",
      billing: {
        monthly: "Monthly",
        annual: "Annual",
        recommended: "Recommended",
      },
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
      setupNote:
        "Self-serve setup via API & embeddable widgets — optional custom onboarding with Arsitech.",
      trialBadge: "14-day free trial",
      features: [
        "Full Studio Cockpit: Parity Radar, $/m² yield matrix, heatmaps",
        "Embeddable booking & room rental widgets for your existing website",
        "Full public API access (/api/public/*)",
        "Unlimited students & classes",
      ],
      cta: "Coming soon",
    },
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
    tagline: "The operating system for dance & fitness studios.",
    poweredBy: "Powered by",
    languages: "Trilingual",
    contact: "Contact & customer support",
    rights: "All rights reserved.",
  },
};

const es: Dictionary = {
  meta: {
    title: "RitmoKit — El sistema operativo para academias de danza y fitness",
    description:
      "Elimina el caos administrativo, equilibra los ratios lead/follow y maximiza los ingresos por m². El kit completo de operaciones para academias de danza y fitness.",
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
    badge: "El kit completo de operaciones para academias de danza",
    title: "Toma el control total de tu",
    titleAccent: "academia de baile.",
    subtitle:
      "El sistema operativo diseñado para eliminar el caos administrativo, equilibrar los ratios lead/follow y maximizar los ingresos por m².",
    ctaPrimary: "Próximamente",
    ctaSecondary: "Ver precios",
    cockpit: {
      title: "Cabina del Estudio",
      live: "En vivo",
      parityRadar: "Radar de paridad",
      leads: "Leads",
      follows: "Follows",
      balanced: "Equilibrado",
      waitlistOpened: "Lista de espera dirigida abierta",
      newRegistration: "Nueva inscripción",
      classes: {
        salsa: "Salsa Niv. 2 · Lun 19h",
        bachata: "Bachata Niv. 1 · Mar 20h",
        kizomba: "Kizomba Fusión · Jue 21h",
      },
    },
    stats: [
      { value: "0", label: "reservas duplicadas" },
      { value: "+38 %", label: "de retención N1 → N2" },
      { value: "6 h", label: "de admin ahorradas / semana" },
    ],
  },
  problem: {
    kicker: "El problema",
    title:
      "Abriste una academia para enseñar tu pasión. No para pasar las noches en Excel y WhatsApp.",
    subtitle: "Los 4 asesinos silenciosos que devoran las ganancias de tu academia:",
    killers: [
      {
        title: "La pesadilla del pase ilimitado",
        description:
          "Perseguir a tus alumnos por Messenger o con planillas solo para saber a cuáles 4 clases asistirán esta semana.",
      },
      {
        title: "Desequilibrio lead / follow",
        description:
          "Rechazar a 15 follows entusiastas porque no tienes suficientes leads — perdiendo miles en inscripciones potenciales.",
      },
      {
        title: "Salas medio vacías",
        description:
          "Pagar alquiler 24/7 por un espacio privilegiado mientras el 40 % de tus horarios semanales no genera ninguna ganancia.",
      },
      {
        title: "Dolores de cabeza con la nómina",
        description:
          "Pasar horas a medianoche calculando tarifas por hora, montos fijos y comisiones de clases sueltas… en papel.",
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
        before: "Perseguir elecciones de clases por mensajes de WhatsApp",
        afterTitle: "Selección de clases autoservicio",
        afterDescription:
          "Los titulares de pase ilimitado eligen sus cupos semanales en línea, directo en el checkout.",
      },
      {
        before: "Clases saturadas y desequilibrios de roles",
        afterTitle: "Motor de bloqueo de paridad",
        afterDescription:
          "Cuotas en tiempo real que limitan la brecha de roles antes de que rompa la dinámica de tus clases.",
      },
      {
        before: "Adivinar qué clases generan dinero",
        afterTitle: "Analítica de rendimiento ($/m²)",
        afterDescription:
          "Vista instantánea de la ganancia neta exacta por clase y del uso de tu espacio.",
      },
      {
        before: "Perder el 40 % de los alumnos de Nivel 1 la próxima temporada",
        afterTitle: "Lista de vigilancia IA de progresión",
        afterDescription:
          "Detección automática de alumnos en riesgo antes de que abandonen oficialmente.",
      },
    ],
  },
  features: {
    kicker: "Los 4 pilares",
    title: "Todo lo que necesitas para dirigir la pista.",
    subtitle: "Cuatro motores creados para la realidad de la pista de baile — no para oficinas genéricas.",
    pillars: [
      {
        name: "Radar de paridad Lead / Follow",
        tagline: "«No vuelvas a rechazar a un alumno.»",
        description:
          "Monitoreo en tiempo real de los ratios lead/follow. Abre automáticamente listas de espera dirigidas o invita a bailarines solos a traer pareja en el checkout.",
      },
      {
        name: "Matriz de rentabilidad $/m²",
        tagline: "«Conoce el valor exacto de cada metro cuadrado.»",
        description:
          "Calcula automáticamente la ganancia neta por sesión después de la nómina de instructores. Revela tu 10 % de clases estrella y señala al instante los horarios de bajo rendimiento.",
      },
      {
        name: "Gestión multi-estudio y horarios",
        tagline: "«5 estudios. Cientos de bailarines. 0 reservas duplicadas.»",
        description:
          "Programación visual sin esfuerzo para instalaciones con varias salas. Alquileres de sala, reemplazos de instructores y clases sueltas en una sola vista unificada.",
      },
      {
        name: "Embudo de retención N1 → N2",
        tagline: "«Detén la fuga de alumnos.»",
        description:
          "Sigue la progresión de cohortes de principiante a avanzado. Recibe alertas automáticas cuando un alumno falta 2 semanas seguidas — para contactarlo antes de que abandone.",
      },
    ],
  },
  offer: {
    kicker: "Precios",
    title: "Una suscripción simple. Tu academia bajo control.",
    subtitle:
      "RitmoKit es el software. Intégralo tú mismo vía API y widgets — o solicita configuración personalizada con Arsitech.",
    saas: {
      name: "Suscripción RitmoKit",
      billing: {
        monthly: "Mensual",
        annual: "Anual",
        recommended: "Recomendado",
      },
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
      setupNote:
        "Integración autoservicio vía API y widgets — configuración personalizada opcional con Arsitech.",
      trialBadge: "Prueba gratis de 14 días",
      features: [
        "Cabina del Estudio completa: Radar de paridad, matriz de rendimiento $/m², mapas de calor",
        "Widgets de reservas y alquiler de salas integrables en tu sitio web actual",
        "Acceso completo a la API pública (/api/public/*)",
        "Alumnos y clases ilimitados",
      ],
      cta: "Próximamente",
    },
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
    tagline: "El sistema operativo de las academias de danza y fitness.",
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
