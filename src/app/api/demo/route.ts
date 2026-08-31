import { NextResponse } from "next/server";
import { OPS_INBOX, EMAIL_FROM } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: {
    name?: string;
    studio?: string;
    email?: string;
    city?: string;
    students?: string;
    lang?: string;
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const studio = body.studio?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const city = body.city?.trim() ?? "";
  if (!name || !studio || !email.includes("@")) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const text = [
    `Visite studio RitmoKit`,
    `Nom: ${name}`,
    `École: ${studio}`,
    `Courriel: ${email}`,
    `Ville: ${city || "—"}`,
    `Élèves: ${body.students?.trim() || "—"}`,
    `Langue: ${body.lang ?? "fr"}`,
  ].join("\n");

  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: EMAIL_FROM(),
        to: [OPS_INBOX()],
        reply_to: email,
        subject: `Visite studio — ${studio}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[landing:demo] resend failed", await res.text());
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  const formsubmit = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(OPS_INBOX())}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name,
      studio,
      email,
      city,
      students: body.students ?? "",
      _subject: `Visite studio — ${studio}`,
    }),
  });

  if (!formsubmit.ok) {
    console.error("[landing:demo] formsubmit failed", await formsubmit.text());
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
