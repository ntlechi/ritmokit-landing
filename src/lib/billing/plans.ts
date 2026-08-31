export const PLAN_IDS = ["solo", "pro", "entreprise"] as const;
export type PlanId = (typeof PLAN_IDS)[number];
export type BillingPeriod = "monthly" | "annual";

/** CAD amounts charged by Stripe Checkout (subscription). Annual = monthly promo × 12. */
export const PLAN_PRICES_CAD: Record<
  PlanId,
  { monthly: number; annual: number; name: string }
> = {
  solo: { monthly: 79, annual: 708, name: "RitmoKit Solo" },
  pro: { monthly: 199, annual: 1788, name: "RitmoKit Pro" },
  entreprise: { monthly: 298, annual: 2688, name: "RitmoKit Network" },
};

export function isPlanId(value: string): value is PlanId {
  return (PLAN_IDS as readonly string[]).includes(value);
}

export function stripeAmountCad(plan: PlanId, billing: BillingPeriod): number {
  return PLAN_PRICES_CAD[plan][billing];
}
