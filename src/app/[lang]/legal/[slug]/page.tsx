import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLegalDoc } from "@/lib/legal/copy";
import { isLocale } from "@/lib/i18n/config";

const SLUGS = ["privacy", "terms"] as const;

export function generateStaticParams() {
  return SLUGS.flatMap((slug) =>
    (["fr", "en", "es"] as const).map((lang) => ({ lang, slug })),
  );
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  if (!SLUGS.includes(slug as (typeof SLUGS)[number])) notFound();

  const dict = getDictionary(lang);
  const doc = getLegalDoc(lang, slug as "privacy" | "terms");

  return (
    <div>
      <SiteHeader lang={lang} dict={dict.nav} />
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-28">
        <Link
          href={`/${lang}`}
          className="text-sm font-semibold text-accent hover:underline"
        >
          ← {lang === "fr" ? "Accueil" : lang === "es" ? "Inicio" : "Home"}
        </Link>
        <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight">
          {doc.title}
        </h1>
        <p className="mt-2 text-sm text-ink-faint">
          {lang === "fr" ? "Mis à jour" : lang === "es" ? "Actualizado" : "Updated"} :{" "}
          {doc.updated}
        </p>
        <div className="mt-10 space-y-8">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-lg font-bold">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter lang={lang} dict={dict.footer} />
    </div>
  );
}
