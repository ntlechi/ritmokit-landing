"use client";

import { useState } from "react";
import type { BillingPeriod, PlanId } from "@/lib/billing/plans";
import type { Locale } from "@/lib/i18n/config";

export function CheckoutButton({
  plan,
  billing,
  lang,
  label,
  redirecting,
  errorLabel,
  highlighted,
}: {
  plan: PlanId;
  billing: BillingPeriod;
  lang: Locale;
  label: string;
  redirecting: string;
  errorLabel: string;
  highlighted?: boolean;
}) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, billing, lang }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        setError(errorLabel);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError(errorLabel);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="mt-8">
      <button
        type="button"
        disabled={pending}
        onClick={startCheckout}
        className={
          highlighted
            ? "glow-button inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white disabled:opacity-70"
            : "ghost-button inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold disabled:opacity-70"
        }
      >
        {pending ? redirecting : label}
      </button>
      {error ? <p className="mt-2 text-center text-xs text-negative">{error}</p> : null}
    </div>
  );
}
