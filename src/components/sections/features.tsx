import { BookOpen, CalendarDays, ClipboardCheck, Globe, Radar, Users } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/reveal";

const ICONS = [Radar, ClipboardCheck, Globe];
const MORE_ICONS = [CalendarDays, BookOpen, Users];

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

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {dict.pillars.map((pillar, index) => {
            const Icon = ICONS[index];
            return (
              <Reveal key={pillar.name} delay={index * 0.08}>
                <article className="glass-card group relative h-full overflow-hidden rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white"
                    style={{
                      background: "linear-gradient(120deg, var(--accent-from), var(--accent-to))",
                    }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold">{pillar.name}</h3>
                  <p className="mt-2 text-sm font-semibold italic text-accent">{pillar.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{pillar.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.16}>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-ink-faint">
            {dict.moreTitle}
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {dict.more.map((item, index) => {
              const Icon = MORE_ICONS[index] ?? CalendarDays;
              return (
                <div key={item.name} className="flex gap-3 rounded-xl border border-line p-4">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
