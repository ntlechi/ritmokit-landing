import { Sparkles } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { CockpitMock } from "@/components/cockpit-mock";
import { Reveal } from "@/components/reveal";

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div
        className="aurora left-[-10%] top-[-15%] h-[480px] w-[480px]"
        style={{ background: "var(--accent-from)" }}
        aria-hidden="true"
      />
      <div
        className="aurora right-[-12%] top-[15%] h-[420px] w-[420px]"
        style={{ background: "var(--accent-to)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold tracking-wide text-ink-muted">
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {dict.badge}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {dict.title} <span className="gradient-text">{dict.titleAccent}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {dict.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#offer"
                className="glow-button inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white"
              >
                {dict.ctaPrimary}
              </a>
              <a
                href="#demo"
                className="ghost-button inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                {dict.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {dict.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-xl font-bold sm:text-2xl">
                    <span className="gradient-text">{stat.value}</span>
                  </dd>
                  <p className="mt-1 text-xs leading-snug text-ink-faint">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex justify-center lg:justify-end">
          <CockpitMock dict={dict.cockpit} />
        </Reveal>
      </div>
    </section>
  );
}
