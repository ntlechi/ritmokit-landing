/** Public-facing RitmoKit contact address (footer, errors, ops notifications). */
export const CONTACT_EMAIL = "info@ritmokit.com";

export const OPS_INBOX = () => process.env.DEMO_INBOX?.trim() || CONTACT_EMAIL;

export const EMAIL_FROM = () =>
  process.env.EMAIL_FROM?.trim() || `RitmoKit <${CONTACT_EMAIL}>`;
