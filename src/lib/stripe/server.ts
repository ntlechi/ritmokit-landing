import { createHmac, timingSafeEqual } from "node:crypto";
import {
  PLAN_PRICES_CAD,
  stripeAmountCad,
  type BillingPeriod,
  type PlanId,
} from "@/lib/billing/plans";

export function getStripeSecretKey(): string | null {
  return process.env.STRIPE_SECRET_KEY?.trim() || null;
}

export function stripeConfigured(): boolean {
  return Boolean(getStripeSecretKey());
}

export async function createSaasCheckoutSession(input: {
  plan: PlanId;
  billing: BillingPeriod;
  lang: string;
  successUrl: string;
  cancelUrl: string;
}): Promise<{ url: string; sessionId: string }> {
  const secret = getStripeSecretKey();
  if (!secret) throw new Error("stripe_not_configured");

  const amount = stripeAmountCad(input.plan, input.billing);
  const cents = Math.round(amount * 100);
  const name = PLAN_PRICES_CAD[input.plan].name;
  const interval = input.billing === "annual" ? "year" : "month";

  const body = new URLSearchParams({
    mode: "subscription",
    success_url: input.successUrl,
    cancel_url: input.cancelUrl,
    locale: input.lang === "es" ? "es" : input.lang === "fr" ? "fr" : "en",
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "cad",
    "line_items[0][price_data][unit_amount]": String(cents),
    "line_items[0][price_data][product_data][name]": name,
    "line_items[0][price_data][recurring][interval]": interval,
    "metadata[plan]": input.plan,
    "metadata[billing]": input.billing,
    "subscription_data[metadata][plan]": input.plan,
    "subscription_data[metadata][billing]": input.billing,
  });

  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  const raw = (await res.json().catch(() => ({}))) as {
    id?: string;
    url?: string;
    error?: { message?: string };
  };

  if (!res.ok || !raw.id || !raw.url) {
    console.error("[landing:stripe] checkout failed", res.status, raw.error?.message ?? raw);
    throw new Error("stripe_checkout_failed");
  }

  return { url: raw.url, sessionId: raw.id };
}

export function verifyStripeWebhook(payload: string, header: string, secret: string): boolean {
  const items = header.split(",").map((part) => part.trim());
  const timestamp = items.find((part) => part.startsWith("t="))?.slice(2);
  const signatures = items.filter((part) => part.startsWith("v1=")).map((part) => part.slice(3));
  if (!timestamp || signatures.length === 0) return false;

  const expected = createHmac("sha256", secret).update(`${timestamp}.${payload}`).digest("hex");
  const expectedBuf = Buffer.from(expected, "hex");
  return signatures.some((sig) => {
    try {
      const got = Buffer.from(sig, "hex");
      return got.length === expectedBuf.length && timingSafeEqual(got, expectedBuf);
    } catch {
      return false;
    }
  });
}
