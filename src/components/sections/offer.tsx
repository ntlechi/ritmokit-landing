"use client";

import { useState } from "react";
import clsx from "clsx";
import { Check, Globe, Building2, Layers, Sparkles } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/reveal";

type BillingPeriod = "monthly" | "annual";

const PLAN_ICONS = {
  solo: Building2,
  pro: Sparkles,
  entreprise: Layers,
} as const;

export function Offer({ dict }: { dict: Dictionary["offer"] }) {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

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
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-ink-muted sm:text-lg">
            {dict.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-col items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-positive"
              style={{ background: "var(--positive-soft)" }}
            >
              {dict.trialBadge}
            </span>
            <div
              className="flex w-full max-w-xs rounded-full border border-line-strong bg-surface p-1"
              role="group"
              aria-label={dict.billing.monthly}
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
                      : "text-ink-muted hover:text-ink",
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
                  {period === "monthly" ? dict.billing.monthly : dict.billing.annual}
                  {period === "annual" && (
                    <span
                      className={clsx(
                        "hidden rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide sm:inline",
                        billing === "annual"
                          ? "bg-white/20 text-white"
                          : "bg-surface-strong text-accent",
                      )}
                    >
                      {dict.billing.recommended}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {dict.plans.map((plan, index) => {
            const Icon = PLAN_ICONS[plan.id];
            const rate = billing === "monthly" ? plan.monthly : plan.annual;

            return (
              <Reveal key={plan.id} delay={0.08 + index * 0.06}>
                <div
                  className={clsx(
                    "glass-card relative flex h-full flex-col overflow-hidden rounded-3xl p-7 sm:p-8",
                    plan.highlighted && "ring-1 ring-accent/40",
                  )}
                  style={
                    plan.highlighted
                      ? {
                          boxShadow:
                            "0 0 60px var(--glow-primary), var(--card-shadow)",
                        }
                      : undefined
                  }
                >
                  {plan.highlighted && (
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
                      }}
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-strong text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {plan.badge && (
                      <span
                        className={clsx(
                          "rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider",
                          plan.highlighted
                            ? "text-positive"
                            : "border border-line text-ink-muted",
                        )}
                        style={
                          plan.highlighted
                            ? { background: "var(--positive-soft)" }
                            : undefined
                        }
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{plan.tagline}</p>

                  <p className="mt-5 font-display text-4xl font-extrabold">
                    {rate.price}
                    <span className="ml-1.5 text-sm font-semibold text-ink-muted">
                      {rate.suffix}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{rate.note}</p>
                  {billing === "annual" && (
                    <p className="mt-1 text-sm font-semibold text-positive">
                      {plan.annual.savings}
                    </p>
                  )}

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-positive"
                          style={{ background: "var(--positive-soft)" }}
                        >
                          <Check className="h-3 w-3" aria-hidden="true" />
                        </span>
                        <span className="text-sm leading-relaxed text-ink-muted">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <span
                    aria-disabled="true"
                    className="soon-button mt-8 inline-flex cursor-not-allowed items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
                  >
                    {plan.cta}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.24}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-ink-muted">
            {dict.footnote}
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="glass-card mx-auto mt-8 flex max-w-4xl flex-col gap-6 rounded-3xl p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-strong text-accent">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold text-ink-muted">
                  {dict.agency.poweredBy}
                </span>
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent">
                {dict.agency.tag}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold">{dict.agency.name}</h3>
              <p className="mt-1 font-display text-2xl font-extrabold">{dict.agency.price}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {dict.agency.description}
              </p>
              <ul className="mt-4 space-y-2">
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
            </div>
            <a
              href="mailto:hello@arsitech.com"
              className="ghost-button inline-flex shrink-0 items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              {dict.agency.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
