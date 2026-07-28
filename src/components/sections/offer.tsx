"use client";

import { useState } from "react";
import clsx from "clsx";
import { Check, Globe, Rocket } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/reveal";

type BillingPeriod = "monthly" | "annual";

export function Offer({ dict }: { dict: Dictionary["offer"] }) {
  const [billing, setBilling] = useState<BillingPeriod>("annual");
  const plan = billing === "monthly" ? dict.saas.monthly : dict.saas.annual;

  return (
    <section id="offer" className="relative py-20 sm:py-28">
      <div
        className="aurora right-[5%] top-[0%] h-[420px] w-[420px]"
        style={{ background: "var(--accent-to)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {dict.kicker}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base text-ink-muted sm:text-lg">
            {dict.subtitle}
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.1}>
            <div
              className="glass-card relative flex h-full flex-col overflow-hidden rounded-3xl p-8 sm:p-9"
              style={{ boxShadow: "0 0 60px var(--glow-primary), var(--card-shadow)" }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background: "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
                }}
                aria-hidden="true"
              />

              <div className="flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-strong text-accent">
                  <Rocket className="h-5 w-5" aria-hidden="true" />
                </span>
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-positive"
                  style={{ background: "var(--positive-soft)" }}
                >
                  {dict.saas.trialBadge}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-bold">{dict.saas.name}</h3>

              {/* Monthly / Annual toggle */}
              <div
                className="mt-5 flex rounded-full border border-line-strong bg-surface p-1"
                role="group"
                aria-label={dict.saas.billing.monthly}
              >
                {(["monthly", "annual"] as const).map((period) => (
                  <button
                    key={period}
                    type="button"
                    onClick={() => setBilling(period)}
                    aria-pressed={billing === period}
                    className={clsx(
                      "relative flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold transition-colors sm:text-sm",
                      billing === period
                        ? "text-white shadow-sm"
                        : "text-ink-muted hover:text-ink"
                    )}
                    style={
                      billing === period
                        ? {
                            background:
                              "linear-gradient(120deg, var(--accent-from), var(--accent-to))",
                          }
                        : undefined
                    }
                  >
                    {period === "monthly"
                      ? dict.saas.billing.monthly
                      : dict.saas.billing.annual}
                    {period === "annual" && (
                      <span
                        className={clsx(
                          "hidden rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide sm:inline",
                          billing === "annual"
                            ? "bg-white/20 text-white"
                            : "bg-surface-strong text-accent"
                        )}
                      >
                        {dict.saas.billing.recommended}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <p className="mt-6 font-display text-4xl font-extrabold">
                {plan.price}
                <span className="ml-1.5 text-sm font-semibold text-ink-muted">{plan.suffix}</span>
              </p>
              <p className="mt-1 text-sm text-ink-muted">{plan.note}</p>
              {billing === "annual" && (
                <p className="mt-1 text-sm font-semibold text-positive">
                  {dict.saas.annual.savings}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-ink-faint">{dict.saas.setupNote}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {dict.saas.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-positive"
                      style={{ background: "var(--positive-soft)" }}
                    >
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <span
                aria-disabled="true"
                className="soon-button mt-8 inline-flex cursor-not-allowed items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                {dict.saas.cta}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-card flex h-full flex-col rounded-3xl p-8 sm:p-9">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-strong text-accent">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold text-ink-muted">
                  {dict.agency.poweredBy}
                </span>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-accent">
                {dict.agency.tag}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold">{dict.agency.name}</h3>
              <p className="mt-2 font-display text-3xl font-extrabold">{dict.agency.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {dict.agency.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {dict.agency.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-positive"
                      style={{ background: "var(--positive-soft)" }}
                    >
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@arsitech.com"
                className="ghost-button mt-8 inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                {dict.agency.cta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
