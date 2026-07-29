import { BookOpen, CalendarDays, ClipboardCheck, Globe, Radar, Sparkles, TrendingUp } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/reveal";

const ICONS = [Radar, ClipboardCheck, CalendarDays, TrendingUp, Sparkles, Globe, BookOpen];

export function Features({ dict }: { dict: Dictionary["features"] }) {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{dict.kicker}</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">{dict.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dict.pillars.map((pillar, index) => {
            const Icon = ICONS[index];
            return (
              <Reveal key={pillar.name} delay={index * 0.08}>
                <article className="glass-card group relative h-full overflow-hidden rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                  {/* Corner glow on hover */}
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                    style={{
                      background:
                        "linear-gradient(120deg, var(--accent-from), var(--accent-to))",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white"
                    style={{
                      background:
                        "linear-gradient(120deg, var(--accent-from), var(--accent-to))",
                    }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold">{pillar.name}</h3>
                  <p className="mt-2 text-sm font-semibold italic text-accent">{pillar.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {pillar.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
