import { ArrowRight, Check, X } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/reveal";

export function Transformation({ dict }: { dict: Dictionary["transformation"] }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div
        className="aurora left-[30%] top-[10%] h-[400px] w-[400px]"
        style={{ background: "var(--accent-from)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{dict.kicker}</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          <Reveal>
            <div className="hidden grid-cols-[1fr_auto_1.2fr] items-center gap-4 px-6 md:grid">
              <p className="text-xs font-bold uppercase tracking-widest text-ink-faint">
                {dict.before}
              </p>
              <span className="w-9" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                {dict.after}
              </p>
            </div>
          </Reveal>

          {dict.rows.map((row, index) => (
            <Reveal key={row.afterTitle} delay={index * 0.07}>
              <div className="glass-card grid items-center gap-4 rounded-2xl p-6 md:grid-cols-[1fr_auto_1.2fr]">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-negative"
                    style={{ background: "var(--negative-soft)" }}
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed text-ink-muted line-through decoration-[var(--negative)]/40">
                    {row.before}
                  </p>
                </div>

                <span
                  className="hidden h-9 w-9 items-center justify-center rounded-full text-white md:flex"
                  style={{
                    background: "linear-gradient(120deg, var(--accent-from), var(--accent-to))",
                  }}
                  aria-hidden="true"
                >
                  <ArrowRight className="h-4 w-4" />
                </span>

                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-positive"
                    style={{ background: "var(--positive-soft)" }}
                  >
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold">{row.afterTitle}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {row.afterDescription}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
