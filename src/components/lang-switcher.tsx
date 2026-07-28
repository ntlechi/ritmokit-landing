"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import clsx from "clsx";
import { locales, type Locale } from "@/lib/i18n/config";

export function LangSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() ?? `/${lang}`;

  function pathFor(locale: Locale) {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-line-strong bg-surface-strong p-1"
      role="group"
      aria-label={label}
    >
      <Globe className="ml-1.5 mr-0.5 h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
      {locales.map((locale) => (
        <Link
          key={locale}
          href={pathFor(locale)}
          aria-current={locale === lang ? "true" : undefined}
          className={clsx(
            "rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition-colors",
            locale === lang
              ? "text-white shadow-sm"
              : "text-ink-muted hover:bg-surface hover:text-ink"
          )}
          style={
            locale === lang
              ? { background: "linear-gradient(120deg, var(--accent-from), var(--accent-to))" }
              : undefined
          }
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
