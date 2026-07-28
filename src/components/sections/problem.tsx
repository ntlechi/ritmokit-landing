import { Calculator, DoorOpen, MessageSquareWarning, Scale } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/reveal";

const ICONS = [MessageSquareWarning, Scale, DoorOpen, Calculator];

export function Problem({ dict }: { dict: Dictionary["problem"] }) {
  return (
    <section id="problem" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-negative">
            {dict.kicker}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">{dict.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {dict.killers.map((killer, index) => {
            const Icon = ICONS[index];
            return (
              <Reveal key={killer.title} delay={index * 0.08}>
                <article className="glass-card group h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-negative"
                    style={{ background: "var(--negative-soft)" }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{killer.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                    {killer.description}
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
