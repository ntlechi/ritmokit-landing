"use client";

import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { LangSwitcher } from "@/components/lang-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

export function SiteHeader({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["nav"];
}) {
  const navLinks = [
    { href: "#problem", label: dict.problem },
    { href: "#features", label: dict.features },
    { href: "#offer", label: dict.pricing },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-line backdrop-blur-xl"
      style={{ background: "var(--header-bg)" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={`/${lang}`} className="flex items-center gap-2.5" aria-label="RitmoKit">
          <Logo className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight">
            Ritmo<span className="gradient-text">Kit</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitcher lang={lang} label={dict.langSwitcher} />
          <ThemeToggle label={dict.themeToggle} />
          <a
            href="#demo"
            className="glow-button hidden rounded-full px-4 py-2 text-sm font-semibold text-white sm:inline-flex"
          >
            {dict.bookDemo}
          </a>
        </div>
      </div>
    </header>
  );
}
