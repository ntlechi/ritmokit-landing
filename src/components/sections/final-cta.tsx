import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/reveal";

export function FinalCta({ dict }: { dict: Dictionary["finalCta"] }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="aurora left-[20%] top-[30%] h-[380px] w-[380px]"
        style={{ background: "var(--accent-from)" }}
        aria-hidden="true"
      />
      <div
        className="aurora right-[20%] top-[10%] h-[380px] w-[380px]"
        style={{ background: "var(--accent-to)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-5 text-base text-ink-muted sm:text-lg">{dict.subtitle}</p>
          <a
            href="#offer"
            className="glow-button mt-10 inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-bold text-white"
          >
            {dict.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
