import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Transformation } from "@/components/sections/transformation";
import { Features } from "@/components/sections/features";
import { Offer } from "@/components/sections/offer";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/site-footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <div className="relative overflow-x-clip">
      <SiteHeader lang={lang} dict={dict.nav} />
      <main>
        <Hero dict={dict.hero} />
        <Problem dict={dict.problem} />
        <Transformation dict={dict.transformation} />
        <Features dict={dict.features} />
        <Offer dict={dict.offer} />
        <FinalCta dict={dict.finalCta} />
      </main>
      <SiteFooter lang={lang} dict={dict.footer} />
    </div>
  );
}
