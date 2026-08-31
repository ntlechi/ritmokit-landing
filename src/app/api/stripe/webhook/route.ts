import { NextResponse } from "next/server";
import { verifyStripeWebhook } from "@/lib/stripe/server";
import { sendOpsEmail } from "@/lib/email/send-ops-email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get("stripe-signature") ?? "";
  const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();

  if (secret && !verifyStripeWebhook(payload, signature, secret)) {
    return NextResponse.json({ error: "invalid_signature" }, { status: 401 });
  }

  let event: { type?: string; data?: { object?: Record<string, unknown> } };
  try {
    event = JSON.parse(payload) as typeof event;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const obj = event.data?.object ?? {};
    const customerEmail =
      obj.customer_details && typeof obj.customer_details === "object"
        ? (obj.customer_details as { email?: string }).email
        : null;
    const metadata = obj.metadata ?? {};
    const plan = typeof metadata === "object" && metadata && "plan" in metadata ? metadata.plan : null;
    const billing =
      typeof metadata === "object" && metadata && "billing" in metadata ? metadata.billing : null;

    console.info("[landing:stripe] subscription paid", {
      email: customerEmail,
      plan,
      billing,
      sessionId: obj.id,
    });

    if (customerEmail) {
      await sendOpsEmail(
        `Nouvel abonnement RitmoKit — ${plan ?? "plan"}`,
        [
          "Un abonnement Stripe vient d'être confirmé sur ritmokit.com.",
          "",
          `Courriel: ${customerEmail}`,
          `Plan: ${plan ?? "—"}`,
          `Facturation: ${billing ?? "—"}`,
          `Session: ${obj.id ?? "—"}`,
          "",
          "Prochaine étape: provisionner l'école dans RitmoKit et répondre sous 24 h.",
        ].join("\n"),
      );
    }
  }

  return NextResponse.json({ ok: true });
}
