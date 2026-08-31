import type { Locale } from "@/lib/i18n/config";

type LegalDoc = { title: string; updated: string; sections: Array<{ heading: string; body: string }> };

const frPrivacy: LegalDoc = {
  title: "Politique de confidentialité",
  updated: "31 août 2026",
  sections: [
    {
      heading: "Qui sommes-nous",
      body: "RitmoKit est un kit d'opérations pour écoles de danse, exploité au Québec, Canada. Pour toute question : info@ritmokit.com.",
    },
    {
      heading: "Données collectées",
      body: "Nous collectons les renseignements que vous nous fournissez (formulaire de visite, courriel, nom d'école) et les métadonnées techniques nécessaires au fonctionnement du site (cookies essentiels, journaux serveur). Les paiements d'abonnement sont traités par Stripe ; nous ne stockons pas vos numéros de carte sur ritmokit.com.",
    },
    {
      heading: "Utilisation",
      body: "Vos données servent à répondre à vos demandes, activer votre abonnement, configurer votre école dans RitmoKit et améliorer le produit. Nous ne vendons pas vos données à des tiers.",
    },
    {
      heading: "Hébergement",
      body: "Le site marketing et l'application RitmoKit sont hébergés au Canada (région Vercel yul1 / Supabase ca-central-1 lorsque applicable).",
    },
    {
      heading: "Vos droits",
      body: "Vous pouvez demander l'accès, la correction ou la suppression de vos renseignements personnels en écrivant à info@ritmokit.com.",
    },
  ],
};

const frTerms: LegalDoc = {
  title: "Conditions d'utilisation",
  updated: "31 août 2026",
  sections: [
    {
      heading: "Service",
      body: "RitmoKit fournit un logiciel d'exploitation pour écoles de danse (inscriptions, parité Lead / Follow, Accueil, paiements, etc.). L'accès à l'application est activé après souscription et configuration par notre équipe.",
    },
    {
      heading: "Abonnement et facturation",
      body: "Les tarifs affichés sont en dollars canadiens plus taxes applicables. La facturation récurrente est gérée par Stripe. Vous pouvez annuler selon les options offertes par Stripe ou en nous contactant à info@ritmokit.com.",
    },
    {
      heading: "Comptes studio",
      body: "Vous êtes responsable de la exactitude des informations de votre école, de la conformité de vos pratiques de paiement (PayPal, Stripe, Interac) et de l'usage du logiciel par votre personnel.",
    },
    {
      heading: "Disponibilité",
      body: "Nous visons une haute disponibilité mais ne garantissons pas un service ininterrompu. Des maintenances et mises à jour peuvent survenir.",
    },
    {
      heading: "Contact",
      body: "Questions juridiques ou contractuelles : info@ritmokit.com.",
    },
  ],
};

const enPrivacy: LegalDoc = {
  title: "Privacy policy",
  updated: "August 31, 2026",
  sections: [
    {
      heading: "Who we are",
      body: "RitmoKit is an operations kit for dance schools, operated from Québec, Canada. Contact: info@ritmokit.com.",
    },
    {
      heading: "Data we collect",
      body: "We collect information you submit (walkthrough form, email, studio name) and technical data required to run the site. Subscription payments are processed by Stripe; we do not store card numbers on ritmokit.com.",
    },
    {
      heading: "How we use it",
      body: "To respond to requests, activate your subscription, configure your school in RitmoKit, and improve the product. We do not sell your data.",
    },
    {
      heading: "Hosting",
      body: "Marketing site and RitmoKit app data are hosted in Canada where applicable (Vercel yul1 / Supabase ca-central-1).",
    },
    {
      heading: "Your rights",
      body: "Request access, correction, or deletion at info@ritmokit.com.",
    },
  ],
};

const enTerms: LegalDoc = {
  title: "Terms of service",
  updated: "August 31, 2026",
  sections: [
    {
      heading: "Service",
      body: "RitmoKit provides dance-school operations software. App access is enabled after subscription and onboarding.",
    },
    {
      heading: "Billing",
      body: "Prices are in CAD plus applicable taxes. Recurring billing is handled by Stripe. Cancel via Stripe options or contact info@ritmokit.com.",
    },
    {
      heading: "Studio accounts",
      body: "You are responsible for accurate studio information, payment compliance, and staff use of the software.",
    },
    {
      heading: "Availability",
      body: "We aim for high uptime but do not guarantee uninterrupted service.",
    },
    {
      heading: "Contact",
      body: "Legal or contract questions: info@ritmokit.com.",
    },
  ],
};

const esPrivacy: LegalDoc = {
  title: "Política de privacidad",
  updated: "31 de agosto de 2026",
  sections: [
    {
      heading: "Quiénes somos",
      body: "RitmoKit es un kit de operaciones para escuelas de danza, operado desde Québec, Canadá. Contacto: info@ritmokit.com.",
    },
    {
      heading: "Datos que recopilamos",
      body: "Información del formulario de visita, correo y nombre de la escuela, más datos técnicos del sitio. Los pagos de suscripción los procesa Stripe.",
    },
    {
      heading: "Uso",
      body: "Para responder solicitudes, activar su suscripción y configurar su escuela. No vendemos sus datos.",
    },
    {
      heading: "Alojamiento",
      body: "Datos alojados en Canadá cuando corresponde (Vercel yul1 / Supabase ca-central-1).",
    },
    {
      heading: "Sus derechos",
      body: "Solicite acceso, corrección o eliminación en info@ritmokit.com.",
    },
  ],
};

const esTerms: LegalDoc = {
  title: "Términos de servicio",
  updated: "31 de agosto de 2026",
  sections: [
    {
      heading: "Servicio",
      body: "RitmoKit proporciona software de operaciones para escuelas de danza. El acceso se activa tras la suscripción y la configuración.",
    },
    {
      heading: "Facturación",
      body: "Precios en CAD más impuestos. Facturación recurrente vía Stripe. Cancelación por Stripe o info@ritmokit.com.",
    },
    {
      heading: "Cuentas de estudio",
      body: "Usted es responsable de la información de su escuela y del uso del software por su personal.",
    },
    {
      heading: "Disponibilidad",
      body: "Buscamos alta disponibilidad sin garantizar servicio ininterrumpido.",
    },
    {
      heading: "Contacto",
      body: "Preguntas legales: info@ritmokit.com.",
    },
  ],
};

export function getLegalDoc(
  lang: Locale,
  slug: "privacy" | "terms",
): LegalDoc {
  const map = {
    fr: { privacy: frPrivacy, terms: frTerms },
    en: { privacy: enPrivacy, terms: enTerms },
    es: { privacy: esPrivacy, terms: esTerms },
  };
  return map[lang][slug];
}
