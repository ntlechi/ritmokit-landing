import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Proof({ dict }: { dict: Dictionary["proof"] }) {
  return (
    <section className="border-y border-line py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6">
        {dict.items.map((item) => (
          <div key={item.label}>
            <p className="font-display text-lg font-bold sm:text-xl">
              <span className="gradient-text">{item.value}</span>
            </p>
            <p className="mt-1 text-xs leading-snug text-ink-faint">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
