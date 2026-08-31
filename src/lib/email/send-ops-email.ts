import { EMAIL_FROM, OPS_INBOX } from "@/lib/contact";

/** Sends to the ops inbox when Resend is configured; otherwise no-op. */
export async function sendOpsEmail(subject: string, text: string): Promise<boolean> {
  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (!resendKey) return false;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: EMAIL_FROM(),
      to: [OPS_INBOX()],
      subject,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[landing:email] resend failed", await res.text());
    return false;
  }

  return true;
}
