"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { Reveal } from "@/components/reveal";

export function Demo({ lang, dict }: { lang: Locale; dict: Dictionary["demo"] }) {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);
    const form = new FormData(event.currentTarget);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          studio: form.get("studio"),
          email: form.get("email"),
          city: form.get("city"),
          students: form.get("students"),
          lang,
        }),
      });
      if (!res.ok) {
        setError(dict.error);
        return;
      }
      setSuccess(true);
    } catch {
      setError(dict.error);
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="demo" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{dict.kicker}</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">{dict.subtitle}</p>
        </Reveal>

        {success ? (
          <p className="glass-card mt-8 rounded-2xl p-6 text-sm font-medium text-positive">
            {dict.success}
          </p>
        ) : (
          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="glass-card mt-8 space-y-4 rounded-2xl p-6 sm:p-8">
              <label className="block">
                <span className="text-xs font-semibold text-ink-muted">{dict.name}</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-xl border border-line bg-surface-strong px-3 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-ink-muted">{dict.studio}</span>
                <input
                  required
                  name="studio"
                  className="mt-1.5 w-full rounded-xl border border-line bg-surface-strong px-3 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-ink-muted">{dict.email}</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-xl border border-line bg-surface-strong px-3 py-3 text-sm"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-ink-muted">{dict.city}</span>
                  <input
                    name="city"
                    autoComplete="address-level2"
                    className="mt-1.5 w-full rounded-xl border border-line bg-surface-strong px-3 py-3 text-sm"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-ink-muted">{dict.students}</span>
                  <input
                    name="students"
                    inputMode="numeric"
                    className="mt-1.5 w-full rounded-xl border border-line bg-surface-strong px-3 py-3 text-sm"
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={pending}
                className="glow-button inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white disabled:opacity-70"
              >
                {pending ? dict.sending : dict.submit}
              </button>
              {error ? <p className="text-sm text-negative">{error}</p> : null}
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
