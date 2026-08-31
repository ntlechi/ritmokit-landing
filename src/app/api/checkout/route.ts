import { NextResponse } from "next/server";
import { isPlanId, type BillingPeriod } from "@/lib/billing/plans";
import { createSaasCheckoutSession, stripeConfigured } from "@/lib/stripe/server";
import { isLocale } from "@/lib/i18n/config";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!stripeConfigured()) {
    return NextResponse.json({ error: "stripe_not_configured" }, { status: 503 });
  }

  let body: { plan?: string; billing?: string; lang?: string };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const plan = body.plan ?? "";
  const billing = body.billing === "annual" ? "annual" : "monthly";
  const lang = isLocale(body.lang ?? "") ? body.lang! : "fr";

  if (!isPlanId(plan)) {
    return NextResponse.json({ error: "invalid_plan" }, { status: 400 });
  }

  const origin =
    request.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    new URL(request.url).origin;
  const base = origin.replace(/\/$/, "");
  const successUrl = `${base}/${lang}/checkout/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${base}/${lang}/checkout/cancel`;

  try {
    const session = await createSaasCheckoutSession({
      plan,
      billing: billing as BillingPeriod,
      lang,
      successUrl,
      cancelUrl,
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "stripe_checkout_failed";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
