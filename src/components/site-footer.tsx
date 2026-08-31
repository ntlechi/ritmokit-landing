import Link from "next/link";
import { Mail } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { CONTACT_EMAIL } from "@/lib/contact";
import { locales, type Locale } from "@/lib/i18n/config";
import { Logo } from "@/components/logo";

export function SiteFooter({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["footer"];
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="font-display text-base font-bold tracking-tight">
              Ritmo<span className="gradient-text">Kit</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">{dict.tagline}</p>
          <p className="mt-2 text-xs text-ink-faint">
            {dict.poweredBy}{" "}
            <a
              href="https://arsitech.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
            >
              ARSITECH.IO
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm md:items-end">
          <div className="flex items-center gap-2 text-ink-muted">
            <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
              {dict.languages}
            </span>
            {locales.map((locale, index) => (
              <span key={locale} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">·</span>}
                <Link
                  href={`/${locale}`}
                  className={
                    locale === lang
                      ? "font-bold uppercase text-ink"
                      : "uppercase text-ink-faint transition-colors hover:text-ink"
                  }
                >
                  {locale}
                </Link>
              </span>
            ))}
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {dict.contact}
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-faint">
            <Link href={`/${lang}/legal/privacy`} className="hover:text-ink">
              {dict.privacy}
            </Link>
            <Link href={`/${lang}/legal/terms`} className="hover:text-ink">
              {dict.terms}
            </Link>
          </div>
          <p className="text-xs text-ink-faint">
            © {year} RitmoKit. {dict.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
